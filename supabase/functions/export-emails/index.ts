// Edge function: export-emails
// Export email list data (requires admin authentication)

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
    // Validate authentication and admin role
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL") as string;
    const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") as string;

    // First, validate the JWT and get the user
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: authHeader } }
    });

    const { data: { user }, error: authError } = await supabaseClient.auth.getUser();
    if (authError || !user) {
      console.error("export-emails: auth error", authError);
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Check if user has admin role
    const { data: isAdmin, error: roleError } = await supabaseClient.rpc('has_role', { 
      _user_id: user.id, 
      _role: 'admin' 
    });

    if (roleError || !isAdmin) {
      console.error("export-emails: role check failed", roleError);
      return new Response(JSON.stringify({ error: "Forbidden: Admin access required" }), {
        status: 403,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Now use service role key to query data
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Parse URL parameters
    const url = new URL(req.url);
    const list = url.searchParams.get("list");
    const status = url.searchParams.get("status");
    const format = url.searchParams.get("format") || "json";

    // Build query
    let query = supabase
      .from("email_list")
      .select("*")
      .order("created_at", { ascending: false });

    if (list && ["jcal", "matalino", "general"].includes(list)) {
      query = query.eq("list", list);
    }

    if (status && ["pending", "subscribed", "unsubscribed"].includes(status)) {
      query = query.eq("status", status);
    }

    const { data, error } = await query;

    if (error) {
      console.error("export-emails: query error", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Format response
    if (format === "csv") {
      // Convert to CSV
      if (!data || data.length === 0) {
        return new Response("", {
          status: 200,
          headers: {
            "Content-Type": "text/csv",
            "Content-Disposition": `attachment; filename="email-list-${new Date().toISOString()}.csv"`,
            ...corsHeaders,
          },
        });
      }

      const headers = Object.keys(data[0]);
      const csvRows = [
        headers.join(","),
        ...data.map(row =>
          headers.map(field => {
            const value = row[field];
            if (value === null || value === undefined) return "";
            const str = String(value);
            // Escape quotes and wrap in quotes if contains comma
            return str.includes(",") || str.includes('"')
              ? `"${str.replace(/"/g, '""')}"`
              : str;
          }).join(",")
        ),
      ];

      return new Response(csvRows.join("\n"), {
        status: 200,
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": `attachment; filename="email-list-${new Date().toISOString()}.csv"`,
          ...corsHeaders,
        },
      });
    }

    // Default JSON response
    return new Response(
      JSON.stringify({
        count: data?.length || 0,
        data: data || [],
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (e) {
    console.error("export-emails: error", e);
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
