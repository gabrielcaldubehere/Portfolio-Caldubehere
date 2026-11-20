import { contactConfig } from "../config/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-elevated)_70%,transparent)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold text-[var(--text)]">{contactConfig.name}</p>
          <p className="text-xs text-[var(--muted)]">{contactConfig.title}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
          <a href={contactConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-[var(--accent)]">
            GitHub
          </a>
          <a href={contactConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-[var(--accent)]">
            LinkedIn
          </a>
          <a href={`mailto:${contactConfig.email}`} className="transition hover:text-[var(--accent)]">
            Email
          </a>
        </div>
        <p className="text-xs text-[var(--muted)]">© {year} · Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
