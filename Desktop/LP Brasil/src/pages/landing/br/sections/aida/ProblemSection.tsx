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
        <div className="mx-auto max-w-7xl">
          
          {/* Main Title with Emoji - Centered */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-witfy-500 inline-flex items-center gap-3 flex-wrap justify-center">
              <span>Gerir redes devia ser smart, não um caos</span>
              <span className="text-5xl">🤯</span>
            </h2>
            <p className="text-lg text-[#3A3F47] mt-4 max-w-3xl mx-auto">
              {t.problem.subtitle}
            </p>
          </div>

          {/* Two Column Layout: Image LEFT, Content RIGHT */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT Column - Image */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-witfy-100 to-purple-100 dark:from-witfy-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <p className="text-[#3A3F47]/60">Person on Phone Image</p>
                </div>
              </div>
            </div>

            {/* RIGHT Column - Content */}
            <div className="space-y-6">
              {/* Secondary Heading */}
              <h3 className="text-2xl md:text-3xl font-bold text-witfy-500 leading-tight">
                Gerir redes sociais parece fácil, até percebes que consome tempo demais.
              </h3>

              {/* Pain Points with Purple Check Marks */}
              <ul className="space-y-4">
                {painPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-witfy-500 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-[#3A3F47] leading-relaxed">{point}</span>
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
        </div>
      </div>
    </section>
  )
}

