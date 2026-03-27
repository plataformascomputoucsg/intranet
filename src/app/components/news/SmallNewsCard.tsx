import { Calendar } from 'lucide-react';
import AppImage from '@/components/shared/AppImage';
import Link from 'next/link';
import { ComunicacionEspecifica } from '@/app/types/comunicaciones';
import { generateSlug, formatDate } from '@/app/lib/utils';

interface SmallNewsCardProps {
  news: ComunicacionEspecifica;
}

const SmallNewsCard: React.FC<SmallNewsCardProps> = ({ news }) => {
  const slug = generateSlug(news.titulo, news.codigo);

  return (
    <Link
      href={`/noticias/${slug}`}
      className="group flex w-full cursor-pointer items-start justify-start gap-4 bg-white"
    >
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[10px]">
        <AppImage
          src={news.dirImagen}
          alt={news.titulo}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col items-start justify-start gap-2">
        <div className="flex flex-col items-start justify-start gap-1">
          <h4 className="line-clamp-2 font-['Poppins'] text-sm leading-[1.2] font-semibold text-neutral-900 transition-colors group-hover:text-rose-800">
            {news.titulo}
          </h4>
          <div className="flex items-center gap-1.5 py-0.5">
            <Calendar className="h-2.5 w-2.5 text-rose-800" strokeWidth={2.5} />
            <span className="font-['Poppins'] text-[10px] leading-none font-normal text-neutral-900">
              {formatDate(news.fecInicio)}
            </span>
          </div>
        </div>
        <p className="line-clamp-4 font-['Poppins'] text-sm leading-tight font-normal text-zinc-500 lg:line-clamp-3">
          {news.descripcion}
        </p>
      </div>
    </Link>
  );
};

export default SmallNewsCard;
