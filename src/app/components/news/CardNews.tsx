import Image from 'next/image';
import Link from 'next/link';
import { ContainerIcon } from '../icons/ContainerIcon';
import { ComunicacionEspecifica } from '@/app/types/comunicaciones';
import { generateSlug, formatDate } from '@/app/lib/utils';

interface CardNewsProps {
  news: ComunicacionEspecifica;
}

const CardNews: React.FC<CardNewsProps> = ({ news }) => {
  const slug = generateSlug(news.titulo, news.codigo);

  return (
    <Link
      href={`/noticias/${slug}`}
      className="group flex w-full cursor-pointer flex-col items-center justify-start gap-4 whitespace-break-spaces sm:flex-row"
    >
      <div className="relative h-[112px] w-full shrink-0 sm:w-[112px]">
        <Image
          alt={news.titulo}
          className="rounded-[9.77px] object-cover"
          src={news.dirImagen}
          fill
          sizes="(max-width: 640px) 100vw, 112px"
        />
      </div>
      <div className="flex min-h-24 w-full flex-col items-start justify-start gap-2">
        <div className="flex flex-col items-start justify-start gap-[2.92px] self-stretch">
          <div className="flex flex-col items-start justify-start self-stretch">
            <div className="inline-flex items-start justify-start self-stretch">
              <div className="line-clamp-2 w-full justify-start font-['Poppins'] text-sm leading-4 font-semibold text-neutral-900 transition-colors group-hover:text-rose-800">
                {news.titulo}
              </div>
            </div>
          </div>
          <div className="inline-flex flex-wrap content-start items-start justify-start self-stretch">
            <div className="inline-flex w-full flex-col items-start justify-center py-[2.92px]">
              <div className="inline-flex h-4 items-center justify-start gap-1.5 pb-[0.55px]">
                <div className="flex items-start justify-start">
                  <div className="relative h-2.5 w-2.5">
                    <ContainerIcon className="absolute top-0 left-0 h-2.5 w-2.5" />
                  </div>
                </div>
                <div className="max-h-4 justify-start font-['Poppins'] text-[8.76px] leading-4 font-normal text-neutral-900">
                  {formatDate(news.fecInicio)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start self-stretch">
          <div className="line-clamp-2 justify-start self-stretch font-['Poppins'] text-xs leading-4 font-normal text-zinc-500">
            {news.descripcion}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardNews;
