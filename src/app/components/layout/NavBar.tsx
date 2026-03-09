import React from 'react'
import Link from 'next/link'
import OracleFormsButton from '../OracleFormsButton'

const NavBar: React.FC = () => {
  return (
    <nav className="bg-black text-white h-20 w-[95%] xl:w-[80%] max-w-[1920px] mx-auto relative bottom-12 flex justify-between items-center pl-2 md:pl-4 lg:pl-8">
      <div className="flex items-center flex-1 justify-between pr-2 lg:pr-4 h-full">
        <Link href="/">
          <div className="flex justify-center items-center h-full text-[10px] sm:text-xs lg:text-sm font-bold font-['Poppins'] cursor-pointer hover:text-gray-300 whitespace-nowrap">
            Inicio
          </div>
        </Link>
        <OracleFormsButton />
        <div className="flex justify-center items-center h-full text-[10px] sm:text-xs lg:text-sm font-bold font-['Poppins'] cursor-pointer hover:text-gray-300 whitespace-nowrap">
          SIU 2.0
        </div>
        <Link
          href={process.env.NEXT_PUBLIC_SERVICIOS_ADMIN_URL ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center items-center h-full text-[10px] sm:text-xs lg:text-sm font-bold font-['Poppins'] cursor-pointer hover:text-gray-300 whitespace-nowrap">
            Servicios en línea administrativos
          </div>
        </Link>
        <Link
          href={process.env.NEXT_PUBLIC_GESTOR_DOCUMENTAL_URL ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center items-center h-full text-[10px] sm:text-xs lg:text-sm font-bold font-['Poppins'] cursor-pointer hover:text-gray-300 whitespace-nowrap">
            Gestor documental
          </div>
        </Link>
        {/* <Link
          href={process.env.NEXT_PUBLIC_MESA_AYUDA_URL ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center items-center h-full text-[10px] sm:text-xs lg:text-sm font-bold font-['Poppins'] cursor-pointer hover:text-gray-300 whitespace-nowrap">
            Mesa de ayuda
          </div>
        </Link> */}
        <Link href="/acerca">
          <div className="flex justify-center items-center h-full text-[10px] sm:text-xs lg:text-sm font-bold font-['Poppins'] cursor-pointer hover:text-gray-300 whitespace-nowrap">
            Acerca de la UCSG
          </div>
        </Link>
      </div>
      <Link
        href="/contacto"
        className="bg-ucsg-primary h-full flex items-center px-6 lg:px-10 cursor-pointer hover:bg-ucsg-secondary transition-colors shrink-0"
        style={{ clipPath: 'polygon(30px 0, 100% 0, 100% 100%, 0 100%)' }}
      >
        <div className="text-white text-sm lg:text-base font-bold font-['Poppins']">
          Contacto
        </div>
      </Link>
    </nav>
  )
}

export default NavBar
