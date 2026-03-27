'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPinned } from 'lucide-react';

interface EventHeroCardProps {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

const EventHeroCard: React.FC<EventHeroCardProps> = ({
  slug,
  title,
  date,
  location,
  description,
  image,
}) => {
  return (
    <Link
      href={`/eventos/${slug}`}
      className="group inline-flex h-auto w-full cursor-pointer flex-col items-center justify-start gap-4"
    >
      <div className="relative h-64 w-full">
        <Image
          className="rounded-[9.77px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          src={image}
          alt={title}
          fill
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-2 self-stretch">
        <div className="flex flex-col items-start justify-start gap-[2.92px] self-stretch">
          <div className="flex h-auto flex-col items-start justify-start self-stretch">
            <div className="inline-flex items-start justify-start self-stretch">
              <div className="group-hover:text-ucsg-primary w-full justify-start font-['Poppins'] text-sm leading-4 font-semibold text-neutral-900 transition-colors">
                {title}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[3px] self-stretch">
            <div className="inline-flex h-5 flex-wrap content-start items-start justify-start self-stretch">
              <div className="inline-flex w-auto flex-col items-start justify-center py-[2.92px] pr-2">
                <div className="inline-flex h-4 items-center justify-start gap-1.5 pb-[0.55px]">
                  {/* <div className="flex justify-start items-start">
                    <div className="w-2.5 h-2.5 relative">
                      <div className="w-2.5 h-2.5 left-0 top-0 absolute bg-rose-800" />
                    </div>
                  </div> */}
                  <Calendar className="h-4 w-4 text-rose-800" />
                  <div className="max-h-4 justify-start font-['Poppins'] text-xs leading-4 font-normal text-neutral-900">
                    {date}
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex h-5 flex-wrap content-start items-start justify-start self-stretch">
              <div className="inline-flex w-auto flex-col items-start justify-center py-[2.92px] pr-2">
                <div className="inline-flex h-4 items-center justify-start gap-1.5 pb-[0.55px] pl-px">
                  {/* <div className="w-2 h-3 bg-rose-800" /> */}
                  <MapPinned className="h-4 w-4 text-rose-800" />
                  <div className="max-h-4 justify-start font-['Poppins'] text-xs leading-4 font-normal text-neutral-900">
                    {location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start self-stretch">
          <div className="line-clamp-2 justify-start self-stretch font-['Poppins'] text-sm leading-6 font-normal text-zinc-500">
            {description}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventHeroCard;
