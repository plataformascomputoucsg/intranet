'use client';

import { Layers, CircleUserRound, Calendar, Quote, LinkIcon } from 'lucide-react';
import Image from 'next/image';
import { ComunicacionEspecifica } from '../../types/comunicaciones';
import { FacebookIcon } from '../icons/FacebookIcon';
import { TwitterIcon } from '../icons/TwitterIcon';
import { LinkedinIcon } from '../icons/LinkedinIcon';
import { formatDate } from '@/app/lib/utils';
import Link from 'next/link';

interface NewsDetailProps {
  news: ComunicacionEspecifica;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ news }) => {
  return (
    <div className="relative flex w-full flex-col items-center gap-8 rounded-[20px] rounded-bl bg-white p-8">
      <div className="relative h-[400px] w-full overflow-hidden rounded-[3px] md:h-[600px]">
        <Image className="object-cover" src={news.dirImagen} alt={news.titulo} fill priority />
      </div>

      <div className="inline-flex w-full flex-col items-start justify-start gap-8">
        <div className="flex flex-col items-start justify-start gap-6 self-stretch">
          <div className="flex flex-col items-start justify-start gap-4 self-stretch">
            <div className="justify-start self-stretch font-['Helvetica'] text-3xl leading-10 font-bold text-zinc-900">
              {news.titulo}
            </div>
            <div className="inline-flex flex-col items-center justify-between gap-4 self-stretch sm:flex-row sm:gap-0">
              <div className="flex flex-wrap items-center justify-start gap-4">
                {news.categoria && (
                  <div className="flex items-center justify-center gap-1.5">
                    <Layers className="h-6 w-6 text-rose-800" />
                    <div className="justify-start font-['Helvetica'] text-sm leading-5 font-normal text-neutral-600">
                      {news.categoria}
                    </div>
                  </div>
                )}
                {/* Placeholder for author as it is not in the API yet */}
                {news.descOrganiza && (
                  <div className="flex items-center justify-center gap-1.5">
                    <CircleUserRound className="h-6 w-6 text-rose-800" />
                    <div className="justify-start font-['Helvetica'] text-sm leading-5 font-normal text-neutral-600">
                      {news.descOrganiza}
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-center gap-1.5">
                  <Calendar className="h-6 w-6 text-rose-800" />
                  <div className="justify-start font-['Helvetica'] text-sm leading-5 font-normal text-neutral-600">
                    {formatDate(news.fecInicio, 'long')}
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-start gap-2">
                <Link
                  href="https://www.facebook.com/UCSGye"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    data-brands="Facebook"
                    data-circle="False"
                    data-status="True"
                    className="flex cursor-pointer items-start justify-start gap-2.5 rounded-[36px] bg-indigo-800 p-3 transition-colors hover:bg-indigo-900"
                  >
                    <FacebookIcon className="h-4 w-4 text-white" />
                  </div>
                </Link>
                <Link href="https://x.com/ucatolicagye" target="_blank" rel="noopener noreferrer">
                  <div
                    data-brands="Twitter"
                    data-circle="False"
                    data-status="True"
                    className="flex cursor-pointer items-start justify-start gap-2.5 rounded-[36px] bg-sky-500 p-3 transition-colors hover:bg-sky-600"
                  >
                    <TwitterIcon className="h-4 w-4 text-white" />
                  </div>
                </Link>
                <Link
                  href="https://www.linkedin.com/school/universidad-catolica-de-santiago-de-guayaquil/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    data-brands="Linkedin"
                    data-circle="False"
                    data-status="True"
                    className="flex cursor-pointer items-start justify-start gap-2.5 rounded-[36px] bg-rose-800 p-3 transition-colors hover:bg-rose-900"
                  >
                    <LinkedinIcon className="h-4 w-4 text-white" />
                  </div>
                </Link>
                <button
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="flex cursor-pointer items-start justify-start gap-2.5 rounded-[36px] bg-slate-500 p-2.5 transition-colors hover:bg-slate-600"
                  title="Copiar enlace"
                >
                  <LinkIcon className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="self-stretch justify-start text-neutral-600 text-lg font-normal font-['Helvetica'] leading-6 whitespace-pre-wrap">
          {news.descripcion}
        </div> */}

        {news.highlight && (
          <div className="inline-flex items-start justify-start gap-6 self-stretch bg-rose-800/10 p-10 shadow-[inset_4px_0px_0px_0px_rgba(169,0,70,1.00)]">
            <Quote className="h-14 w-14 text-rose-800" />
            <div className="w-3/4 justify-start font-['Helvetica'] text-xl leading-7 font-normal text-zinc-900">
              {news.highlight}
            </div>
          </div>
        )}

        {news.detalleDesc && (
          <div
            className="justify-start self-stretch font-['Helvetica'] text-lg leading-6 font-normal whitespace-pre-wrap text-neutral-600 [&_a]:text-rose-800 [&_a]:underline hover:[&_a]:text-rose-900"
            dangerouslySetInnerHTML={{ __html: news.detalleDesc }}
          />
        )}
      </div>
    </div>
  );
};

export default NewsDetail;
