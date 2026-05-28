import { Calendar } from 'lucide-react';
import AppImage from '@/components/shared/AppImage';
import Link from 'next/link';
import { ComunicacionEspecifica } from '@/app/types/comunicaciones';
import { generateSlug, formatDate } from '@/app/lib/utils';

interface HomeNewsCardProps {
  news: ComunicacionEspecifica;
}

const HomeNewsCard: React.FC<HomeNewsCardProps> = ({ news }) => {
  const slug = generateSlug(news.titulo, news.codigo);

  return (
    <Link href={`/noticias/${slug}`} className="group flex w-full items-start gap-4 bg-white">
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-lg">
        <AppImage
          src={news.dirImagen}
          alt={news.titulo}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h4 className="line-clamp-2 font-['Poppins'] text-sm leading-tight font-semibold text-neutral-900 transition-colors group-hover:text-rose-800">
          {news.titulo}
        </h4>
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3 w-3 text-rose-800" strokeWidth={2.5} />
          <span className="font-['Poppins'] text-xs font-normal text-neutral-600">
            {formatDate(news.fecInicio)}
          </span>
        </div>
        <p className="line-clamp-3 font-['Poppins'] text-xs leading-snug font-normal text-zinc-500">
          {news.descripcion}
        </p>
      </div>
    </Link>
  );
};

export default HomeNewsCard;
