import { getTranslations } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import LeadFormModal from '../../shared/components/LeadFormModal'

export default function ProblemSection() {
  const t = getTranslations('aida')
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t.problem.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t.problem.subtitle}
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Image Placeholder */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-witfy-100 to-purple-100 dark:from-witfy-900/20 dark:to-purple-900/20 flex items-center justify-center">
                <p className="text-muted-foreground">Person on Phone Image</p>
              </div>

              {/* Right: Description */}
              <div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t.problem.description}
                </p>
                <Button
                  variant="witfy"
                  size="lg"
                  onClick={() => setShowModal(true)}
                >
                  {t.problem.cta}
                </Button>
              </div>
            </div>

            {/* Chat Bubbles */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-witfy-200 dark:bg-witfy-800"></div>
                    <div className="flex-1">
                      <p className="text-sm">Chat bubble {i}</p>
                      <span className="text-lg">💜</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LeadFormModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        variant="aida"
      />
    </>
  )
}

