// Edge function: submit-contact
// Inserts into contact_submissions and sends a confirmation email via Resend

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const {
      name,
      email,
      company,
      interest,
      message,
      website,
      source_path,
      user_agent,
    } = body || {};

    // Honeypot check
    if (website && String(website).trim().length > 0) {
      console.log("submit-contact: honeypot triggered, ignoring");
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (!email || !name || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Validate input lengths
    if (name.length > 100) {
      return new Response(JSON.stringify({ error: "Name too long (max 100 characters)" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (email.length > 255) {
      return new Response(JSON.stringify({ error: "Email too long (max 255 characters)" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (message.length > 5000) {
      return new Response(JSON.stringify({ error: "Message too long (max 5000 characters)" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (company && company.length > 200) {
      return new Response(JSON.stringify({ error: "Company name too long (max 200 characters)" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL") as string;
    const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") as string;
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    const composedMessage = `Company: ${company ?? "-"}\nInterest: ${interest ?? "General"}\n\n${message}`;

    const { error: insertError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        message: composedMessage,
        website: website ?? null,
        source_path: source_path ?? null,
        user_agent: user_agent ?? null,
      });

    if (insertError) {
      console.error("submit-contact: insert error", insertError);
      return new Response(JSON.stringify({ error: insertError.message }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const resend = new Resend(Deno.env.get("RESEND_API_KEY") as string);

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; line-height:1.6; color:#0f172a">
        <h2 style="margin:0 0 12px;">Thanks for reaching out${name ? ", " + String(name) : ""}.</h2>
        <p style="margin:0 0 12px;">We received your message and will get back shortly.</p>
        <p style="margin:0 0 12px;">– Jay</p>
      </div>
    `;

    const emailResult = await resend.emails.send({
      from: "Jay Cadmus <jay.cadmus@innovixdynamix.com>",
      to: [email],
      subject: "We received your message",
      html,
    });

    console.log("submit-contact: email sent", emailResult?.data?.id ?? "ok");

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (e) {
    console.error("submit-contact: error", e);
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
