// Edge function: collect-email
// Inserts into email_list with double opt-in and sends confirmation email via Resend

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Generate secure random token
function generateConfirmationToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, list = "general", website, source_path, user_agent } = await req.json();
    
    // Get IP address for rate limiting
    const ip_address = req.headers.get("x-forwarded-for")?.split(",")[0] || 
                       req.headers.get("x-real-ip") || 
                       "unknown";

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
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Rate limiting check - check if this email or IP submitted recently
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    const { data: recentSubmissions } = await supabase
      .from("email_list")
      .select("id")
      .or(`email.eq.${email},ip_address.eq.${ip_address}`)
      .gte("created_at", fiveMinutesAgo)
      .limit(1);

    if (recentSubmissions && recentSubmissions.length > 0) {
      console.log("collect-email: rate limit exceeded", { email, ip_address });
      return new Response(JSON.stringify({ error: "Too many requests. Please try again in a few minutes." }), {
        status: 429,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const normalizedList = String(list).toLowerCase();
    const confirmationToken = generateConfirmationToken();

    const insertPayload = {
      name: name ?? null,
      email,
      list: ["jcal", "matalino", "general"].includes(normalizedList)
        ? normalizedList
        : "general",
      source_path: source_path ?? null,
      user_agent: user_agent ?? null,
      ip_address: ip_address,
      confirmation_token: confirmationToken,
      status: "pending"
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
      ? "Confirm your JCAL.ai waitlist signup"
      : insertPayload.list === "matalino"
      ? "Confirm your Matalino waitlist signup"
      : "Confirm your Innovix list signup";

    const confirmUrl = `${SUPABASE_URL}/functions/v1/confirm-email?token=${confirmationToken}`;

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; line-height:1.6; color:#0f172a">
        <h2 style="margin:0 0 12px;">Confirm your ${brand} signup</h2>
        <p style="margin:0 0 12px;">Thanks for joining${name ? ", " + String(name) : ""}! Please confirm your email address to complete your signup.</p>
        <p style="margin:16px 0;">
          <a href="${confirmUrl}" style="display:inline-block;padding:12px 24px;background:#0f172a;color:#ffffff;text-decoration:none;border-radius:6px;font-weight:600;">Confirm Email</a>
        </p>
        <p style="margin:0 0 12px;font-size:14px;color:#64748b;">Or copy and paste this link: ${confirmUrl}</p>
        <p style="margin:0 0 12px;">– Jay</p>
      </div>
    `;

    const emailResult = await resend.emails.send({
      from: "Jay Cadmus <jay.cadmus@innovix-llc.com>",
      to: [email],
      subject,
      html,
    });

    console.log("collect-email: email sent", emailResult?.data?.id ?? "ok");

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
