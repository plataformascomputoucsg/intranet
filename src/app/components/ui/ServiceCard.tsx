import { ReactNode } from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="group">
      <div className="relative mb-10 flex h-40 w-60 flex-col items-start justify-center gap-2 rounded-[20px] border border-zinc-500/40 bg-white p-[26px] transition-all hover:shadow-md">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#a90046]/10">
          <div className="flex h-6 w-6 items-center justify-center text-rose-800">{icon}</div>
        </div>
        <div className="mt-2 flex flex-col gap-1 font-['Poppins']">
          <h3 className="text-sm leading-tight font-bold text-gray-800">{title}</h3>
          <p className="line-clamp-2 text-xs leading-4 font-normal text-zinc-500">{description}</p>
        </div>
      </div>
    </Link>
  );
}
