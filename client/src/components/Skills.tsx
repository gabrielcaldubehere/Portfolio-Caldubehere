function Skills() {
  return (
    <div>
      <section className="flex flex-col justify-center items-center px-4">
        <h2 className="text-2xl sm:text-3xl mt-8 text-stone-100 font-poppins text-center">
          Habilidades
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mt-8 w-full max-w-5xl mx-auto">
          {[
            {
              name: "HTML",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
              name: "CSS",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },
            {
              name: "JavaScript",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
              name: "TypeScript",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            },
            {
              name: "React",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "Tailwind CSS",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
              name: "Vite",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
            },
            {
              name: "VS Code",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
            },
            {
              name: "NodeJS",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
              name: "Express",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
              extraClasses: "bg-white p-2 rounded",
            },
            {
              name: "MySQL",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            },
          ].map((skill, index) => (
            <li
              key={index}
              className="transition-transform duration-300 hover:scale-110 flex flex-col items-center border border-stone-700 rounded-lg shadow-md bg-stone-900 p-3 sm:p-4"
            >
              <img
                src={skill.src}
                alt={skill.name}
                className={`w-12 h-12 sm:w-16 sm:h-16 ${
                  skill.extraClasses || ""
                }`}
              />
              <span className="text-stone-100 mt-2 text-xs sm:text-sm">
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Skills;
