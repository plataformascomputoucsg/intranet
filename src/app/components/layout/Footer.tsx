export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ucsg-primary flex h-8 w-full items-center justify-center">
      <p className="font-[Poppins] text-sm font-medium text-white">
        © {currentYear} UCSG Intranet. Todos los derechos reservados.
      </p>
    </footer>
  );
}
