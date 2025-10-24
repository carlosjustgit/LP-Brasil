import { Card, CardContent } from '@/components/ui/card'
import { getTranslations } from '@/lib/i18n'


export default function ResultsSection() {
  const t = getTranslations('aida')
  

  return (
    
      <section className="relative py-10 md:py-20 lg:py-28 bg-white overflow-visible">
        {/* Grid Background - 4x4 large boxes with fade on sides, no top line, bottom line hidden, extending beyond section */}
        <div 
          className="absolute"
          style={{
            inset: '0',
            height: 'calc(100% + 400px)', // Extend beyond section bottom
            background: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
            backgroundSize: '300px 300px',
            backgroundPosition: '0 -1px', // Shift up to hide top line
            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, black 0%, black 75%, transparent 90%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, black 0%, black 75%, transparent 90%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in'
          }}
        ></div>

        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-witfy-text">
                  Resultados<br />
                  que falam por si
                </h2>
                <img 
                  src="/eyes.png" 
                  alt="Eyes"
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>

                  {/* Four Result Cards - Positioned like Figma with rotations and overflow emojis */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative pt-16">
                    {t.results.cards.map((card: any, index: number) => {
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
                      <span className="text-7xl">{card.emoji}</span>
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
                        <h3 className="text-xl font-bold mb-2 text-witfy-text">{card.title}</h3>
                        <p className="text-sm text-witfy-text/80 leading-relaxed">{card.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
              
              {/* Sparkling Heart at bottom left - positioned absolutely */}
              <div className="absolute -bottom-20 left-0">
                <img 
                  src="/sparkling-heart.png" 
                  alt="Sparkling heart"
                  className="w-20 h-20 object-contain"
                  style={{ transform: 'rotate(-15.11deg)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      
    
  )
}

