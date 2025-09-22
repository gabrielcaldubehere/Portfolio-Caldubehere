const nodemailer = require("nodemailer");

exports.sendMail = async (nombre, email, mensaje) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: process.env.MAIL_PORT == 465, // true si 465, false si 587
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Formulario Web" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER, // tu correo
    replyTo: email,            // correo del usuario que envía
    subject: `Nuevo mensaje de ${nombre}`,
    text: `
Nombre: ${nombre}
Email: ${email}
Mensaje: ${mensaje}
    `,
  };

  await transporter.sendMail(mailOptions);
};
