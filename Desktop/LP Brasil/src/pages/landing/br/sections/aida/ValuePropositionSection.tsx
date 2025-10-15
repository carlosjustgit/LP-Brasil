import { getTranslations } from '@/lib/i18n'

export default function ValuePropositionSection() {
  const t = getTranslations('aida')

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-witfy-50/30 to-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            {t.valueProposition.title}
            <span className="text-4xl">🚀</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.valueProposition.subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

