import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getTranslations } from '@/lib/i18n'
import { useState } from 'react'
import LeadFormModal from '../../shared/components/LeadFormModal'

export default function ResultsSection() {
  const t = getTranslations('aida')
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-background to-witfy-50/30">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  {t.results.sectionTitle}
                </h2>
                <span className="text-4xl">👁️</span>
              </div>
            </div>

            {/* Four Result Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {t.results.cards.map((card, index) => (
                <Card
                  key={index}
                  className="border-0 bg-gradient-to-br from-witfy-100 via-purple-100 to-pink-100 dark:from-witfy-900/40 dark:via-purple-900/40 dark:to-pink-900/40"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4">{card.emoji}</div>
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                variant="witfy"
                size="xl"
                onClick={() => setShowModal(true)}
                className="mb-4"
              >
                {t.results.ctaButton}
              </Button>
              <p className="text-muted-foreground">
                {t.results.ctaDescription}
              </p>
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

