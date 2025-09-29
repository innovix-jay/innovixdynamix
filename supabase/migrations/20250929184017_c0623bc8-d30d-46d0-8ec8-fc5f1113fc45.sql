-- Add double opt-in support to email_list table
ALTER TABLE public.email_list 
ADD COLUMN IF NOT EXISTS confirmed_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS confirmation_token TEXT,
ADD COLUMN IF NOT EXISTS ip_address TEXT;

-- Update status to pending by default for new submissions
ALTER TABLE public.email_list 
ALTER COLUMN status SET DEFAULT 'pending';

-- Create index for faster confirmation lookups
CREATE INDEX IF NOT EXISTS idx_email_list_confirmation_token ON public.email_list(confirmation_token);
CREATE INDEX IF NOT EXISTS idx_email_list_email ON public.email_list(email);
CREATE INDEX IF NOT EXISTS idx_email_list_created_at ON public.email_list(created_at);

-- Create rate limiting check function
CREATE OR REPLACE FUNCTION public.check_email_rate_limit(
  p_email TEXT,
  p_ip_address TEXT,
  p_minutes INTEGER DEFAULT 5
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Check if email or IP has submitted in the last X minutes
  RETURN NOT EXISTS (
    SELECT 1 FROM public.email_list
    WHERE (email = p_email OR ip_address = p_ip_address)
    AND created_at > NOW() - (p_minutes || ' minutes')::INTERVAL
  );
END;
$$;