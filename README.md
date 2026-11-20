# Portfolio – Gabriel Caldubehere

Portfolio personal moderno (estética tech editorial, responsive, dark/light mode) construido con **React + TypeScript + Vite + Tailwind CSS v4**. Incluye vitrina de proyectos con detalle técnico, formulario de contacto persistente con Supabase (y fallbacks), y un asistente virtual integrado.

> **Nota:** Este repositorio mantiene `client/` (frontend) y `server/` (backend legacy de contacto). El flujo recomendado actual de contacto es **Supabase directo desde el cliente**. No se realizan operaciones que alteren el historial de Git (`commit`, `push`, `merge`).

## Arquitectura del frontend (`client/`)

Estructura modular por responsabilidades:

```text
client/
├── public/
│   ├── projects/                 # Placeholders SVG listos para reemplazar por capturas reales
│   │   ├── turnos-app.svg
│   │   ├── finance-management-app.svg
│   │   └── oficina-agentes-ia.svg
│   └── ...
├── src/
│   ├── components/               # UI modular
│   │   ├── Header.tsx            # Navegación, monograma SVG, toggle tema, progreso de scroll
│   │   ├── Hero.tsx
│   │   ├── CardProjects.tsx      # Vitrina + modal de detalle técnico/arquitectura
│   │   ├── Skills.tsx
│   │   ├── AboutMe.tsx
│   │   ├── ContactForm.tsx       # Formulario con feedback de envío
│   │   ├── Footer.tsx            # Monograma + enlaces
│   │   ├── AIChatWidget.tsx      # Asistente virtual flotante
│   │   ├── Monogram.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── Section.tsx
│   ├── data/
│   │   └── projects.ts           # Catálogo tipado de proyectos
│   ├── hooks/
│   │   └── useInView.ts          # Animaciones de aparición al hacer scroll
│   ├── lib/
│   │   └── supabase.ts           # Cliente Supabase (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY)
│   ├── services/
│   │   └── contactService.ts     # Envío híbrido: Supabase -> VITE_API_URL -> mailto
│   ├── App.tsx
│   ├── main.tsx                  # Inicialización de tema persistente
│   └── App.css                   # Tokens de tema (claro/oscuro), grid y animaciones
├── .env.example
└── vite.config.ts                # Build limpio con base relativa (GitHub Pages / Cloudflare Pages)
```

## Características principales

- **UI/UX moderna y sobria** (tech editorial), 100% responsive (móvil, tablet, notebook, desktop).
- **Monograma SVG** minimalista en Header y Footer.
- **Dark / Light mode** con persistencia en `localStorage` y respeto a preferencia del sistema.
- **Animaciones performantes**: aparición suave de secciones al hacer scroll (IntersectionObserver), micro-interacciones en botones/tarjetas y barra sutil de progreso de scroll.
- **Vitrina de proyectos** con placeholders en `public/projects/`, badge de estado, stack, botones GitHub/Demo y **modal de Detalle Técnico / Arquitectura** por proyecto.
- **Contacto persistente en Supabase** (`contact_messages`) con RLS y fallbacks automáticos.
- **AIChatWidget** flotante integrado al tema: preguntas sugeridas, motor local preciso sobre proyectos/habilidades y soporte opcional para endpoint LLM vía `VITE_CHAT_API_URL`.

## Proyectos incluidos

1. **Turnos App** (`Completado`) – Plataforma full stack de gestión de reservas con portales diferenciados para clientes (`/main`, `/client/[username]`) y administradores (`/admin`), selección múltiple de servicios (`N:M`), control anti-solapamiento horario en servidor (`409`), reprogramación, edición inline de clientes y modo oscuro responsive.  
   **Stack:** React, TypeScript, Tailwind CSS v4, FastAPI, SQLAlchemy, PostgreSQL, Supabase.
2. **Finance Management App** (`Completado`) – Gestión de ingresos, egresos y balances con autenticación, API REST y CRUD completo.  
   **Stack:** React, TypeScript, Node.js, Express, MySQL.
3. **Oficina de Agentes de IA** (`En desarrollo`) – Sistema multi-agente basado en LLMs para orquestación de tareas, asistencia técnica y automatización de flujos.  
   **Stack:** Python, LLMs, APIs REST, MCP / Skills.

## Requisitos

- Node.js 18+ (recomendado 20+)
- npm 9+

## Configuración de variables de entorno

Copiar el ejemplo y completar según el entorno:

```bash
cd client
cp .env.example .env
```

`client/.env.example`:

```env
# Supabase (contacto persistente)
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY

# Fallback opcional si no se configura Supabase: backend propio para /api/contact
# VITE_API_URL=https://tu-backend.example.com

# Endpoint opcional para conectar el AIChatWidget a un LLM externo.
# Si no se define, el chat funciona con motor local de respuestas del portfolio.
# VITE_CHAT_API_URL=https://tu-endpoint-chat.example.com/api/chat
```

### Lógica de envío del formulario de contacto
`contactService.ts` aplica fallback automático:
1. **Supabase** (si `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` están definidos): inserta en `contact_messages`.
2. **API propia** (si no hay Supabase pero existe `VITE_API_URL`): `POST {VITE_API_URL}/api/contact`.
3. **mailto:** (último recurso): abre el cliente de correo del usuario.

El formulario muestra feedback claro de estado (enviando / éxito / error) en todos los casos.

## Supabase: tabla y RLS

El esquema listo para ejecutar está en [`supabase/schema.sql`](supabase/schema.sql):

- Crea `public.contact_messages` (`nombre`, `email`, `mensaje`, `created_at`, constraints básicos).
- Habilita **RLS**.
- Define políticas de **INSERT público seguro** para roles `anon` y `authenticated`.
- **No** define políticas de lectura/actualización/borrado público (los mensajes no son legibles desde el cliente).

Ejecutar el contenido de `supabase/schema.sql` en el SQL Editor del proyecto Supabase.

## Ejecución local

```bash
cd client
npm install
npm run dev
```

La app quedará disponible (por defecto) en `http://localhost:5173`.

## Scripts (`client/`)

| Script | Acción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo Vite |
| `npm run build` | Typecheck (`tsc -b`) + build de producción |
| `npm run lint` | ESLint |
| `npm run preview` | Previsualización del build |

## Verificación

```bash
cd client
npm run lint
npm run build
```

## Despliegue

- `vite.config.ts` usa `base: './'` y salida limpia en `dist/`, listo para **GitHub Pages** o **Cloudflare Pages** (incluyendo despliegues en subrutas).
- Reemplazá los placeholders de `client/public/projects/` por capturas reales manteniendo los mismos nombres o actualizando `client/src/data/projects.ts`.

## Backend legacy (`server/`)

Se conserva el backend Express + Nodemailer para compatibilidad/fallback (`VITE_API_URL`). El flujo principal recomendado es Supabase desde el cliente.
