import { Helmet } from 'react-helmet-async'
import { getTranslations } from '@/lib/i18n'
import LandingHeader from '../shared/components/LandingHeader'
import HeroSection from '../sections/aida/HeroSection'
import ProblemSection from '../sections/aida/ProblemSection'
import ValuePropositionSection from '../sections/aida/ValuePropositionSection'
import BenefitsSection from '../sections/aida/BenefitsSection'
import ResultsSection from '../sections/aida/ResultsSection'
import TestimonialSection from '../sections/aida/TestimonialSection'
import FinalCTASection from '../sections/aida/FinalCTASection'
import { LeadFormSection } from '../shared/components/LeadFormSection'
import LandingFooter from '../shared/components/LandingFooter'
import LGPDBanner from '../shared/components/LGPDBanner'

export default function AidaVariant() {
  const t = getTranslations('aida')
  const canonicalUrl = 'https://mkt.witfy.social/br'
  const ogImage = 'https://mkt.witfy.social/og-image-br.png'

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{t.seo.title}</title>
        <meta name="title" content={t.seo.title} />
        <meta name="description" content={t.seo.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta httpEquiv="content-language" content="pt-BR" />
        <html lang="pt-BR" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={t.seo.title} />
        <meta property="og:description" content={t.seo.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Witfy" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={t.seo.title} />
        <meta name="twitter:description" content={t.seo.description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="gestão redes sociais, automação redes sociais, marketing digital, IA redes sociais, Witfy, social media management" />
        <meta name="author" content="Witfy" />
      </Helmet>

      <LandingHeader variant="aida" />
      
      <main>
        <HeroSection />
        <ProblemSection />
        <ValuePropositionSection />
        <BenefitsSection />
        <ResultsSection />
        <TestimonialSection />
        <FinalCTASection />
        
        {/* Full-width banner footer image */}
        <div className="w-full">
          <img 
            src="/banner-footer.png" 
            alt="Banner" 
            className="w-full h-auto block"
          />
        </div>
        
        <LeadFormSection 
          variant="aida" 
          translations={{
            title: t.leadForm.title,
            subtitle: t.leadForm.subtitle,
            form: t.form
          }} 
        />
      </main>

      <LandingFooter />
      <LGPDBanner />
    </div>
  )
}

