import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getTranslations } from '@/lib/i18n'
import { scrollToForm } from '@/lib/scrollToForm'


export default function AgitateSection() {
  const t = getTranslations('pas')
  

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-witfy-50/20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          {/* Section Header - Amplify the Pain */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-witfy-600">
              {t.agitate.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              {t.agitate.subtitle}
            </p>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              {t.agitate.description}
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {t.agitate.painPoints.map((point, index) => (
              <Card
                key={index}
                className="border-witfy-200 bg-gradient-to-br from-witfy-50 to-purple-50 dark:from-witfy-900/10 dark:to-purple-900/10"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">{point.emoji}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-witfy-700">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Urgent CTA */}
          <div className="text-center">
            <Button
              variant="witfy"
              size="xl"
              onClick={() => scrollToForm()}
              className="shadow-lg"
            >
              {t.agitate.cta}
            </Button>
          </div>
          </div>
        </div>
      </section>

      
    
  )
}

