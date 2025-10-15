import { Card, CardContent } from '@/components/ui/card'
import { getTranslations } from '@/lib/i18n'

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
            <p className="text-xl text-witfy-text/70 max-w-3xl mx-auto whitespace-pre-line">
              {t.solution.subtitle}
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-12 mb-16 relative pt-16">
            {t.solution.pillars.map((pillar, index) => {
              // Define unique rotation for each card
              const rotations = ['-2deg', '1deg', '-1deg'];
              
              return (
                <div
                  key={index}
                  className="relative"
                  style={{
                    transform: `rotate(${rotations[index]})`,
                    transformOrigin: 'center center'
                  }}
                >
                  {/* Emoji overflowing at top center */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="text-7xl">{pillar.emoji}</span>
                  </div>

                  {/* Card */}
                  <Card
                    className="border-0"
                    style={{
                      backgroundColor: '#E9D8FA',
                      borderRadius: '32px'
                    }}
                  >
                    <CardContent className="p-6 text-center pt-12">
                      <h3 className="text-2xl font-bold mb-4 text-witfy-text">
                        {pillar.title}
                      </h3>
                      <div className="text-left">
                        {pillar.features.map((feature, featureIndex) => (
                          <p key={featureIndex} className="text-base text-witfy-text/80 leading-relaxed">
                            {feature}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
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
              <img
                src="/luiza-fendi.png"
                alt="Luísa Fendi"
                className="h-16 w-16 rounded-full object-cover"
              />
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

