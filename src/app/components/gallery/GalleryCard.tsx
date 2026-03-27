import React from 'react';
import AppImage from '@/components/shared/AppImage';
import Link from 'next/link';
import { ComunicacionEspecifica } from '@/app/types/comunicaciones';
import { ExternalLink, Calendar } from 'lucide-react';
import { generateSlug } from '@/app/lib/utils';

interface GalleryCardProps {
  item: ComunicacionEspecifica;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item }) => {
  const slug = generateSlug(item.titulo, item.codigo);

  return (
    <Link
      href={`/galeria/${slug}`}
      className="group inline-flex w-full items-center gap-4 rounded-xl p-2 transition-all duration-300 hover:bg-slate-50"
    >
      {/* Imagen del Evento */}
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[10px] bg-gray-100 shadow-sm">
        <AppImage
          src={item.dirImagen}
          alt={item.titulo}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Contenido del Evento */}
      <div className="flex flex-col justify-center gap-2 overflow-hidden">
        <div className="flex flex-col gap-1">
          <div className="flex items-start gap-2">
            <h3 className="line-clamp-2 w-full max-w-60 font-['Poppins'] text-lg leading-7 font-semibold text-neutral-900">
              {item.titulo}
            </h3>
            <ExternalLink className="mt-1.5 h-5 w-5 shrink-0 text-[#A90046] opacity-0 transition-opacity group-hover:opacity-100" />
          </div>

          <div className="inline-flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-[#A90046]" />
            <span className="font-['Poppins'] text-sm leading-4 font-normal text-neutral-600">
              {item.fecInicio || 'Sin fecha'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GalleryCard;
