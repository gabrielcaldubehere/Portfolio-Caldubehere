const mailService = require("../services/mail.service");

exports.sendEmail = async (req, res) => {
  const { nombre, email, mensaje } = req.body;
  console.log("📩 Datos recibidos:", { nombre, email, mensaje });

  try {
    // Llamada a tu servicio de mail
    await mailService.sendMail(nombre, email, mensaje);

    // Si todo OK
    res.status(200).json({ success: true, msg: "Formulario enviado ✅" });
  } catch (error) {
  console.error("Error al enviar el email:", error); // imprime TODO el error en consola
  res.status(500).json({ message: error.message || "Error al enviar el email" });
}

};