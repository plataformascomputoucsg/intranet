import Link from 'next/link';
import AppImage from '@/components/shared/AppImage';
import { ChevronIcon } from '../icons/ChevronIcon';
import { ComunicacionEspecifica } from '@/app/types/comunicaciones';
import { generateSlug } from '@/app/lib/utils';

interface MediumNewsCardProps {
  news: ComunicacionEspecifica;
}

const MediumNewsCard: React.FC<MediumNewsCardProps> = ({ news }) => {
  const slug = generateSlug(news.titulo, news.codigo);

  return (
    <div className="group flex cursor-pointer flex-col gap-4">
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl">
        <AppImage
          src={news.dirImagen}
          alt={news.titulo}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3
          className="line-clamp-2 font-['Poppins'] text-sm leading-tight font-bold text-zinc-800"
          title={news.titulo}
        >
          {news.titulo}
        </h3>

        <p className="line-clamp-3 text-xs leading-snug font-normal text-zinc-500">
          {news.descripcion}
        </p>

        <Link
          href={`/noticias/${slug}`}
          className="mt-1 flex items-center gap-1 font-['Poppins'] text-xs font-bold text-rose-800 hover:underline"
        >
          Saber más <ChevronIcon className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
};

export default MediumNewsCard;
