import { ContainerIcon } from '../icons/ContainerIcon';
import NextImage from 'next/image';
import { ChevronIcon } from '../icons/ChevronIcon';
import Link from 'next/link';
import { ComunicacionEspecifica } from '@/app/types/comunicaciones';
import { generateSlug, formatDate } from '@/app/lib/utils';

interface MainNewsProps {
  news: ComunicacionEspecifica;
}

const MainNews: React.FC<MainNewsProps> = ({ news }) => {
  if (!news) return null;

  const slug = generateSlug(news.titulo, news.codigo);

  return (
    <Link
      href={`/noticias/${slug}`}
      className="group relative flex min-h-[300px] w-full cursor-pointer flex-col items-center gap-[25px] md:flex-row"
    >
      <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-[7.1px] md:w-1/2">
        <NextImage
          src={news.dirImagen}
          alt={news.titulo}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1280px) 100vw, 50vw"
        />
      </div>

      <div className="flex w-full flex-col gap-4 md:w-1/2">
        <div className="flex w-full flex-col items-start justify-center">
          <div className="font-['Poppins'] text-[14.8px] leading-[25.6px] font-normal text-[#808080]">
            {news.categoria || 'NOTICIAS'}
          </div>
        </div>

        <div className="flex w-full flex-col gap-2">
          <h3 className="line-clamp-2 font-['Poppins'] text-base leading-5 font-semibold text-[#181818] transition-colors group-hover:text-rose-800">
            {news.titulo}
          </h3>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-[#181818]">
              <ContainerIcon className="h-4 w-4" />
              <span className="font-['Poppins'] text-sm">{formatDate(news.fecInicio)}</span>
            </div>
            <div className="h-[13px] w-px bg-[#dadada]" />
          </div>
        </div>

        <div className="w-full">
          <p className="line-clamp-3 font-['Poppins'] text-xs leading-[18px] font-normal text-[#808080]">
            {news.descripcion}
          </p>
        </div>

        <div className="mt-auto flex items-center gap-2">
          <span className="font-['Poppins'] text-[12.5px] font-medium text-[#a90046]">
            Leer más
          </span>
          <ChevronIcon className="h-4 w-4 text-rose-800" />
        </div>
      </div>
    </Link>
  );
};

export default MainNews;
