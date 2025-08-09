// Edge function: collect-email
// Inserts into email_list and sends a confirmation email via Resend

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, list = "general", website, source_path, user_agent } = await req.json();

    // Honeypot check
    if (website && String(website).trim().length > 0) {
      console.log("collect-email: honeypot triggered, ignoring");
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (!email || typeof email !== "string") {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL") as string;
    const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") as string;
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    const normalizedList = String(list).toLowerCase();

    const insertPayload = {
      name: name ?? null,
      email,
      list: ["jcal", "matalino", "general"].includes(normalizedList)
        ? normalizedList
        : "general",
      source_path: source_path ?? null,
      user_agent: user_agent ?? null,
    } as const;

    const { error: insertError } = await supabase
      .from("email_list")
      .insert(insertPayload);

    if (insertError) {
      console.error("collect-email: insert error", insertError);
      return new Response(JSON.stringify({ error: insertError.message }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Send confirmation email
    const resend = new Resend(Deno.env.get("RESEND_API_KEY") as string);

    const brand = insertPayload.list === "jcal"
      ? "JCAL.ai"
      : insertPayload.list === "matalino"
      ? "Matalino"
      : "Innovix";

    const subject = insertPayload.list === "jcal"
      ? "You're on the JCAL.ai waitlist"
      : insertPayload.list === "matalino"
      ? "You're on the Matalino waitlist"
      : "You're on the Innovix list";

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; line-height:1.6; color:#0f172a">
        <h2 style="margin:0 0 12px;">Thanks for joining ${brand}</h2>
        <p style="margin:0 0 12px;">We got your info${name ? ", " + String(name) : ""}. We'll keep you posted with updates and early access.</p>
        <p style="margin:0 0 12px;">– Jay</p>
      </div>
    `;

    const emailResult = await resend.emails.send({
      from: "Jay Cadmus <jay.cadmus@innovix-llc.com>",
      to: [email],
      subject,
      html,
    });

    console.log("collect-email: email sent", emailResult?.id ?? "ok");

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (e) {
    console.error("collect-email: error", e);
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
