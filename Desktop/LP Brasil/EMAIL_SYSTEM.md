# 📧 Email Notification System

## Overview

The landing page uses **SendGrid** to send automatic email notifications when a user submits the lead form.

## How It Works

### 1. User Submits Form
When a user fills out and submits the lead form on the landing page:

1. ✅ Data is saved to **Supabase** (`landing_page_leads` table)
2. ✅ API call is made to `/api/send-lead-emails`
3. ✅ Two emails are sent via **SendGrid**

### 2. Email 1: Admin Notification → `info@witfy.social`

**Subject:** 🎉 Nova solicitação de demo - [Name]

**Contains:**
- Lead name
- Email address
- Company (if provided)
- A/B test variant (AIDA or PAS)
- Date/time of submission
- Formatted as HTML with Witfy branding

**Purpose:** Notifies the Witfy team to follow up with the lead.

---

### 3. Email 2: User Confirmation → Lead's Email

**Subject:** Demo solicitada com sucesso! 🎉 | Witfy

**Contains:**
- Personalized greeting in Brazilian Portuguese
- Confirmation that demo request was received
- What happens next (team will contact within 24h)
- Two CTA buttons:
  - **Conhecer nosso site** → https://witfy.social
  - **Começar agora mesmo** → https://app.witfy.social
- Footer with Witfy branding and links

**Purpose:** Confirms submission and provides links to learn more or start using Witfy.

---

## Implementation

### Serverless Function
The email logic is in a **Vercel Serverless Function**:

**File:** `/api/send-lead-emails.ts`

This keeps the SendGrid API key secure (server-side only).

### Environment Variables Required

Make sure these are set in Vercel:

```env
SENDGRID_API_KEY=SG.your_key_here
SENDGRID_FROM_EMAIL=info@witfy.social
```

### Error Handling

- If email sending fails, **the form submission still succeeds**
- Lead data is always saved to Supabase first
- Email failures are logged but don't block the user experience

---

## Testing

### Local Development

1. Make sure `.env` file has SendGrid credentials
2. Submit a test form
3. Check console for: `✅ Confirmation emails sent successfully`
4. Check email inbox for both emails

### Production (Vercel)

1. Set environment variables in Vercel dashboard
2. Deploy the site
3. Submit a test form
4. Verify both emails arrive

---

## Email Templates

Both emails use responsive HTML templates with:
- ✅ Witfy purple gradient branding (#8943FE)
- ✅ Mobile-friendly design
- ✅ Plain text fallback
- ✅ Brazilian Portuguese localization
- ✅ Professional formatting

---

## Troubleshooting

### Emails not sending?

1. **Check Vercel logs** for errors
2. **Verify SendGrid API key** is active
3. **Check SendGrid dashboard** for delivery status
4. **Verify sender email** (info@witfy.social) is verified in SendGrid

### User not receiving confirmation?

1. Check spam/junk folder
2. Verify email address was correct
3. Check SendGrid activity log

---

## Future Improvements

Possible enhancements:
- Add email templates for different stages (demo scheduled, follow-up, etc.)
- Segment emails by A/B variant
- Add drip campaign integration
- Track email open rates
- Add calendar link for demo scheduling

---

## Files Involved

- `/api/send-lead-emails.ts` - Serverless function
- `/src/lib/formSubmission.ts` - Client-side submission
- `package.json` - Dependencies (@sendgrid/mail)
- `.env` / Vercel env vars - Configuration

