'use client';
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import ClientOnly from '../ui/ClientOnly';
import { ContainerIcon } from '../icons/ContainerIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ComunicacionEspecifica } from '@/app/types/comunicaciones';
import { formatDate } from '@/app/lib/utils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import DayCarousel from '../shared/DayCarousel';

interface EventClientProps {
  events: ComunicacionEspecifica[];
}

const EventClient: React.FC<EventClientProps> = ({ events }) => {
  const now = new Date();
  const currentMonth = String(now.getMonth() + 1).padStart(2, '0');
  const currentYear = now.getFullYear();
  const [selectedMonth, _setSelectedMonth] = useState<string>(currentMonth);
  const [selectedDay, setSelectedDay] = useState<number>(now.getDate());

  const daysWithEvents = useMemo(() => {
    const monthIndex = parseInt(selectedMonth, 10) - 1;
    const days = new Set<number>();
    events.forEach((event) => {
      const [year, month, day] = event.fecInicio.split('T')[0].split('-').map(Number);
      if (year === currentYear && month - 1 === monthIndex) {
        days.add(day);
      }
    });
    return Array.from(days);
  }, [events, selectedMonth, currentYear]);

  // EventMainClient handles MonthCarousel, so we don't need to change EventClient's handleMonthSelect since it doesn't have one.
  const filteredEvents = useMemo(() => {
    const monthIndex = parseInt(selectedMonth, 10) - 1;
    return events.filter((event) => {
      const [year, month, day] = event.fecInicio.split('T')[0].split('-').map(Number);
      const eventDate = new Date(year, month - 1, day);
      return (
        eventDate.getDate() === selectedDay &&
        eventDate.getMonth() === monthIndex &&
        eventDate.getFullYear() === currentYear
      );
    });
  }, [events, selectedDay, selectedMonth, currentYear]);

  return (
    <>
      <div className="relative flex w-full flex-[0_0_auto] items-start self-stretch">
        <div className='relative w-full font-["Poppins"] text-xl leading-[22px] font-bold text-[#181818]'>
          {(() => {
            const monthIndex = parseInt(selectedMonth, 10) - 1;
            const date = new Date(currentYear, monthIndex, selectedDay);
            const dayName = date.toLocaleDateString('es-ES', {
              weekday: 'long',
            });
            const monthName = date.toLocaleDateString('es-ES', {
              month: 'long',
            });
            const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
            return `${capitalize(dayName)}, ${selectedDay} de ${monthName}`;
          })()}
        </div>
      </div>

      <DayCarousel
        selectedMonth={selectedMonth}
        year={currentYear}
        selectedDay={selectedDay}
        onDaySelect={setSelectedDay}
        daysWithEvents={daysWithEvents}
      />

      <div className="relative flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-4">
        {filteredEvents.length === 0 ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 py-10 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <p className="font-['Poppins'] text-sm font-medium">No hay eventos para esta fecha</p>
          </div>
        ) : (
          <ClientOnly>
            <Swiper
              key={`${selectedMonth}-${selectedDay}`}
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="h-full w-full pb-10 [&_.swiper-pagination]:bottom-0! [&_.swiper-pagination-bullet]:h-3! [&_.swiper-pagination-bullet]:w-3! [&_.swiper-pagination-bullet]:bg-zinc-300! [&_.swiper-pagination-bullet]:opacity-100! [&_.swiper-pagination-bullet-active]:bg-rose-700!"
            >
              {filteredEvents.map((event) => (
                <SwiperSlide key={event.codigo}>
                  <div className="inline-flex h-full w-full flex-col items-center justify-start gap-4 pb-28">
                    <div
                      key={event.codigo}
                      className="flex items-start justify-between gap-4 border-b border-gray-200 pb-4"
                    >
                      {/* Texto izquierda */}
                      <div className="flex flex-1 flex-col gap-2">
                        <div className="w-full font-['Poppins'] text-xs font-semibold text-neutral-900">
                          {event.titulo}
                        </div>

                        <div className="flex items-center gap-1.5">
                          <ContainerIcon className="h-2.5 w-2.5" />

                          <div className="font-['Poppins'] text-[8.76px] leading-4 font-normal text-neutral-900">
                            {formatDate(event.fecInicio)}
                          </div>
                        </div>

                        <div className="line-clamp-3 font-['Poppins'] text-xs leading-4 font-normal text-zinc-500">
                          {event.descripcion}
                        </div>
                      </div>

                      {/* Imagen derecha */}
                      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          className="object-cover"
                          src={event.dirImagen || 'https://placehold.co/417x206.png'}
                          alt={event.titulo}
                          fill
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </ClientOnly>
        )}
      </div>
    </>
  );
};

export default EventClient;
