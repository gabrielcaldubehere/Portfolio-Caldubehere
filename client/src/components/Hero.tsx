import { useInView } from "../hooks/useInView";
import { contactConfig } from "../config/contact";

function GitHubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="inicio" className="scroll-mt-28 pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div
        ref={ref}
        className={`reveal ${inView ? "reveal-visible" : ""} flex w-full flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-12 lg:gap-20`}
      >
        <div className="w-full text-center md:flex-1 md:min-w-0 md:text-left lg:max-w-xl">
          <h1 className="text-3xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
            {contactConfig.name}
            <span className="mt-2 block text-xl font-medium text-[var(--muted)] sm:text-2xl lg:mt-3 lg:text-3xl">
              {contactConfig.title}
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base md:mx-0 md:mt-5 lg:text-lg">
            Desarrollo productos web modernos y soluciones con IA aplicada,
            combinando interfaces claras y performantes con arquitecturas
            backend robustas y automatización de flujos de trabajo.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 md:mt-7 md:justify-start">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110 md:px-6 md:py-2.5"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-2 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] md:px-6 md:py-2.5"
            >
              Contacto
            </a>
            <a
              href={contactConfig.cvPath}
              download="Gabriel-Caldubehere.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-5 py-2 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] md:px-6 md:py-2.5"
            >
              Descargar CV
            </a>
            <a
              href={contactConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] md:h-11 md:w-11"
            >
              <GitHubIcon className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a
              href={contactConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[#0A66C2] transition hover:-translate-y-0.5 hover:border-[#0A66C2] hover:brightness-110 dark:text-[#70b5f9] md:h-11 md:w-11"
            >
              <LinkedInIcon className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-[var(--muted)] sm:text-sm md:mt-7 md:justify-start md:gap-x-5 lg:gap-x-6">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />{" "}
              React · TypeScript · Tailwind
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />{" "}
              Node · Python · APIs
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />{" "}
              IA aplicada · Automatización
            </li>
          </ul>
        </div>

        <div className="group relative mx-auto w-40 shrink-0 sm:w-44 md:mx-0 md:w-48 lg:w-56">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-[var(--accent-2)]/20 blur-2xl transition-all duration-300 group-hover:opacity-100 group-hover:blur-3xl" />
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-2 shadow-[var(--shadow)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[color-mix(in_srgb,var(--accent)_35%,var(--border))] group-hover:shadow-[0_20px_50px_rgba(15,118,110,0.18)] dark:group-hover:shadow-[0_20px_50px_rgba(45,212,191,0.12)]">
            <img
              src="./perfil_gris.webp"
              alt={contactConfig.name}
              className="aspect-[4/5] w-full rounded-2xl object-cover object-top transition-all duration-300 group-hover:scale-[1.02]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
