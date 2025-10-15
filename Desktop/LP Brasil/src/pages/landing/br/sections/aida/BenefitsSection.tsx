import { Card, CardContent } from '@/components/ui/card'
import { getTranslations } from '@/lib/i18n'
import { Check } from 'lucide-react'

export default function BenefitsSection() {
  const t = getTranslations('aida')

  const benefits = [
    t.benefits.card1,
    t.benefits.card2,
    t.benefits.card3,
  ]

  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {t.benefits.sectionTitle}
              </h2>
              <span className="text-4xl">💜</span>
            </div>
            <p className="text-xl text-muted-foreground">
              {t.benefits.sectionSubtitle}
            </p>
          </div>

          {/* Three Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-gradient-to-br from-witfy-50 to-purple-50 dark:from-witfy-900/20 dark:to-purple-900/20 border-witfy-200"
              >
                {/* Card Image Placeholder (for cards 1 and 3) */}
                {index !== 1 && (
                  <div className="h-48 bg-witfy-200 dark:bg-witfy-800 flex items-center justify-center">
                    <p className="text-muted-foreground">Image {index + 1}</p>
                  </div>
                )}

                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                  <ul className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-witfy-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Decorative Icons for card 2 */}
                {index === 1 && (
                  <div className="flex justify-center gap-4 pb-6">
                    <span className="text-4xl">⏱️</span>
                    <span className="text-4xl">💜</span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

