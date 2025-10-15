import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { submitLead } from '@/lib/formSubmission';
import { CheckCircle2, Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  company: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LeadFormSectionProps {
  variant: 'aida' | 'pas';
  translations: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      company: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
    };
  };
}

export function LeadFormSection({ variant, translations }: LeadFormSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitLead({
        name: data.name,
        email: data.email,
        company: data.company,
        variant,
      });

      setSubmitStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="form" 
      className="py-16 md:py-24 bg-gradient-to-br from-witfy-50 via-white to-witfy-100 dark:from-background dark:via-background dark:to-witfy-900/10"
    >
      <div className="container max-w-4xl mx-auto px-4">
        <Card className="shadow-2xl border-2 border-witfy-200 dark:border-witfy-800">
          <CardHeader className="text-center space-y-4 pb-8">
            <CardTitle className="text-3xl md:text-4xl font-bold text-foreground">
              {translations.title}
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {translations.subtitle}
            </CardDescription>
          </CardHeader>

          <CardContent>
            {submitStatus === 'success' ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">
                  {translations.form.success}
                </h3>
                <Button
                  onClick={() => setSubmitStatus('idle')}
                  variant="outline"
                  className="mt-4"
                >
                  Enviar nova solicitação
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">
                    {translations.form.name}
                  </Label>
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder="João Silva"
                    className="h-12 text-base"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">
                    {translations.form.email}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="joao@empresa.com"
                    className="h-12 text-base"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-base">
                    {translations.form.company}
                  </Label>
                  <Input
                    id="company"
                    {...register('company')}
                    placeholder="Sua Empresa Ltda"
                    className="h-12 text-base"
                    disabled={isSubmitting}
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <p className="text-sm text-destructive text-center">
                      {translations.form.error}
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-semibold bg-witfy-500 hover:bg-witfy-600 text-white shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      {translations.form.submitting}
                    </>
                  ) : (
                    translations.form.submit
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground pt-2">
                  ✓ Sem cartão de crédito  •  ✓ Resposta em 24 horas  •  ✓ 100% gratuito
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

