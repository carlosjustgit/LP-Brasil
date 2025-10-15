import { Button } from '@/components/ui/button'
import { getTranslations } from '@/lib/i18n'
import { scrollToForm } from '@/lib/scrollToForm'


export default function TestimonialSection() {
  const t = getTranslations('aida')
  

  return (
    
      <section className="py-20 md:py-28 -mt-32 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            {/* Quote */}
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 leading-relaxed text-witfy-text">
              "{t.testimonial.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <img 
                src="/luiza-fendi.png" 
                alt="Luísa Fendi"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-lg text-witfy-text">{t.testimonial.author}</p>
                <p className="text-witfy-text/70">{t.testimonial.role}</p>
              </div>
            </div>

            {/* CTA */}
            <div style={{ marginTop: '80px' }}>
              <Button
                variant="witfy"
                size="lg"
                onClick={() => scrollToForm()}
              >
                {t.testimonial.cta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      
    
  )
}

