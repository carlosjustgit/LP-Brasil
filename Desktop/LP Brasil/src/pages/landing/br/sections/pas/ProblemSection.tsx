import { Button } from '@/components/ui/button'
import { getTranslations } from '@/lib/i18n'
import { useTracking } from '@/hooks/useTracking'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import LeadFormModal from '../../shared/components/LeadFormModal'

export default function ProblemSection() {
  const t = getTranslations('pas')
  const { trackCTAClick } = useTracking()
  const [showModal, setShowModal] = useState(false)

  const handleCTAClick = () => {
    trackCTAClick(t.problem.cta, 'problem', 'pas')
    setShowModal(true)
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-destructive/10 to-background py-20 md:py-28 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            {/* Problem Title - Direct and Provocative */}
            <h1 className="text-4xl font-bold tracking-tight text-destructive sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              {t.problem.title}
            </h1>

            {/* Problem Subtitle - Creates Urgency */}
            <p className="mx-auto max-w-3xl text-lg sm:text-xl md:text-2xl mb-8 text-foreground/90">
              {t.problem.subtitle}
            </p>

            {/* CTA Button */}
            <Button
              variant="destructive"
              size="xl"
              onClick={handleCTAClick}
              className="group shadow-lg"
            >
              {t.problem.cta}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* Visual: Stressed Person (Placeholder) */}
            <div className="mt-12 rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 p-8 md:p-12">
              <div className="aspect-video rounded-lg bg-red-200/50 dark:bg-red-800/50 flex items-center justify-center">
                <p className="text-muted-foreground">Stressed Person with Declining Metrics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements - Red/Orange for Urgency */}
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-destructive/10 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      </section>

      <LeadFormModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        variant="pas"
      />
    </>
  )
}

