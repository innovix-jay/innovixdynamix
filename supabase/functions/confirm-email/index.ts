// Edge function: confirm-email
// Confirms email subscription via token

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

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
<html>
<head>
  <title>Invalid Link</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #f8fafc; }
    .card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-width: 400px; text-align: center; }
    h1 { color: #0f172a; margin: 0 0 1rem; }
    p { color: #64748b; margin: 0; }
  </style>
</head>
<body>
  <div class="card">
    <h1>❌ Invalid Link</h1>
    <p>This confirmation link is invalid or has expired.</p>
  </div>
</body>
</html>`,
        {
          status: 400,
          headers: { "Content-Type": "text/html", ...corsHeaders },
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
      .single();

    if (findError || !emailRecord) {
      console.error("confirm-email: token not found", findError);
      return new Response(
        `<!DOCTYPE html>
<html>
<head>
  <title>Invalid Token</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #f8fafc; }
    .card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-width: 400px; text-align: center; }
    h1 { color: #0f172a; margin: 0 0 1rem; }
    p { color: #64748b; margin: 0; }
  </style>
</head>
<body>
  <div class="card">
    <h1>❌ Invalid Token</h1>
    <p>This confirmation link is invalid or has already been used.</p>
  </div>
</body>
</html>`,
        {
          status: 404,
          headers: { "Content-Type": "text/html", ...corsHeaders },
        }
      );
    }

    // Check if already confirmed
    if (emailRecord.confirmed_at) {
      return new Response(
        `<!DOCTYPE html>
<html>
<head>
  <title>Already Confirmed</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #f8fafc; }
    .card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-width: 400px; text-align: center; }
    h1 { color: #0f172a; margin: 0 0 1rem; }
    p { color: #64748b; margin: 0; }
    a { color: #0f172a; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="card">
    <h1>✅ Already Confirmed</h1>
    <p>Your email has already been confirmed. You're all set!</p>
    <p style="margin-top: 1rem;"><a href="https://www.innovix-llc.com">← Back to Innovix</a></p>
  </div>
</body>
</html>`,
        {
          status: 200,
          headers: { "Content-Type": "text/html", ...corsHeaders },
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
<html>
<head>
  <title>Error</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #f8fafc; }
    .card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-width: 400px; text-align: center; }
    h1 { color: #0f172a; margin: 0 0 1rem; }
    p { color: #64748b; margin: 0; }
  </style>
</head>
<body>
  <div class="card">
    <h1>❌ Error</h1>
    <p>Something went wrong. Please try again later.</p>
  </div>
</body>
</html>`,
        {
          status: 500,
          headers: { "Content-Type": "text/html", ...corsHeaders },
        }
      );
    }

    console.log("confirm-email: confirmed", emailRecord.email);

    const brand = emailRecord.list === "jcal"
      ? "JCAL.ai"
      : emailRecord.list === "matalino"
      ? "Matalino"
      : "Innovix";

    return new Response(
      `<!DOCTYPE html>
<html>
<head>
  <title>Email Confirmed</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #f8fafc; }
    .card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-width: 400px; text-align: center; }
    h1 { color: #0f172a; margin: 0 0 1rem; font-size: 2rem; }
    p { color: #64748b; margin: 0 0 0.5rem; line-height: 1.6; }
    a { color: #0f172a; text-decoration: none; font-weight: 600; display: inline-block; margin-top: 1rem; }
  </style>
</head>
<body>
  <div class="card">
    <h1>✅ Email Confirmed!</h1>
    <p>Thanks for confirming your email.</p>
    <p>You're now on the ${brand} waitlist. We'll keep you posted with updates and early access.</p>
    <a href="https://www.innovix-llc.com">← Back to Innovix</a>
  </div>
</body>
</html>`,
      {
        status: 200,
        headers: { "Content-Type": "text/html", ...corsHeaders },
      }
    );
  } catch (e) {
    console.error("confirm-email: error", e);
    return new Response(
      `<!DOCTYPE html>
<html>
<head>
  <title>Error</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #f8fafc; }
    .card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-width: 400px; text-align: center; }
    h1 { color: #0f172a; margin: 0 0 1rem; }
    p { color: #64748b; margin: 0; }
  </style>
</head>
<body>
  <div class="card">
    <h1>❌ Error</h1>
    <p>Something went wrong: ${(e as Error).message}</p>
  </div>
</body>
</html>`,
      {
        status: 500,
        headers: { "Content-Type": "text/html", ...corsHeaders },
      }
    );
  }
});
