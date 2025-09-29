-- Make name column nullable in email_list table
-- This allows email-only signup forms to work properly
ALTER TABLE public.email_list ALTER COLUMN name DROP NOT NULL;