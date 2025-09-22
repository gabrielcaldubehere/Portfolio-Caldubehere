
function Skills() {
  return (
    <div>
        <section className="flex flex-col justify-center items-center">
            <h2 className="text-3xl mt-8 text-stone-100 font-poppins">Habilidades</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 w-full max-w-4xl mx-auto">
                {/* First 9 skills */}
                <li className="transition-transform duration-300 hover:scale-110 flex flex-col items-center border border-stone-700 rounded-lg shadow-md bg-stone-900 p-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-16 h-16" />
                    <span className="text-stone-100 mt-2 text-sm">HTML</span>
                </li>
                <li className="transition-transform duration-300 hover:scale-110 flex flex-col items-center border border-stone-700 rounded-lg shadow-md bg-stone-900 p-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-16 h-16" />
                    <span className="text-stone-100 mt-2 text-sm">CSS</span>
                </li>
                <li className="transition-transform duration-300 hover:scale-110 flex flex-col items-center border border-stone-700 rounded-lg shadow-md bg-stone-900 p-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-16 h-16" />
                    <span className="text-stone-100 mt-2 text-sm">JavaScript</span>
                </li>
                <li className="transition-transform duration-300 hover:scale-110 flex flex-col items-center border border-stone-700 rounded-lg shadow-md bg-stone-900 p-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-16 h-16" />
                    <span className="text-stone-100 mt-2 text-sm">TypeScript</span>
                </li>
                <li className="transition-transform duration-300 hover:scale-110 flex flex-col items-center border border-stone-700 rounded-lg shadow-md bg-stone-900 p-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-16 h-16" />
                    <span className="text-stone-100 mt-2 text-sm">React</span>
                </li>
                <li className="transition-transform duration-300 hover:scale-110 flex flex-col items-center border border-stone-700 rounded-lg shadow-md bg-stone-900 p-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-16 h-16" />
                    <span className="text-stone-100 mt-2 text-sm">Tailwind CSS</span>
                </li>
                <li className="transition-transform duration-300 hover:scale-110 flex flex-col items-center border border-stone-700 rounded-lg shadow-md bg-stone-900 p-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" className="w-16 h-16" />
                    <span className="text-stone-100 mt-2 text-sm">Vite</span>
                </li>
                <li className="transition-transform duration-300 hover:scale-110 flex flex-col items-center border border-stone-700 rounded-lg shadow-md bg-stone-900 p-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="w-16 h-16" />
                    <span className="text-stone-100 mt-2 text-sm">VS Code</span>
                </li>
                <li className="transition-transform duration-300 hover:scale-110 flex flex-col items-center border border-stone-700 rounded-lg shadow-md bg-stone-900 p-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" className="w-16 h-16" />
                    <span className="text-stone-100 mt-2 text-sm">NodeJS</span>
                </li>
                {/* Last 2 skills centered */}
                <li className="col-span-2 md:col-span-1 md:col-start-2 transition-transform duration-300 hover:scale-110 flex flex-col items-center border border-stone-700 rounded-lg shadow-md bg-stone-900 p-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="w-16 h-16 bg-white p-2 rounded" />
                    <span className="text-stone-100 mt-2 text-sm">Express</span>
                </li>
                <li className="col-span-2 md:col-span-1 transition-transform duration-300 hover:scale-110 flex flex-col items-center border border-stone-700 rounded-lg shadow-md bg-stone-900 p-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-16 h-16" />
                    <span className="text-stone-100 mt-2 text-sm">MySQL</span>
                </li>
            </ul>
        </section>
    </div>
  )
}

export default Skills
