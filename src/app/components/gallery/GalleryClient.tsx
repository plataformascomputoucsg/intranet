'use client';
import GalleryCard from './GalleryCard';
import { ComunicacionEspecifica } from '@/app/types/comunicaciones';

interface GalleryClientProps {
  items: ComunicacionEspecifica[];
}

export default function GalleryClient({ items }: GalleryClientProps) {
  if (!items || items.length === 0) {
    return (
      <div className="flex w-full flex-col items-center justify-center py-20 text-center">
        <p className="font-['Poppins'] text-lg text-zinc-500">
          No hay galerías disponibles en este momento.
        </p>
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <GalleryCard key={item.codigo} item={item} />
      ))}
    </div>
  );
}
