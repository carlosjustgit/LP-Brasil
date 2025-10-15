# Supabase Database Setup

## Table Schema

Create this table in your Supabase SQL Editor:

```sql
-- Create landing_page_leads table
CREATE TABLE IF NOT EXISTS public.landing_page_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  variant TEXT NOT NULL CHECK (variant IN ('aida', 'pas')),
  source TEXT DEFAULT 'br_landing_page',
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  
  -- Indexes for better query performance
  CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_landing_page_leads_email ON public.landing_page_leads(email);

-- Create index on created_at for analytics queries
CREATE INDEX IF NOT EXISTS idx_landing_page_leads_created_at ON public.landing_page_leads(created_at DESC);

-- Create index on variant for A/B test analytics
CREATE INDEX IF NOT EXISTS idx_landing_page_leads_variant ON public.landing_page_leads(variant);

-- Enable Row Level Security
ALTER TABLE public.landing_page_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for form submissions)
CREATE POLICY "Allow public insert access" ON public.landing_page_leads
  FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all leads
CREATE POLICY "Allow authenticated read access" ON public.landing_page_leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Add comments for documentation
COMMENT ON TABLE public.landing_page_leads IS 'Stores lead form submissions from landing pages';
COMMENT ON COLUMN public.landing_page_leads.variant IS 'A/B test variant: aida or pas';
COMMENT ON COLUMN public.landing_page_leads.source IS 'Landing page source identifier';
```

## Steps to Set Up

1. **Go to Supabase Dashboard**
   - Navigate to: https://supabase.com/dashboard/project/rqwxtbyuvxtsjpifhguw

2. **Open SQL Editor**
   - Click on "SQL Editor" in the left sidebar
   - Click "New Query"

3. **Run the SQL Above**
   - Copy the entire SQL script above
   - Paste it into the SQL Editor
   - Click "Run" or press Ctrl+Enter

4. **Verify Table Creation**
   - Go to "Table Editor" in the left sidebar
   - You should see `landing_page_leads` table
   - Click on it to verify the structure

## Table Structure

| Column | Type | Nullable | Description |
|--------|------|----------|-------------|
| id | UUID | No | Primary key, auto-generated |
| created_at | TIMESTAMP | No | Auto-set to current UTC time |
| name | TEXT | No | User's name from form |
| email | TEXT | No | User's email (validated format) |
| company | TEXT | Yes | Optional company name |
| variant | TEXT | No | A/B test variant ('aida' or 'pas') |
| source | TEXT | Yes | Default: 'br_landing_page' |
| utm_source | TEXT | Yes | UTM parameter from URL |
| utm_medium | TEXT | Yes | UTM parameter from URL |
| utm_campaign | TEXT | Yes | UTM parameter from URL |
| utm_content | TEXT | Yes | UTM parameter from URL |
| utm_term | TEXT | Yes | UTM parameter from URL |

## Row Level Security (RLS)

The table has RLS enabled with the following policies:

1. **Public Insert**: Anyone can insert new leads (for form submissions)
2. **Authenticated Read**: Only authenticated users (dashboard access) can read leads

## Querying Leads

### Get all leads from last 7 days
```sql
SELECT * FROM landing_page_leads
WHERE created_at >= NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;
```

### Get leads by variant
```sql
SELECT 
  variant,
  COUNT(*) as total_leads,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as leads_last_7_days
FROM landing_page_leads
GROUP BY variant;
```

### Get leads by UTM campaign
```sql
SELECT 
  utm_campaign,
  utm_source,
  COUNT(*) as total_leads
FROM landing_page_leads
WHERE utm_campaign IS NOT NULL
GROUP BY utm_campaign, utm_source
ORDER BY total_leads DESC;
```

## Email Notifications via SendGrid

The landing page will automatically send email notifications when a new lead is submitted:

- **To**: info@witfy.social
- **Subject**: "Nova Lead - Landing Page Brasil [AIDA/PAS]"
- **Content**: Name, Email, Company, Variant, UTM parameters

This is handled automatically by the form submission code.

## Next Steps

After creating the table:
1. ✅ Verify the table exists in Supabase Dashboard
2. ✅ Test inserting a row manually to confirm permissions
3. ✅ Start the development server: `npm run dev`
4. ✅ Test the form submission on the landing page
5. ✅ Check that leads appear in the database

