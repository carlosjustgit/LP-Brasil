import { Button } from '@/components/ui/button'
import { getTranslations } from '@/lib/i18n'
import { useTracking } from '@/hooks/useTracking'
import { ArrowRight } from 'lucide-react'
import { scrollToForm } from '@/lib/scrollToForm'

export default function HeroSection() {
  const t = getTranslations('aida')
  const { trackCTAClick } = useTracking()

  const handleCTAClick = () => {
    trackCTAClick(t.hero.cta, 'hero', 'aida')
    scrollToForm()
  }

  return (
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

            {/* Hero Image */}
            <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl border border-witfy-200 dark:border-witfy-800">
              <img 
                src="/hero-image.png" 
                alt="Witfy - Gestão inteligente de redes sociais"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-witfy-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </section>
  )
}

