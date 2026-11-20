export type ProjectStatus = "Completado" | "En desarrollo";

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  summary: string;
  image: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  architecture: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "turnos-app",
    title: "Turnos App",
    status: "Completado",
    summary:
      "Plataforma full stack de gestión de reservas con portales diferenciados para clientes (/main, /client/[username]) y administradores (/admin), selección múltiple de servicios (N:M), control anti-solapamiento horario en servidor (409), reprogramación, edición inline de clientes y modo oscuro responsive.",
    image: "/projects/turnos-app.svg",
    stack: ["React", "TypeScript", "Tailwind CSS v4", "FastAPI", "SQLAlchemy", "PostgreSQL", "Supabase"],
    githubUrl: "https://github.com/gabrielcaldubehere",
    demoUrl: "",
    architecture:
      "Frontend React + TypeScript consumiendo una API FastAPI. La lógica crítica de agenda (disponibilidad, solapamientos y reprogramación) se resuelve en servidor con SQLAlchemy/PostgreSQL, devolviendo 409 ante conflictos. Supabase se usa como capa de base de datos/infraestructura, con portales separados por rol y operaciones CRUD transaccionales para servicios, turnos y clientes.",
    highlights: [
      "Portales diferenciados para cliente y administrador con rutas dedicadas.",
      "Relación N:M entre turnos y servicios con selección múltiple.",
      "Prevención de solapamiento horario en backend (HTTP 409).",
      "Reprogramación y edición inline de clientes con UI responsive y dark mode.",
    ],
  },
  {
    id: "finance-management-app",
    title: "Finance Management App",
    status: "Completado",
    summary:
      "Aplicación web full stack para gestión de ingresos, egresos y balances con autenticación de usuarios, API REST y operaciones CRUD completas.",
    image: "/projects/finance-management-app.svg",
    stack: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
    githubUrl: "https://github.com/gabrielcaldubehere",
    demoUrl: "",
    architecture:
      "Arquitectura cliente-servidor: frontend React + TypeScript consume una API REST en Node.js/Express con persistencia en MySQL. Autenticación de usuarios y capa de servicios/controladores para CRUD de movimientos y cálculo de balances, manteniendo separación de responsabilidades.",
    highlights: [
      "Autenticación de usuarios y manejo de sesiones.",
      "CRUD completo de ingresos y egresos con balance consolidado.",
      "API REST estructurada con controladores y servicios.",
      "Modelo relacional en MySQL orientado a consistencia de datos.",
    ],
  },
  {
    id: "oficina-agentes-ia",
    title: "Oficina de Agentes de IA",
    status: "En desarrollo",
    summary:
      "Sistema multi-agente basado en LLMs para orquestación de tareas, asistencia técnica y automatización de flujos de trabajo.",
    image: "/projects/oficina-agentes-ia.svg",
    stack: ["Python", "LLMs", "APIs REST", "MCP / Skills"],
    githubUrl: "https://github.com/gabrielcaldubehere",
    demoUrl: "",
    architecture:
      "Diseño modular orientado a agentes: un orquestador coordina agentes especializados conectados a herramientas externas vía APIs REST y capacidades MCP/Skills. Se prioriza la composición de flujos, observabilidad y extensibilidad para incorporar nuevos agentes y herramientas.",
    highlights: [
      "Orquestación multi-agente con especialización por tareas.",
      "Integración con herramientas externas mediante APIs y MCP/Skills.",
      "Automatización de flujos técnicos y de asistencia.",
      "Base preparada para escalar con nuevos agentes y capacidades.",
    ],
  },
];
