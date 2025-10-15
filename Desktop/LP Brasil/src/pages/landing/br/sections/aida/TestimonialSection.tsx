import { Button } from '@/components/ui/button'
import { getTranslations } from '@/lib/i18n'
import { scrollToForm } from '@/lib/scrollToForm'


export default function TestimonialSection() {
  const t = getTranslations('aida')
  

  return (
    
      <section className="py-20 md:py-28 bg-gradient-to-b from-witfy-50/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            {/* Quote */}
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 leading-relaxed">
              "{t.testimonial.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-full bg-witfy-200 dark:bg-witfy-800"></div>
              <div className="text-left">
                <p className="font-semibold text-lg">{t.testimonial.author}</p>
                <p className="text-muted-foreground">{t.testimonial.role}</p>
              </div>
            </div>

            {/* CTA */}
            <Button
              variant="witfy"
              size="lg"
              onClick={() => scrollToForm()}
            >
              {t.testimonial.cta}
            </Button>
          </div>
        </div>
      </section>

      
    
  )
}

