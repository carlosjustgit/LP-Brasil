# Witfy Landing Page - Brazil 🇧🇷

Production-ready Brazilian landing page with A/B testing (AIDA vs PAS variants).

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

The `.env` file has been created with your Supabase and SendGrid credentials. Verify it exists:

```bash
# .env should contain:
VITE_SUPABASE_URL=https://rqwxtbyuvxtsjpifhguw.supabase.co
VITE_SUPABASE_ANON_KEY=ey...
VITE_SENDGRID_API_KEY=SG...
VITE_SENDGRID_FROM_EMAIL=info@witfy.social
```

### 3. Set Up Supabase Database

**Important**: Create the database table before running the app!

1. Go to [Supabase Dashboard](https://supabase.com/dashboard/project/rqwxtbyuvxtsjpifhguw)
2. Click **SQL Editor** → **New Query**
3. Copy the SQL from `SUPABASE_SETUP.md`
4. Run the query
5. Verify the `landing_page_leads` table exists

See `SUPABASE_SETUP.md` for detailed instructions.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173/br](http://localhost:5173/br)

## 📧 Email Notifications

The landing page automatically sends **two emails** on every form submission:

1. **Admin notification** → `info@witfy.social` (with lead details)
2. **User confirmation** → Lead's email (in Portuguese with links to witfy.social and app.witfy.social)

Emails are sent via **Vercel Serverless Function** + **SendGrid**.

**See `EMAIL_SYSTEM.md` for complete documentation.**

### Setting up for production:

1. Verify SendGrid API key is active
2. Set environment variables in Vercel:
   - `SENDGRID_API_KEY`
   - `SENDGRID_FROM_EMAIL`
3. Deploy to Vercel
4. Test form submission

**Note:** If emails fail, form submission still succeeds (lead is always saved to Supabase)

## 🎯 A/B Testing

Two variants are implemented:

### Variant A: AIDA (Attention → Interest → Desire → Action)
- Classic sales funnel approach
- Feature-focused messaging
- Best for: Warm traffic, retargeting

**Test URL**: `http://localhost:5173/br?v=aida`

### Variant B: PAS (Problem → Agitate → Solution)
- Emotional, urgent messaging
- Pain point amplification
- Best for: Cold traffic, problem-aware audience

**Test URL**: `http://localhost:5173/br?v=pas`

### Auto A/B Test
Visit `http://localhost:5173/br` (no `?v` parameter) for random 50/50 assignment.

## 📁 Project Structure

```
witfy-landing-br/
├── src/
│   ├── pages/
│   │   └── landing/br/
│   │       ├── BrazilLandingPage.tsx    # Main container
│   │       ├── variants/
│   │       │   ├── AidaVariant.tsx      # AIDA flow
│   │       │   └── PasVariant.tsx       # PAS flow
│   │       └── sections/
│   │           ├── aida/                # AIDA sections
│   │           └── pas/                 # PAS sections
│   │
│   ├── components/ui/                    # Shadcn/UI components
│   ├── lib/
│   │   ├── i18n/                        # Translations (pt-BR)
│   │   ├── supabase.ts                  # Supabase client
│   │   └── formSubmission.ts            # Lead form handler
│   │
│   └── hooks/
│       ├── useVariant.ts                # A/B test variant selector
│       └── useTracking.ts               # Analytics tracking
│
├── specs/landing/                       # Planning documents
│   ├── landing-br-plan.md              # Full implementation plan
│   ├── BUILD-PLAN.md                   # Build phases & strategy
│   └── README.md                       # Planning summary
│
├── SUPABASE_SETUP.md                   # Database setup guide
└── env.template                        # Environment variables template
```

## 🎨 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Witfy design tokens
- **UI Components**: Shadcn/UI
- **Routing**: React Router
- **Forms**: React Hook Form + Zod
- **Database**: Supabase
- **Email**: SendGrid
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel

## 🌍 URL Structure

```
lp.witfy.com/br          → A/B test (random variant)
lp.witfy.com/br?v=aida   → Force AIDA variant
lp.witfy.com/br?v=pas    → Force PAS variant
```

### UTM Parameters

Track campaign performance:

```
lp.witfy.com/br?v=aida&utm_source=google&utm_campaign=brand
lp.witfy.com/br?v=pas&utm_source=facebook&utm_campaign=problem
```

All UTM parameters are automatically saved to the database.

## 📊 Analytics Events

The landing page tracks:

- **Variant Assignment**: Which A/B variant the user saw
- **CTA Clicks**: Button clicks per section
- **Scroll Depth**: User engagement (25%, 50%, 75%, 100%)
- **Form Submissions**: Lead conversions
- **LGPD Consent**: Cookie preferences

View in Google Analytics under Events.

## 🔒 LGPD Compliance

Full Brazilian LGPD compliance:

- ✅ Cookie consent banner
- ✅ Granular consent preferences
- ✅ Easy withdrawal of consent
- ✅ Privacy policy link
- ✅ Data controller information

## 📝 Form Submissions

When a user submits the lead form:

1. **Data saved to Supabase**
   - Name, email, company (optional)
   - A/B variant
   - UTM parameters
   - Timestamp

2. **Email notification sent** (via SendGrid)
   - To: info@witfy.social
   - Subject: "Nova Lead - Landing Page Brasil [AIDA/PAS]"

3. **Analytics tracked**
   - Conversion event
   - Variant attribution

## 🏗️ Build Commands

```bash
# Development
npm run dev

# Type checking
npm run lint

# Production build
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment (Vercel)

### 1. Connect to Vercel

```bash
npm i -g vercel
vercel login
vercel
```

### 2. Configure Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add:

```
VITE_SUPABASE_URL=https://rqwxtbyuvxtsjpifhguw.supabase.co
VITE_SUPABASE_ANON_KEY=ey...
VITE_SENDGRID_API_KEY=SG...
VITE_SENDGRID_FROM_EMAIL=info@witfy.social
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_FB_PIXEL_ID=XXXXXXXXXX
```

### 3. Configure Custom Domain

In Vercel Dashboard → Settings → Domains, add:

```
lp.witfy.com
```

Vercel will provide DNS records. Add them to your DNS provider:

```
Type: CNAME
Name: lp
Value: cname.vercel-dns.com
```

### 4. Deploy

```bash
vercel --prod
```

## 📈 Success Metrics

Track these KPIs in Google Analytics:

| Metric | Target | AIDA | PAS |
|--------|--------|------|-----|
| Conversion Rate | > 5% | - | - |
| Avg. Time on Page | > 2 min | - | - |
| Scroll Depth (75%+) | > 60% | - | - |
| Bounce Rate | < 40% | - | - |

**Winner Criteria**: Statistical significance (p < 0.05) with >20% difference

## 🎯 Ad Campaign URLs

### Google Ads

```
https://lp.witfy.com/br?v=aida&utm_source=google&utm_medium=cpc&utm_campaign=brand&utm_content=ad1
https://lp.witfy.com/br?v=pas&utm_source=google&utm_medium=cpc&utm_campaign=problem&utm_content=ad2
```

### Facebook Ads

```
https://lp.witfy.com/br?v=aida&utm_source=facebook&utm_medium=paid_social&utm_campaign=benefits
https://lp.witfy.com/br?v=pas&utm_source=facebook&utm_medium=paid_social&utm_campaign=pain
```

### Instagram Ads

```
https://lp.witfy.com/br?v=aida&utm_source=instagram&utm_medium=paid_social&utm_campaign=features
https://lp.witfy.com/br?v=pas&utm_source=instagram&utm_medium=paid_social&utm_campaign=urgency
```

## 🐛 Troubleshooting

### "Missing Supabase environment variables"

- Verify `.env` file exists in project root
- Check that variable names start with `VITE_`
- Restart dev server after changing `.env`

### Form submissions not saving

- Run the SQL in `SUPABASE_SETUP.md` to create the table
- Check Supabase Dashboard → Table Editor for `landing_page_leads`
- Verify RLS policies are enabled

### A/B test not working

- Check browser console for errors
- Verify `useVariant` hook is being called
- Clear session storage: `sessionStorage.clear()`

## 📚 Documentation

- [Full Implementation Plan](specs/landing/landing-br-plan.md) - Complete technical spec
- [Build Plan](specs/landing/BUILD-PLAN.md) - Development phases
- [Supabase Setup](SUPABASE_SETUP.md) - Database configuration
- [UI Kit Guide](ui-kit-visual-guide.md) - Design system

## 🤝 Contributing

This is a private project. For questions or issues, contact the development team.

## 📄 License

Copyright © 2025 Witfy. All rights reserved.

---

**Status**: 🚧 In Development  
**Version**: 1.0.0  
**Last Updated**: October 15, 2025

