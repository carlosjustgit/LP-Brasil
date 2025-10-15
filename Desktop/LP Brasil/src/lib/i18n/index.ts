import { ptBrAida } from './translations/pt-br-aida'
import { ptBrPas } from './translations/pt-br-pas'

export type Translations = typeof ptBrAida

export const translations = {
  aida: ptBrAida,
  pas: ptBrPas,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getTranslations(variant: 'aida' | 'pas'): any {
  return translations[variant]
}

