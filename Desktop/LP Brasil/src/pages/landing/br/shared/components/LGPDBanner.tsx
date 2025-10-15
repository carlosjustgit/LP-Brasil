import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { getTranslations } from '@/lib/i18n'
import { useVariant } from '@/hooks/useVariant'
import { X } from 'lucide-react'

const CONSENT_KEY = 'witfy_lgpd_consent'

interface CookieConsent {
  essential: boolean
  analytics: boolean
  marketing: boolean
  timestamp: string
}

export default function LGPDBanner() {
  const variant = useVariant()
  const t = getTranslations(variant)
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [consent, setConsent] = useState<CookieConsent>({
    essential: true,
    analytics: false,
    marketing: false,
    timestamp: new Date().toISOString(),
  })

  useEffect(() => {
    const storedConsent = localStorage.getItem(CONSENT_KEY)
    if (!storedConsent) {
      setShowBanner(true)
    }
  }, [])

  const saveConsent = (consentData: CookieConsent) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consentData))
    setShowBanner(false)
    setShowPreferences(false)

    // Track consent
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: consentData.analytics ? 'granted' : 'denied',
        ad_storage: consentData.marketing ? 'granted' : 'denied',
      })
    }
  }

  const handleAcceptAll = () => {
    const allConsent: CookieConsent = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }
    saveConsent(allConsent)
  }

  const handleRejectAll = () => {
    const minimalConsent: CookieConsent = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }
    saveConsent(minimalConsent)
  }

  const handleSavePreferences = () => {
    saveConsent({
      ...consent,
      timestamp: new Date().toISOString(),
    })
  }

  if (!showBanner) return null

  return (
    <>
      {/* Main Banner */}
      {!showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 p-4 shadow-lg">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-muted-foreground">
                {t.lgpd.banner.message}
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPreferences(true)}
                >
                  {t.lgpd.banner.customize}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectAll}
                >
                  {t.lgpd.banner.rejectAll}
                </Button>
                <Button
                  variant="witfy"
                  size="sm"
                  onClick={handleAcceptAll}
                >
                  {t.lgpd.banner.acceptAll}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">{t.lgpd.preferences.title}</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowPreferences(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                {t.lgpd.preferences.description}
              </p>

              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">
                      {t.lgpd.preferences.essential.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t.lgpd.preferences.essential.description}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="h-4 w-4 rounded border-gray-300"
                    />
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">
                      {t.lgpd.preferences.analytics.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t.lgpd.preferences.analytics.description}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={consent.analytics}
                      onChange={(e) =>
                        setConsent({ ...consent, analytics: e.target.checked })
                      }
                      className="h-4 w-4 rounded border-gray-300"
                    />
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">
                      {t.lgpd.preferences.marketing.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t.lgpd.preferences.marketing.description}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={consent.marketing}
                      onChange={(e) =>
                        setConsent({ ...consent, marketing: e.target.checked })
                      }
                      className="h-4 w-4 rounded border-gray-300"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-2 justify-end">
                <Button variant="outline" onClick={() => setShowPreferences(false)}>
                  Cancelar
                </Button>
                <Button variant="witfy" onClick={handleSavePreferences}>
                  {t.lgpd.preferences.save}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}

