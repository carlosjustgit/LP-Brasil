import { getTranslations } from '@/lib/i18n'

export default function ContentCreatorSection() {
  const t = getTranslations('aida')

  return (
    <section className="py-10 md:py-20 lg:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          {/* Title */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-witfy-text">
              {t.contentCreator.title}
            </h2>
            
            {/* Subtext */}
            <div className="space-y-4 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-witfy-text/80 leading-relaxed">
                {t.contentCreator.subtitle}
              </p>
              <p className="text-lg md:text-xl text-witfy-text/80 leading-relaxed">
                {t.contentCreator.description}
              </p>
            </div>
          </div>

          {/* Demo Video Block */}
          <div className="mt-12 md:mt-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-witfy-200 bg-witfy-50/30">
              <div className="aspect-video w-full relative select-none">
                <video
                  className="w-full h-full object-cover pointer-events-none"
                  autoPlay
                  muted
                  loop
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback"
                  onContextMenu={(e) => e.preventDefault()}
                  aria-label="Witfy Motion demo - gerando vídeo de 8 segundos a partir de um post real"
                  style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                >
                  <source src="/video-demo-witfy-LP.mp4" type="video/mp4" />
                  {/* Fallback message */}
                  <p className="text-witfy-text/70 p-8 text-center">
                    Seu navegador não suporta o elemento de vídeo. Por favor, atualize seu navegador para visualizar a demonstração.
                  </p>
                </video>
                
                {/* Transparent overlay to prevent interactions */}
                <div 
                  className="absolute inset-0 z-10"
                  onContextMenu={(e) => e.preventDefault()}
                  style={{ cursor: 'default' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

