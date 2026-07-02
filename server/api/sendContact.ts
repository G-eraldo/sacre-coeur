import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { name, phone, email, textarea } = body;

    if (!name || !email || !textarea) {
      throw createError({
        statusCode: 400,
        statusMessage: "Certains champs obligatoires sont manquants.",
      });
    }

    const data = await resend.emails.send({
      from: "contact@sacrecoeur-breteuil.fr",
      to: `contact@lafabriqueducode.fr`,
      subject: "Nouveau formulaire de contact",
      html: `
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Nouveau Message de Contact - Institution Sacré-Cœur</title>
                <style>
                    body {
                        font-family: 'Poppins', Arial, sans-serif;
                        line-height: 1.6;
                        color: #1a1a1a;
                        background-color: #F9F7F4;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 40px auto;
                        background: #ffffff;
                        overflow: hidden;
                        border-radius: 4px;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
                        border-top: 6px solid #6C1C23;
                    }
                    .header {
                        padding: 30px;
                        text-align: center;
                        background: #ffffff;
                    }
                    .header h1 {
                        color: #6C1C23;
                        font-family: 'Merriweather', serif;
                        font-size: 24px;
                        margin: 0;
                        letter-spacing: -0.02em;
                    }
                    .content {
                        padding: 0 40px 40px;
                    }
                    .intro {
                        font-size: 16px;
                        color: #666;
                        margin-bottom: 30px;
                        text-align: center;
                    }
                    .info-box {
                        background-color: #ffffff;
                        border: 1px solid #f0f0f0;
                        padding: 25px;
                        border-radius: 2px;
                        margin-bottom: 30px;
                        border-left: 4px solid #C4A55F;
                    }
                    .info-item {
                        margin-bottom: 12px;
                        font-size: 14px;
                    }
                    .info-label {
                        font-weight: bold;
                        color: #6C1C23;
                        text-transform: uppercase;
                        letter-spacing: 0.1em;
                        font-size: 11px;
                        display: block;
                        margin-bottom: 2px;
                    }
                    .info-value {
                        color: #1a1a1a;
                        font-size: 15px;
                    }
                    .message-title {
                        font-family: 'Merriweather', serif;
                        color: #6C1C23;
                        font-size: 18px;
                        margin: 0 0 15px 0;
                    }
                    .message-content {
                        background-color: #F9F7F4;
                        padding: 20px;
                        border-radius: 2px;
                        font-size: 15px;
                        white-space: pre-wrap;
                        color: #444;
                        line-height: 1.8;
                    }
                    .footer {
                        padding: 20px;
                        text-align: center;
                        font-size: 12px;
                        color: #999;
                        background: #fcfcfc;
                        border-top: 1px solid #eee;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Institution Sacré-Cœur</h1>
                        <div style="width: 40px; height: 2px; background: #C4A55F; margin: 15px auto;"></div>
                    </div>
                    
                    <div class="content">
                        <p class="intro">Une nouvelle demande de contact a été soumise depuis le site internet.</p>

                        <div class="info-box">
                            <div class="info-item">
                                <span class="info-label">Expéditeur</span>
                                <span class="info-value">${name}</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">Coordonnées</span>
                                <span class="info-value">
                                    ${phone ? `📞 ${phone}<br/>` : ""}
                                    📧 <a href="mailto:${email}" style="color: #6C1C23; text-decoration: none;">${email}</a>
                                </span>
                            </div>
                        </div>
                        
                        <h3 class="message-title">Message reçu :</h3>
                        <div class="message-content">${textarea}</div>
                    </div>

                    <div class="footer">
                        Ceci est une notification automatique de votre site web.<br/>
                        Institution Sacré-Cœur de Breteuil
                    </div>
                </div>
            </body>
            </html>
            `,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
});
