import { getTranslations } from '@/lib/i18n'
import LandingHeader from '../shared/components/LandingHeader'
import HeroSection from '../sections/aida/HeroSection'
import ProblemSection from '../sections/aida/ProblemSection'
import ValuePropositionSection from '../sections/aida/ValuePropositionSection'
import BenefitsSection from '../sections/aida/BenefitsSection'
import ResultsSection from '../sections/aida/ResultsSection'
import TestimonialSection from '../sections/aida/TestimonialSection'
import FinalCTASection from '../sections/aida/FinalCTASection'
import LandingFooter from '../shared/components/LandingFooter'
import LGPDBanner from '../shared/components/LGPDBanner'

export default function AidaVariant() {
  const t = getTranslations('aida')

  return (
    <div className="min-h-screen bg-background">
      <LandingHeader variant="aida" />
      
      <main>
        <HeroSection />
        <ProblemSection />
        <ValuePropositionSection />
        <BenefitsSection />
        <ResultsSection />
        <TestimonialSection />
        <FinalCTASection />
      </main>

      <LandingFooter />
      <LGPDBanner />
    </div>
  )
}

