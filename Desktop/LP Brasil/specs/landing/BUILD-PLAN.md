# Witfy Landing Page (Brazil) - BUILD PLAN

**Project Start Date**: October 15, 2025  
**Target**: Brazilian Market Only (pt-BR)  
**Deployment**: Vercel (lp.witfy.com subdomain)  
**A/B Testing**: AIDA vs PAS variants

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [A/B Testing Strategy](#ab-testing-strategy)
3. [Content Strategy](#content-strategy)
4. [LGPD Compliance](#lgpd-compliance)
5. [URL Structure & Routing](#url-structure--routing)
6. [Technical Stack](#technical-stack)
7. [Build Phases](#build-phases)
8. [Vercel Deployment](#vercel-deployment)
9. [Analytics & Tracking](#analytics--tracking)
10. [Success Metrics](#success-metrics)

---

## Project Overview

### Objectives

1. **Build production-ready Brazilian landing page** for Witfy social media management tool
2. **Implement A/B testing** with two conversion-optimized variants
3. **Ensure LGPD compliance** with cookie consent and privacy controls
4. **Deploy on Vercel** with scalable subdomain structure for future ad campaigns
5. **Track and optimize** conversion rates between variants

### Deliverables

- ✅ Fully functional landing page (2 variants)
- ✅ LGPD-compliant cookie consent system
- ✅ Complete footer with Brazilian legal links
- ✅ A/B testing infrastructure
- ✅ Analytics integration
- ✅ Vercel deployment configuration
- ✅ Documentation for running ad campaigns

---

## A/B Testing Strategy

### Variant A: AIDA (Attention, Interest, Desire, Action)

**Current Figma Design** - Uses classic sales funnel

**Structure**:
1. **Attention** (Hero): "Cansado de investir em redes sociais sem resultados reais?"
2. **Interest** (Problem): Shows pain points with social proof bubbles
3. **Desire** (Benefits + Results): 3 feature cards + 4 result cards showing outcomes
4. **Action** (CTA): Multiple CTAs throughout + final conversion section

**Psychological Approach**: 
- Captures attention with pain point question
- Builds interest by showing relatable problems
- Creates desire through benefits and results
- Prompts action with clear CTAs

**Best For**: 
- Users familiar with social media management tools
- Decision-makers looking for specific features
- B2B audience

---

### Variant B: PAS (Problem, Agitate, Solution)

**New Content Structure** - More aggressive conversion approach

**Structure**:
1. **Problem** (Hero): Identifies the core problem clearly and directly
2. **Agitate** (Amplify Pain): Makes the problem worse, shows consequences
3. **Solution** (Witfy Benefits): Positions Witfy as the ultimate solution

**Section Breakdown**:

#### 1. PROBLEM Section (Hero)
```
Headline: "Sua marca está invisível nas redes sociais?"

Subheadline: "Enquanto você luta para criar conteúdo e responder mensagens, 
seus concorrentes estão crescendo 10x mais rápido com automação inteligente."

Visual: Stressed person looking at declining metrics
CTA: "Descubra a Solução"
```

#### 2. AGITATE Section (Make It Worse)
```
Main Heading: "O Que Você Está Perdendo Agora Mesmo"

Pain Points (with emojis and stats):
📉 "Seus concorrentes ganham 10k seguidores enquanto você ganha 100"
⏰ "Você perde 20 horas por semana criando conteúdo manualmente"
💸 "Cada dia sem automação é R$5.000 em vendas perdidas"
😫 "Seu time está exausto e os resultados ainda são fracos"

Description: "A cada minuto que passa sem uma solução inteligente, você está 
ficando para trás. Seus concorrentes já estão usando IA e automação para 
dominar as redes enquanto você ainda faz tudo manualmente."

CTA: "Pare de Perder Tempo e Dinheiro"
```

#### 3. SOLUTION Section (Witfy as Savior)
```
Main Heading: "Witfy: A Solução Completa Para Dominar as Redes Sociais"

Subheading: "Enquanto você dorme, a Witfy trabalha. Automação com toque humano 
que multiplica seus resultados sem aumentar seu esforço."

Three Pillars:
1. "Automação Inteligente" 
   - IA cria conteúdo personalizado 24/7
   - Publica automaticamente nos melhores horários
   - Responde comentários e mensagens instantaneamente

2. "Crescimento Real"
   - Aumenta seguidores de forma orgânica
   - Multiplica engajamento em 300%
   - Gera leads qualificados automaticamente

3. "Tempo de Volta"
   - Economize 20+ horas por semana
   - Foque em estratégia, não em tarefas
   - Resultados sem esforço extra

Proof: Testimonial + Stats ("10k seguidores em 2 semanas")

Final CTA: "Comece Grátis Hoje" + "Veja Como Funciona"
```

**Psychological Approach**:
- Hits the pain point immediately
- Amplifies fear and urgency (FOMO)
- Positions Witfy as the only logical solution
- Creates contrast between current pain and future success

**Best For**:
- Users new to automation tools
- Emotional decision-makers
- Small business owners feeling overwhelmed
- High-intent traffic from problem-focused ads

---

### A/B Test Hypothesis

**Hypothesis**: PAS variant will convert better for cold traffic (new users) because it creates more emotional urgency, while AIDA will perform better for warm traffic (retargeting) because it's more informative and benefit-focused.

**Test Duration**: Minimum 2 weeks or 1,000 visitors per variant
**Primary Metric**: Conversion rate (CTA clicks)
**Secondary Metrics**: Time on page, scroll depth, bounce rate

---

## Content Strategy

### Brazilian Portuguese Localization

**Language Considerations**:
- ✅ Use Brazilian Portuguese (not European)
- ✅ "Você" instead of "tu" (more common in Brazil)
- ✅ "Criar" instead of "criar" (Brazilian spelling)
- ✅ Currency: R$ (Real Brasileiro)
- ✅ Date format: DD/MM/YYYY
- ✅ Decimal separator: comma (,) not period (.)

**Tone of Voice**:
- **AIDA Variant**: Professional, informative, friendly
- **PAS Variant**: Urgent, emotional, direct

**Call-to-Actions**:

| AIDA Variant | PAS Variant |
|--------------|-------------|
| "Experimente a Witfy" | "Comece Grátis Agora" |
| "Saiba Mais" | "Descubra a Solução" |
| "Agende uma Demo" | "Pare de Perder Dinheiro" |

### Content Files Structure

```
/translations
  /pt-br
    ├── aida.json      # AIDA variant content
    ├── pas.json       # PAS variant content
    ├── common.json    # Shared content (footer, LGPD, etc.)
    └── index.ts       # Translation exports
```

---

## LGPD Compliance

### Cookie Consent Banner

**LGPD** (Lei Geral de Proteção de Dados) is Brazil's GDPR equivalent.

#### Required Elements:

1. **Initial Banner** (non-intrusive, bottom of page)
   ```
   Message: "Usamos cookies para melhorar sua experiência. 
   Ao continuar navegando, você concorda com nossa política de privacidade."
   
   Buttons:
   - "Aceitar Todos" (primary)
   - "Gerenciar Preferências" (secondary)
   - "Rejeitar Todos" (tertiary)
   ```

2. **Preferences Dialog**
   ```
   Categories:
   ✅ Essenciais (always on, can't be disabled)
      - Funcionamento básico do site
      - Armazenamento de preferências
   
   ⚙️ Analíticos (optional)
      - Google Analytics
      - Acompanhamento de conversões
      - Testes A/B
   
   ⚙️ Marketing (optional)
      - Facebook Pixel
      - Google Ads
      - Retargeting
   ```

3. **Privacy Policy Link**
   - Must link to full privacy policy
   - Stored at `/politica-privacidade`

#### Implementation:

```typescript
// Cookie consent state management
interface CookieConsent {
  essential: boolean;    // Always true
  analytics: boolean;
  marketing: boolean;
  timestamp: Date;
  version: string;       // Track policy version
}

// Store in localStorage
const CONSENT_KEY = 'witfy_lgpd_consent';
```

#### LGPD Requirements Checklist:

- [ ] Cookie consent banner on first visit
- [ ] Clear explanation of what cookies are used
- [ ] Granular consent (per category)
- [ ] Easy to withdraw consent
- [ ] Privacy policy in Brazilian Portuguese
- [ ] Data controller contact information
- [ ] Cookie expiration times listed
- [ ] Third-party cookie disclosure

---

## URL Structure & Routing

### Subdomain Architecture

```
Production:
lp.witfy.com/br           → Landing page with A/B test
lp.witfy.com/br?v=aida    → Force AIDA variant
lp.witfy.com/br?v=pas     → Force PAS variant
lp.witfy.com/br/obrigado  → Thank you page after conversion

Future Expansion:
lp.witfy.com/es           → Spanish variant
lp.witfy.com/pt           → Portuguese (Portugal) variant
lp.witfy.com/en           → English variant
```

### Routing Logic

```typescript
// Route: /br
// Query params: ?v=aida|pas

function getVariant(): 'aida' | 'pas' {
  // 1. Check URL parameter (for forced variant)
  const urlParams = new URLSearchParams(window.location.search);
  const forcedVariant = urlParams.get('v');
  
  if (forcedVariant === 'aida' || forcedVariant === 'pas') {
    // Store in session to persist across page navigations
    sessionStorage.setItem('witfy_variant', forcedVariant);
    return forcedVariant;
  }
  
  // 2. Check session storage (user already assigned)
  const storedVariant = sessionStorage.getItem('witfy_variant');
  if (storedVariant === 'aida' || storedVariant === 'pas') {
    return storedVariant;
  }
  
  // 3. Random assignment (50/50 split)
  const randomVariant = Math.random() < 0.5 ? 'aida' : 'pas';
  sessionStorage.setItem('witfy_variant', randomVariant);
  
  // Track assignment
  trackEvent('ab_test', 'variant_assigned', randomVariant);
  
  return randomVariant;
}
```

### Ad Campaign URLs

**Google Ads Example**:
```
General Campaign: lp.witfy.com/br
                  → Auto A/B test

Specific Test:    lp.witfy.com/br?v=aida&utm_source=google&utm_campaign=brand
                  → Force AIDA variant for brand campaign
                  
                  lp.witfy.com/br?v=pas&utm_source=google&utm_campaign=problem
                  → Force PAS variant for problem-focused ads
```

**Facebook Ads Example**:
```
Ad Set A (Benefits): lp.witfy.com/br?v=aida&utm_source=facebook&utm_campaign=benefits
Ad Set B (Pain):     lp.witfy.com/br?v=pas&utm_source=facebook&utm_campaign=pain
```

---

## Technical Stack

### Core Technologies

```json
{
  "framework": "React 18.3+",
  "language": "TypeScript 5.0+",
  "build": "Vite 5.0+",
  "styling": "Tailwind CSS 3.4+",
  "ui": "Shadcn/UI",
  "router": "React Router 6.x",
  "animations": "Framer Motion",
  "forms": "React Hook Form",
  "validation": "Zod",
  "seo": "React Helmet Async",
  "analytics": "Google Analytics 4 + Vercel Analytics",
  "deployment": "Vercel"
}
```

### Project Structure

```
witfy-landing-br/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── aida/          # AIDA variant images
│   │   │   └── pas/           # PAS variant images
│   │   └── icons/
│   └── favicon.svg
│
├── src/
│   ├── app/
│   │   └── landing/
│   │       ├── pages/
│   │       │   └── br/
│   │       │       ├── index.tsx                  # Main entry
│   │       │       ├── BrazilLandingPage.tsx      # Container
│   │       │       ├── variants/
│   │       │       │   ├── AidaVariant.tsx
│   │       │       │   └── PasVariant.tsx
│   │       │       └── sections/
│   │       │           ├── aida/                  # AIDA sections
│   │       │           │   ├── HeroSection.tsx
│   │       │           │   ├── ProblemSection.tsx
│   │       │           │   ├── BenefitsSection.tsx
│   │       │           │   ├── ResultsSection.tsx
│   │       │           │   ├── TestimonialSection.tsx
│   │       │           │   └── FinalCTASection.tsx
│   │       │           └── pas/                   # PAS sections
│   │       │               ├── ProblemSection.tsx
│   │       │               ├── AgitateSection.tsx
│   │       │               └── SolutionSection.tsx
│   │       │
│   │       ├── shared/
│   │       │   └── components/
│   │       │       ├── LandingHeader.tsx
│   │       │       ├── LandingFooter.tsx
│   │       │       ├── LGPDBanner.tsx
│   │       │       ├── PurpleButton.tsx
│   │       │       ├── ChatBubble.tsx
│   │       │       ├── GradientCard.tsx
│   │       │       ├── ChecklistItem.tsx
│   │       │       ├── StatsCard.tsx
│   │       │       └── SectionWrapper.tsx
│   │       │
│   │       └── lib/
│   │           ├── i18n/
│   │           │   ├── translations/
│   │           │   │   ├── pt-br-aida.ts
│   │           │   │   ├── pt-br-pas.ts
│   │           │   │   └── pt-br-common.ts
│   │           │   └── index.ts
│   │           ├── analytics.ts
│   │           ├── ab-testing.ts
│   │           └── lgpd.ts
│   │
│   ├── components/
│   │   └── ui/                                    # Shadcn/UI
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── badge.tsx
│   │       ├── accordion.tsx
│   │       ├── switch.tsx
│   │       └── ...
│   │
│   ├── providers/
│   │   ├── ThemeProvider.tsx
│   │   ├── AnalyticsProvider.tsx
│   │   └── LGPDProvider.tsx
│   │
│   ├── hooks/
│   │   ├── useVariant.ts
│   │   ├── useTracking.ts
│   │   ├── useLGPD.ts
│   │   └── useScrollAnimation.ts
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── specs/
│   └── landing/
│       ├── landing-br-plan.md
│       ├── README.md
│       └── BUILD-PLAN.md                          # This file
│
├── .env.example
├── .env.local
├── vercel.json
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## Build Phases

### Phase 1: Foundation & Setup (Days 1-2)

**Tasks**:
1. ✅ Initialize Vite + React + TypeScript project
2. ✅ Configure Tailwind CSS with Witfy design tokens
3. ✅ Install Shadcn/UI components
4. ✅ Set up React Router with /br route
5. ✅ Create folder structure
6. ✅ Set up ESLint + Prettier

**Deliverables**:
- Empty app with routing configured
- Design system ready
- Dev environment working

---

### Phase 2: Shared Components (Days 2-3)

**Tasks**:
1. ✅ Build LandingHeader (logo + CTA)
2. ✅ Build LandingFooter with Brazilian legal links
3. ✅ Build LGPD Cookie Consent Banner
4. ✅ Build reusable components:
   - PurpleButton
   - ChatBubble
   - GradientCard
   - ChecklistItem
   - StatsCard
   - SectionWrapper

**Deliverables**:
- Complete component library
- Header and footer working
- LGPD consent system functional

---

### Phase 3: AIDA Variant (Days 3-5)

**Tasks**:
1. ✅ Create pt-BR translations for AIDA
2. ✅ Build Hero Section
3. ✅ Build Problem Section with chat bubbles
4. ✅ Build Benefits Section (3 cards)
5. ✅ Build Results Section (4 gradient cards)
6. ✅ Build Testimonial Section
7. ✅ Build Final CTA Section
8. ✅ Add images and optimize

**Deliverables**:
- Complete AIDA variant
- All sections responsive
- Images optimized

---

### Phase 4: PAS Variant (Days 5-7)

**Tasks**:
1. ✅ Write PAS content in pt-BR
2. ✅ Create PAS translations file
3. ✅ Build Problem Section (PAS hero)
4. ✅ Build Agitate Section
5. ✅ Build Solution Section
6. ✅ Reuse components where possible
7. ✅ Add PAS-specific images

**Deliverables**:
- Complete PAS variant
- Different content strategy
- Same design quality as AIDA

---

### Phase 5: A/B Testing Infrastructure (Day 7-8)

**Tasks**:
1. ✅ Implement variant selection logic
2. ✅ Create useVariant() hook
3. ✅ Add variant routing
4. ✅ Implement session persistence
5. ✅ Add analytics tracking
6. ✅ Test variant switching

**Deliverables**:
- Working A/B test
- Analytics integrated
- Variant tracking functional

---

### Phase 6: Polish & Optimization (Days 8-9)

**Tasks**:
1. ✅ Add scroll animations
2. ✅ Optimize images (WebP)
3. ✅ Add micro-interactions
4. ✅ Implement SEO meta tags
5. ✅ Add structured data
6. ✅ Performance optimization
7. ✅ Run Lighthouse audit

**Deliverables**:
- Lighthouse score 95+
- Smooth animations
- SEO optimized

---

### Phase 7: Testing & QA (Days 9-10)

**Tasks**:
1. ✅ Cross-browser testing
2. ✅ Mobile device testing
3. ✅ Test both variants
4. ✅ Test LGPD consent flow
5. ✅ Accessibility audit
6. ✅ Test analytics tracking
7. ✅ Fix bugs

**Deliverables**:
- Bug-free application
- QA report
- Ready for deployment

---

### Phase 8: Vercel Deployment (Day 10)

**Tasks**:
1. ✅ Configure Vercel project
2. ✅ Set up environment variables
3. ✅ Deploy to staging
4. ✅ Test on staging URL
5. ✅ Configure custom subdomain
6. ✅ Deploy to production
7. ✅ Verify analytics

**Deliverables**:
- Live at lp.witfy.com/br
- Both variants accessible
- Analytics working

---

## Vercel Deployment

### Configuration

**vercel.json**:
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/br",
      "destination": "/index.html"
    },
    {
      "source": "/br/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Environment Variables

```env
# .env.production
VITE_APP_ENV=production
VITE_API_URL=https://api.witfy.com
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_FB_PIXEL_ID=XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX
```

### Subdomain Setup

1. **In Vercel Dashboard**:
   - Go to Project Settings → Domains
   - Add domain: `lp.witfy.com`
   - Vercel will provide DNS records

2. **In Your DNS Provider**:
   ```
   Type: CNAME
   Name: lp
   Value: cname.vercel-dns.com
   ```

3. **Verify**: Access `lp.witfy.com/br`

---

## Analytics & Tracking

### Events to Track

#### Variant Assignment
```typescript
trackEvent('ab_test', 'variant_assigned', variant); // 'aida' or 'pas'
```

#### CTA Clicks
```typescript
trackEvent('cta_click', 'button_name', variant, {
  section: 'hero',
  button_text: 'Experimente a Witfy'
});
```

#### Scroll Depth
```typescript
trackEvent('engagement', 'scroll_depth', '75%', { variant });
```

#### Form Submissions
```typescript
trackEvent('conversion', 'form_submit', variant, {
  form_type: 'newsletter',
  email: hashedEmail
});
```

#### LGPD Consent
```typescript
trackEvent('lgpd', 'consent_given', consentType); // 'all', 'partial', 'none'
```

### Analytics Dashboard

Track these metrics in Google Analytics:

| Metric | AIDA | PAS | Winner |
|--------|------|-----|--------|
| Visitors | - | - | - |
| Bounce Rate | - | - | - |
| Avg. Time on Page | - | - | - |
| Scroll Depth (75%+) | - | - | - |
| CTA Clicks | - | - | - |
| Conversion Rate | - | - | - |

---

## Success Metrics

### Primary KPI: Conversion Rate
- **Target**: > 5% CTA click rate
- **Measurement**: (CTA clicks / unique visitors) × 100

### Secondary KPIs:

1. **Engagement**:
   - Time on page > 2 minutes
   - Scroll depth > 75%
   - Bounce rate < 40%

2. **A/B Test**:
   - Statistical significance (p < 0.05)
   - Minimum sample size: 1,000 visitors per variant
   - Clear winner (>20% difference)

3. **Technical**:
   - Lighthouse Performance > 95
   - First Contentful Paint < 1.8s
   - Largest Contentful Paint < 2.5s
   - Cumulative Layout Shift < 0.1

4. **LGPD Compliance**:
   - 100% visitors see consent banner
   - Consent preferences saved correctly
   - No tracking without consent

---

## Campaign Launch Checklist

Before running ads, verify:

- [ ] Both variants live and working
- [ ] LGPD consent banner functional
- [ ] Analytics tracking correctly
- [ ] All CTAs work and track
- [ ] Mobile responsive (all devices)
- [ ] Page speed optimized
- [ ] SEO meta tags correct
- [ ] OG images displaying
- [ ] Forms submitting correctly
- [ ] Privacy policy linked
- [ ] Terms of service linked
- [ ] Contact information correct
- [ ] Vercel domain configured
- [ ] SSL certificate valid
- [ ] No console errors
- [ ] All images loading

---

## Ad Campaign URLs Template

```
Google Ads:
lp.witfy.com/br?v=[aida|pas]&utm_source=google&utm_medium=cpc&utm_campaign=[campaign_name]&utm_content=[ad_group]&utm_term=[keyword]

Facebook Ads:
lp.witfy.com/br?v=[aida|pas]&utm_source=facebook&utm_medium=paid_social&utm_campaign=[campaign_name]&utm_content=[ad_set]

Instagram Ads:
lp.witfy.com/br?v=[aida|pas]&utm_source=instagram&utm_medium=paid_social&utm_campaign=[campaign_name]&utm_content=[ad_creative]

LinkedIn Ads:
lp.witfy.com/br?v=[aida|pas]&utm_source=linkedin&utm_medium=paid_social&utm_campaign=[campaign_name]
```

---

## Next Steps

**Immediate Actions**:

1. ✅ Review this build plan
2. ✅ Approve PAS variant content strategy
3. ✅ Provide any missing assets (images, logos)
4. ✅ Set up Vercel account (if not already)
5. ✅ Begin Phase 1: Project Setup

**Questions to Confirm**:

1. Do you have a Vercel account, or shall I include setup instructions?
2. Do you have Google Analytics / Facebook Pixel IDs ready?
3. Do you have the Witfy logo in SVG format?
4. Do you want a lead capture form, or just CTA buttons that link somewhere?
5. What should the primary CTA do? (Open chat, go to signup page, schedule demo?)

---

**Build Plan Created**: October 15, 2025  
**Status**: ✅ Ready to Build  
**Estimated Timeline**: 10 days  
**Next Action**: Initialize project with `npm create vite@latest`

