import React from "react";

interface Skill {
  name: string;
  src: string;
  extraClasses?: string;
}

interface SectionProps {
  title: string;
  items: Skill[];
}

const Section: React.FC<SectionProps> = ({ title, items }) => (
  <div className="w-full mt-12 flex flex-col items-center">
    <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center px-6 py-2 inline-block rounded-full bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow-md">
      {title}
    </h3>
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full max-w-4xl mx-auto justify-center">
      {items.map((skill, index) => (
        <li
          key={index}
          className="transition-transform duration-300 hover:scale-110 flex flex-col items-center border border-stone-700 rounded-lg shadow-md bg-stone-900 p-4 hover:shadow-purple-500/30"
        >
          <img
            src={skill.src}
            alt={skill.name}
            className={`w-12 h-12 sm:w-16 sm:h-16 ${skill.extraClasses || ""}`}
          />
          <span className="text-stone-100 mt-2 text-xs sm:text-sm font-light tracking-wide">
            {skill.name}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

function Skills() {
  const skills = {
    frontend: [
      { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Vite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
    ],
    backend: [
      { name: "NodeJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", extraClasses: "bg-white p-2 rounded" },
      { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    tools: [
      { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ],
  };

  return (
    <section className="flex flex-col justify-center items-center px-4 mt-30 mb-20">
      <h2 className="text-2xl sm:text-3xl text-stone-100 font-poppins text-center mb-8">
        Habilidades
      </h2>
      <Section title="Frontend" items={skills.frontend} />
      <Section title="Backend" items={skills.backend} />
      <Section title="Herramientas" items={skills.tools} />
    </section>
  );
}

export default Skills;