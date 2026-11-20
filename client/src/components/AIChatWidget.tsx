import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "../data/projects";
import { contactConfig } from "../config/contact";

type Role = "assistant" | "user";
interface Message {
  id: string;
  role: Role;
  content: string;
}

const suggestedQuestions = [
  "Quiero contactarte por WhatsApp",
  "Quiero enviarte un email",
  "¿Cuál es tu perfil y stack?",
  "¿Qué proyectos destacás?",
];

function buildKnowledge() {
  const projectLines = projects
    .map((p) => `- ${p.title} (${p.status}): ${p.summary} Stack: ${p.stack.join(", ")}.`)
    .join("\n");
  return `Sos el asistente de contacto del portfolio de ${contactConfig.name} (${contactConfig.title}). Tu objetivo principal es ayudar al visitante a comunicarse con Gabriel y responder consultas breves sobre su perfil y proyectos. Respondé en español, de forma precisa, breve y amable.
Canales de contacto directos:
- WhatsApp: ${contactConfig.whatsappUser} (${contactConfig.whatsappUrl})
- Email (mailto directo, abre el cliente de correo del usuario con destinatario precargado): ${contactConfig.email}
- Sección de contacto del sitio: #contacto.
Perfil: ${contactConfig.title} enfocado en desarrollo web full stack y soluciones con IA aplicada/automatización.
Proyectos:
${projectLines}
Habilidades destacadas: React, TypeScript, JavaScript, Tailwind CSS, Node.js, Express, Python, FastAPI, PostgreSQL, MySQL, Supabase, SQLAlchemy, LLMs/APIs, MCP/Skills.
Disponibilidad: abierto a oportunidades profesionales, colaboraciones freelance y proyectos (remoto/híbrido, Argentina GMT-3).
Si algo no está disponible, indicalo con honestidad y ofrecé un canal de contacto.`;
}

