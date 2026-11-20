import Section from "./Section";

type SkillItem =
  | { name: string; src: string; invertDark?: boolean }
  | { name: string; text: string };

const groups: { title: string; items: SkillItem[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS v4", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Vite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invertDark: true },
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Supabase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "SQLAlchemy", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg", invertDark: true },
    ],
  },
  {
    title: "Herramientas & IA",
    items: [
      { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "LLMs / APIs", text: "LLM" },
      { name: "MCP / Skills", text: "MCP" },
    ],
  },
];

export default function Skills() {
  return (
    <Section
      id="habilidades"
      eyebrow="Stack"
      title="Habilidades técnicas"
      description="Tecnologías y herramientas con las que diseño, construyo y despliego productos web de punta a punta."
    >
      <div className="space-y-10">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              {group.title}
            </h3>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4 text-center transition hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_40%,var(--border))] hover:shadow-md"
                >
                  {"src" in item ? (
                    <img
                      src={item.src}
                      alt={item.name}
                      loading="lazy"
                      className={`h-10 w-10 object-contain transition group-hover:scale-110 ${
                        "invertDark" in item && item.invertDark ? "dark:invert" : ""
                      }`}
                    />
                  ) : (
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-soft)] text-xs font-bold text-[var(--accent)]">
                      {item.text}
                    </span>
                  )}
                  <span className="text-xs font-medium text-[var(--text)] sm:text-sm">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
