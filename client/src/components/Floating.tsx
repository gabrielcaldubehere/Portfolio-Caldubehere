import { useState } from "react";

export default function Floating() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    const texto = `Hola Gabriel, revisé tu portfolio y me gustaría conversar sobre oportunidades profesionales o proyectos. 
Quedo a disposición para coordinar una reunión.`;
    const url = `https://wa.me/5491122524605?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
    setMenuOpen(false);
  };

  const handleEmail = () => {
    const subject = "Solicitud de contacto profesional";
    const body = `Estimado Gabriel,
    He revisado tu portfolio y me interesa conversar sobre posibles oportunidades de colaboración o proyectos.
    Quedo atento a tu respuesta.
    Saludos cordiales,
    [Nombre del remitente]`;
    const url = `mailto:contacto@gabrielcaldubehere.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setMenuOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!menuOpen && (
        <button
          onClick={() => setMenuOpen(true)}
          className="p-3 rounded-full shadow-md transition-transform duration-300 hover:scale-110"
          style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
          aria-label="Contacto"
        >
          {/* Logo WhatsApp en blanco */}
          <svg viewBox="0 0 448 448" className="w-6 h-6 sm:w-8 sm:h-8">
            <path
              d="M224 80c-79.5 0-144 64.5-144 144 0 28.2 8.2 54.5 22.3 76.5L80 368l68.2-22.3c21.6 13.1 47.3 20.7 75.8 20.7 79.5 0 144-64.5 144-144S303.5 80 224 80zm0 256c-25.1 0-48.5-7.3-68.1-19.8l-4.9-3.1-40.5 13.2 13.4-39.5-3.2-5c-13.2-20.6-20.7-44.6-20.7-70.8 0-70.7 57.5-128.2 128.2-128.2S352.2 153.3 352.2 224c0 70.7-57.5 128-128.2 128zm70.7-97.2c-3.9-2-23-11.3-26.5-12.6-3.6-1.3-6.2-2-8.8 2-2.6 4-10.1 12.6-12.4 15.2-2.3 2.6-4.6 2.9-8.5 1-3.9-2-16.5-6.1-31.4-19.5-11.6-10.3-19.5-23-21.8-26.9-2.3-4-0.2-6.2 1.7-8.2 1.8-1.8 4-4.6 6-6.9 2-2.3 2.6-4 3.9-6.6 1.3-2.6 0.7-5-0.3-7-1-2-8.8-21.2-12.1-29.1-3.2-7.7-6.5-6.6-8.8-6.7-2.3-0.1-5-0.1-7.7-0.1s-7 1-10.7 5c-3.7 4-14.1 13.8-14.1 33.7s14.4 39.1 16.4 41.8c2 2.6 28.3 43.2 68.7 58.8 9.6 3.7 17 5.9 22.8 7.5 9.6 2.6 18.4 2.2 25.3 1.3 7.7-0.9 23.7-9.7 27.1-19.1 3.4-9.4 3.4-17.5 2.4-19.1-1-1.6-3.6-2.6-7.5-4.6z"
              fill="#fff"
            />
          </svg>
        </button>
      )}

      {menuOpen && (
        <div className="rounded-xl shadow-lg p-6 w-[90vw] max-w-sm flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md text-white">
          <button onClick={handleWhatsApp} className="flex items-center gap-2 w-full justify-center bg-green-600 hover:bg-green-500 text-white font-medium px-4 py-2 rounded-lg transition">
            <svg viewBox="0 0 448 448" className="w-5 h-5"><path d="M224 80c-79.5..." fill="#fff"/></svg> WhatsApp
          </button>
          <button onClick={handleEmail} className="flex items-center gap-2 w-full justify-center bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition">
            Email
          </button>
          <button onClick={() => setMenuOpen(false)} className="w-full text-red-400 hover:text-red-300 font-medium mt-2">Cerrar</button>
        </div>
      )}
    </div>
  );
}

