'use client';
import { FC } from 'react';
import Link from 'next/link';
import OracleFormsButton from '../OracleFormsButton';

const NavBar: FC = () => {
  return (
    <nav className="relative bottom-12 mx-auto flex h-20 w-[95%] max-w-[1920px] items-center justify-between bg-black pl-2 text-white md:pl-4 lg:pl-8 xl:w-[80%]">
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
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full cursor-pointer items-center justify-center font-['Poppins'] text-[10px] font-bold whitespace-nowrap hover:text-gray-300 sm:text-xs lg:text-sm"
        >
          SIU 2.0
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
          href="/acerca"
          className="flex h-full cursor-pointer items-center justify-center font-['Poppins'] text-[10px] font-bold whitespace-nowrap hover:text-gray-300 sm:text-xs lg:text-sm"
        >
          Acerca de la UCSG
        </Link>
      </div>
      <Link
        href="/contacto"
        className="bg-ucsg-primary hover:bg-ucsg-secondary flex h-full shrink-0 cursor-pointer items-center px-6 font-['Poppins'] text-sm font-bold text-white transition-colors lg:px-10 lg:text-base"
        style={{ clipPath: 'polygon(30px 0, 100% 0, 100% 100%, 0 100%)' }}
      >
        Contacto
      </Link>
    </nav>
  );
};

export default NavBar;
