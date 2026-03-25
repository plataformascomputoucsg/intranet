import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ComunicacionEspecifica } from '@/app/types/comunicaciones';
import { generateSlug, formatDate } from '@/app/lib/utils';

interface SideNewsCardProps {
  news: ComunicacionEspecifica;
}

const SideNewsCard: React.FC<SideNewsCardProps> = ({ news }) => {
  const slug = generateSlug(news.titulo, news.codigo);

  return (
    <Link
      href={`/noticias/${slug}`}
      className="group flex w-full cursor-pointer items-start gap-4 bg-white"
    >
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={news.dirImagen}
          alt={news.titulo}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="line-clamp-2 font-['Helvetica'] text-sm leading-tight font-bold text-zinc-900 transition-colors group-hover:text-rose-800">
          {news.titulo}
        </h4>
        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
          <Calendar className="h-3 w-3 text-rose-800" />
          <span>{formatDate(news.fecInicio)}</span>
        </div>
        <p className="line-clamp-2 font-['Poppins'] text-xs leading-snug font-normal text-zinc-600">
          {news.descripcion}
        </p>
      </div>
    </Link>
  );
};

export default SideNewsCard;
