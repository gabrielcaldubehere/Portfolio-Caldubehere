import Section from "./Section";
import { projects } from "../data/projects";

function StatusBadge({ status }: { status: "Completado" | "En desarrollo" }) {
  const isDone = status === "Completado";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
        isDone
          ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500/30"
          : "bg-amber-500/15 text-amber-700 dark:text-amber-300 ring-1 ring-amber-500/30"
      }`}
    >
      {status}
    </span>
  );
}

function GitHubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

export default function CardProjects() {
  return (
    <Section
      id="proyectos"
      title="Proyectos destacados"
      description="Soluciones y productos en los que trabajé, con foco en resolver problemas reales mediante desarrollo full stack e IA aplicada."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex h-full flex-col rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow)]"
          >
            <div className="flex flex-wrap items-center gap-2">
              <StatusBadge status={project.status} />
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-[var(--text)]">
              {project.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
              {project.summary}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-xs font-medium text-[var(--text)]"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <GitHubIcon />
                  GitHub
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110"
                >
                  Demo en vivo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
