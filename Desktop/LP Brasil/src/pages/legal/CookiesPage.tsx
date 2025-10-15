import LegalPageLayout from './LegalPageLayout';

export default function CookiesPage() {
  return (
    <LegalPageLayout 
      title="Política de cookies" 
      lastUpdated="15 de outubro de 2025"
    >
      <section>
        <h2>1. O que são cookies?</h2>
        <p>
          Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, smartphone ou tablet) 
          quando você visita um site. Eles permitem que o site reconheça seu dispositivo e lembre de suas preferências 
          e ações ao longo do tempo.
        </p>
      </section>

      <section>
        <h2>2. Como a Witfy usa cookies</h2>
        <p>
          Usamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso da plataforma 
          e fornecer funcionalidades personalizadas. Todos os cookies que usamos estão em conformidade com a 
          Lei Geral de Proteção de Dados (LGPD) do Brasil.
        </p>
      </section>

      <section>
        <h2>3. Tipos de cookies que usamos</h2>
        
        <h3>3.1 Cookies essenciais (sempre ativos)</h3>
        <p>
          Estes cookies são necessários para o funcionamento básico da plataforma. Sem eles, você não 
          poderá usar recursos importantes como login e segurança.
        </p>
        <p><strong>Exemplos:</strong></p>
        <ul>
          <li>Cookie de sessão (mantém você logado)</li>
          <li>Cookie de segurança (previne fraudes)</li>
          <li>Cookie de preferência de idioma</li>
        </ul>
        <p><strong>Duração:</strong> Sessão ou até 1 ano</p>

        <h3>3.2 Cookies analíticos (opcionais)</h3>
        <p>
          Estes cookies nos ajudam a entender como você usa a Witfy, permitindo-nos melhorar a plataforma. 
          Os dados são coletados de forma agregada e anônima.
        </p>
        <p><strong>Exemplos:</strong></p>
        <ul>
          <li>Google Analytics (análise de tráfego)</li>
          <li>Métricas de desempenho da plataforma</li>
          <li>Mapas de calor de interação</li>
        </ul>
        <p><strong>Duração:</strong> Até 2 anos</p>
        <p><strong>Você pode desativá-los</strong> através do banner de consentimento.</p>

        <h3>3.3 Cookies de marketing (opcionais)</h3>
        <p>
          Estes cookies são usados para mostrar anúncios relevantes e medir a eficácia de nossas campanhas.
        </p>
        <p><strong>Exemplos:</strong></p>
        <ul>
          <li>Facebook Pixel (rastreamento de conversões)</li>
          <li>Google Ads (remarketing)</li>
          <li>LinkedIn Insight Tag</li>
        </ul>
        <p><strong>Duração:</strong> Até 2 anos</p>
        <p><strong>Você pode desativá-los</strong> através do banner de consentimento.</p>

        <h3>3.4 Cookies funcionais (opcionais)</h3>
        <p>
          Estes cookies melhoram a funcionalidade e personalização da plataforma.
        </p>
        <p><strong>Exemplos:</strong></p>
        <ul>
          <li>Preferências de tema (claro/escuro)</li>
          <li>Configurações de notificação</li>
          <li>Preferências de visualização</li>
        </ul>
        <p><strong>Duração:</strong> Até 1 ano</p>
      </section>

      <section>
        <h2>4. Cookies de terceiros</h2>
        <p>
          Alguns cookies são colocados por serviços de terceiros que aparecem em nossas páginas:
        </p>
        <ul>
          <li>
            <strong>Google Analytics:</strong> análise de tráfego e comportamento
            <br />
            <a 
              href="https://policies.google.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-witfy-500 hover:underline"
            >
              Política de privacidade do Google
            </a>
          </li>
          <li>
            <strong>Facebook/Meta:</strong> pixel de rastreamento para anúncios
            <br />
            <a 
              href="https://www.facebook.com/privacy/policy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-witfy-500 hover:underline"
            >
              Política de privacidade da Meta
            </a>
          </li>
          <li>
            <strong>Supabase:</strong> infraestrutura de autenticação e banco de dados
            <br />
            <a 
              href="https://supabase.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-witfy-500 hover:underline"
            >
              Política de privacidade do Supabase
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Como gerenciar cookies</h2>
        
        <h3>5.1 Banner de consentimento</h3>
        <p>
          Quando você visita a Witfy pela primeira vez, um banner de cookies aparece permitindo que você:
        </p>
        <ul>
          <li>Aceite todos os cookies</li>
          <li>Rejeite cookies não essenciais</li>
          <li>Personalize suas preferências de cookies</li>
        </ul>
        <p>
          Você pode alterar suas preferências a qualquer momento clicando no ícone de cookies no rodapé da página.
        </p>

        <h3>5.2 Configurações do navegador</h3>
        <p>
          A maioria dos navegadores permite que você controle cookies através das configurações. 
          Você pode configurar seu navegador para:
        </p>
        <ul>
          <li>Bloquear todos os cookies</li>
          <li>Permitir apenas cookies primários (bloquear terceiros)</li>
          <li>Excluir cookies quando fechar o navegador</li>
          <li>Notificá-lo quando um cookie for criado</li>
        </ul>
        <p><strong>Instruções por navegador:</strong></p>
        <ul>
          <li>
            <a 
              href="https://support.google.com/chrome/answer/95647" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-witfy-500 hover:underline"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a 
              href="https://support.mozilla.org/pt-BR/kb/protecao-aprimorada-contra-rastreamento-firefox-desktop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-witfy-500 hover:underline"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a 
              href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-witfy-500 hover:underline"
            >
              Safari
            </a>
          </li>
          <li>
            <a 
              href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-witfy-500 hover:underline"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          <strong>Atenção:</strong> Bloquear ou excluir cookies pode afetar sua experiência na Witfy 
          e impedir o uso de algumas funcionalidades.
        </p>
      </section>

      <section>
        <h2>6. Armazenamento local (Local Storage e Session Storage)</h2>
        <p>
          Além de cookies, também usamos tecnologias de armazenamento local do navegador para:
        </p>
        <ul>
          <li>Manter preferências da interface</li>
          <li>Cache de dados para melhor performance</li>
          <li>Armazenar rascunhos de posts</li>
        </ul>
        <p>
          Estes dados são armazenados apenas no seu dispositivo e não são compartilhados conosco 
          automaticamente.
        </p>
      </section>

      <section>
        <h2>7. Seus direitos sob a LGPD</h2>
        <p>
          De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:
        </p>
        <ul>
          <li>Saber quais cookies estão sendo usados</li>
          <li>Retirar seu consentimento a qualquer momento</li>
          <li>Solicitar a exclusão de dados coletados por cookies</li>
          <li>Opor-se ao uso de cookies não essenciais</li>
        </ul>
        <p>
          Para exercer seus direitos, entre em contato: <strong>info@witfy.social</strong>
        </p>
      </section>

      <section>
        <h2>8. Atualizações desta política</h2>
        <p>
          Podemos atualizar esta Política de cookies periodicamente para refletir mudanças em nossas 
          práticas ou requisitos legais. A data da última atualização está indicada no topo desta página.
        </p>
        <p>
          Recomendamos que você revise esta política regularmente para se manter informado sobre como 
          usamos cookies.
        </p>
      </section>

      <section>
        <h2>9. Contato</h2>
        <p>
          Se você tiver dúvidas sobre como usamos cookies:
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:info@witfy.social" className="text-witfy-500 hover:underline">info@witfy.social</a><br />
          <strong>Responsável:</strong> Tatiane Justino<br />
          <strong>Endereço:</strong> São Paulo, Brasil<br />
          <strong>Website:</strong> <a href="https://witfy.social" className="text-witfy-500 hover:underline">witfy.social</a>
        </p>
      </section>
    </LegalPageLayout>
  );
}

