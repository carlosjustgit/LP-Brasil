import { Button } from '@/components/ui/button'
import { getTranslations } from '@/lib/i18n'
import { useTracking } from '@/hooks/useTracking'

interface LandingHeaderProps {
  variant: 'aida' | 'pas'
}

export default function LandingHeader({ variant }: LandingHeaderProps) {
  const t = getTranslations(variant)
  const { trackCTAClick } = useTracking()

  const handleCTAClick = () => {
    trackCTAClick(t.header.cta, 'header', variant)
    const formElement = document.getElementById('form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 items-center justify-center rounded-lg bg-witfy-500 px-3">
            <span className="text-lg font-bold text-white">Witfy</span>
          </div>
        </div>

        {/* Desktop CTA */}
        <Button 
          variant="witfy" 
          size="default"
          onClick={handleCTAClick}
          className="hidden md:inline-flex"
        >
          {t.header.cta}
        </Button>

        {/* Mobile CTA */}
        <Button 
          variant="witfy" 
          size="sm"
          onClick={handleCTAClick}
          className="md:hidden"
        >
          {t.header.cta}
        </Button>
      </div>
    </header>
  )
}

