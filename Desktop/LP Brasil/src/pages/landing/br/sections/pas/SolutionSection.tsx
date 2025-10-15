import { Card, CardContent } from '@/components/ui/card'
import { getTranslations } from '@/lib/i18n'
import { Check } from 'lucide-react'

export default function SolutionSection() {
  const t = getTranslations('pas')

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-witfy-50/30 to-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          {/* Section Header - The Solution */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-witfy-text">
              {t.solution.title}
            </h2>
            <p className="text-xl text-witfy-text/70 max-w-3xl mx-auto">
              {t.solution.subtitle}
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {t.solution.pillars.map((pillar, index) => (
              <Card
                key={index}
                className="border-witfy-200 bg-gradient-to-br from-witfy-50 to-purple-50 dark:from-witfy-900/20 dark:to-purple-900/20"
              >
                <CardContent className="p-6">
                  <div className="text-5xl mb-4 text-center">{pillar.emoji}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-center text-witfy-text">
                    {pillar.title}
                  </h3>
                  <ul className="space-y-3">
                    {pillar.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-witfy-500 flex-shrink-0 mt-0.5" />
                        <span className="text-witfy-text/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Proof Section */}
          <div className="bg-gradient-to-r from-witfy-100 to-purple-100 dark:from-witfy-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-witfy-text">{t.solution.proof.title}</h3>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-6xl font-bold text-witfy-600">{t.solution.proof.stat}</span>
                <span className="text-xl text-witfy-text/70">{t.solution.proof.description}</span>
              </div>
            </div>

            {/* Testimonial */}
            <blockquote className="text-lg md:text-xl text-center mb-6 max-w-3xl mx-auto text-witfy-text">
              "{t.solution.proof.quote}"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="h-16 w-16 rounded-full bg-witfy-200 dark:bg-witfy-800"></div>
              <div className="text-left">
                <p className="font-semibold text-lg text-witfy-text">{t.solution.proof.author}</p>
                <p className="text-witfy-text/70">{t.solution.proof.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

