export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ucsg-primary relative z-10 flex h-12 w-full items-center justify-center">
      <p className="text-sm font-medium text-white">
        © {currentYear} UCSG Intranet. Todos los derechos reservados.
      </p>
    </footer>
  );
}
