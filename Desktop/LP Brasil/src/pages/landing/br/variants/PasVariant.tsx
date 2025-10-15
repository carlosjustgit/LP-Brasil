import { getTranslations } from '@/lib/i18n'
import LandingHeader from '../shared/components/LandingHeader'
import ProblemSection from '../sections/pas/ProblemSection'
import AgitateSection from '../sections/pas/AgitateSection'
import SolutionSection from '../sections/pas/SolutionSection'
import FinalCTASection from '../sections/pas/FinalCTASection'
import LandingFooter from '../shared/components/LandingFooter'
import LGPDBanner from '../shared/components/LGPDBanner'

export default function PasVariant() {
  const t = getTranslations('pas')

  return (
    <div className="min-h-screen bg-background">
      <LandingHeader variant="pas" />
      
      <main>
        <ProblemSection />
        <AgitateSection />
        <SolutionSection />
        <FinalCTASection />
      </main>

      <LandingFooter />
      <LGPDBanner />
    </div>
  )
}

