import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { getTranslations } from '@/lib/i18n'
import { useState } from 'react'
import LeadFormModal from '../../shared/components/LeadFormModal'
import { ArrowRight } from 'lucide-react'

export default function FinalCTASection() {
  const t = getTranslations('aida')
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-witfy-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute -bottom-24 left-1/4 h-96 w-96 rounded-full bg-witfy-500/20 blur-3xl"></div>
        <div className="absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-5xl">
            {/* Stats Card */}
            <Card className="inline-flex items-center gap-4 p-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur shadow-lg mb-8">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-witfy-200 dark:bg-witfy-800 border-2 border-white"></div>
                <div className="h-8 w-8 rounded-full bg-witfy-300 dark:bg-witfy-700 border-2 border-white"></div>
                <div className="h-8 w-8 rounded-full bg-witfy-400 dark:bg-witfy-600 border-2 border-white"></div>
              </div>
              <div>
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-muted-foreground">{t.finalCta.statsLabel}</div>
              </div>
            </Card>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
              {t.finalCta.title}
            </h2>

            {/* Pagination Dots (decorative) */}
            <div className="flex justify-center gap-2 mb-8">
              <div className="h-2 w-2 rounded-full bg-witfy-500"></div>
              <div className="h-2 w-8 rounded-full bg-witfy-500"></div>
              <div className="h-2 w-2 rounded-full bg-witfy-300"></div>
              <div className="h-2 w-2 rounded-full bg-witfy-300"></div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="witfy"
                size="xl"
                onClick={() => setShowModal(true)}
                className="group"
              >
                {t.finalCta.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => setShowModal(true)}
              >
                {t.finalCta.secondaryCta}
              </Button>
            </div>

            {/* Decorative Image Placeholder */}
            <div className="mt-12 aspect-video rounded-2xl bg-gradient-to-br from-witfy-100 to-purple-100 dark:from-witfy-900/20 dark:to-purple-900/20 flex items-center justify-center">
              <p className="text-muted-foreground">Profile Image</p>
            </div>
          </div>
        </div>
      </section>

      <LeadFormModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        variant="aida"
      />
    </>
  )
}

