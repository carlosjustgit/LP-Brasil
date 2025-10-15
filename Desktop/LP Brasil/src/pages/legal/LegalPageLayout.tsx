import { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  const scrollToTop = () => {
    window.location.href = '/br';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header with Logo */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-witfy-500 rounded-lg transition-opacity hover:opacity-80"
            aria-label="Voltar para página principal"
          >
            <img 
              src="/logo-icon.png" 
              alt="Witfy" 
              className="h-8 w-8 md:hidden"
            />
            <img 
              src="/logo-full.png" 
              alt="Witfy" 
              className="hidden md:block h-8 w-auto"
            />
          </button>

          <Button 
            variant="ghost" 
            size="sm"
            onClick={scrollToTop}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-8">
          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
            <p className="text-sm text-muted-foreground">
              Última atualização: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {children}
          </div>

          {/* Back Button */}
          <div className="pt-8 border-t">
            <Button 
              onClick={scrollToTop}
              className="bg-witfy-500 hover:bg-witfy-600"
            >
              Voltar para a página principal
            </Button>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t bg-muted/30 mt-16">
        <div className="container px-4 py-6 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Witfy. Todos os direitos reservados.</p>
            <p>Feito com ❤️ no Brasil</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

