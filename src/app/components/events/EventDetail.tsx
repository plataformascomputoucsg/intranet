'use client';

import { Layers, CircleUserRound, Calendar, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ComunicacionEspecifica } from '@/app/types/comunicaciones';
import { formatDate } from '@/app/lib/utils';
import { FacebookIcon } from '../icons/FacebookIcon';
import { TwitterIcon } from '../icons/TwitterIcon';
import { LinkedinIcon } from '../icons/LinkedinIcon';

interface EventDetailProps {
  event: ComunicacionEspecifica;
}

const EventDetail: React.FC<EventDetailProps> = ({ event }) => {
  return (
    <div className="relative flex w-full flex-col items-center gap-8 rounded-[20px] rounded-bl bg-white p-8">
      <div className="relative h-[400px] w-full overflow-hidden rounded-[3px] md:h-[600px]">
        <Image
          className="object-cover"
          src={event.dirImagen || 'https://placehold.co/1271x740'}
          alt={event.titulo}
          fill
          priority
        />
      </div>

      <div className="inline-flex w-full flex-col items-start justify-start gap-8">
        <div className="flex flex-col items-start justify-start gap-6 self-stretch">
          <div className="flex flex-col items-start justify-start gap-4 self-stretch">
            <div className="justify-start self-stretch font-['Helvetica'] text-3xl leading-10 font-bold text-zinc-900">
              {event.titulo}
            </div>
            <div className="inline-flex items-center justify-between self-stretch">
              <div className="flex items-center justify-start gap-4">
                {event.categoria && (
                  <div className="flex items-center justify-center gap-1.5">
                    <Layers className="h-6 w-6 text-rose-800" />
                    <div className="justify-start font-['Helvetica'] text-sm leading-5 font-normal text-neutral-600">
                      {event.categoria}
                    </div>
                  </div>
                )}
                {event.descOrganiza && (
                  <div className="flex items-center justify-center gap-1.5">
                    <CircleUserRound className="h-6 w-6 text-rose-800" />
                    <div className="justify-start font-['Helvetica'] text-sm leading-5 font-normal text-neutral-600">
                      {event.descOrganiza}
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-center gap-1.5">
                  <Calendar className="h-6 w-6 text-rose-800" />
                  <div className="justify-start font-['Helvetica'] text-sm leading-5 font-normal text-neutral-600">
                    {formatDate(event.fecInicio, 'long')}
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
        <div className="justify-start self-stretch font-['Helvetica'] text-lg leading-6 font-normal text-neutral-600">
          {event.descripcion}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
