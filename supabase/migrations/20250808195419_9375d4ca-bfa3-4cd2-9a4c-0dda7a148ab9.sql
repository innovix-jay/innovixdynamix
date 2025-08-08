-- Enable required extension for UUID generation
create extension if not exists pgcrypto;

-- Utility function to auto-update updated_at
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- EMAIL LIST TABLE
create table if not exists public.email_list (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null,
  email text not null,
  list text not null default 'general',
  source_path text,
  user_agent text,
  status text not null default 'subscribed',
  constraint email_list_email_format check (position('@' in email) > 1)
);

-- Prevent duplicate subscriptions per list
create unique index if not exists email_list_unique_email_per_list
  on public.email_list (lower(email), lower(list));

-- RLS
alter table public.email_list enable row level security;

-- Allow anyone to insert (forms) but nothing else by default
create policy if not exists "Public can insert email list"
  on public.email_list for insert
  to anon, authenticated
  with check (true);

-- Trigger to maintain updated_at
create or replace trigger trg_email_list_updated_at
before update on public.email_list
for each row execute function public.update_updated_at_column();

-- CONTACT SUBMISSIONS TABLE
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null,
  email text not null,
  message text not null,
  website text,              -- honeypot
  source_path text,
  user_agent text,
  status text not null default 'new',
  constraint contact_email_format check (position('@' in email) > 1)
);

create index if not exists idx_contact_submissions_created_at on public.contact_submissions (created_at desc);

-- RLS
alter table public.contact_submissions enable row level security;

create policy if not exists "Public can insert contact submissions"
  on public.contact_submissions for insert
  to anon, authenticated
  with check (true);

-- Trigger to maintain updated_at
create or replace trigger trg_contact_submissions_updated_at
before update on public.contact_submissions
for each row execute function public.update_updated_at_column();