// Edge function: confirm-email
// Confirms email subscription via token

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
    const url = new URL(req.url);
    const token = url.searchParams.get("token");

    if (!token) {
      return new Response(
        `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invalid Link</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      min-height: 100vh; 
      margin: 0; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 1rem;
    }
    .card { 
      background: white; 
      padding: 3rem 2rem; 
      border-radius: 16px; 
      box-shadow: 0 20px 60px rgba(0,0,0,0.2); 
      max-width: 500px; 
      width: 100%;
      text-align: center; 
    }
    .icon { 
      width: 80px; 
      height: 80px; 
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      border-radius: 50%; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      margin: 0 auto 1.5rem;
      font-size: 3rem;
    }
    h1 { 
      color: #0f172a; 
      margin: 0 0 1rem; 
      font-size: 1.875rem; 
      font-weight: 700;
    }
    p { 
      color: #64748b; 
      margin: 0; 
      line-height: 1.6; 
      font-size: 1.0625rem;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">✕</div>
    <h1>Invalid Link</h1>
    <p>This confirmation link is invalid or has expired.</p>
  </div>
</body>
</html>`,
        {
          status: 400,
          headers: { "Content-Type": "text/html; charset=utf-8", ...corsHeaders },
        }
      );
    }

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL") as string;
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Find the email by token
    const { data: emailRecord, error: findError } = await supabase
      .from("email_list")
      .select("*")
      .eq("confirmation_token", token)
      .maybeSingle();

    if (findError || !emailRecord) {
      console.error("confirm-email: token not found", findError);
      return new Response(
        `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invalid Token</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      min-height: 100vh; 
      margin: 0; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 1rem;
    }
    .card { 
      background: white; 
      padding: 3rem 2rem; 
      border-radius: 16px; 
      box-shadow: 0 20px 60px rgba(0,0,0,0.2); 
      max-width: 500px; 
      width: 100%;
      text-align: center; 
    }
    .icon { 
      width: 80px; 
      height: 80px; 
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      border-radius: 50%; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      margin: 0 auto 1.5rem;
      font-size: 3rem;
    }
    h1 { 
      color: #0f172a; 
      margin: 0 0 1rem; 
      font-size: 1.875rem; 
      font-weight: 700;
    }
    p { 
      color: #64748b; 
      margin: 0; 
      line-height: 1.6; 
      font-size: 1.0625rem;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">✕</div>
    <h1>Invalid Token</h1>
    <p>This confirmation link is invalid or has already been used.</p>
  </div>
</body>
</html>`,
        {
          status: 404,
          headers: { "Content-Type": "text/html; charset=utf-8", ...corsHeaders },
        }
      );
    }

    // Check if already confirmed
    if (emailRecord.confirmed_at) {
      return new Response(
        `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Already Confirmed</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      min-height: 100vh; 
      margin: 0; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 1rem;
    }
    .card { 
      background: white; 
      padding: 3rem 2rem; 
      border-radius: 16px; 
      box-shadow: 0 20px 60px rgba(0,0,0,0.2); 
      max-width: 500px; 
      width: 100%;
      text-align: center; 
    }
    .icon { 
      width: 80px; 
      height: 80px; 
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      border-radius: 50%; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      margin: 0 auto 1.5rem;
      font-size: 3rem;
    }
    h1 { 
      color: #0f172a; 
      margin: 0 0 1rem; 
      font-size: 1.875rem; 
      font-weight: 700;
    }
    p { 
      color: #64748b; 
      margin: 0 0 0.75rem; 
      line-height: 1.6; 
      font-size: 1.0625rem;
    }
    .button { 
      display: inline-block;
      margin-top: 2rem; 
      padding: 0.875rem 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 1rem;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }
    .button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">✓</div>
    <h1>Already Confirmed</h1>
    <p>Your email has already been confirmed. You're all set!</p>
    <a href="https://www.innovixdynamix.com" class="button">Return to Innovix Dynamix</a>
  </div>
</body>
</html>`,
        {
          status: 200,
          headers: { "Content-Type": "text/html; charset=utf-8", ...corsHeaders },
        }
      );
    }

    // Confirm the email
    const { error: updateError } = await supabase
      .from("email_list")
      .update({
        confirmed_at: new Date().toISOString(),
        status: "subscribed"
      })
      .eq("id", emailRecord.id);

    if (updateError) {
      console.error("confirm-email: update error", updateError);
      return new Response(
        `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Error</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      min-height: 100vh; 
      margin: 0; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 1rem;
    }
    .card { 
      background: white; 
      padding: 3rem 2rem; 
      border-radius: 16px; 
      box-shadow: 0 20px 60px rgba(0,0,0,0.2); 
      max-width: 500px; 
      width: 100%;
      text-align: center; 
    }
    .icon { 
      width: 80px; 
      height: 80px; 
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      border-radius: 50%; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      margin: 0 auto 1.5rem;
      font-size: 3rem;
    }
    h1 { 
      color: #0f172a; 
      margin: 0 0 1rem; 
      font-size: 1.875rem; 
      font-weight: 700;
    }
    p { 
      color: #64748b; 
      margin: 0; 
      line-height: 1.6; 
      font-size: 1.0625rem;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">✕</div>
    <h1>Error</h1>
    <p>Something went wrong. Please try again later.</p>
  </div>
</body>
</html>`,
        {
          status: 500,
          headers: { "Content-Type": "text/html; charset=utf-8", ...corsHeaders },
        }
      );
    }

    console.log("confirm-email: confirmed", emailRecord.email);

    const brand = emailRecord.list === "jcal"
      ? "JCAL.ai"
      : emailRecord.list === "matalino"
      ? "Matalino"
      : "Innovix";

    const siteUrl = "https://innovixdynamix.com";

    // Send confirmation success email
    const resend = new Resend(Deno.env.get("RESEND_API_KEY") as string);
    const subject = `Welcome to Innovix Dynamix`;
    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; line-height:1.6; color:#0f172a; max-width:600px; margin:0 auto;">
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding:32px; border-radius:8px 8px 0 0;">
          <h1 style="margin:0; color:#ffffff; font-size:28px;">✓ You're All Set!</h1>
        </div>
        <div style="background:#ffffff; padding:32px; border-radius:0 0 8px 8px; border:1px solid #e2e8f0;">
          <p style="margin:0 0 16px; font-size:16px;">Thanks for confirming your email${emailRecord.name ? ", " + emailRecord.name : ""}!</p>
          <p style="margin:0 0 16px; font-size:16px;">You're now subscribed to ${brand} updates. We'll keep you posted on the latest news, features, and releases.</p>
          <p style="margin:24px 0;">
            <a href="${siteUrl}" style="display:inline-block;padding:14px 28px;background:#0f172a;color:#ffffff;text-decoration:none;border-radius:6px;font-weight:600;font-size:16px;">Visit ${brand}</a>
          </p>
          <p style="margin:16px 0 0;">– Jay Cadmus, Founder & CEO</p>
        </div>
      </div>
    `;

    try {
      await resend.emails.send({
        from: "Innovix Dynamix <noreply@innovixdynamix.com>",
        to: [emailRecord.email],
        subject,
        html,
      });
      console.log("confirm-email: confirmation email sent to", emailRecord.email);
    } catch (emailError) {
      console.error("confirm-email: failed to send confirmation email", emailError);
      // Continue anyway - the subscription is confirmed even if email fails
    }

    // Send notification email to admin
    const adminNotificationHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; line-height:1.6; color:#0f172a; max-width:600px; margin:0 auto;">
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding:32px; border-radius:8px 8px 0 0;">
          <h1 style="margin:0; color:#ffffff; font-size:24px;">New Email Signup Confirmed</h1>
        </div>
        <div style="background:#ffffff; padding:32px; border-radius:0 0 8px 8px; border:1px solid #e2e8f0;">
          <p style="margin:0 0 16px; font-size:16px;"><strong>Email:</strong> ${emailRecord.email}</p>
          <p style="margin:0 0 16px; font-size:16px;"><strong>Name:</strong> ${emailRecord.name || "Not provided"}</p>
          <p style="margin:0 0 16px; font-size:16px;"><strong>List:</strong> ${brand}</p>
          <p style="margin:0 0 16px; font-size:16px;"><strong>Source:</strong> ${emailRecord.source_path || "Unknown"}</p>
          <p style="margin:0 0 16px; font-size:16px;"><strong>Confirmed at:</strong> ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    try {
      await resend.emails.send({
        from: "Innovix Dynamix <noreply@innovixdynamix.com>",
        to: ["jay.cadmus@innovixdynamix.com"],
        subject: `New ${brand} Signup: ${emailRecord.email}`,
        html: adminNotificationHtml,
      });
      console.log("confirm-email: admin notification sent");
    } catch (adminEmailError) {
      console.error("confirm-email: failed to send admin notification", adminEmailError);
      // Continue anyway
    }

    // Redirect to homepage
    return new Response(null, {
      status: 302,
      headers: { 
        "Location": siteUrl,
        ...corsHeaders 
      },
    });
  } catch (e) {
    console.error("confirm-email: error", e);
    return new Response(
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Error</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      min-height: 100vh; 
      margin: 0; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 1rem;
    }
    .card { 
      background: white; 
      padding: 3rem 2rem; 
      border-radius: 16px; 
      box-shadow: 0 20px 60px rgba(0,0,0,0.2); 
      max-width: 500px; 
      width: 100%;
      text-align: center; 
    }
    .icon { 
      width: 80px; 
      height: 80px; 
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      border-radius: 50%; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      margin: 0 auto 1.5rem;
      font-size: 3rem;
    }
    h1 { 
      color: #0f172a; 
      margin: 0 0 1rem; 
      font-size: 1.875rem; 
      font-weight: 700;
    }
    p { 
      color: #64748b; 
      margin: 0; 
      line-height: 1.6; 
      font-size: 1.0625rem;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">✕</div>
    <h1>Error</h1>
    <p>Something went wrong. Please try again later.</p>
  </div>
</body>
</html>`,
      {
        status: 500,
        headers: { "Content-Type": "text/html; charset=utf-8", ...corsHeaders },
      }
    );
  }
});
