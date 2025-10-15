import { Button } from '@/components/ui/button'
import { getTranslations } from '@/lib/i18n'
import { useTracking } from '@/hooks/useTracking'
import { ArrowRight } from 'lucide-react'
import { scrollToForm } from '@/lib/scrollToForm'


export default function ProblemSection() {
  const t = getTranslations('pas')
  const { trackCTAClick } = useTracking()
  

  const handleCTAClick = () => {
    trackCTAClick(t.problem.cta, 'problem', 'pas')
    scrollToForm()
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-witfy-50/30 to-background py-20 md:py-28 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Problem Title - Direct and Provocative */}
          <h1 className="text-4xl font-bold tracking-tight text-witfy-600 sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            {t.problem.title}
          </h1>

          {/* Problem Subtitle - Creates Urgency */}
          <p className="mx-auto max-w-3xl text-lg sm:text-xl md:text-2xl mb-8 text-foreground/90">
            {t.problem.subtitle}
          </p>

          {/* CTA Button */}
          <Button
            variant="witfy"
            size="xl"
            onClick={handleCTAClick}
            className="group shadow-lg"
          >
            {t.problem.cta}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* YouTube Video */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl border border-witfy-200 dark:border-witfy-800">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/HDRA2UW7QsE?rel=0&modestbranding=1"
                  title="Witfy Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-witfy-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </section>

      
    
  )
}

