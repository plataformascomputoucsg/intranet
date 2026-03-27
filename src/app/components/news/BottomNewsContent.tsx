import { getComunicacionesEspecificas } from '@/app/lib/api';
import { formatDate } from '@/app/lib/utils';
import { generateSlug } from '@/app/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { ChevronIcon } from '../icons/ChevronIcon';

interface BottomNewsContentProps {
  tipoEvento?: number;
  seccion?: number;
  tipSitio?: number;
}

const BottomNewsContent: React.FC<BottomNewsContentProps> = async ({
  tipoEvento = 1,
  seccion = 4,
  tipSitio = 1,
}) => {
  const comunicaciones = await getComunicacionesEspecificas({
    tipoEvento,
    seccion,
    tipSitio,
  });

  // Filtrar: destacado='S' y subseccion='main'
  const news = comunicaciones.find((c) => c.destacado === 'S' && c.subseccion === 'main');

  if (!news) {
    return (
      <div className="flex h-full w-full items-center justify-center py-12 text-gray-500">
        No hay noticias disponibles
      </div>
    );
  }

  const slug = news.slug || generateSlug(news.titulo, news.codigo);

  return (
    <div className="flex min-h-[400px] w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm lg:flex-row">
      {/* Left Side - Image with Overlay */}
      <div className="group relative h-[600px] w-full overflow-hidden lg:min-h-full lg:w-3/4">
        <Image
          src={news.dirImagen}
          alt={news.titulo}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay Content */}
        <div className="absolute inset-y-0 left-0 flex w-full flex-col justify-center gap-6 bg-black/60 p-8 md:w-1/3">
          <h2 className="font-['Poppins'] text-3xl leading-tight font-bold text-white drop-shadow-lg md:text-4xl">
            {news.titulo}
          </h2>

          <Link
            href={`/noticias/${slug}`}
            className="flex w-fit items-center gap-2 text-base font-medium text-white hover:underline"
          >
            Leer más <ChevronIcon className="h-5 w-5 text-white" />
          </Link>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex w-full flex-col items-start justify-center gap-6 bg-white p-8 lg:w-1/4 lg:p-12">
        {/* Category */}
        <span className="font-['Poppins'] text-xs font-medium tracking-widest text-zinc-400 uppercase">
          {news.categoria || 'NOTICIAS'}
        </span>

        {/* Title */}
        <h3 className="font-['Spartan'] text-2xl leading-8 font-semibold text-black lg:text-3xl">
          {news.titulo}
        </h3>

        {/* Date */}
        <div className="flex items-center gap-2 font-['Poppins'] text-xs font-semibold text-rose-800">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(news.fecInicio)}</span>
        </div>

        {/* Description */}
        <p className="line-clamp-6 font-['Poppins'] text-sm leading-7 font-normal text-zinc-500">
          {news.descripcion}
        </p>

        {/* Link */}
        <Link
          href={`/noticias/${slug}`}
          className="mt-2 flex items-center gap-2 font-['Poppins'] text-sm font-bold text-rose-800 hover:underline"
        >
          Leer más <ChevronIcon className="h-4 w-4 text-rose-800" />
        </Link>
      </div>
    </div>
  );
};

export default BottomNewsContent;
