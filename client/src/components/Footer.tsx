function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-100 mt-4 py-4 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-2"></div>
        <p className="text-center text-sm md:text-base">
          © 2025 - Todos los derechos reservados
        </p>
        <p className="text-center text-xs md:text-sm">
          {" "}
          Creado por Gabriel Caldubehere
        </p>
      </div>
    </footer>
  );
}

export default Footer;
