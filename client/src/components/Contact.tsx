import { useState } from "react";
import { sendContactForm } from "../services/contactService";

interface Errors {
  nombre?: string;
  email?: string;
  mensaje?: string;
}

function Contact() {
  const [nombre, setNombre] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mensaje, setMensaje] = useState<string>("");

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "El email no es válido";
    }
    if (!mensaje.trim()) newErrors.mensaje = "El mensaje es obligatorio";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true si no hay errores
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      setStatus("error");
      return;
    }

    setStatus("idle"); // resetea el status antes de enviar

    try {
  const data = { nombre, email, mensaje };
  const res = await sendContactForm(data);

  alert("✅ " + res.message); // ✅ cambió de res.msg a res.message
  setNombre("");
  setEmail("");
  setMensaje("");
  setStatus("success");
} catch (err) {
  let message = "Hubo un problema al enviar el formulario.";
  if (err instanceof Error) message = err.message;

  alert("❌ " + message);
  setStatus("error");
}
  };

  return (
    <section className="w-full max-w-lg mx-auto p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl text-stone-100 font-poppins mb-4 sm:mb-6 text-center">
      Contacto
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="w-full p-2 sm:p-3 rounded-lg border border-slate-400/40 bg-transparent text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      {errors.nombre && <span className="text-red-500 text-xs sm:text-sm">{errors.nombre}</span>}

      <input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 sm:p-3 rounded-lg border border-slate-400/40 bg-transparent text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      {errors.email && <span className="text-red-500 text-xs sm:text-sm">{errors.email}</span>}

      <textarea
        placeholder="Escribime tu mensaje..."
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        className="w-full p-2 sm:p-3 rounded-lg border border-slate-400/40 bg-transparent text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 min-h-[80px] sm:min-h-[120px]"
      ></textarea>
      {errors.mensaje && <span className="text-red-500 text-xs sm:text-sm">{errors.mensaje}</span>}

      <button
        type="submit"
        className="bg-teal-600 text-slate-100 py-2 px-4 sm:px-6 rounded-full font-medium shadow-md hover:bg-teal-500 hover:scale-105 transition w-full"
      >
        Enviar
      </button>

      {status === "success" && <p className="text-green-500 mt-2 text-xs sm:text-base">Formulario enviado correctamente ✅</p>}
      {status === "error" && <p className="text-red-500 mt-2 text-xs sm:text-base">Por favor, corrige los errores ❌</p>}
      </form>
    </section>
  );
}

export default Contact;
