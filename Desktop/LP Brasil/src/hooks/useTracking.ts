import { useCallback } from 'react'

interface TrackEventParams {
  category: string
  action: string
  label?: string
  value?: number
  variant?: string
}

export function useTracking() {
  const trackEvent = useCallback(({ category, action, label, value, variant }: TrackEventParams) => {
    // Google Analytics
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        variant: variant,
      })
    }

    // Console log for development
    if (import.meta.env.DEV) {
      console.log('[Track Event]', { category, action, label, value, variant })
    }
  }, [])

  const trackCTAClick = useCallback((buttonText: string, section: string, variant: string) => {
    trackEvent({
      category: 'cta_click',
      action: 'button_click',
      label: `${section}: ${buttonText}`,
      variant,
    })
  }, [trackEvent])

  const trackScrollDepth = useCallback((depth: number, variant: string) => {
    trackEvent({
      category: 'engagement',
      action: 'scroll_depth',
      label: `${depth}%`,
      value: depth,
      variant,
    })
  }, [trackEvent])

  const trackFormSubmit = useCallback((formType: string, variant: string) => {
    trackEvent({
      category: 'conversion',
      action: 'form_submit',
      label: formType,
      variant,
    })
  }, [trackEvent])

  return {
    trackEvent,
    trackCTAClick,
    trackScrollDepth,
    trackFormSubmit,
  }
}