function localAnswer(question: string): string {
  const q = question.toLowerCase();
  if (q.includes("whatsapp")) {
    return `Podés contactarme por WhatsApp en ${contactConfig.whatsappUser}: ${contactConfig.whatsappUrl}`;
  }
  if (q.includes("email") || q.includes("correo") || q.includes("mail")) {
    return `Podés escribirme por email a ${contactConfig.email} (mailto:${contactConfig.email}), se abrirá tu cliente de correo con el destinatario precargado.`;
  }
  if (q.includes("formulario") || q.includes("contacto directo") || q.includes("sección de contacto")) {
    return `La forma directa de contacto es por email (${contactConfig.email}) o por WhatsApp (${contactConfig.whatsappUser}). También podés ir a la sección de contacto: #contacto.`;
  }
  if (q.includes("contact") || q.includes("comunicar") || q.includes("disponib")) {
    return `Podés contactarme por WhatsApp (${contactConfig.whatsappUser}) o por email (${contactConfig.email}). Estoy disponible para oportunidades profesionales, colaboraciones freelance y proyectos (remoto/híbrido, Argentina GMT-3).`;
  }
  if (q.includes("stack") || q.includes("tecnolog") || q.includes("habilidad") || q.includes("perfil")) {
    return `${contactConfig.name} es ${contactConfig.title}. Trabaja con React, TypeScript, Tailwind CSS, Node.js, Python, FastAPI, PostgreSQL/MySQL, Supabase y herramientas de IA aplicada (LLMs/APIs, MCP/Skills).`;
  }
  if (q.includes("turnos")) {
    const p = projects.find((x) => x.id === "turnos-app");
    return p ? `${p.title}: ${p.summary}` : "Turnos App es una plataforma de gestión de reservas full stack.";
  }
  if (q.includes("finance") || q.includes("finanza")) {
    const p = projects.find((x) => x.id === "finance-management-app");
    return p ? `${p.title}: ${p.summary}` : "Finance Management App gestiona ingresos, egresos y balances.";
  }
  if (q.includes("agente") || q.includes(" ia") || q.startsWith("ia") || q.includes("llm")) {
    const p = projects.find((x) => x.id === "oficina-agentes-ia");
    return p ? `${p.title}: ${p.summary}` : "Oficina de Agentes de IA es un sistema multi-agente en desarrollo.";
  }
  if (q.includes("proyecto")) {
    return `Proyectos destacados: ${projects.map((p) => `${p.title} (${p.status})`).join("; ")}. ¿Querés que te cuente sobre alguno en particular o preferís contactarme?`;
  }
  return `Soy el asistente de contacto de ${contactConfig.name}. Puedo ayudarte a comunicarte por WhatsApp (${contactConfig.whatsappUser}) o por email (${contactConfig.email}), y responder consultas breves sobre su perfil y proyectos.`;
}

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hola, soy el asistente de contacto de Gabriel. Puedo ayudarte a comunicarte por WhatsApp o email, y responder consultas breves sobre su perfil y proyectos.",
    },
  ]);
  const endRef = useRef<HTMLDivElement | null>(null);
  const knowledge = useMemo(buildKnowledge, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, loading]);

  async function ask(question: string) {
    const q = question.trim();
    if (!q || loading) return;
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: q };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    const endpoint = import.meta.env.VITE_CHAT_API_URL as string | undefined;
    try {
      let answer = "";
      if (endpoint) {
        try {
          const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: q, messages: [...messages, userMsg], knowledge }),
          });
          if (res.ok) {
            const data = (await res.json()) as { reply?: string; answer?: string; message?: string };
            answer = data.reply || data.answer || data.message || "";
          }
        } catch {
          answer = "";
        }
      }
      if (!answer) answer = localAnswer(q);
      setMessages((m) => [...m, { id: crypto.randomUUID(), role: "assistant", content: answer }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6">
      {open && (
        <div className="mb-3 flex h-[70vh] max-h-[560px] w-[min(92vw,380px)] flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] shadow-2xl">
          <header className="flex items-center justify-between border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-elevated)_90%,transparent)] px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-[var(--text)]">Asistente de contacto</p>
              <p className="text-xs text-[var(--muted)]">WhatsApp · Email directo</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)] transition hover:border-[var(--accent)]"
              aria-label="Cerrar asistente de contacto"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            <div className="grid grid-cols-1 gap-2">
              <a
                href={contactConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[#25D366] hover:text-[#25D366]"
              >
                Contactar por WhatsApp ({contactConfig.whatsappUser})
              </a>
              <a
                href={`mailto:${contactConfig.email}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Enviar email ({contactConfig.email})
              </a>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Ver sección de contacto
              </a>
            </div>

            {messages.map((m) => (
              <div
                key={m.id}
                className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === "assistant"
                    ? "bg-[var(--bg-soft)] text-[var(--text)]"
                    : "ml-auto bg-[var(--accent)] text-white"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="max-w-[80%] rounded-2xl bg-[var(--bg-soft)] px-3.5 py-2.5 text-sm text-[var(--muted)]">
                Escribiendo...
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-[var(--border)] p-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => ask(q)}
                  disabled={loading}
                  className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 text-xs font-medium text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribí tu consulta..."
                className="min-w-0 flex-1 rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]"
                aria-label="Mensaje para el asistente de contacto"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-white transition hover:brightness-110 disabled:opacity-50"
                aria-label="Enviar"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 text-sm font-semibold text-[var(--text)] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        aria-label={open ? "Cerrar asistente de contacto" : "Abrir asistente de contacto"}
      >
        <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
            <path d="M21 11.5a8.5 8.5 0 0 1-12.8 7.3L4 20l1.3-4A8.5 8.5 0 1 1 21 11.5Z" strokeLinejoin="round" />
          </svg>
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[var(--bg-elevated)]" />
        </span>
        <span className="hidden sm:inline">Asistente de contacto</span>
      </button>
    </div>
  );
}
