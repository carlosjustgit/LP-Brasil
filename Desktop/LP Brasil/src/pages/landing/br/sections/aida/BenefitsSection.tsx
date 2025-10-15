import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getTranslations } from '@/lib/i18n'
import { scrollToForm } from '@/lib/scrollToForm'
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
              <span className="text-4xl" style={{ marginLeft: '20px', transform: 'rotate(-22.02deg)' }}>💜</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-witfy-text">
                Deixa a Witfy fazer o trabalho<br />
                pesado, e foca-te no que<br />
                realmente importa.
              </h2>
              <span className="text-4xl">🚀</span>
            </div>
            <p className="text-xl text-witfy-text/70">
              {t.benefits.sectionSubtitle}
            </p>
          </div>

          {/* Three Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 relative"
                style={{ borderRadius: '46.56px', backgroundColor: '#E9D8FA' }}
              >
                {/* Call Me Hand image for card 2 - top right corner */}
                {index === 1 && (
                  <img 
                    src="/call-me-hand.png" 
                    alt="Call me hand"
                    className="absolute top-6 right-6 w-16 h-16 object-contain z-10"
                  />
                )}

                {/* Card Image (for cards 1 and 3) */}
                {index !== 1 && (
                  <div style={{ padding: '35.48px' }}>
                    <div 
                      className="rounded-full overflow-hidden"
                      style={{ width: '200px', height: '210px' }}
                    >
                      {index === 0 ? (
                        <img 
                          src="/card-1-image.png" 
                          alt="Cria conteúdo que converte"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img 
                          src="/card-3-image.png" 
                          alt="Faz a sua marca crescer"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                )}

                <CardContent className={index === 1 ? "p-6 pt-20" : "p-6"}>
                  {/* Title */}
                  <div className="mb-4">
                    <h3 
                      className="font-bold text-witfy-text"
                      style={{ 
                        fontSize: '32px', 
                        lineHeight: '37.3px',
                        letterSpacing: '0px'
                      }}
                    >
                      {benefit.title}
                    </h3>
                  </div>
                  
                  {/* Bullet points with purple checkmarks */}
                  <ul className="space-y-3">
                    {benefit.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-witfy-500 flex-shrink-0 mt-1" />
                        <span 
                          className="text-witfy-text"
                          style={{ 
                            fontSize: '22px', 
                            lineHeight: '25px',
                            letterSpacing: '0px',
                            fontWeight: '400'
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Decorative Icons for card 2 - at bottom */}
                {index === 1 && (
                  <div className="flex justify-center gap-4 pb-6 items-center">
                    <span 
                      style={{ 
                        marginTop: '50px',
                        transform: 'rotate(16.65deg)',
                        fontSize: '100px'
                      }}
                    >
                      💜
                    </span>
                    <span 
                      style={{ 
                        transform: 'rotate(-14.23deg)',
                        fontSize: '80px'
                      }}
                    >
                      ⏱️
                    </span>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Button
              variant="witfy"
              size="xl"
              onClick={() => scrollToForm()}
              className="mb-4 uppercase px-4 sm:px-8 text-sm sm:text-base whitespace-normal"
            >
              {t.results.ctaButton}
            </Button>
            <p className="text-witfy-text/70">
              {t.results.ctaDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

