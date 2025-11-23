Portfolio Histórico – React + Vite + Express

📝 Descripción

Este proyecto es mi portfolio histórico, realizado como primer proyecto de aprendizaje en desarrollo web.
Construido con React + Vite en el frontend y Node.js + Express en el backend, permite:

Mostrar secciones: Home, Skills, Proyectos y Contacto

Enviar mensajes desde el formulario de contacto usando Nodemailer

Validación de campos y feedback visual al usuario

Refleja mi proceso de aprendizaje y evolución en tecnologías modernas de frontend y backend.

⚡ Tecnologías
Frontend Backend Otros

React 18
Node.js
Vite

TypeScript
Express.js
Tailwind CSS

Axios
Nodemailer
dotenv
🗂 Estructura del Proyecto
portfolio/
├── client/ # Frontend React + Vite
│ ├── src/
│ │ ├── components/ # Header, Footer, Hero, Skills, CardProjects, ContactForm
│ │ ├── services/ # contactService.ts
│ │ └── App.tsx # Componente principal
│ ├── public/ # Archivos estáticos
│ └── package.json
├── server/ # Backend Node + Express
│ ├── src/
│ │ ├── controllers/ # contact.controller.js
│ │ ├── routes/ # contact.routes.js
│ │ └── services/ # mail.service.js
│ ├── .env # Variables de entorno de mail
│ ├── server.js # Punto de entrada del servidor
│ └── package.json
└── README.md

🚀 Instalación y Ejecución
1️⃣ Clonar el repositorio
git clone https://github.com/tu-usuario/portfolio.git
cd portfolio

2️⃣ Backend
cd server
npm install

Crear .env:

MAIL_HOST=smtp.hostinger.com
MAIL_PORT=465
MAIL_USER=tu-email@midominio.com
MAIL_PASS=tu-contraseña

Levantar el servidor:

npm run dev

3️⃣ Frontend
cd ../client
npm install
npm run dev

Accede en navegador: http://localhost:5173

📩 Uso del Formulario de Contacto

Completa los campos: Nombre, Email, Mensaje

Haz clic en Enviar

El backend procesa y envía el mail a la cuenta configurada

Feedback visual en pantalla:

✅ Éxito: “Formulario enviado correctamente”

⚠️ Error: “Hubo un error al enviar el formulario”

🔧 Scripts
Backend
Script Acción
npm run dev Levanta servidor con nodemon
npm start Levanta servidor normal
Frontend
Script Acción
npm run dev Levanta Vite en desarrollo
npm run build Genera build listo para deploy
npm run preview Previsualiza build de producción
