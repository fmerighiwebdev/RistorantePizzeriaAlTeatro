import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, surname, email, phone, people, date, time, notes, privacy } =
    await request.json();

  if (!name.trim()) {
    return NextResponse.json({
      message: "Il nome è obbligatorio.",
      status: 400,
    });
  }
  if (!surname.trim()) {
    return NextResponse.json({
      message: "Il cognome è obbligatorio.",
      status: 400,
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return NextResponse.json({ message: "L'email non è valida.", status: 400 });
  }

  if (!email.trim()) {
    return NextResponse.json({
      message: "L'email è obbligatoria.",
      status: 400,
    });
  }
  if (!phone.trim()) {
    return NextResponse.json({
      message: "Il telefono è obbligatorio.",
      status: 400,
    });
  }

  const phoneRegex = /^[0-9]{10,15}$/;
  if (!phoneRegex.test(phone.trim())) {
    return NextResponse.json({
      message: "Il telefono non è valido.",
      status: 400,
    });
  }

  if (!people.trim()) {
    return NextResponse.json({
      message: "Il numero di persone è obbligatorio.",
      status: 400,
    });
  }
  if (!date.trim()) {
    return NextResponse.json({
      message: "La data è obbligatoria.",
      status: 400,
    });
  }
  if (!time.trim()) {
    return NextResponse.json({ message: "L'ora è obbligatoria.", status: 400 });
  }
  if (!privacy) {
    return NextResponse.json({
      message: "Devi accettare la privacy.",
      status: 400,
    });
  }

  const fullName = `${name} ${surname}`;

  const formattedDate = new Date(date).toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // Email message configuration
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "Ristorante Pizzeria Al Teatro <alteatrodesenzano@gmail.com>",
    to: process.env.EMAIL_USER,
    subject: "Nuova Prenotazione Ricevuta!",
    html: `<div style="font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 20px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
      <h2 style="text-align: center; color: #333;">Nuova prenotazione! 🥳</h2>
      <p style="font-size: 16px; color: #333;">Di seguito i dettagli della prenotazione:</p>

      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px; font-size: 16px; background-color: #ffffff; border: 1px solid #ddd; color: #333;">Nome e cognome</td>
          <td style="padding: 10px; font-size: 16px; background-color: #ffffff; border: 1px solid #ddd; color: #333;">${fullName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-size: 16px; background-color: #f9f9f9; border: 1px solid #ddd; color: #333;">Telefono</td>
          <td style="padding: 10px; font-size: 16px; background-color: #f9f9f9; border: 1px solid #ddd; color: #333;">${
            phone
          }</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-size: 16px; background-color: #ffffff; border: 1px solid #ddd; color: #333;">Email</td>
          <td style="padding: 10px; font-size: 16px; background-color: #ffffff; border: 1px solid #ddd; color: #333;">${
            email
          }</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-size: 16px; background-color: #f9f9f9; border: 1px solid #ddd; color: #333;">Numero persone</td>
          <td style="padding: 10px; font-size: 16px; background-color: #f9f9f9; border: 1px solid #ddd; color: #333;">${
            people
          }</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-size: 16px; background-color: #ffffff; border: 1px solid #ddd; color: #333;">Data</td>
          <td style="padding: 10px; font-size: 16px; background-color: #ffffff; border: 1px solid #ddd; color: #333;">${
            date
          }</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-size: 16px; background-color: #f9f9f9; border: 1px solid #ddd; color: #333;">Ora</td>
          <td style="padding: 10px; font-size: 16px; background-color: #f9f9f9; border: 1px solid #ddd; color: #333;">${
            time
          }</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-size: 16px; background-color: #ffffff; border: 1px solid #ddd; color: #333;">Note aggiuntive</td>
          <td style="padding: 10px; font-size: 16px; background-color: #ffffff; border: 1px solid #ddd; color: #333;">${
            notes || "Nessuna."
          }</td>
        </tr>
      </table>
    </div>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: "Prenotazione effettuata.",
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Errore durante la prenotazione.",
      status: 500,
    });
  }

  // WhatsApp message configuration
  /* try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);

    const ownerWhatsAppNumber = process.env.OWNER_WHATSAPP_NUMBER;
    const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER;

    const message = `*Prenotazione Ricevuta!*
    📅 _Dettagli della prenotazione:_

    👤 *Nome:* ${fullName}
    📞 *Telefono:* ${phone}
    📧 *Email:* ${email}
    👥 *Numero di persone:* ${people}
    📆 *Data:* ${formattedDate}
    ⏰ *Ora:* ${time}
    📝 *Note:* ${notes || "Nessuna"}`;

    await client.messages.create({
      from: twilioWhatsAppNumber,
      body: message,
      to: ownerWhatsAppNumber,
    });

    return NextResponse.json({
      message: "Prenotazione effettuata.",
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Errore durante la prenotazione.",
      status: 500,
    });
  } */
}
