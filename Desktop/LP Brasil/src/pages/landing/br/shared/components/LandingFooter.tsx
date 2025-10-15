import { getTranslations } from '@/lib/i18n'
import { useVariant } from '@/hooks/useVariant'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function LandingFooter() {
  const variant = useVariant()
  const t = getTranslations(variant)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex h-8 items-center justify-center rounded-lg bg-witfy-500 px-3 w-fit">
              <span className="text-lg font-bold text-white">Witfy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/witfy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-witfy-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/witfy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-witfy-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/witfy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-witfy-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/witfy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-witfy-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.product.title}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/recursos" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.product.features}
                </a>
              </li>
              <li>
                <a href="/precos" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.product.pricing}
                </a>
              </li>
              <li>
                <a href="/seguranca" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.product.security}
                </a>
              </li>
              <li>
                <a href="/atualizacoes" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.product.updates}
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.company.title}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.company.about}
                </a>
              </li>
              <li>
                <a href="/carreiras" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.company.careers}
                </a>
              </li>
              <li>
                <a href="/imprensa" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.company.press}
                </a>
              </li>
              <li>
                <a href="/contato" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.company.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column (LGPD Compliance) */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.legal.title}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/privacidade" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.legal.privacy}
                </a>
              </li>
              <li>
                <a href="/termos" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.legal.terms}
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.legal.cookies}
                </a>
              </li>
              <li>
                <a href="/lgpd" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.legal.lgpd}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>{t.footer.copyright.replace('{year}', currentYear.toString())}</p>
          <p>{t.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  )
}

