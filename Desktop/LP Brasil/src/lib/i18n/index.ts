import { ptBrAida } from './translations/pt-br-aida'
import { ptBrPas } from './translations/pt-br-pas'

export type AidaTranslations = typeof ptBrAida
export type PasTranslations = typeof ptBrPas
export type Translations = AidaTranslations | PasTranslations

export const translations = {
  aida: ptBrAida,
  pas: ptBrPas,
}

export function getTranslations(variant: 'aida'): AidaTranslations
export function getTranslations(variant: 'pas'): PasTranslations
export function getTranslations(variant: 'aida' | 'pas'): Translations {
  return translations[variant] as Translations
}

