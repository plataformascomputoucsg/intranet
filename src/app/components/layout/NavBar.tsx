'use client';
<<<<<<< HEAD

import React from 'react';
=======
import { FC } from 'react';
>>>>>>> 407c292b6ab4b2024c4b0119e4fbe99f1e95480e
import Link from 'next/link';

const NavBar: FC = () => {
  return (
    <nav className="relative bottom-12 mx-auto flex h-20 w-[95%] max-w-[1920px] items-center justify-between bg-black pl-2 text-white md:pl-4 lg:pl-8 xl:w-[80%]">
<<<<<<< HEAD
      <div className="flex h-full flex-1 items-center justify-start gap-6 pr-2 lg:pr-4">
        <Link href="/">
          <div className="flex h-full cursor-pointer items-center justify-center font-['Poppins'] text-[10px] font-bold whitespace-nowrap hover:text-gray-300 sm:text-xs lg:text-sm">
            Inicio
          </div>
        </Link>
        <Link
          href={process.env.NEXT_PUBLIC_SIU_URL ?? '#'}
=======
      <div className="flex h-full flex-1 items-center justify-start gap-15 pr-2 lg:pr-4">
        <Link
          href="/"
          className="flex h-full cursor-pointer items-center justify-center font-['Poppins'] text-[10px] font-bold whitespace-nowrap hover:text-gray-300 sm:text-xs lg:text-sm"
        >
          Inicio
        </Link>
        <OracleFormsButton />
        <Link
          href={process.env.NEXT_PUBLIC_SIU2_URL ?? '#'}
>>>>>>> 407c292b6ab4b2024c4b0119e4fbe99f1e95480e
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full cursor-pointer items-center justify-center font-['Poppins'] text-[10px] font-bold whitespace-nowrap hover:text-gray-300 sm:text-xs lg:text-sm"
        >
<<<<<<< HEAD
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
=======
          SIU 2.0
>>>>>>> 407c292b6ab4b2024c4b0119e4fbe99f1e95480e
        </Link>
        <Link
          href={process.env.NEXT_PUBLIC_GESTOR_DOCUMENTAL_URL ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full cursor-pointer items-center justify-center font-['Poppins'] text-[10px] font-bold whitespace-nowrap hover:text-gray-300 sm:text-xs lg:text-sm"
        >
          Gestor documental
        </Link>
        <Link
<<<<<<< HEAD
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
=======
          href="/acerca"
          className="flex h-full cursor-pointer items-center justify-center font-['Poppins'] text-[10px] font-bold whitespace-nowrap hover:text-gray-300 sm:text-xs lg:text-sm"
        >
          Acerca de la UCSG
>>>>>>> 407c292b6ab4b2024c4b0119e4fbe99f1e95480e
        </Link>
      </div>
      <Link
        href="/contacto"
        className="bg-ucsg-primary hover:bg-ucsg-secondary flex h-full shrink-0 cursor-pointer items-center px-6 font-['Poppins'] text-sm font-bold text-white transition-colors lg:px-10 lg:text-base"
        style={{ clipPath: 'polygon(30px 0, 100% 0, 100% 100%, 0 100%)' }}
      >
<<<<<<< HEAD
        <div className="font-['Poppins'] text-sm font-bold text-white lg:text-base">Contactos</div>
=======
        Contacto
>>>>>>> 407c292b6ab4b2024c4b0119e4fbe99f1e95480e
      </Link>
    </nav>
  );
};

export default NavBar;
