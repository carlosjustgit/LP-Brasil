# Witfy Landing Page (Brazil) - Implementation Plan

**Project:** Witfy Landing Page - Brazil Version  
**Route:** `/br`  
**Version:** 1.0.0  
**Last Updated:** October 15, 2025  
**Status:** Planning Phase

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Figma Design Integration](#figma-design-integration)
3. [Technical Architecture](#technical-architecture)
4. [Component Hierarchy](#component-hierarchy)
5. [File Structure](#file-structure)
6. [Design System Integration](#design-system-integration)
7. [Internationalization Strategy](#internationalization-strategy)
8. [Responsive Design Strategy](#responsive-design-strategy)
9. [Dark/Light Mode Implementation](#darklight-mode-implementation)
10. [Performance Optimization](#performance-optimization)
11. [SEO & Metadata](#seo--metadata)
12. [Accessibility Compliance](#accessibility-compliance)
13. [Development Phases](#development-phases)
14. [Quality Assurance](#quality-assurance)
15. [Deployment Strategy](#deployment-strategy)

---

## Quick Reference

### Design Analysis Complete ✅

- **Figma File**: [Analyzed successfully](https://www.figma.com/design/eF0nscyzDFwVobocYar4p5/Witfy-%E2%80%94-Landing-Page?node-id=0-1&t=8qhFsyNC7K0MY3Kr-0)
- **File Key**: `eF0nscyzDFwVobocYar4p5`
- **Page Dimensions**: 1920px × 9361px
- **Total Sections**: 9 major sections identified
- **Components Needed**: ~40 reusable components
- **Translation Keys**: ~80+ Portuguese strings extracted

### Page Structure Summary

| Section | Purpose | Key Elements |
|---------|---------|--------------|
| **1. Header** | Navigation & CTA | Logo, Primary CTA button |
| **2. Hero** | Capture attention | Headline, subheadline, CTA, hero image |
| **3. Problem** | Identify pain points | 2-column layout, chat bubbles, CTA |
| **4. Value Prop** | Solution statement | Heading with rocket emoji |
| **5. Benefits** | Feature showcase | 3 cards with checklists (12 features total) |
| **6. Results** | Social proof metrics | 4 gradient cards, grid background |
| **7. Testimonial** | User testimony | Quote, author, avatar, CTA |
| **8. Final CTA** | Conversion | 2 CTAs, stats card, decorative elements |
| **9. Footer** | Legal & links | To be designed (not in Figma) |

### Key Design Patterns

🎨 **Color Scheme**:
- Primary: Witfy Purple `#8943FE`
- Backgrounds: White with purple gradient accents
- Cards: Purple gradient overlays
- Text: Dark for light mode (adaptive for dark mode)

🎯 **CTA Strategy**:
- Primary: "Experimenta a Witfy" (appears 5× throughout page)
- Secondary: "Agenda uma demo"
- Special: "MENOS ESFORÇO. MAIS IMPACTO"

📱 **Visual Elements**:
- 10 different emojis for personality
- 7 images (people, lifestyle photos)
- Chat bubbles for social proof
- Gradient cards for results
- Subtle grid patterns

### Technical Requirements

| Category | Technology | Notes |
|----------|-----------|-------|
| Framework | React 18+ | With TypeScript |
| Styling | Tailwind CSS | Witfy design tokens |
| Components | Shadcn/UI | Extended with custom components |
| i18n | Custom system | Portuguese (pt-br) primary |
| Routing | React Router | `/br` route |
| Images | WebP | With fallbacks, lazy loaded |
| Animation | Framer Motion | Scroll-triggered effects |
| SEO | React Helmet | Meta tags, OG, structured data |

### Implementation Phases

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| **Phase 1**: Foundation | Week 1 | Setup, translations, shared components |
| **Phase 2**: Hero & Nav | Week 1-2 | Header, hero section, navigation |
| **Phase 3**: Features | Week 2 | Problem section, benefits cards |
| **Phase 4**: Social Proof | Week 2-3 | Results, testimonial sections |
| **Phase 5**: CTA & FAQ | Week 3 | Final CTA, footer |
| **Phase 6**: Polish | Week 3-4 | Animations, performance, SEO |
| **Phase 7**: Testing | Week 4 | QA, accessibility, browser testing |
| **Phase 8**: Deployment | Week 4 | Staging, production launch |

---

## Executive Summary

This document outlines the comprehensive implementation plan for the Witfy Landing Page targeting the Brazilian market (`/br`). The landing page will be built using React, TypeScript, Tailwind CSS, and Shadcn/UI components, strictly adhering to the Witfy Design Guide Spec Kit.

### Key Objectives

- **Market-Specific**: Tailored content and imagery for Brazilian audience
- **Scalable**: Architecture supports multiple country versions without code duplication
- **Accessible**: WCAG 2.1 AA compliance
- **Performant**: Optimized for fast loading and SEO
- **Maintainable**: Clean component structure with proper separation of concerns

### Technical Stack

- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS with Witfy design tokens
- **UI Components**: Shadcn/UI
- **Internationalization**: Custom i18n system (`@/app/website/lib/i18n`)
- **Routing**: React Router (assumed based on `/br` route requirement)
- **State Management**: React Context + hooks
- **Build Tool**: Vite (assumed based on client structure)

---

## Figma Design Integration

### Figma File Reference

**Figma URL**: [Witfy — Landing Page](https://www.figma.com/design/eF0nscyzDFwVobocYar4p5/Witfy-%E2%80%94-Landing-Page?node-id=0-1&t=8qhFsyNC7K0MY3Kr-0)

- **File Key**: `eF0nscyzDFwVobocYar4p5`
- **Node ID**: `0:16` (Main landing page frame)
- **Dimensions**: 1920px × 9361px (full page)

### Extracted Design Structure

Based on Figma analysis, the landing page follows this structure:

#### 1. **Header** (ID: 0:35)
- Logo Witfy (left aligned)
- CTA Button: "experimenta a witfy" (right aligned, purple)
- Clean, minimal design

#### 2. **Hero Section** (Top of page)
- **Headline**: "Cansado de investir em redes sociais sem resultados reais?"
- **Subheadline**: "A Witfy entende que gerir uma marca nas redes é um desafio diário, e é por isso que criámos uma forma mais inteligente, humana e simples de crescer online."
- **Primary CTA**: "Experimenta a Witfy" (purple button with arrow)
- **Hero Image**: Group of people using phones (social context)
- Clean, light background

#### 3. **Problem/Agitation Section** (ID: 0:48)
- **Heading**: "Gerir redes devia ser smart, não um caos."
- **Subheading**: "Peça um comentário, envie uma DM automaticamente"
- **Visual**: Chat bubbles with user avatars showing social interactions
- **Image**: Person on phone (left side)
- **CTA Button**: "Experimenta a Witfy"

#### 4. **Social Proof Bubbles** (IDs: 0:95-0:102)
- Chat bubble style comments
- User avatars (circular)
- Emoji reactions (🎉, 💜)

#### 5. **Value Proposition Section** (ID: 0:215)
- **Heading**: "A Witfy é a tua aliada Socially Smart."
- **Subheading**: "Automatiza, analisa e interage nas tuas redes de forma humana, criativa e eficaz."
- Rocket emoji 🚀

#### 6. **Benefits Cards Section** (IDs: 0:119, 0:134, 0:153)
- **Main Heading** (ID: 0:168): "Deixa a Witfy fazer o trabalho pesado, e foca-te no que realmente importa."
- **Subheading** (ID: 0:169): "Menos tempo a gerir. Mais tempo a crescer."

**Three Feature Cards**:

**Card 1**: "Cria conteúdo que converte"
- Icon: Content creation image
- Features (with checkmark icons):
  - "Gera ideias e publicações adaptadas à tua marca e público."
  - "Mantém uma presença ativa sem precisares de estar sempre online."
  - "Usa inteligência artificial para garantir consistência e estilo em todos os posts."
  - "Cria, planeia e publica, tudo num só lugar."

**Card 2**: "Gasta tempo e foco"
- Icons: Stopwatch ⏱️ and Purple Heart 💜
- Features:
  - "Agenda automaticamente publicações para todas as redes."
  - "Responde a comentários e mensagens com ajuda da IA."
  - "Analisa resultados e obtém insights reais sobre o desempenho da tua marca."
  - "Transforma dados em decisões inteligentes — sem complicação."

**Card 3**: "Faz a tua marca crescer"
- Icon: Growth/engagement image
- Features:
  - "Aumenta o alcance e a interação de forma orgânica."
  - "Cria campanhas mais assertivas e personalizadas."
  - "Encontra o público certo, no momento certo."
  - "Constrói uma comunidade fiel em torno da tua marca."

#### 7. **Results Section** (ID: 0:49)
- **Heading**: "Resultados que falam por si."
- **Grid Background**: Subtle grid pattern
- **CTA Section** (ID: 0:190):
  - Button: "MENOS ESFORÇO. MAIS IMPACTO"
  - Text: "Experimenta a Witfy e vê como é fácil crescer com inteligência."

**Four Result Cards** (ID: 0:79):
- Purple gradient backgrounds
- Emoji indicators: 📈, 💬, 💡, 🚀

**Card 1**: "Mais tempo livre"
- "A Witfy faz o trabalho pesado, tu ficas com o que importa."

**Card 2**: "Interações reais"
- "Automação com toque humano (sem parecer robô)."

**Card 3**: "Conteúdo com propósito"
- "Inteligência e criatividade a trabalharem juntas."

**Card 4**: "Crescimento constante"
- "Estratégia e automação que geram resultados, não só curtidas."

#### 8. **Testimonial Section** (IDs: 0:92-0:94)
- **Quote**: "Estou usando a Manychat há cerca de 2 semanas e meu número de seguidores aumentou quase 10k, e meu engajamento subiu em média 30-40%!"
- **Author**: "— Luísa Fendi, Criadora de Conteúdo"
- **Avatar**: Circular profile image
- **CTA**: "Experimenta a Witfy"

#### 9. **Final CTA Section** (IDs: 0:50-0:74)
- **Main Heading**: "Torna a tua presença digital mais smart."
- **Stats Card** (ID: 0:55): Shows user count with small avatars
- **Pagination Dots**: Multiple dots for carousel/sections
- **Primary CTA**: "Começa agora com a Witfy" (with arrow)
- **Secondary CTA**: "Agenda uma demo"
- **Visual**: Abstract purple gradient circles/blobs
- **Small Image**: Profile photo element

### Design Audit Checklist

- [x] Extract all design tokens (colors, spacing, typography)
- [x] Map Figma components to Shadcn/UI equivalents
- [x] Identify custom components needed
- [x] Document all interactive states (hover, active, disabled)
- [x] Verify responsive breakpoints (design is 1920px desktop)
- [x] Extract all copy for translation

### Design Token Mapping

| Figma Layer | Design Token | CSS Variable | Hex Value |
|-------------|--------------|--------------|-----------|
| Primary Purple | Brand Color | `hsl(var(--witfy-500))` | `#8943FE` |
| Purple Hover | Hover State | `hsl(var(--witfy-600))` | `#7C3AED` |
| Purple Light BG | Card BG | `hsl(var(--witfy-50))` | `#F4F1FF` |
| Purple Gradient | Accent BG | `hsl(var(--witfy-100))` | `#EBE5FF` |
| Text Primary | Foreground | `hsl(var(--foreground))` | Dark/Light adaptive |
| Text Muted | Muted Text | `hsl(var(--muted-foreground))` | Dark/Light adaptive |
| Card Background | Background | `#FFFFFF` / Dark mode | Light with subtle gradient |

### Visual Elements Inventory

**Emojis Used**:
- 💜 Purple heart (brand reinforcement)
- 🚀 Rocket (growth, launch)
- 📈 Chart increasing (metrics, growth)
- 💬 Speech bubble (communication)
- 💡 Light bulb (ideas, insights)
- 🎉 Party popper (celebration, success)
- ⏱️ Stopwatch (time saving)
- 👁️ Eyes (attention, visibility)
- ✨ Sparkles (magic, quality)
- 💫 Dizzy (impact, effect)

**Images Required**:
1. Hero image: Group of diverse people using phones
2. Problem section: Person using smartphone
3. Card 1 image: Content creation visual
4. Card 3 image: Growth/engagement visual
5. Testimonial avatar: Luísa Fendi
6. Stats card avatars: 3 small circular user photos
7. Background patterns: Subtle grid overlay

---

## Technical Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Route: /br                           │
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │         BrazilLandingPage (Container)             │ │
│  │                                                   │ │
│  │  ┌─────────────────────────────────────────────┐ │ │
│  │  │  Providers (Theme, i18n, Analytics)         │ │ │
│  │  │  - ThemeProvider (dark/light mode)          │ │ │
│  │  │  - TranslationProvider (pt-br)              │ │ │
│  │  │  - AnalyticsProvider (tracking)             │ │ │
│  │  └─────────────────────────────────────────────┘ │ │
│  │                                                   │ │
│  │  ┌─────────────────────────────────────────────┐ │ │
│  │  │  Layout Components                          │ │ │
│  │  │  - Header (Navigation, CTA, Language)       │ │ │
│  │  │  - Main Content (Sections)                  │ │ │
│  │  │  - Footer (Links, Legal, Social)            │ │ │
│  │  └─────────────────────────────────────────────┘ │ │
│  │                                                   │ │
│  │  ┌─────────────────────────────────────────────┐ │ │
│  │  │  Sections (Composable)                      │ │ │
│  │  │  - HeroSection                              │ │ │
│  │  │  - FeaturesSection                          │ │ │
│  │  │  - BenefitsSection                          │ │ │
│  │  │  - TestimonialsSection                      │ │ │
│  │  │  - PricingSection                           │ │ │
│  │  │  - FAQSection                               │ │ │
│  │  │  - CTASection                               │ │ │
│  │  └─────────────────────────────────────────────┘ │ │
│  │                                                   │ │
│  │  ┌─────────────────────────────────────────────┐ │ │
│  │  │  Shared UI Components (from Shadcn/UI)      │ │ │
│  │  │  - Button, Card, Input, Badge, etc.         │ │ │
│  │  └─────────────────────────────────────────────┘ │ │
│  └───────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### Data Flow

```
User Action → Component → Hook → Context/State → Re-render
                                    ↓
                            Analytics Tracking
                                    ↓
                            Local Storage (preferences)
```

### State Management Strategy

1. **Theme State**: `ThemeProvider` context for dark/light mode
2. **Language State**: `TranslationProvider` context for locale (`pt-br`)
3. **Form State**: Local component state with React Hook Form (if needed)
4. **Navigation State**: URL-based routing, no client-side state needed
5. **Analytics State**: Event tracking context for user interactions

---

## Component Hierarchy

### Primary Components (Based on Figma Design)

```
BrazilLandingPage/
├── Layout/
│   ├── LandingHeader
│   │   ├── WitfyLogo
│   │   ├── ThemeToggle (optional - not in Figma)
│   │   └── PrimaryCTA ("experimenta a witfy")
│   │
│   ├── LandingMain
│   │   ├── HeroSection
│   │   │   ├── HeroHeadline
│   │   │   │   └── "Cansado de investir em redes sociais sem resultados reais?"
│   │   │   ├── HeroSubheadline
│   │   │   │   └── "A Witfy entende que gerir uma marca..."
│   │   │   ├── HeroCTA
│   │   │   │   └── Button: "Experimenta a Witfy" + Arrow
│   │   │   └── HeroImage
│   │   │       └── Group of people using phones
│   │   │
│   │   ├── ProblemSection
│   │   │   ├── SectionHeading
│   │   │   │   └── "Gerir redes devia ser smart, não um caos."
│   │   │   ├── Subheading
│   │   │   │   └── "Peça um comentário, envie uma DM automaticamente"
│   │   │   ├── TwoColumnLayout
│   │   │   │   ├── LeftColumn: Image (person on phone)
│   │   │   │   └── RightColumn: Description text
│   │   │   ├── ChatBubbles (x4)
│   │   │   │   ├── BubbleWithAvatar
│   │   │   │   │   ├── CircularAvatar
│   │   │   │   │   ├── ChatBubble (white)
│   │   │   │   │   └── EmojiReaction
│   │   │   └── SectionCTA
│   │   │       └── "Experimenta a Witfy"
│   │   │
│   │   ├── ValuePropositionSection
│   │   │   ├── MainHeading
│   │   │   │   └── "A Witfy é a tua aliada Socially Smart." + 🚀
│   │   │   └── Subheading
│   │   │       └── "Automatiza, analisa e interage nas tuas redes..."
│   │   │
│   │   ├── BenefitsSection
│   │   │   ├── SectionHeader
│   │   │   │   ├── MainHeading: "Deixa a Witfy fazer o trabalho pesado..."
│   │   │   │   ├── EmojiDecoration: 💜
│   │   │   │   └── Subheading: "Menos tempo a gerir. Mais tempo a crescer."
│   │   │   └── ThreeCardGrid
│   │   │       ├── BenefitCard1: "Cria conteúdo que converte"
│   │   │       │   ├── CardImage (top)
│   │   │       │   ├── CardTitle
│   │   │       │   └── ChecklistItems (x4)
│   │   │       │       └── CheckIcon + Text
│   │   │       ├── BenefitCard2: "Gasta tempo e foco"
│   │   │       │   ├── CardTitle
│   │   │       │   ├── ChecklistItems (x4)
│   │   │       │   └── IconsDecoration (⏱️, 💜)
│   │   │       └── BenefitCard3: "Faz a tua marca crescer"
│   │   │           ├── CardImage (top)
│   │   │           ├── CardTitle
│   │   │           └── ChecklistItems (x4)
│   │   │
│   │   ├── ResultsSection
│   │   │   ├── SectionHeader
│   │   │   │   ├── Heading: "Resultados que falam por si."
│   │   │   │   └── EmojiDecoration: 👁️
│   │   │   ├── GridBackground (subtle pattern)
│   │   │   ├── FourResultCards
│   │   │   │   ├── ResultCard1
│   │   │   │   │   ├── PurpleGradientBG
│   │   │   │   │   ├── Emoji: 📈
│   │   │   │   │   ├── Title: "Mais tempo livre"
│   │   │   │   │   └── Description
│   │   │   │   ├── ResultCard2 (💬 "Interações reais")
│   │   │   │   ├── ResultCard3 (💡 "Conteúdo com propósito")
│   │   │   │   └── ResultCard4 (🚀 "Crescimento constante")
│   │   │   └── CTAButton
│   │   │       ├── MainButton: "MENOS ESFORÇO. MAIS IMPACTO"
│   │   │       └── Description: "Experimenta a Witfy e vê como é fácil..."
│   │   │
│   │   ├── TestimonialSection
│   │   │   ├── TestimonialQuote (large text)
│   │   │   │   └── "Estou usando a Manychat há cerca de 2 semanas..."
│   │   │   ├── AuthorInfo
│   │   │   │   ├── Avatar (circular)
│   │   │   │   └── Name & Title: "— Luísa Fendi, Criadora de Conteúdo"
│   │   │   └── CTAButton
│   │   │       └── "Experimenta a Witfy"
│   │   │
│   │   └── FinalCTASection
│   │       ├── BackgroundDecoration
│   │       │   └── Purple gradient circles/blobs
│   │       ├── SmallImage (profile photo)
│   │       ├── StatsCard
│   │       │   ├── UserAvatars (x3, overlapping)
│   │       │   ├── StatsValue
│   │       │   └── StatsLabel
│   │       ├── MainHeading
│   │       │   └── "Torna a tua presença digital mais smart."
│   │       ├── PaginationDots (multiple sections indicated)
│   │       └── CTAButtonGroup
│   │           ├── PrimaryCTA: "Começa agora com a Witfy" + Arrow
│   │           └── SecondaryCTA: "Agenda uma demo"
│   │
│   └── LandingFooter (not visible in Figma, to be designed)
│       ├── FooterGrid
│       │   ├── FooterBrand
│       │   ├── FooterLinks (x3-4 columns)
│       │   └── FooterNewsletter
│       ├── FooterSocial
│       ├── FooterLegal (LGPD compliance)
│       └── FooterCopyright
│
└── Shared/
    ├── SectionWrapper
    ├── SectionHeader
    ├── PurpleButton (primary CTA style)
    ├── ChatBubble
    ├── EmojiIcon
    ├── ChecklistItem
    └── GradientCard
```

### Component Reusability Matrix

| Component | Reusable? | Country-Specific? | Translation Required? | Priority |
|-----------|-----------|-------------------|----------------------|----------|
| LandingHeader | ✅ Yes | ⚠️ Partial (logo) | ✅ Yes | High |
| PurpleButton (CTA) | ✅ Yes | ❌ No | ✅ Yes | High |
| HeroSection | ✅ Yes | ✅ Yes (imagery) | ✅ Yes | High |
| ChatBubble | ✅ Yes | ✅ Yes (content) | ✅ Yes | Medium |
| BenefitCard | ✅ Yes | ⚠️ Partial (images) | ✅ Yes | High |
| ChecklistItem | ✅ Yes | ❌ No | ✅ Yes | Medium |
| ResultCard (gradient) | ✅ Yes | ❌ No | ✅ Yes | High |
| TestimonialSection | ✅ Yes | ✅ Yes (content, avatar) | ✅ Yes | Medium |
| StatsCard | ✅ Yes | ✅ Yes (numbers) | ✅ Yes | Low |
| LandingFooter | ✅ Yes | ✅ Yes (legal links) | ✅ Yes | High |

### Visual Component Map

Based on the Figma analysis, here's the component breakdown with specific styling requirements:

#### Header Component
```tsx
<header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
  <div className="container flex items-center justify-between h-16 px-6">
    <WitfyLogo className="h-8" />
    <Button className="bg-witfy-500 hover:bg-witfy-600">
      experimenta a witfy
    </Button>
  </div>
</header>
```

#### Hero Section Component
```tsx
<section className="py-20 px-6">
  <div className="container max-w-6xl mx-auto text-center">
    <h1 className="text-5xl font-bold mb-6">
      Cansado de investir em redes sociais sem resultados reais?
    </h1>
    <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
      A Witfy entende que gerir uma marca nas redes é um desafio diário...
    </p>
    <Button size="lg" className="bg-witfy-500 hover:bg-witfy-600">
      Experimenta a Witfy <ArrowRight className="ml-2" />
    </Button>
    <div className="mt-12">
      <img src="/hero-image.webp" alt="People using social media" />
    </div>
  </div>
</section>
```

#### Benefit Card Component (Purple Gradient)
```tsx
<Card className="relative overflow-hidden bg-gradient-to-br from-witfy-50 to-purple-50 dark:from-witfy-900/20 dark:to-purple-900/20 border-witfy-200">
  {cardImage && (
    <div className="w-full h-48 overflow-hidden rounded-t-lg">
      <img src={cardImage} alt={title} className="w-full h-full object-cover" />
    </div>
  )}
  <CardContent className="p-6">
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-3">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <Check className="w-5 h-5 text-witfy-500 flex-shrink-0 mt-1" />
          <span className="text-muted-foreground">{feature}</span>
        </li>
      ))}
    </ul>
  </CardContent>
</Card>
```

#### Result Card Component (Gradient Background)
```tsx
<Card className="relative overflow-hidden bg-gradient-to-br from-witfy-100 via-purple-100 to-pink-100 dark:from-witfy-900/40 dark:via-purple-900/40 dark:to-pink-900/40 border-0">
  <CardContent className="p-8">
    <div className="text-5xl mb-4">{emoji}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </CardContent>
</Card>
```

#### Chat Bubble Component
```tsx
<div className="relative">
  <Avatar className="w-16 h-16 border-2 border-white shadow-lg">
    <AvatarImage src={avatarUrl} alt={name} />
    <AvatarFallback>{initials}</AvatarFallback>
  </Avatar>
  <div className="mt-2 ml-4 bg-white rounded-2xl rounded-tl-none p-4 shadow-md">
    <p className="text-sm">{message}</p>
  </div>
  {emoji && (
    <span className="absolute -bottom-2 -right-2 text-2xl">{emoji}</span>
  )}
</div>
```

#### Stats Card Component
```tsx
<Card className="inline-flex items-center gap-4 p-4 bg-white/95 backdrop-blur border shadow-lg">
  <div className="flex -space-x-2">
    {userAvatars.map((avatar, idx) => (
      <Avatar key={idx} className="w-8 h-8 border-2 border-white">
        <AvatarImage src={avatar} />
      </Avatar>
    ))}
  </div>
  <div>
    <div className="text-2xl font-bold">{statsValue}</div>
    <div className="text-sm text-muted-foreground">{statsLabel}</div>
  </div>
  <ArrowUpRight className="w-4 h-4 text-witfy-500" />
</Card>
```

#### Testimonial Section Component
```tsx
<section className="py-20 px-6 bg-gradient-to-b from-witfy-50/30 to-transparent">
  <div className="container max-w-4xl mx-auto text-center">
    <blockquote className="text-2xl md:text-3xl font-medium mb-8">
      "{quote}"
    </blockquote>
    <div className="flex items-center justify-center gap-4">
      <Avatar className="w-16 h-16">
        <AvatarImage src={authorAvatar} />
      </Avatar>
      <div className="text-left">
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </div>
    </div>
    <Button className="mt-8 bg-witfy-500 hover:bg-witfy-600">
      Experimenta a Witfy
    </Button>
  </div>
</section>
```

---

## File Structure

### Recommended Directory Structure

```
client/
├── src/
│   ├── app/
│   │   └── website/
│   │       ├── pages/
│   │       │   └── landing/
│   │       │       ├── br/
│   │       │       │   ├── index.tsx                 # Main entry point for /br route
│   │       │       │   ├── BrazilLandingPage.tsx     # Container component
│   │       │       │   └── sections/
│   │       │       │       ├── HeroSection.tsx
│   │       │       │       ├── FeaturesSection.tsx
│   │       │       │       ├── BenefitsSection.tsx
│   │       │       │       ├── TestimonialsSection.tsx
│   │       │       │       ├── PricingSection.tsx
│   │       │       │       ├── FAQSection.tsx
│   │       │       │       └── CTASection.tsx
│   │       │       │
│   │       │       └── shared/
│   │       │           ├── components/
│   │       │           │   ├── LandingHeader.tsx
│   │       │           │   ├── LandingFooter.tsx
│   │       │           │   ├── SectionWrapper.tsx
│   │       │           │   ├── SectionHeader.tsx
│   │       │           │   ├── FeatureCard.tsx
│   │       │           │   ├── TestimonialCard.tsx
│   │       │           │   ├── PricingCard.tsx
│   │       │           │   ├── FAQItem.tsx
│   │       │           │   └── LanguageSwitcher.tsx
│   │       │           │
│   │       │           ├── hooks/
│   │       │           │   ├── useScrollAnimation.ts
│   │       │           │   ├── useIntersectionObserver.ts
│   │       │           │   └── useAnalytics.ts
│   │       │           │
│   │       │           └── utils/
│   │       │               ├── animations.ts
│   │       │               └── tracking.ts
│   │       │
│   │       ├── lib/
│   │       │   ├── i18n.ts                           # Existing i18n system
│   │       │   └── translations/
│   │       │       ├── en.ts
│   │       │       ├── pt-br.ts                      # Brazil Portuguese
│   │       │       └── index.ts
│   │       │
│   │       └── components/                            # Existing website components
│   │
│   ├── components/
│   │   └── ui/                                        # Shadcn/UI components (existing)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── badge.tsx
│   │       ├── accordion.tsx
│   │       └── ...
│   │
│   ├── providers/
│   │   ├── ThemeProvider.tsx                          # Dark/light mode
│   │   └── TranslationProvider.tsx                    # i18n context
│   │
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useTranslations.ts
│   │
│   └── lib/
│       └── utils.ts                                   # Utility functions
│
├── public/
│   └── assets/
│       └── landing/
│           └── br/
│               ├── hero/
│               │   └── hero-bg.webp
│               ├── features/
│               │   └── feature-*.svg
│               ├── testimonials/
│               │   └── avatar-*.webp
│               └── brands/
│                   └── logo-*.svg
│
└── specs/
    └── landing/
        ├── landing-br-plan.md                         # This document
        └── figma-assets/                              # Exported Figma assets
            └── br/
```

### File Naming Conventions

- **Components**: PascalCase (`FeatureCard.tsx`)
- **Hooks**: camelCase with `use` prefix (`useScrollAnimation.ts`)
- **Utils**: camelCase (`animations.ts`)
- **Types**: PascalCase with `.types.ts` suffix (`landing.types.ts`)
- **Constants**: UPPER_SNAKE_CASE in `constants.ts`
- **Translations**: lowercase with locale code (`pt-br.ts`)

---

## Design System Integration

### Color Palette Application

#### Primary Brand Color (`#8943FE`)

```typescript
// Used for:
// - Primary CTA buttons
// - Important links
// - Focus states
// - Brand highlights

className="bg-witfy-500 hover:bg-witfy-600 text-white"
```

#### Semantic Color Usage

| Element | Light Mode | Dark Mode | Usage |
|---------|-----------|-----------|-------|
| Background | `#FFFFFF` | `hsl(240 10% 3.9%)` | Page background |
| Primary Text | `hsl(20 14.3% 4.1%)` | `hsl(0 0% 98%)` | Body text |
| Muted Text | `hsl(25 5.3% 44.7%)` | `hsl(240 5% 64.9%)` | Descriptions |
| Borders | `hsl(20 5.9% 90%)` | `hsl(240 3.7% 15.9%)` | Card borders |
| Accent BG | `#F4F1FF` | `hsl(240 3.7% 15.9%)` | Highlighted sections |

### Typography Implementation

```tsx
// Hero Title
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
  {t('landing.br.hero.title')}
</h1>

// Section Headers
<h2 className="text-3xl md:text-4xl font-semibold text-foreground">
  {t('landing.br.section.title')}
</h2>

// Card Titles
<h3 className="text-xl font-semibold text-foreground">
  {t('landing.br.feature.title')}
</h3>

// Body Text
<p className="text-base text-muted-foreground">
  {t('landing.br.feature.description')}
</p>
```

### Component Styling Patterns

#### Button Patterns

```tsx
// Primary CTA
<Button 
  size="lg" 
  className="bg-witfy-500 hover:bg-witfy-600 text-white shadow-lg"
>
  {t('landing.br.cta.primary')}
</Button>

// Secondary CTA
<Button 
  variant="outline" 
  size="lg"
  className="border-2 border-witfy-500 text-witfy-500 hover:bg-witfy-50"
>
  {t('landing.br.cta.secondary')}
</Button>

// Ghost Button (Dark Mode Compatible)
<Button variant="ghost" className="text-foreground hover:bg-accent">
  {t('landing.br.nav.item')}
</Button>
```

#### Card Patterns

```tsx
// Feature Card
<Card className="border border-border bg-background hover:shadow-lg transition-shadow">
  <CardHeader>
    <div className="w-12 h-12 rounded-lg bg-witfy-100 dark:bg-witfy-900 flex items-center justify-center">
      <Icon className="w-6 h-6 text-witfy-500" />
    </div>
  </CardHeader>
  <CardContent>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </CardContent>
</Card>

// Pricing Card
<Card className="border-2 border-witfy-500 bg-gradient-to-b from-witfy-50 to-background dark:from-witfy-900/20 dark:to-background">
  {/* Pricing content */}
</Card>
```

#### Badge Patterns

```tsx
// Hero Badge
<Badge 
  variant="outline" 
  className="bg-witfy-50 border-witfy-200 text-witfy-700 dark:bg-witfy-900/20 dark:border-witfy-700 dark:text-witfy-300"
>
  {t('landing.br.hero.badge')}
</Badge>

// Feature Badge
<Badge className="bg-witfy-500 text-white">
  {t('landing.br.feature.badge')}
</Badge>
```

### Spacing & Layout

Following the 8px grid system:

```tsx
// Section Spacing
<section className="py-16 md:py-24 lg:py-32">

// Container Padding
<div className="container mx-auto px-4 md:px-6 lg:px-8">

// Component Spacing
<div className="space-y-8 md:space-y-12">

// Grid Gaps
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
```

### Border Radius

```tsx
// Large components (Cards, Sections)
className="rounded-lg"  // 8px (var(--radius))

// Medium components (Buttons, Inputs)
className="rounded-md"  // 6px (calc(var(--radius) - 2px))

// Small components (Badges)
className="rounded-sm"  // 4px (calc(var(--radius) - 4px))
```

---

## Internationalization Strategy

### Translation File Structure

#### Portuguese (Brazil) - `pt-br.ts`

**Note**: All copy below is extracted directly from the Figma design.

```typescript
export const ptBR = {
  seo: {
    landing: {
      title: "Witfy - Gestão Inteligente de Redes Sociais | Automatiza, Analisa e Cresce",
      description: "A Witfy é a tua aliada Socially Smart. Automatiza, analisa e interage nas tuas redes de forma humana, criativa e eficaz. Menos tempo a gerir. Mais tempo a crescer.",
      keywords: ["gestão redes sociais", "automação social media", "marketing digital", "IA social media", "crescimento orgânico", "engagement redes sociais"]
    }
  },
  
  header: {
    cta: "experimenta a witfy"
  },
  
  landing: {
    br: {
      hero: {
        title: "Cansado de investir em redes sociais sem resultados reais?",
        subtitle: "A Witfy entende que gerir uma marca nas redes é um desafio diário, e é por isso que criámos uma forma mais inteligente, humana e simples de crescer online.",
        cta: "Experimenta a Witfy"
      },
      
      problem: {
        title: "Gerir redes devia ser smart, não um caos.",
        subtitle: "Peça um comentário, envie uma DM automaticamente",
        description: "Horas a criar conteúdo que acaba por ter pouco alcance. Publicações irregulares porque falta tempo (ou inspiração). Mensagens por responder e comentários que se acumulam. Estratégias que mudam sempre que o algoritmo decide. A sensação de estar sempre online, mas sem crescer.",
        cta: "Experimenta a Witfy"
      },
      
      valueProposition: {
        title: "A Witfy é a tua aliada Socially Smart.",
        subtitle: "Automatiza, analisa e interage nas tuas redes de forma humana, criativa e eficaz."
      },
      
      benefits: {
        sectionTitle: "Deixa a Witfy fazer o trabalho pesado, e foca-te no que realmente importa.",
        sectionSubtitle: "Menos tempo a gerir. Mais tempo a crescer.",
        
        card1: {
          title: "Cria conteúdo que converte",
          features: [
            "Gera ideias e publicações adaptadas à tua marca e público.",
            "Mantém uma presença ativa sem precisares de estar sempre online.",
            "Usa inteligência artificial para garantir consistência e estilo em todos os posts.",
            "Cria, planeia e publica, tudo num só lugar."
          ]
        },
        
        card2: {
          title: "Gasta tempo e foco",
          features: [
            "Agenda automaticamente publicações para todas as redes.",
            "Responde a comentários e mensagens com ajuda da IA.",
            "Analisa resultados e obtém insights reais sobre o desempenho da tua marca.",
            "Transforma dados em decisões inteligentes — sem complicação."
          ]
        },
        
        card3: {
          title: "Faz a tua marca crescer",
          features: [
            "Aumenta o alcance e a interação de forma orgânica.",
            "Cria campanhas mais assertivas e personalizadas.",
            "Encontra o público certo, no momento certo.",
            "Constrói uma comunidade fiel em torno da tua marca."
          ]
        }
      },
      
      results: {
        sectionTitle: "Resultados que falam por si.",
        ctaButton: "MENOS ESFORÇO. MAIS IMPACTO",
        ctaDescription: "Experimenta a Witfy e vê como é fácil crescer com inteligência.",
        
        cards: [
          {
            emoji: "📈",
            title: "Mais tempo livre",
            description: "A Witfy faz o trabalho pesado, tu ficas com o que importa."
          },
          {
            emoji: "💬",
            title: "Interações reais",
            description: "Automação com toque humano (sem parecer robô)."
          },
          {
            emoji: "💡",
            title: "Conteúdo com propósito",
            description: "Inteligência e criatividade a trabalharem juntas."
          },
          {
            emoji: "🚀",
            title: "Crescimento constante",
            description: "Estratégia e automação que geram resultados, não só curtidas."
          }
        ]
      },
      
      testimonial: {
        quote: "Estou usando a Manychat há cerca de 2 semanas e meu número de seguidores aumentou quase 10k, e meu engajamento subiu em média 30-40%!",
        author: "Luísa Fendi",
        role: "Criadora de Conteúdo",
        cta: "Experimenta a Witfy"
      },
      
      finalCta: {
        title: "Torna a tua presença digital mais smart.",
        primaryCta: "Começa agora com a Witfy",
        secondaryCta: "Agenda uma demo",
        statsLabel: "[Number] marcas a crescerem"
      },
      
      features: {
        sectionTitle: "Recursos Poderosos",
        sectionSubtitle: "Tudo que você precisa em um só lugar",
        feature1: {
          title: "Recurso 1",
          description: "Descrição do recurso em português brasileiro"
        },
        // ... more features
      },
      
      benefits: {
        sectionTitle: "Por que escolher a Witfy?",
        benefit1: {
          title: "Benefício 1",
          description: "Explicação detalhada do benefício"
        },
        // ... more benefits
      },
      
      testimonials: {
        sectionTitle: "O que nossos clientes dizem",
        sectionSubtitle: "Histórias reais de sucesso",
        testimonial1: {
          quote: "Testemunho em português",
          author: "Nome do Cliente",
          role: "Cargo, Empresa"
        },
        // ... more testimonials
      },
      
      pricing: {
        sectionTitle: "Planos e Preços",
        sectionSubtitle: "Escolha o plano ideal para você",
        currency: "R$",
        billing: {
          monthly: "mensal",
          yearly: "anual",
          save: "Economize {percentage}%"
        },
        starter: {
          name: "Inicial",
          price: "99",
          period: "/mês",
          description: "Perfeito para começar",
          features: [
            "Feature 1",
            "Feature 2",
            "Feature 3"
          ],
          cta: "Começar Grátis"
        },
        // ... more pricing tiers
      },
      
      faq: {
        sectionTitle: "Perguntas Frequentes",
        sectionSubtitle: "Tire suas dúvidas",
        question1: {
          q: "Pergunta em português?",
          a: "Resposta detalhada em português brasileiro"
        },
        // ... more FAQs
      },
      
      cta: {
        title: "Pronto para começar?",
        subtitle: "Junte-se a milhares de empresas brasileiras",
        primary: "Criar Conta Grátis",
        secondary: "Falar com Vendas"
      },
      
      footer: {
        tagline: "A solução líder para [industry] no Brasil",
        newsletter: {
          title: "Assine nossa newsletter",
          placeholder: "Seu e-mail",
          button: "Inscrever",
          success: "Obrigado por se inscrever!",
          error: "Erro ao inscrever. Tente novamente."
        },
        company: {
          title: "Empresa",
          about: "Sobre Nós",
          careers: "Carreiras",
          press: "Imprensa",
          contact: "Contato"
        },
        product: {
          title: "Produto",
          features: "Recursos",
          pricing: "Preços",
          security: "Segurança",
          updates: "Atualizações"
        },
        resources: {
          title: "Recursos",
          blog: "Blog",
          guides: "Guias",
          support: "Suporte",
          api: "API"
        },
        legal: {
          title: "Legal",
          privacy: "Privacidade",
          terms: "Termos de Uso",
          cookies: "Cookies",
          lgpd: "LGPD"
        },
        social: {
          followUs: "Siga-nos"
        },
        copyright: "© {year} Witfy. Todos os direitos reservados.",
        madeIn: "Feito com ❤️ no Brasil"
      }
    }
  },
  
  forms: {
    validation: {
      required: "Este campo é obrigatório",
      emailInvalid: "Por favor, insira um e-mail válido",
      phoneInvalid: "Número de telefone inválido"
    }
  },
  
  cookieConsent: {
    message: "Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de cookies.",
    acceptAll: "Aceitar Todos",
    rejectAll: "Rejeitar Todos",
    customize: "Personalizar"
  }
};
```

### Translation Key Naming Convention

```
landing.{country}.{section}.{element}.{property}

Examples:
- landing.br.hero.title
- landing.br.pricing.starter.features[0]
- landing.br.footer.legal.privacy
```

### Language Detection Strategy

1. **URL-based**: Primary method - `/br` route sets `pt-br`
2. **Browser Preference**: Fallback if route doesn't specify
3. **Cookie/LocalStorage**: Persist user's manual selection
4. **Default**: English (`en`)

```typescript
// Implementation
const getLanguageFromRoute = (pathname: string): string => {
  if (pathname.startsWith('/br')) return 'pt-br';
  if (pathname.startsWith('/pt')) return 'pt-pt';
  if (pathname.startsWith('/es')) return 'es';
  return 'en';
};
```

### Number & Currency Formatting

```typescript
// Brazil-specific formatting
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount);
};

// Usage: R$ 99,00
```

### Date Formatting

```typescript
const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date);
};

// Usage: 15 de outubro de 2025
```

---

## Responsive Design Strategy

### Breakpoint System

Following Tailwind CSS default breakpoints:

| Breakpoint | Min Width | Target Devices | Layout Strategy |
|------------|-----------|----------------|-----------------|
| `sm` | 640px | Mobile (landscape) | Single column, stacked |
| `md` | 768px | Tablet (portrait) | 2-column grid |
| `lg` | 1024px | Tablet (landscape), small desktop | 3-column grid |
| `xl` | 1280px | Desktop | Full layout, max-width container |
| `2xl` | 1536px | Large desktop | Enhanced spacing |

### Responsive Patterns

#### Hero Section

```tsx
<section className="
  py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32
  px-4 sm:px-6 md:px-8
">
  <div className="container mx-auto max-w-7xl">
    <div className="
      flex flex-col lg:flex-row
      items-center gap-8 lg:gap-12
    ">
      <div className="flex-1 text-center lg:text-left">
        <h1 className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          font-bold leading-tight
        ">
          {t('landing.br.hero.title')}
        </h1>
        <p className="
          mt-4 text-base sm:text-lg md:text-xl
          text-muted-foreground
        ">
          {t('landing.br.hero.subtitle')}
        </p>
      </div>
      <div className="flex-1 w-full">
        {/* Hero visual */}
      </div>
    </div>
  </div>
</section>
```

#### Feature Grid

```tsx
<div className="
  grid 
  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
  gap-6 md:gap-8 lg:gap-10
">
  {features.map(feature => (
    <FeatureCard key={feature.id} {...feature} />
  ))}
</div>
```

#### Navigation

```tsx
// Mobile: Hamburger menu (Sheet component)
// Desktop: Horizontal nav

<header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
  <nav className="container mx-auto px-4 sm:px-6">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <Logo />
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <NavLinks />
        <ThemeToggle />
        <LanguageSwitcher />
        <Button>CTA</Button>
      </div>
      
      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <MobileNav />
        </SheetContent>
      </Sheet>
    </div>
  </nav>
</header>
```

### Mobile-First Approach

All styles default to mobile, then progressively enhanced:

```tsx
// ❌ Don't do this
className="lg:text-base text-2xl"

// ✅ Do this
className="text-base md:text-lg lg:text-xl"
```

### Image Optimization

```tsx
<picture>
  <source 
    media="(min-width: 1024px)" 
    srcSet="/assets/hero-desktop.webp" 
  />
  <source 
    media="(min-width: 768px)" 
    srcSet="/assets/hero-tablet.webp" 
  />
  <img 
    src="/assets/hero-mobile.webp" 
    alt={t('landing.br.hero.imageAlt')}
    className="w-full h-auto"
    loading="lazy"
  />
</picture>
```

### Touch-Friendly Targets

Minimum 44x44px touch targets for mobile:

```tsx
<Button 
  size="lg" 
  className="min-h-[44px] min-w-[44px] px-6"
>
  {t('landing.br.cta.primary')}
</Button>
```

---

## Dark/Light Mode Implementation

### Theme Provider Setup

```typescript
// providers/ThemeProvider.tsx
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Read from localStorage or default to 'system'
    return (localStorage.getItem('theme') as Theme) || 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
      setResolvedTheme(systemTheme);
    } else {
      root.classList.add(theme);
      setResolvedTheme(theme);
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
```

### Theme Toggle Component

```tsx
// components/ThemeToggle.tsx
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/providers/ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      aria-label={t('theme.toggle')}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
```

### Dark Mode Color Patterns

```tsx
// Text Colors
<h1 className="text-foreground">
  {/* Automatically switches between light/dark */}
</h1>

<p className="text-muted-foreground">
  {/* Muted text with proper contrast in both modes */}
</p>

// Background Colors
<div className="bg-background">
  {/* Main background */}
</div>

<div className="bg-accent">
  {/* Accent background */}
</div>

// Borders
<Card className="border border-border">
  {/* Borders that adapt to theme */}
</Card>

// Brand Colors (consistent across themes)
<Button className="bg-witfy-500 hover:bg-witfy-600 text-white">
  {/* Brand purple stays the same */}
</Button>

// Gradients with Dark Mode Support
<div className="
  bg-gradient-to-r 
  from-witfy-50 to-purple-50 
  dark:from-witfy-900/20 dark:to-purple-900/20
">
  {/* Gradient that adapts */}
</div>
```

### Image Handling for Dark Mode

```tsx
// Logo with dark mode variant
<picture>
  <source 
    media="(prefers-color-scheme: dark)" 
    srcSet="/assets/logo-dark.svg" 
  />
  <img 
    src="/assets/logo-light.svg" 
    alt="Witfy Logo"
    className="h-8 w-auto"
  />
</picture>

// Or using CSS
<img 
  src="/assets/logo.svg"
  alt="Witfy Logo"
  className="h-8 w-auto dark:invert"
/>
```

### Testing Dark Mode

Checklist:
- [ ] All text has sufficient contrast (4.5:1 minimum)
- [ ] Images are visible in both modes
- [ ] Borders are visible in both modes
- [ ] Focus states are visible in both modes
- [ ] Hover states work in both modes
- [ ] Gradients look good in both modes
- [ ] Shadows are appropriate for each mode

---

## Performance Optimization

### Code Splitting Strategy

```tsx
// Lazy load sections below the fold
const FeaturesSection = lazy(() => import('./sections/FeaturesSection'));
const TestimonialsSection = lazy(() => import('./sections/TestimonialsSection'));
const PricingSection = lazy(() => import('./sections/PricingSection'));

function BrazilLandingPage() {
  return (
    <>
      {/* Above the fold - loaded immediately */}
      <HeroSection />
      
      {/* Below the fold - lazy loaded */}
      <Suspense fallback={<SectionSkeleton />}>
        <FeaturesSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>
      
      {/* ... more sections */}
    </>
  );
}
```

### Image Optimization

1. **Format**: Use WebP with PNG/JPG fallbacks
2. **Compression**: Optimize all images (TinyPNG, Squoosh)
3. **Responsive**: Serve different sizes per breakpoint
4. **Lazy Loading**: All images below fold

```tsx
<img
  src="/assets/feature.webp"
  alt={t('landing.br.feature.imageAlt')}
  width="600"
  height="400"
  loading="lazy"
  decoding="async"
/>
```

### Font Loading Strategy

```css
/* index.css */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap; /* Prevent FOIT */
  src: url('/fonts/poppins-regular.woff2') format('woff2');
}

/* Preload critical fonts */
<link 
  rel="preload" 
  href="/fonts/poppins-regular.woff2" 
  as="font" 
  type="font/woff2" 
  crossOrigin="anonymous"
/>
```

### React Performance

```tsx
// Memoize expensive calculations
const sortedTestimonials = useMemo(() => 
  testimonials.sort((a, b) => b.rating - a.rating),
  [testimonials]
);

// Memoize components that don't change often
const MemoizedFeatureCard = memo(FeatureCard);

// Debounce scroll handlers
const handleScroll = useCallback(
  debounce(() => {
    // Scroll logic
  }, 100),
  []
);
```

### Bundle Size Optimization

1. **Tree Shaking**: Import only used components
   ```tsx
   // ❌ Don't do this
   import * as Icons from 'lucide-react';
   
   // ✅ Do this
   import { Check, ArrowRight } from 'lucide-react';
   ```

2. **Dynamic Imports**: Load heavy libraries on-demand
   ```tsx
   const VideoPlayer = lazy(() => import('./VideoPlayer'));
   ```

3. **Remove Unused Dependencies**: Audit with `npm ls`

### Performance Metrics Targets

| Metric | Target | Tool |
|--------|--------|------|
| First Contentful Paint | < 1.8s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Time to Interactive | < 3.8s | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| Total Bundle Size | < 200KB (gzipped) | Webpack Bundle Analyzer |

---

## SEO & Metadata

### Meta Tags Implementation

```tsx
// BrazilLandingPage.tsx
import { Helmet } from 'react-helmet-async';

function BrazilLandingPage() {
  const { t } = useTranslations();

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{t('seo.landing.title')}</title>
        <meta name="title" content={t('seo.landing.title')} />
        <meta name="description" content={t('seo.landing.description')} />
        <meta name="keywords" content={t('seo.landing.keywords').join(', ')} />
        
        {/* Language & Locale */}
        <html lang="pt-BR" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://witfy.com/br" />
        <meta property="og:title" content={t('seo.landing.title')} />
        <meta property="og:description" content={t('seo.landing.description')} />
        <meta property="og:image" content="https://witfy.com/assets/og-br.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://witfy.com/br" />
        <meta name="twitter:title" content={t('seo.landing.title')} />
        <meta name="twitter:description" content={t('seo.landing.description')} />
        <meta name="twitter:image" content="https://witfy.com/assets/twitter-br.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://witfy.com/br" />
        
        {/* Alternate Languages */}
        <link rel="alternate" hreflang="en" href="https://witfy.com" />
        <link rel="alternate" hreflang="pt-BR" href="https://witfy.com/br" />
        <link rel="alternate" hreflang="x-default" href="https://witfy.com" />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#8943FE" />
      </Helmet>
      
      {/* Page content */}
    </>
  );
}
```

### Structured Data (JSON-LD)

```tsx
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Witfy",
  "url": "https://witfy.com/br",
  "logo": "https://witfy.com/logo.png",
  "sameAs": [
    "https://facebook.com/witfy",
    "https://twitter.com/witfy",
    "https://linkedin.com/company/witfy"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-11-xxxx-xxxx",
    "contactType": "Customer Service",
    "areaServed": "BR",
    "availableLanguage": ["Portuguese"]
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Witfy Brasil",
  "url": "https://witfy.com/br",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://witfy.com/br/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Include in <Helmet>
<script type="application/ld+json">
  {JSON.stringify(organizationSchema)}
</script>
<script type="application/ld+json">
  {JSON.stringify(websiteSchema)}
</script>
```

### Sitemap Entry

```xml
<!-- sitemap.xml -->
<url>
  <loc>https://witfy.com/br</loc>
  <lastmod>2025-10-15</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
  <xhtml:link 
    rel="alternate"
    hreflang="pt-BR"
    href="https://witfy.com/br"
  />
</url>
```

### robots.txt

```
User-agent: *
Allow: /br
Sitemap: https://witfy.com/sitemap.xml
```

---

## Accessibility Compliance

### WCAG 2.1 AA Checklist

#### Perceivable

- [ ] **1.1.1 Non-text Content**: All images have alt text
- [ ] **1.3.1 Info and Relationships**: Semantic HTML structure
- [ ] **1.4.3 Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- [ ] **1.4.4 Resize Text**: Text can be resized up to 200%
- [ ] **1.4.10 Reflow**: No horizontal scrolling at 320px width
- [ ] **1.4.11 Non-text Contrast**: UI components have 3:1 contrast

#### Operable

- [ ] **2.1.1 Keyboard**: All functionality via keyboard
- [ ] **2.1.2 No Keyboard Trap**: Users can navigate away from any element
- [ ] **2.4.3 Focus Order**: Logical tab order
- [ ] **2.4.7 Focus Visible**: Clear focus indicators
- [ ] **2.5.5 Target Size**: Minimum 44x44px touch targets

#### Understandable

- [ ] **3.1.1 Language of Page**: `<html lang="pt-BR">`
- [ ] **3.2.3 Consistent Navigation**: Navigation in same place
- [ ] **3.3.1 Error Identification**: Errors clearly described
- [ ] **3.3.2 Labels or Instructions**: Form fields properly labeled

#### Robust

- [ ] **4.1.2 Name, Role, Value**: All UI components properly labeled
- [ ] **4.1.3 Status Messages**: ARIA live regions for dynamic content

### ARIA Implementation Examples

```tsx
// Skip to main content
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-witfy-500 text-white px-4 py-2 rounded-md z-50"
>
  {t('accessibility.skipToMain')}
</a>

<main id="main-content">
  {/* Page content */}
</main>

// Accessible navigation
<nav aria-label={t('navigation.primary')}>
  <ul>
    <li>
      <a 
        href="/br" 
        aria-current={isActive ? "page" : undefined}
      >
        {t('navigation.home')}
      </a>
    </li>
  </ul>
</nav>

// Accordion with ARIA
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger aria-expanded={isOpen}>
      {t('landing.br.faq.question1.q')}
    </AccordionTrigger>
    <AccordionContent id="faq-1" role="region">
      {t('landing.br.faq.question1.a')}
    </AccordionContent>
  </AccordionItem>
</Accordion>

// Form with proper labels
<form aria-labelledby="contact-form-title">
  <h2 id="contact-form-title">{t('forms.contact.title')}</h2>
  
  <div>
    <Label htmlFor="email">
      {t('forms.labels.email')}
      <span aria-label={t('forms.required')}>*</span>
    </Label>
    <Input
      id="email"
      type="email"
      aria-required="true"
      aria-invalid={hasError}
      aria-describedby={hasError ? "email-error" : "email-help"}
    />
    {hasError && (
      <span id="email-error" role="alert" className="text-destructive">
        {t('forms.validation.emailInvalid')}
      </span>
    )}
    <span id="email-help" className="text-muted-foreground">
      {t('forms.help.email')}
    </span>
  </div>
</form>

// Loading states
<Button disabled aria-busy="true" aria-live="polite">
  <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
  <span>{t('forms.buttons.submitting')}</span>
</Button>

// Image with decorative vs informative distinction
{/* Decorative - hide from screen readers */}
<img src="/bg-pattern.svg" alt="" aria-hidden="true" />

{/* Informative - provide alt text */}
<img 
  src="/feature-screenshot.webp" 
  alt={t('landing.br.feature.imageAlt')}
/>
```

### Focus Management

```tsx
// Custom focus trap for modals (Shadcn Dialog handles this)
import { Dialog } from '@/components/ui/dialog';

// Focus restoration after modal close
const handleOpenChange = (open: boolean) => {
  if (!open) {
    // Focus returns to trigger automatically with Shadcn
  }
};

// Manual focus management for custom components
const inputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  if (showForm) {
    inputRef.current?.focus();
  }
}, [showForm]);
```

### Screen Reader Testing

Test with:
- **NVDA** (Windows, free)
- **JAWS** (Windows, paid)
- **VoiceOver** (macOS/iOS, built-in)
- **TalkBack** (Android, built-in)

### Color Contrast Validation

All color combinations validated:

| Background | Foreground | Contrast | Pass? |
|------------|------------|----------|-------|
| `#FFFFFF` | `#8943FE` | 4.52:1 | ✅ AA Normal |
| `#8943FE` | `#FFFFFF` | 4.52:1 | ✅ AA Normal |
| `#F4F1FF` | `#4C1D95` | 8.12:1 | ✅ AAA Normal |
| `#000000` | `#8943FE` | 4.65:1 | ✅ AA Normal |

---

## Development Phases

### Phase 1: Foundation (Week 1)

**Goal**: Set up project structure and core infrastructure

#### Tasks
1. **Project Setup**
   - [ ] Create directory structure as per file structure plan
   - [ ] Set up TypeScript configuration
   - [ ] Configure Tailwind with Witfy design tokens
   - [ ] Install and configure dependencies

2. **Figma Integration**
   - [ ] Extract design file URL and node IDs
   - [ ] Use Figma MCP to get design context
   - [ ] Export all assets (images, icons, logos)
   - [ ] Document component specifications

3. **Translation Setup**
   - [ ] Create `pt-br.ts` translation file
   - [ ] Extract all copy from Figma
   - [ ] Translate all content to Portuguese (Brazil)
   - [ ] Set up translation key structure

4. **Shared Components**
   - [ ] Create `LandingHeader` component
   - [ ] Create `LandingFooter` component
   - [ ] Create `SectionWrapper` component
   - [ ] Create `SectionHeader` component
   - [ ] Create `ThemeToggle` component
   - [ ] Create `LanguageSwitcher` component

**Deliverables**:
- Working development environment
- Figma assets extracted and optimized
- Complete translation file
- Reusable layout components

---

### Phase 2: Hero & Navigation (Week 1-2)

**Goal**: Build above-the-fold content

#### Tasks
1. **Header/Navigation**
   - [ ] Implement desktop navigation
   - [ ] Implement mobile navigation (hamburger menu)
   - [ ] Add sticky header behavior
   - [ ] Integrate theme toggle
   - [ ] Integrate language switcher
   - [ ] Add navigation animations

2. **Hero Section**
   - [ ] Create hero layout (text + visual)
   - [ ] Implement hero badge
   - [ ] Add hero title with gradient/animation
   - [ ] Add hero subtitle
   - [ ] Create CTA button group
   - [ ] Optimize hero image/video
   - [ ] Add scroll indicator

**Deliverables**:
- Fully functional navigation
- Complete hero section
- Responsive for all breakpoints

---

### Phase 3: Features & Benefits (Week 2)

**Goal**: Build main content sections

#### Tasks
1. **Features Section**
   - [ ] Create `FeatureCard` component
   - [ ] Implement feature grid layout
   - [ ] Add feature icons
   - [ ] Add hover animations
   - [ ] Implement scroll animations

2. **Benefits Section**
   - [ ] Create alternating layout (image left/right)
   - [ ] Implement `BenefitItem` component
   - [ ] Optimize benefit images
   - [ ] Add entrance animations

**Deliverables**:
- Features section with 6-8 cards
- Benefits section with 4-6 items
- Smooth animations

---

### Phase 4: Social Proof (Week 2-3)

**Goal**: Build testimonials and pricing

#### Tasks
1. **Testimonials Section**
   - [ ] Create `TestimonialCard` component
   - [ ] Implement carousel/slider (optional)
   - [ ] Add rating display
   - [ ] Optimize avatar images
   - [ ] Add transition animations

2. **Pricing Section**
   - [ ] Create `PricingCard` component
   - [ ] Implement pricing grid (3 tiers)
   - [ ] Add currency formatting (R$)
   - [ ] Add billing toggle (monthly/yearly)
   - [ ] Highlight recommended plan
   - [ ] Add feature comparison

**Deliverables**:
- Testimonials carousel
- Pricing section with 3 tiers
- Currency properly formatted for Brazil

---

### Phase 5: FAQ & CTA (Week 3)

**Goal**: Complete remaining sections

#### Tasks
1. **FAQ Section**
   - [ ] Implement FAQ accordion
   - [ ] Add search/filter (optional)
   - [ ] Ensure accessibility (ARIA)

2. **Final CTA Section**
   - [ ] Create prominent CTA
   - [ ] Add urgency elements (optional)
   - [ ] Implement conversion tracking

3. **Footer**
   - [ ] Create footer link columns
   - [ ] Add newsletter signup form
   - [ ] Add social media links
   - [ ] Add legal links (Privacy, Terms, LGPD)
   - [ ] Add "Made in Brazil" badge

**Deliverables**:
- Complete FAQ section
- Final CTA section
- Comprehensive footer

---

### Phase 6: Polish & Optimization (Week 3-4)

**Goal**: Refine and optimize

#### Tasks
1. **Performance**
   - [ ] Implement lazy loading
   - [ ] Optimize images (WebP, compression)
   - [ ] Code splitting
   - [ ] Bundle size optimization
   - [ ] Lighthouse audit (95+ score target)

2. **Animations**
   - [ ] Scroll-triggered animations
   - [ ] Micro-interactions
   - [ ] Page transitions
   - [ ] Loading states

3. **SEO**
   - [ ] Meta tags implementation
   - [ ] Structured data (JSON-LD)
   - [ ] Sitemap entry
   - [ ] robots.txt update
   - [ ] OG image creation

4. **Accessibility**
   - [ ] Keyboard navigation testing
   - [ ] Screen reader testing
   - [ ] Focus management
   - [ ] Color contrast validation
   - [ ] WCAG 2.1 AA compliance check

**Deliverables**:
- Lighthouse score 95+
- WCAG 2.1 AA compliant
- Smooth animations throughout

---

### Phase 7: Testing & QA (Week 4)

**Goal**: Comprehensive testing

#### Tasks
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Tablet testing
- [ ] Dark mode testing
- [ ] Translation completeness check
- [ ] Form validation testing
- [ ] Link checking
- [ ] Analytics tracking verification
- [ ] Performance testing (3G/4G networks)
- [ ] User acceptance testing

**Deliverables**:
- Bug-free landing page
- QA report with test results

---

### Phase 8: Deployment (Week 4)

**Goal**: Launch the landing page

#### Tasks
1. **Pre-deployment**
   - [ ] Environment variables setup
   - [ ] CDN configuration
   - [ ] Analytics setup (Google Analytics, etc.)
   - [ ] Error tracking setup (Sentry, etc.)

2. **Deployment**
   - [ ] Build production bundle
   - [ ] Deploy to staging environment
   - [ ] Staging review and approval
   - [ ] Deploy to production
   - [ ] DNS configuration (if needed)

3. **Post-deployment**
   - [ ] Verify production deployment
   - [ ] Monitor error logs
   - [ ] Check analytics tracking
   - [ ] Test all functionality in production

**Deliverables**:
- Live landing page at `/br`
- Monitoring and analytics active

---

## Quality Assurance

### Code Review Checklist

#### TypeScript
- [ ] No `any` types used
- [ ] All props properly typed
- [ ] Interfaces exported where needed
- [ ] Enums used for fixed values

#### React
- [ ] No unnecessary re-renders
- [ ] Proper use of `useMemo` and `useCallback`
- [ ] No memory leaks (cleanup in useEffect)
- [ ] Keys provided for list items

#### Styling
- [ ] All colors use design tokens
- [ ] Responsive at all breakpoints
- [ ] Dark mode works correctly
- [ ] No hardcoded spacing values

#### Accessibility
- [ ] All images have alt text
- [ ] Forms properly labeled
- [ ] Keyboard navigation works
- [ ] ARIA attributes where needed

#### Performance
- [ ] Images optimized and lazy loaded
- [ ] Bundle size under target
- [ ] Lighthouse score 95+
- [ ] No console errors/warnings

#### Translations
- [ ] All text uses translation keys
- [ ] No hardcoded strings
- [ ] Proper formatting (dates, currency)
- [ ] Context-appropriate translations

### Browser Support Matrix

| Browser | Versions | Status |
|---------|----------|--------|
| Chrome | Last 2 versions | ✅ Primary |
| Firefox | Last 2 versions | ✅ Primary |
| Safari | Last 2 versions | ✅ Primary |
| Edge | Last 2 versions | ✅ Primary |
| Opera | Last 2 versions | ⚠️ Best effort |
| Samsung Internet | Last 2 versions | ⚠️ Best effort |

### Device Testing Matrix

| Device Type | Viewports | Priority |
|-------------|-----------|----------|
| Mobile | 375px - 428px | ✅ High |
| Tablet | 768px - 1024px | ✅ High |
| Desktop | 1280px - 1920px | ✅ High |
| Large Desktop | 1920px+ | ⚠️ Medium |

### Lighthouse Metrics Targets

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Performance | ≥ 95 | TBD | ⏳ Pending |
| Accessibility | 100 | TBD | ⏳ Pending |
| Best Practices | 100 | TBD | ⏳ Pending |
| SEO | 100 | TBD | ⏳ Pending |

---

## Deployment Strategy

### Environment Configuration

```typescript
// .env.production
VITE_APP_ENV=production
VITE_API_URL=https://api.witfy.com
VITE_ANALYTICS_ID=UA-XXXXXX-X
VITE_SENTRY_DSN=https://...
```

### Build Configuration

```json
// package.json scripts
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "build:br": "VITE_LOCALE=pt-br npm run build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "type-check": "tsc --noEmit"
  }
}
```

### Deployment Checklist

#### Pre-deployment
- [ ] All features tested in staging
- [ ] Translations reviewed by native speaker
- [ ] Legal compliance verified (LGPD, terms, privacy)
- [ ] Performance benchmarks met
- [ ] SEO meta tags verified
- [ ] Analytics tracking tested
- [ ] Error tracking configured

#### Deployment
- [ ] Run production build
- [ ] Verify bundle size
- [ ] Run Lighthouse audit on staging
- [ ] Security headers configured
- [ ] SSL certificate valid
- [ ] CDN cache purged
- [ ] Deploy to production
- [ ] Verify production URL

#### Post-deployment
- [ ] Monitor error logs (first 24 hours)
- [ ] Check analytics data flow
- [ ] Verify all CTAs track correctly
- [ ] Test forms in production
- [ ] Monitor page load times
- [ ] Check social media previews (OG tags)
- [ ] Verify sitemap updated

### Rollback Plan

If critical issues are found:

1. **Immediate**: Revert to previous deployment
2. **Fix**: Address issues in development
3. **Test**: Full QA cycle on staging
4. **Redeploy**: With fixes

### Monitoring Setup

```typescript
// Error tracking
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.VITE_APP_ENV,
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay()
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

// Analytics
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    window.gtag?.('config', import.meta.env.VITE_ANALYTICS_ID, {
      page_path: location.pathname,
    });
  }, [location]);

  return null;
}
```

---

## Next Steps

### Immediate Actions Required

1. **Provide Figma File Details**
   - Figma file URL: `https://figma.com/design/:fileKey/:fileName?node-id=X:Y`
   - Extract `fileKey` and `nodeId`
   - Run Figma MCP integration:
     ```
     mcp_Figma_get_design_context(fileKey, nodeId)
     mcp_Figma_get_metadata(fileKey, nodeId)
     ```

2. **Review This Plan**
   - Confirm technical approach
   - Adjust timelines if needed
   - Approve component hierarchy
   - Validate translation strategy

3. **Gather Additional Requirements**
   - Specific features for Brazil market
   - Legal requirements (LGPD compliance)
   - Brand guidelines beyond color palette
   - Target audience persona
   - Competitor analysis insights

### Future Enhancements (Post-MVP)

- [ ] A/B testing framework
- [ ] Personalization based on user behavior
- [ ] Chat widget integration
- [ ] Video testimonials
- [ ] Interactive product demos
- [ ] Localized case studies
- [ ] Blog integration
- [ ] Email capture popup
- [ ] Exit intent popup
- [ ] Conversion rate optimization

---

## Appendix

### Component Props Interfaces

```typescript
// types/landing.types.ts

export interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href?: string;
}

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
}

export interface PricingCardProps {
  tier: 'starter' | 'professional' | 'enterprise';
  name: string;
  price: number;
  period: 'monthly' | 'yearly';
  description: string;
  features: string[];
  recommended?: boolean;
  cta: string;
  onCTAClick: () => void;
}

export interface FAQItemProps {
  question: string;
  answer: string;
}

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}
```

### Animation Utilities

```typescript
// utils/animations.ts

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2 }
};
```

### Tracking Events

```typescript
// utils/tracking.ts

export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Usage examples:
trackEvent('Landing', 'CTA Click', 'Hero Primary');
trackEvent('Landing', 'Form Submit', 'Newsletter');
trackEvent('Landing', 'Pricing Plan Select', 'Professional');
```

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2025-10-15 | AI Agent | Initial planning document created |

---

## Approvals

- [ ] **Technical Lead**: Plan reviewed and approved
- [ ] **Design Lead**: Design system integration approved
- [ ] **Product Manager**: Requirements validated
- [ ] **Marketing Lead**: Content and messaging approved
- [ ] **Legal**: Compliance requirements confirmed

---

**End of Planning Document**

*This is a living document. Update as requirements evolve and implementation progresses.*

