import { useState } from "react";
import Section from "./Section";
import { contactConfig } from "../config/contact";

function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="3" fill="#EA4335" />
      <path d="M4 6.5l8 6 8-6" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 17.5L9.5 13" fill="none" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M19.5 17.5L14.5 13" fill="none" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#25D366"
        d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.14 1.59 5.95L0 24l6.33-1.66a11.86 11.86 0 0 0 5.72 1.46h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.43-8.43Z"
      />
      <path
        fill="#fff"
        d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
      />
    </svg>
  );
}

function CopyIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export default function ContactForm() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="Conversemos"
      description="¿Tenés una propuesta, proyecto o posición en mente? Escribime por email o WhatsApp y te respondo a la brevedad."
    >
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow)] sm:p-8">
        <h3 className="text-lg font-semibold text-[var(--text)]">Disponibilidad</h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Abierto a oportunidades profesionales, colaboraciones freelance y proyectos de desarrollo
          full stack o soluciones con IA aplicada.
        </p>
        <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span>Remoto / híbrido · Argentina (GMT-3).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span>Stack: React, TypeScript, Node/Python, SQL, Supabase, LLM tooling.</span>
          </li>
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${contactConfig.email}`}
            className="inline-flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm font-medium text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-sm"
          >
            <MailIcon />
            <span>
              <span className="block text-xs uppercase tracking-[0.12em] text-[var(--muted)]">Email</span>
              <span className="block">{contactConfig.email}</span>
            </span>
          </a>

          <a
            href={contactConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm font-medium text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[#25D366] hover:shadow-sm"
          >
            <WhatsAppIcon />
            <span>
              <span className="block text-xs uppercase tracking-[0.12em] text-[var(--muted)]">WhatsApp</span>
              <span className="block">{contactConfig.whatsappUser}</span>
            </span>
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm font-medium text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-sm"
            aria-label="Copiar correo electrónico"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center text-[var(--muted)]">
              <CopyIcon />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.12em] text-[var(--muted)]">Copiar correo</span>
              <span className="block">{copied ? "Copiado" : contactConfig.email}</span>
            </span>
          </button>
        </div>
      </div>
    </Section>
  );
}
