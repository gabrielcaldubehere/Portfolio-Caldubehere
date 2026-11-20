import Section from "./Section";

export default function AboutMe() {
  return (
    <Section
      id="sobre-mi"
      eyebrow="Perfil"
      title="Sobre mí"
      description="Desarrollo con foco en claridad técnica, experiencia de usuario y soluciones que escalan."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 sm:p-8 lg:col-span-2">
          <p className="text-base leading-relaxed text-[var(--muted)]">
            Soy <span className="font-medium text-[var(--text)]">Gabriel Caldubehere</span>,
            desarrollador <span className="font-medium text-[var(--text)]">Full Stack</span> con
            experiencia en la construcción de aplicaciones web completas: interfaces modernas con
            React y TypeScript, APIs robustas en Node.js/Python y persistencia con PostgreSQL, MySQL
            y Supabase.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
            Combino más de 7 años de experiencia en atención al cliente y ventas con mi práctica en
            ingeniería de software, lo que me permite entender necesidades reales, comunicarme con
            claridad y entregar soluciones técnicas orientadas al usuario.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
            Actualmente profundizo en sistemas multi-agente basados en LLMs para orquestación de
            tareas y automatización, integrando estas capacidades en productos y flujos de trabajo.
          </p>
        </article>
        <aside className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 sm:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Enfoque</h3>
          <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />Arquitecturas modulares y mantenibles.</li>
            <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />UI/UX sobria, accesible y responsive.</li>
            <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />APIs seguras y consistencia de datos.</li>
            <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />Automatización con IA aplicada.</li>
          </ul>
        </aside>
      </div>
    </Section>
  );
}
