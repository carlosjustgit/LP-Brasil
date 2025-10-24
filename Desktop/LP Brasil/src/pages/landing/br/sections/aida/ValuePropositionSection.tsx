import { getTranslations } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { scrollToForm } from '@/lib/scrollToForm'

export default function ValuePropositionSection() {
  const t = getTranslations('aida')

  // User testimonials with speech bubbles
  const testimonials = [
    {
      text: "Entende a minha marca e cria planos semanais incríveis",
      position: "top-left",
      bgColor: "bg-blue-400",
    },
    {
      text: "Ajuda-te a criar conteúdo que prende atenção",
      position: "top-right",
      bgColor: "bg-green-400",
    },
    {
      text: "Liberta o teu tempo, e multiplica o impacto",
      position: "bottom-left",
      bgColor: "bg-purple-400",
    },
    {
      text: "Conecta-te às pessoas certas, no momento certo",
      position: "bottom-right",
      bgColor: "bg-pink-400",
    },
  ]

  return (
    <section className="py-10 md:py-20 lg:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          {/* Central block with relative positioning for surrounding avatars */}
          <div className="relative mx-auto max-w-3xl text-center py-24">
            {/* Main Title with Rock Hand Emoji */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-witfy-text flex items-center justify-center gap-3">
              {t.valueProposition.title}
              <span className="text-4xl">🤘</span>
            </h2>

            {/* Subtitle with Party Emoji */}
            <p className="text-lg md:text-xl text-witfy-text flex items-center justify-center gap-3">
              <span className="text-2xl">🥳</span>
              {t.valueProposition.subtitle}
            </p>

            {/* Avatars + speech bubbles positioned diagonally around the central block */}
            {/* Top-left */}
            <div className="hidden md:flex absolute -top-16 -left-88 items-center gap-4">
              <img 
                src="/user-1.png" 
                alt="User testimonial" 
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="bg-zinc-100 rounded-lg px-4 py-2 max-w-[220px] relative">
                <p className="text-sm font-normal text-witfy-text/80">{testimonials[0].text}</p>
                <div className="absolute -left-2 top-1/2 -translate-y-1/2">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-zinc-100"></div>
                </div>
              </div>
            </div>

            {/* Top-right */}
            <div className="hidden md:flex absolute -top-16 -right-20 items-center gap-4">
              <img 
                src="/user-2.png" 
                alt="User testimonial" 
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="bg-zinc-100 rounded-lg px-4 py-2 max-w-[220px] relative">
                <p className="text-sm font-normal text-witfy-text/80">{testimonials[1].text}</p>
                <div className="absolute -left-2 top-1/2 -translate-y-1/2">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-zinc-100"></div>
                </div>
              </div>
            </div>

            {/* Bottom-left */}
            <div className="hidden md:flex absolute -bottom-16 -left-40 items-center gap-4">
              <img 
                src="/user-3.png" 
                alt="User testimonial" 
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="bg-zinc-100 rounded-lg px-4 py-2 max-w-[220px] relative">
                <p className="text-sm font-normal text-witfy-text/80">{testimonials[2].text}</p>
                <div className="absolute -left-2 top-1/2 -translate-y-1/2">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-zinc-100"></div>
                </div>
              </div>
            </div>

            {/* Bottom-right */}
            <div className="hidden md:flex absolute -bottom-16 -right-48 items-center gap-4">
              <img 
                src="/user-4.png" 
                alt="User testimonial" 
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="bg-zinc-100 rounded-lg px-4 py-2 max-w-[220px] relative">
                <p className="text-sm font-normal text-witfy-text/80">{testimonials[3].text}</p>
                <div className="absolute -left-2 top-1/2 -translate-y-1/2">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Button
              variant="witfy"
              size="lg"
              onClick={() => scrollToForm()}
              className="uppercase font-semibold hover:opacity-80 transition-opacity"
            >
              SOLICITE DEMO GRÁTIS
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

