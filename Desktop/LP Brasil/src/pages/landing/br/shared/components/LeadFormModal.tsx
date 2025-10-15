import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { getTranslations } from '@/lib/i18n'
import { submitLead, type FormSubmissionData } from '@/lib/formSubmission'
import { X, Loader2, CheckCircle2 } from 'lucide-react'

interface LeadFormModalProps {
  isOpen: boolean
  onClose: () => void
  variant: 'aida' | 'pas'
}

const formSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('E-mail inválido'),
  company: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export default function LeadFormModal({ isOpen, onClose, variant }: LeadFormModalProps) {
  const t = getTranslations(variant)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setError(null)

    const leadData: FormSubmissionData = {
      name: data.name,
      email: data.email,
      company: data.company,
      variant,
    }

    const result = await submitLead(leadData)

    setIsSubmitting(false)

    if (result.success) {
      setIsSuccess(true)
      reset()
      setTimeout(() => {
        onClose()
        setIsSuccess(false)
      }, 2000)
    } else {
      setError(result.error || t.form.error)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <Card className="w-full max-w-md relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute right-4 top-4"
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="p-6">
          {!isSuccess ? (
            <>
              <h2 className="text-2xl font-bold mb-2">
                {variant === 'aida' ? 'Experimente Grátis' : 'Comece Agora'}
              </h2>
              <p className="text-muted-foreground mb-6">
                Preencha o formulário para começar sua jornada com a Witfy
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div>
                  <Label htmlFor="name">{t.form.name}</Label>
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder="João Silva"
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email">{t.form.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="joao@empresa.com.br"
                    className={errors.email ? 'border-destructive' : ''}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Company (Optional) */}
                <div>
                  <Label htmlFor="company">{t.form.company}</Label>
                  <Input
                    id="company"
                    {...register('company')}
                    placeholder="Sua empresa"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="rounded-md bg-destructive/10 p-3">
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="witfy"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t.form.submitting}
                    </>
                  ) : (
                    t.form.submit
                  )}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Sucesso!</h2>
              <p className="text-muted-foreground">{t.form.success}</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

