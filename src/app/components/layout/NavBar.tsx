'use client';

import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="relative bottom-12 mx-auto flex h-20 w-[95%] max-w-[1920px] items-center justify-between bg-black pl-2 text-white md:pl-4 lg:pl-8 xl:w-[80%]">
      <div className="flex h-full flex-1 items-center justify-start gap-6 pr-2 lg:pr-4">
        <Link href="/">
          <div className="flex h-full cursor-pointer items-center justify-center font-['Poppins'] text-[10px] font-bold whitespace-nowrap hover:text-gray-300 sm:text-xs lg:text-sm">
            Inicio
          </div>
        </Link>
        <Link
          href={process.env.NEXT_PUBLIC_SIU_URL ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-full cursor-pointer items-center justify-center font-['Poppins'] text-[10px] font-bold whitespace-nowrap hover:text-gray-300 sm:text-xs lg:text-sm">
            SIU
          </div>
        </Link>
        <Link
          href={process.env.NEXT_PUBLIC_SIU2_URL ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-full cursor-pointer items-center justify-center font-['Poppins'] text-[10px] font-bold whitespace-nowrap hover:text-gray-300 sm:text-xs lg:text-sm">
            SIU 2.0
          </div>
        </Link>
        <Link
          href={process.env.NEXT_PUBLIC_GESTOR_DOCUMENTAL_URL ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-full cursor-pointer items-center justify-center font-['Poppins'] text-[10px] font-bold whitespace-nowrap hover:text-gray-300 sm:text-xs lg:text-sm">
            Gestor documental
          </div>
        </Link>
        <Link
          href={process.env.NEXT_PUBLIC_MESA_AYUDA_URL ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-full cursor-pointer items-center justify-center font-['Poppins'] text-[10px] font-bold whitespace-nowrap hover:text-gray-300 sm:text-xs lg:text-sm">
            Mesa de ayuda
          </div>
        </Link>
        <Link
          href={process.env.NEXT_PUBLIC_SERVICIOS_ADMIN_URL ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-full cursor-pointer items-center justify-center font-['Poppins'] text-[10px] font-bold whitespace-nowrap hover:text-gray-300 sm:text-xs lg:text-sm">
            Servicios en línea administrativos
          </div>
        </Link>

        <Link href="/otros-accesos">
          <div className="flex h-full cursor-pointer items-center justify-center font-['Poppins'] text-[10px] font-bold whitespace-nowrap hover:text-gray-300 sm:text-xs lg:text-sm">
            Otros Accesos
          </div>
        </Link>
      </div>
      <Link
        href="/contacto"
        className="bg-ucsg-primary hover:bg-ucsg-secondary flex h-full shrink-0 cursor-pointer items-center px-6 transition-colors lg:px-10"
        style={{ clipPath: 'polygon(30px 0, 100% 0, 100% 100%, 0 100%)' }}
      >
        <div className="font-['Poppins'] text-sm font-bold text-white lg:text-base">Contactos</div>
      </Link>
    </nav>
  );
};

export default NavBar;
