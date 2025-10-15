import { ptBrAida } from './translations/pt-br-aida'
import { ptBrPas } from './translations/pt-br-pas'

export type Translations = typeof ptBrAida

export const translations = {
  aida: ptBrAida,
  pas: ptBrPas,
}

export function getTranslations(variant: 'aida' | 'pas'): Translations {
  return translations[variant]
}

