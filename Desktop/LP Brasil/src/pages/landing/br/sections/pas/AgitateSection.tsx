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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-witfy-text">
              {t.agitate.title}
            </h2>
            <p className="text-xl text-witfy-text/70 max-w-3xl mx-auto mb-4">
              {t.agitate.subtitle}
            </p>
            <p className="text-lg text-witfy-text/80 max-w-3xl mx-auto whitespace-pre-line">
              {t.agitate.description}
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-12 relative pt-16">
            {t.agitate.painPoints.map((point: any, index: number) => {
              // Define unique rotation for each card
              const rotations = ['-3deg', '2deg', '-2deg', '3deg'];
              
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
                    <span className="text-7xl">{point.emoji}</span>
                  </div>

                  {/* Card */}
                  <Card
                    className="border-0"
                    style={{
                      backgroundColor: '#E9D8FA',
                      borderRadius: '32px'
                    }}
                  >
                    <CardContent className="p-6 text-left pt-12">
                      <h3 className="text-xl font-bold mb-2 text-witfy-text">{point.title}</h3>
                      <p className="text-sm text-witfy-text/80 leading-relaxed">{point.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Urgent CTA */}
          <div className="text-center mt-20">
            <Button
              variant="witfy"
              size="xl"
              onClick={() => scrollToForm()}
              className="shadow-lg px-4 sm:px-8 text-sm sm:text-base whitespace-normal"
            >
              {t.agitate.cta}
            </Button>
          </div>
          </div>
        </div>
      </section>

      
    
  )
}

