import { getTranslations } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { scrollToForm } from '@/lib/scrollToForm'
import { Check } from 'lucide-react'

export default function ProblemSection() {
  const t = getTranslations('aida')

  // Pain points with check marks
  const painPoints = [
    'Horas a criar conteúdo que acaba por ter pouco alcance.',
    'Publicações irregulares porque falta tempo (ou inspiração).',
    'Mensagens por responder e comentários que se acumulam.',
    'Estratégias que mudam sempre que o algoritmo decide.',
    'A sensação de estar sempre online, mas sem crescer.',
  ]

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-7xl relative">
          
          {/* Title Section with Floating Emoji */}
          <div className="relative mb-16">
            {/* Main Title - Centered */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-witfy-text">
                Gerir redes devia ser smart,<br />
                não um caos
              </h2>
              <p className="text-lg text-witfy-text mt-4 mx-auto" style={{ maxWidth: '500px' }}>
                {t.problem.subtitle}
              </p>
            </div>
            
            {/* Blown Head Emoji - Floating on the right side in white space */}
            <img 
              src="/blow-head-emoji.png" 
              alt="Blown head emoji"
              className="absolute hidden lg:block"
              style={{ 
                width: '200px',
                height: '200px',
                transform: 'rotate(11.25deg)',
                right: '15%',
                top: '100%',
                marginTop: '-75px', // Center vertically
              }}
            />
          </div>

        </div>
      </div>

      {/* Two Column Layout: Image LEFT (flush to edge), Content RIGHT */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT Column - Image flush to left edge of viewport */}
        <div className="relative w-full pl-0">
          <div className="aspect-square rounded-r-lg overflow-hidden">
            <img 
              src="/man-on-phone.png" 
              alt="Person on phone managing social media"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT Column - Content */}
        <div className="space-y-6 container pr-4 md:pr-6">
            {/* Secondary Heading */}
            <h3 className="text-2xl md:text-3xl font-bold text-witfy-text leading-tight">
              Cuidar das redes sociais parece simples, até você ver o tempo que isso consome.
            </h3>

            {/* Pain Points with Brand Purple Check Marks */}
            <ul className="space-y-4">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-witfy-500 flex-shrink-0 mt-0.5" />
                  <span className="text-base text-witfy-text leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                variant="witfy"
                size="lg"
                onClick={() => scrollToForm()}
                className="uppercase font-semibold hover:opacity-80 transition-opacity"
              >
                Experimenta a Witfy
              </Button>
            </div>
          </div>
        </div>
    </section>
  )
}

