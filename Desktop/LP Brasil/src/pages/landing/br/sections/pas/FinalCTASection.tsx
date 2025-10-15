import { Button } from '@/components/ui/button'
import { getTranslations } from '@/lib/i18n'
import { scrollToForm } from '@/lib/scrollToForm'

import { ArrowRight, Clock } from 'lucide-react'

export default function FinalCTASection() {
  const t = getTranslations('pas')
  

  return (
    
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-witfy-500/10 via-purple-500/10 to-pink-500/10">
        {/* Background Elements */}
        <div className="absolute -bottom-24 left-1/4 h-96 w-96 rounded-full bg-witfy-500/20 blur-3xl"></div>
        <div className="absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-5xl text-center">
            {/* Main Heading - Urgent */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t.finalCta.title}
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground mb-4">
              {t.finalCta.subtitle}
            </p>

            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-witfy-100 text-witfy-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Clock className="h-4 w-4" />
              {t.finalCta.urgency}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button
                variant="witfy"
                size="xl"
                onClick={() => scrollToForm()}
                className="group shadow-lg"
              >
                {t.finalCta.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => scrollToForm()}
              >
                {t.finalCta.secondaryCta}
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              {t.finalCta.guarantee.split('✓').filter(Boolean).map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item.trim()}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
    
  )
}

