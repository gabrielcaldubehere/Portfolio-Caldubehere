function AboutMe() {
  return (
    <section className="flex flex-col justify-center items-center w-full mt-12 p-6">
      <h2 className="text-3xl md:text-4xl text-stone-100 font-poppins mb-6">
        Sobre Mí
      </h2>

      <div className="max-w-3xl text-center md:text-left text-slate-200 font-light tracking-wide leading-relaxed space-y-4">
        <p>
          Soy <span className="font-medium text-teal-400">Gabriel Caldubehere</span>, 
          desarrollador <span className="font-medium">Full Stack</span> con formación en 
          front‑end y back‑end. Me especializo en{" "}
          <span className="text-teal-300">
            React, Vite, Tailwind, Node.js, Express y MySQL
          </span>.
        </p>

        <p>
          Combino más de 7 años de experiencia en atención al cliente y ventas con mi pasión por el desarrollo web, 
          lo que me permite aportar soluciones técnicas con enfoque en la experiencia del usuario y la comunicación clara.
        </p>

        <p>
          Actualmente estoy construyendo proyectos propios y un portfolio activo, con el objetivo de 
          crecer en roles de programación remota y aportar valor en equipos dinámicos.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;