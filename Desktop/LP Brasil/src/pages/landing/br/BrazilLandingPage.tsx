import { Helmet } from 'react-helmet-async'
import { useVariant } from '@/hooks/useVariant'
import { getTranslations } from '@/lib/i18n'
import AidaVariant from './variants/AidaVariant'
import PasVariant from './variants/PasVariant'

export default function BrazilLandingPage() {
  const variant = useVariant()
  const t = getTranslations(variant)

  return (
    <>
      <Helmet>
        <title>{t.seo.title}</title>
        <meta name="description" content={t.seo.description} />
        <html lang="pt-BR" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content={t.seo.title} />
        <meta property="og:description" content={t.seo.description} />
        <meta property="og:url" content="https://lp.witfy.com/br" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.seo.title} />
        <meta name="twitter:description" content={t.seo.description} />
        
        {/* Canonical */}
        <link rel="canonical" href={`https://lp.witfy.com/br?v=${variant}`} />
      </Helmet>

      {variant === 'aida' ? <AidaVariant /> : <PasVariant />}
    </>
  )
}

