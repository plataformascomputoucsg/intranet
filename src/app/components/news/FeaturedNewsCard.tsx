import { Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronIcon } from '../icons/ChevronIcon';
import { ComunicacionEspecifica } from '@/app/types/comunicaciones';
import { generateSlug, formatDate } from '@/app/lib/utils';

interface FeaturedNewsCardProps {
  news: ComunicacionEspecifica;
}

const FeaturedNewsCard: React.FC<FeaturedNewsCardProps> = ({ news }) => {
  const slug = generateSlug(news.titulo, news.codigo);

  return (
    <Link
      href={`/noticias/${slug}`}
      className="group flex h-auto w-full shrink-0 flex-col gap-6 bg-white md:flex-row"
    >
      <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:w-1/2">
        <Image
          src={news.dirImagen}
          alt={news.titulo}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-4 py-2 md:w-1/2">
        <div className="text-sm font-normal tracking-wide text-zinc-500 uppercase">
          {news.categoria || 'NOTICIAS'}
        </div>
        <h3 className="font-['Poppins'] text-xl leading-tight font-bold text-zinc-900 transition-colors group-hover:text-rose-800">
          {news.titulo}
        </h3>
        <div className="flex items-center gap-2 font-['Poppins'] text-xs font-medium text-rose-800">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(news.fecInicio)}</span>
        </div>
        <p className="line-clamp-4 font-['Poppins'] text-sm leading-relaxed font-normal text-zinc-600">
          {news.descripcion}
        </p>
        <div className="flex items-center gap-1 font-['Poppins'] text-sm font-bold text-rose-800 group-hover:underline">
          Leer más <ChevronIcon className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};

export default FeaturedNewsCard;
