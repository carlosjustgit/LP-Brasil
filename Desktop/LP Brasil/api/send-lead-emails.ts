import type { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
const apiKey = process.env.SENDGRID_API_KEY || '';
console.log('SendGrid API Key exists:', !!apiKey);
console.log('SendGrid API Key length:', apiKey.length);
console.log('SendGrid API Key starts with SG:', apiKey.startsWith('SG.'));

if (!apiKey) {
  console.error('SENDGRID_API_KEY is not set!');
}

sgMail.setApiKey(apiKey);

interface LeadData {
  name: string;
  email: string;
  company?: string;
  variant: 'aida' | 'pas';
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, variant }: LeadData = req.body;

    // Validate required fields
    if (!name || !email || !variant) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'info@witfy.social';

    // Email 1: Admin notification to info@witfy.social
    const adminEmail = {
      to: 'info@witfy.social',
      from: fromEmail,
      subject: `🎉 Nova solicitação de demo - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #8943FE 0%, #6B2FD1 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #8943FE; }
            .badge { display: inline-block; background: #8943FE; color: white; padding: 5px 10px; border-radius: 5px; font-size: 12px; text-transform: uppercase; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🎉 Nova Solicitação de Demo!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Landing Page Brasil</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Nome:</span><br>
                <strong>${name}</strong>
              </div>
              
              <div class="field">
                <span class="label">E-mail:</span><br>
                <a href="mailto:${email}">${email}</a>
              </div>
              
              ${company ? `
              <div class="field">
                <span class="label">Empresa:</span><br>
                <strong>${company}</strong>
              </div>
              ` : ''}
              
              <div class="field">
                <span class="label">Variante A/B:</span><br>
                <span class="badge">${variant.toUpperCase()}</span>
              </div>
              
              <div class="field">
                <span class="label">Data/Hora:</span><br>
                ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
              </div>
              
              <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
              
              <p style="color: #666; font-size: 14px;">
                💡 <strong>Próximos passos:</strong> Entre em contato com ${name} para agendar a demonstração.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Nova Solicitação de Demo - Landing Page Brasil

Nome: ${name}
E-mail: ${email}
${company ? `Empresa: ${company}` : ''}
Variante: ${variant.toUpperCase()}
Data/Hora: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}

Entre em contato para agendar a demonstração.
      `.trim(),
    };

    // Email 2: User confirmation in Brazilian Portuguese
    const userEmail = {
      to: email,
      from: fromEmail,
      subject: 'Demo solicitada com sucesso! 🎉 | Witfy',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #8943FE 0%, #6B2FD1 100%); color: white; padding: 40px 30px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: white; padding: 40px 30px; }
            .footer { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; text-align: center; color: #666; font-size: 14px; }
            .button { display: inline-block; background: #8943FE; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 10px 5px; }
            .button:hover { background: #6B2FD1; }
            .checkmark { font-size: 48px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="checkmark">✅</div>
              <h1 style="margin: 20px 0 10px 0;">Demo solicitada com sucesso!</h1>
              <p style="margin: 0; opacity: 0.9;">Obrigado pelo seu interesse, ${name.split(' ')[0]}!</p>
            </div>
            
            <div class="content">
              <p>Olá <strong>${name}</strong>,</p>
              
              <p>Recebemos sua solicitação de demonstração da Witfy e estamos muito animados em mostrar como podemos transformar a gestão das suas redes sociais! 🚀</p>
              
              <p><strong>O que acontece agora?</strong></p>
              <ul>
                <li>Nossa equipe irá entrar em contato nas próximas 24 horas</li>
                <li>Vamos agendar uma demonstração personalizada para você</li>
                <li>Você terá a oportunidade de fazer todas as suas perguntas</li>
              </ul>
              
              <p><strong>Enquanto isso, você pode:</strong></p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://witfy.social" class="button" style="color: white;">
                  🌐 Conhecer nosso site
                </a>
                <a href="https://app.witfy.social" class="button" style="color: white;">
                  🚀 Começar agora mesmo
                </a>
              </div>
              
              <p style="background: #f0f7ff; border-left: 4px solid #8943FE; padding: 15px; margin: 20px 0;">
                💡 <strong>Dica:</strong> Visite <a href="https://witfy.social" style="color: #8943FE;">witfy.social</a> para saber mais sobre nossas funcionalidades, ou acesse <a href="https://app.witfy.social" style="color: #8943FE;">app.witfy.social</a> para criar sua conta e começar a experimentar gratuitamente!
              </p>
              
              <p>Estamos ansiosos para ajudar você a dominar as redes sociais com inteligência! 💜</p>
              
              <p>
                Até breve,<br>
                <strong>Equipe Witfy</strong>
              </p>
            </div>
            
            <div class="footer">
              <p style="margin: 0 0 10px 0;">
                <strong>Witfy - A sua aliada Socially Smart</strong>
              </p>
              <p style="margin: 0 0 20px 0;">
                Automatiza, analisa e interage nas suas redes de forma humana, criativa e eficaz.
              </p>
              <p style="margin: 0;">
                <a href="https://witfy.social" style="color: #8943FE; text-decoration: none; margin: 0 10px;">Site</a> |
                <a href="https://app.witfy.social" style="color: #8943FE; text-decoration: none; margin: 0 10px;">App</a> |
                <a href="https://witfy.social/contato" style="color: #8943FE; text-decoration: none; margin: 0 10px;">Contato</a>
              </p>
              <p style="margin: 20px 0 0 0; font-size: 12px; color: #999;">
                © ${new Date().getFullYear()} Witfy. Todos os direitos reservados.<br>
                Feito com ❤️ no Brasil
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
✅ Demo solicitada com sucesso!

Olá ${name},

Recebemos sua solicitação de demonstração da Witfy e estamos muito animados em mostrar como podemos transformar a gestão das suas redes sociais!

O que acontece agora?
- Nossa equipe irá entrar em contato nas próximas 24 horas
- Vamos agendar uma demonstração personalizada para você
- Você terá a oportunidade de fazer todas as suas perguntas

Enquanto isso, você pode:

🌐 Conhecer nosso site: https://witfy.social
🚀 Começar agora mesmo: https://app.witfy.social

Visite witfy.social para saber mais sobre nossas funcionalidades, ou acesse app.witfy.social para criar sua conta e começar a experimentar gratuitamente!

Estamos ansiosos para ajudar você a dominar as redes sociais com inteligência!

Até breve,
Equipe Witfy

---
Witfy - A sua aliada Socially Smart
© ${new Date().getFullYear()} Witfy. Todos os direitos reservados.
Feito com ❤️ no Brasil
      `.trim(),
    };

    // Send both emails
    await Promise.all([
      sgMail.send(adminEmail),
      sgMail.send(userEmail),
    ]);

    return res.status(200).json({ 
      success: true, 
      message: 'Emails sent successfully' 
    });

  } catch (error) {
    console.error('SendGrid error:', error);
    return res.status(500).json({ 
      error: 'Failed to send emails',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

