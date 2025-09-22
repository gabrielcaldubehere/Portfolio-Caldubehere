
function CardProjects() {
  return (
<section className="flex flex-col justify-center items-center w-full mt-4 p-4">
  <h2 className="text-3xl mt-8 text-stone-100 font-poppins">Proyectos</h2>

  {/* Card */}
  <div className="flex items-center border border-slate-400/40 rounded-xl p-6 mt-6 gap-6 max-w-3xl w-full shadow-md shadow-white/10">
    {/* Imagen */}
    <img
      className="w-24 h-24 object-cover rounded-md"
      src="/coming-soon-web-banner.webp"
      alt="Project1"
    />

    {/* Contenido */}
     <div className="flex flex-col flex-1 gap-3">
      <ul className="list-disc list-inside text-lg font-light tracking-wide text-slate-200 font-[Poppins]">
        <li>Finance API</li>
        <li>Finance Web</li>
      </ul>

      {/* Botones */}
      <div className="flex gap-4">
        <button className="bg-teal-600 px-5 py-1.5 text-base text-slate-100 rounded-full shadow-md hover:scale-105 hover:bg-teal-500 transition font-medium">
          Link
        </button>

        <a
          href="https://github.com/gabrielcaldubehere"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full shadow-md hover:scale-110 transition"
          style={{
            background: "linear-gradient(135deg, #333 0%, #6e5494 100%)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 448 448"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="448" height="448" rx="224" fill="#333" />
            <path
              d="M224 80c-79.5 0-144 64.5-144 144 0 63.6 41.2 117.6 98.3 136.7 7.2 1.3 9.8-3.1 9.8-6.9 0-3.4-.1-12.3-.2-24.1-40 8.7-48.4-19.3-48.4-19.3-6.6-16.7-16.1-21.2-16.1-21.2-13.2-9 1-8.8 1-8.8 14.6 1 22.3 15 22.3 15 13 22.3 34.1 15.9 42.4 12.2 1.3-9.4 5.1-15.9 9.3-19.6-32-3.6-65.6-16-65.6-71.3 0-15.8 5.6-28.7 14.8-38.8-1.5-3.6-6.4-18.2 1.4-37.9 0 0 12-3.8 39.3 14.8 11.4-3.2 23.6-4.8 35.8-4.8s24.4 1.6 35.8 4.8c27.3-18.6 39.3-14.8 39.3-14.8 7.8 19.7 2.9 34.3 1.4 37.9 9.2 10.1 14.8 23 14.8 38.8 0 55.5-33.7 67.6-65.8 71.2 5.2 4.5 9.8 13.4 9.8 27.1 0 19.6-.2 35.4-.2 40.2 0 3.8 2.6 8.2 9.9 6.8C326.8 341.6 368 287.6 368 224c0-79.5-64.5-144-144-144z"
              fill="#fff"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

  )
}

export default CardProjects
