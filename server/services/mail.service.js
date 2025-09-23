const nodemailer = require("nodemailer");

exports.sendMail = async (nombre, email, mensaje) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT) || 465,
    secure: true, // true para 465, false para 587
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // permite certificados autofirmados
    },
  });

  const mailOptions = {
    from: `"Formulario Web" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER, // recibe tú mismo el mail
    replyTo: email, // correo del usuario
    subject: `Nuevo mensaje de ${nombre}`,
    text: `
Nombre: ${nombre}
Email: ${email}
Mensaje: ${mensaje}
    `,
  };

  await transporter.sendMail(mailOptions);
};
