import { getTranslations } from '@/lib/i18n'
import { useVariant } from '@/hooks/useVariant'

export default function LandingFooter() {
  const variant = useVariant()
  const t = getTranslations(variant)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-8 md:px-6">
        {/* Simple centered footer - no distractions */}
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Legal Links - Only essential compliance links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a 
              href="/privacidade" 
              className="text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
            >
              {t.footer.legal.privacy}
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="/termos" 
              className="text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
            >
              {t.footer.legal.terms}
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="/cookies" 
              className="text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
            >
              {t.footer.legal.cookies}
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="/lgpd" 
              className="text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
            >
              LGPD
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            {t.footer.copyright.replace('{year}', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  )
}

