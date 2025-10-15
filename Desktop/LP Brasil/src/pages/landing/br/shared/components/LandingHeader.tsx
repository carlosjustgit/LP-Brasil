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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo - Desktop: full logo, Mobile: icon only */}
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-witfy-500 rounded-lg transition-opacity hover:opacity-80"
          aria-label="Voltar ao topo"
        >
          {/* Mobile: Icon only */}
          <img 
            src="/logo-icon.png" 
            alt="Witfy" 
            className="h-8 w-8 md:hidden"
          />
          {/* Desktop: Full logo */}
          <img 
            src="/logo-full.png" 
            alt="Witfy" 
            className="hidden md:block h-8 w-auto"
          />
        </button>

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

