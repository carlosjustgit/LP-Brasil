import { supabase, type LandingPageLead } from './supabase'

export interface FormSubmissionData {
  name: string
  email: string
  company?: string
  variant: 'aida' | 'pas'
}

export async function submitLead(data: FormSubmissionData): Promise<{ success: boolean; error?: string }> {
  try {
    // Get UTM parameters from URL
    const urlParams = new URLSearchParams(window.location.search)
    
    const leadData: LandingPageLead = {
      name: data.name,
      email: data.email,
      company: data.company || null,
      variant: data.variant,
      source: 'br_landing_page',
      utm_source: urlParams.get('utm_source') || null,
      utm_medium: urlParams.get('utm_medium') || null,
      utm_campaign: urlParams.get('utm_campaign') || null,
      utm_content: urlParams.get('utm_content') || null,
      utm_term: urlParams.get('utm_term') || null,
    }

    // Insert into Supabase
    const { error: dbError } = await supabase
      .from('landing_page_leads')
      .insert([leadData])

    if (dbError) {
      console.error('Supabase error:', dbError)
      return { success: false, error: 'Erro ao salvar. Tente novamente.' }
    }

    // Send email notification via SendGrid
    // Note: This would normally be done server-side via a Supabase Edge Function
    // For now, we'll just log it. You can create an Edge Function later.
    if (import.meta.env.DEV) {
      console.log('Lead submitted:', leadData)
      console.log('Email notification would be sent to:', import.meta.env.VITE_SENDGRID_FROM_EMAIL)
    }

    // Track conversion
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        event_category: 'form_submission',
        event_label: data.variant,
        value: 1,
      })
    }

    return { success: true }
  } catch (error) {
    console.error('Form submission error:', error)
    return { success: false, error: 'Erro inesperado. Tente novamente.' }
  }
}

