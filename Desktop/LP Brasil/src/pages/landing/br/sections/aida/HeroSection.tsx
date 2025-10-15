import { Button } from '@/components/ui/button'
import { getTranslations } from '@/lib/i18n'
import { useTracking } from '@/hooks/useTracking'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import LeadFormModal from '../../shared/components/LeadFormModal'

export default function HeroSection() {
  const t = getTranslations('aida')
  const { trackCTAClick } = useTracking()
  const [showModal, setShowModal] = useState(false)

  const handleCTAClick = () => {
    trackCTAClick(t.hero.cta, 'hero', 'aida')
    setShowModal(true)
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-witfy-50/30 to-background py-20 md:py-28 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            {/* Hero Title */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              {t.hero.title}
            </h1>

            {/* Hero Subtitle */}
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl md:text-2xl mb-8">
              {t.hero.subtitle}
            </p>

            {/* CTA Button */}
            <Button
              variant="witfy"
              size="xl"
              onClick={handleCTAClick}
              className="group"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* Hero Image Placeholder */}
            <div className="mt-12 rounded-2xl bg-gradient-to-br from-witfy-100 to-purple-100 dark:from-witfy-900/20 dark:to-purple-900/20 p-8 md:p-12">
              <div className="aspect-video rounded-lg bg-witfy-200/50 dark:bg-witfy-800/50 flex items-center justify-center">
                <p className="text-muted-foreground">Hero Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-witfy-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </section>

      <LeadFormModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        variant="aida"
      />
    </>
  )
}

