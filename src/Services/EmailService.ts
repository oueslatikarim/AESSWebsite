import { Injectable } from '@angular/core';
import * as Email from 'smtp.js';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(name: string, email: string, message: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const smtp = new Email.SMTPClient({
        host: 'smtp.yourhost.com', // Remplace avec le serveur SMTP que tu utilises
        port: 587, // Port SMTP (peut varier selon le serveur)
        secure: false, // true pour SSL, false pour TSL
        username: 'your_username', // Ton nom d'utilisateur SMTP
        password: 'your_password' // Ton mot de passe SMTP
      });

      smtp.send({
        from: 'your_email@example.com', // Ton adresse e-mail
        to: 'recipient@example.com', // L'adresse e-mail du destinataire
        subject: 'New contact message',
        body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      }).then(resolve)
        .catch(reject);
    });
  }
}
