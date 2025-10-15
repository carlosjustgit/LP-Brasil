import LegalPageLayout from './LegalPageLayout';

export default function PrivacyPage() {
  return (
    <LegalPageLayout 
      title="Política de privacidade" 
      lastUpdated="15 de outubro de 2025"
    >
      <section>
        <h2>1. Introdução</h2>
        <p>
          A Witfy (Socially Smart), operada por Tatiane Justino (entidade empresarial registrada no Brasil), 
          com sede em São Paulo, Brasil, está comprometida em proteger sua privacidade. Esta política explica 
          como coletamos, usamos e protegemos suas informações, incluindo dados recebidos das Meta Platforms 
          (Facebook e Instagram), quando você usa nossa plataforma de automação de mídia social com IA.
        </p>
      </section>

      <section>
        <h2>2. Informações que coletamos</h2>
        <p>Coletamos as seguintes informações:</p>
        <ul>
          <li>
            <strong>Diretamente de você:</strong> nome, endereço de email, telefone, detalhes da conta, 
            documentos enviados, preferências de marca e informações de pagamento.
          </li>
          <li>
            <strong>Do seu uso da nossa plataforma:</strong> logs de uso, atividade de geração de posts, 
            interações da plataforma, endereço IP e dados de dispositivo.
          </li>
          <li>
            <strong>Das Meta Platforms (Facebook/Instagram) mediante sua autorização:</strong> nome da página 
            e conta, ID da página, ID da conta comercial do Instagram, tokens de acesso, insights e métricas 
            de conteúdo da página (apenas com permissão).
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Como usamos dados da Meta</h2>
        <p>Usamos dados da Meta exclusivamente para:</p>
        <ul>
          <li>Conectar sua página do Facebook ou conta comercial do Instagram ao seu perfil Witfy</li>
          <li>Publicar ou agendar posts que você autoriza através da nossa interface</li>
          <li>Recuperar insights de desempenho (alcance, engajamento, etc.) para mostrar análises</li>
          <li>Manter e gerenciar suas contas conectadas</li>
          <li>Cumprir as políticas da plataforma Meta</li>
        </ul>
        <p>
          <strong>Não usamos dados da Meta para recursos não relacionados ou os compartilhamos com terceiros.</strong>
        </p>
      </section>

      <section>
        <h2>4. Compartilhamento e armazenamento de dados</h2>
        <p>
          Não vendemos ou compartilhamos seus dados pessoais ou da Meta com parceiros externos. 
          Tokens OAuth e IDs de conta são armazenados de forma segura em nosso banco de dados usando 
          criptografia AES-256. Seus dados são hospedados em servidores seguros na região da União Europeia, 
          em conformidade com a LGPD (Lei Geral de Proteção de Dados) do Brasil.
        </p>
        <p>
          Seus dados são usados apenas dentro da plataforma Witfy para fornecer serviços conforme descrito 
          nesta política.
        </p>
      </section>

      <section>
        <h2>5. Seus direitos sob a LGPD</h2>
        <p>De acordo com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018), você tem os seguintes direitos:</p>
        <ul>
          <li><strong>Confirmação e acesso:</strong> saber se processamos seus dados e ter acesso a eles</li>
          <li><strong>Correção:</strong> solicitar correção de dados incompletos, inexatos ou desatualizados</li>
          <li><strong>Anonimização, bloqueio ou eliminação:</strong> de dados desnecessários ou excessivos</li>
          <li><strong>Portabilidade:</strong> solicitar transferência de seus dados para outro fornecedor</li>
          <li><strong>Eliminação:</strong> solicitar exclusão de dados tratados com seu consentimento</li>
          <li><strong>Revogação do consentimento:</strong> retirar seu consentimento a qualquer momento</li>
          <li><strong>Oposição:</strong> opor-se ao tratamento de dados</li>
        </ul>
        <p>
          Para exercer seus direitos, entre em contato conosco através de: <strong>info@witfy.social</strong>
        </p>
      </section>

      <section>
        <h2>6. Exclusão de dados</h2>
        <p>Você tem controle total sobre seus dados. Você pode:</p>
        <ul>
          <li>Solicitar exclusão de sua conta e todos os dados associados</li>
          <li>Desconectar suas contas sociais a qualquer momento através do painel da Witfy</li>
          <li>Revogar permissões do Facebook via: Configurações do Facebook → Integrações de negócios</li>
        </ul>
        <p>
          Para solicitar exclusão completa de dados, envie um email para: <strong>info@witfy.social</strong><br />
          Processaremos sua solicitação dentro de 15 dias úteis, conforme exigido pela LGPD.
        </p>
      </section>

      <section>
        <h2>7. Cookies e rastreamento</h2>
        <p>
          Usamos cookies essenciais para o funcionamento da plataforma e cookies analíticos para entender 
          como você usa nosso serviço. Você pode gerenciar suas preferências de cookies através do banner 
          de consentimento ou nas configurações do seu navegador.
        </p>
        <p>
          Para mais informações, consulte nossa <a href="/cookies" className="text-witfy-500 hover:underline">Política de cookies</a>.
        </p>
      </section>

      <section>
        <h2>8. Retenção de dados</h2>
        <p>
          Mantemos seus dados pessoais pelo tempo necessário para fornecer nossos serviços e cumprir 
          obrigações legais. Após a exclusão da conta, seus dados são removidos permanentemente em até 
          90 dias, exceto quando a retenção é exigida por lei.
        </p>
      </section>

      <section>
        <h2>9. Segurança</h2>
        <p>
          Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados contra 
          acesso não autorizado, alteração, divulgação ou destruição, incluindo:
        </p>
        <ul>
          <li>Criptografia SSL/TLS para transmissão de dados</li>
          <li>Criptografia AES-256 para dados armazenados</li>
          <li>Autenticação de dois fatores disponível</li>
          <li>Auditorias regulares de segurança</li>
          <li>Acesso restrito a dados pessoais apenas para funcionários autorizados</li>
        </ul>
      </section>

      <section>
        <h2>10. Transferência internacional de dados</h2>
        <p>
          Seus dados podem ser processados em servidores localizados na União Europeia. Garantimos que 
          todas as transferências internacionais de dados estão em conformidade com a LGPD e utilizam 
          cláusulas contratuais padrão aprovadas.
        </p>
      </section>

      <section>
        <h2>11. Alterações nesta política</h2>
        <p>
          Podemos atualizar esta política periodicamente. Notificaremos você sobre mudanças significativas 
          por email ou através de um aviso destacado em nossa plataforma. Recomendamos revisar esta política 
          regularmente.
        </p>
      </section>

      <section>
        <h2>12. Encarregado de proteção de dados</h2>
        <p>
          Para questões relacionadas à proteção de dados, você pode entrar em contato com nossa encarregada:
        </p>
        <p>
          <strong>Tatiane Justino</strong><br />
          Email: <a href="mailto:info@witfy.social" className="text-witfy-500 hover:underline">info@witfy.social</a><br />
          Endereço: São Paulo, Brasil
        </p>
      </section>

      <section>
        <h2>13. Entre em contato</h2>
        <p>
          Se você tiver alguma dúvida sobre esta política de privacidade ou sobre como tratamos seus dados:
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:info@witfy.social" className="text-witfy-500 hover:underline">info@witfy.social</a><br />
          <strong>Endereço:</strong> São Paulo, Brasil<br />
          <strong>Website:</strong> <a href="https://witfy.social" className="text-witfy-500 hover:underline">witfy.social</a>
        </p>
      </section>
    </LegalPageLayout>
  );
}

