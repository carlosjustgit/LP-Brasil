import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export type Variant = 'aida' | 'pas'

const STORAGE_KEY = 'witfy_variant'

export function useVariant(): Variant {
  const [searchParams] = useSearchParams()
  const [variant, setVariant] = useState<Variant>(() => {
    // 1. Check URL parameter (for forced variant)
    const urlVariant = searchParams.get('v')
    if (urlVariant === 'aida' || urlVariant === 'pas') {
      sessionStorage.setItem(STORAGE_KEY, urlVariant)
      return urlVariant
    }

    // 2. Check session storage (user already assigned)
    const storedVariant = sessionStorage.getItem(STORAGE_KEY)
    if (storedVariant === 'aida' || storedVariant === 'pas') {
      return storedVariant
    }

    // 3. Random assignment (50/50 split)
    const randomVariant: Variant = Math.random() < 0.5 ? 'aida' : 'pas'
    sessionStorage.setItem(STORAGE_KEY, randomVariant)
    return randomVariant
  })

  useEffect(() => {
    // Track variant assignment
    if (window.gtag) {
      window.gtag('event', 'variant_assigned', {
        event_category: 'ab_test',
        event_label: variant,
      })
    }
  }, [variant])

  return variant
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

