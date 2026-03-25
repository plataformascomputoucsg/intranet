'use client';

import { useState, useMemo, useDeferredValue } from 'react';
import MonthCarousel from '../shared/MonthCarousel';
import DayCarousel from '../shared/DayCarousel';
import SearchInput from '../ui/SearchInput';
import HeaderTitle from '../ui/HeaderTitle';
import EventHeroCard from './EventHeroCard';
import { ComunicacionEspecifica } from '@/app/types/comunicaciones';
import { formatDate, generateSlug } from '@/app/lib/utils';

interface EventMainClientProps {
  events: ComunicacionEspecifica[];
}

const MONTH_NAMES = [
  'ENERO',
  'FEBRERO',
  'MARZO',
  'ABRIL',
  'MAYO',
  'JUNIO',
  'JULIO',
  'AGOSTO',
  'SEPTIEMBRE',
  'OCTUBRE',
  'NOVIEMBRE',
  'DICIEMBRE',
];

const EventMainClient: React.FC<EventMainClientProps> = ({ events }) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonthIndex = now.getMonth();
  const initialMonth = String(currentMonthIndex + 1).padStart(2, '0');

  const [selectedMonth, setSelectedMonth] = useState<string>(initialMonth);
  const [selectedDay, setSelectedDay] = useState<number>(now.getDate());
  const [searchQuery, setSearchQuery] = useState('');
  const deferredSearchQuery = useDeferredValue(searchQuery);

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month);

    // If the selected month is the current real-world month, default to today's date
    const selectedMonthIndex = parseInt(month, 10) - 1;
    if (selectedMonthIndex === currentMonthIndex) {
      setSelectedDay(new Date().getDate());
    } else {
      setSelectedDay(1);
    }
  };

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

  // Filtrar eventos por la fecha seleccionada y búsqueda
  const filteredEvents = useMemo(() => {
    const monthIndex = parseInt(selectedMonth, 10) - 1;

    return events.filter((event) => {
      const [year, month, day] = event.fecInicio.split('T')[0].split('-').map(Number);
      const eventDate = new Date(year, month - 1, day);
      const matchesDate =
        eventDate.getDate() === selectedDay &&
        eventDate.getMonth() === monthIndex &&
        eventDate.getFullYear() === currentYear;

      const matchesSearch =
        deferredSearchQuery.trim() === '' ||
        event.titulo.toLowerCase().includes(deferredSearchQuery.toLowerCase()) ||
        event.descripcion?.toLowerCase().includes(deferredSearchQuery.toLowerCase());

      return matchesDate && matchesSearch;
    });
  }, [events, selectedDay, selectedMonth, currentYear, deferredSearchQuery]);

  const selectedMonthName = MONTH_NAMES[parseInt(selectedMonth, 10) - 1];

  return (
    <div className="relative mt-[22.3px] flex h-auto w-full flex-col items-start gap-7 px-4">
      <MonthCarousel
        selectedMonth={selectedMonth}
        onMonthSelect={handleMonthSelect}
        currentMonthIndex={currentMonthIndex}
      />

      <div className="flex w-full items-start justify-start">
        <div className="w-full self-stretch">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            className="h-11 w-full px-3 py-2"
          />
        </div>
      </div>

      <DayCarousel
        selectedMonth={selectedMonth}
        year={currentYear}
        selectedDay={selectedDay}
        onDaySelect={setSelectedDay}
        daysWithEvents={daysWithEvents}
      />

      <HeaderTitle
        titleFirstWorld="Eventos de"
        titleSecondWorld={selectedMonthName}
        viewAll={false}
      />

      {filteredEvents.length === 0 ? (
        <div className="flex w-full flex-col items-center justify-center gap-2 py-10 text-gray-400">
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
        <div className="grid w-full grid-cols-3 gap-x-[15px] gap-y-[30px] pr-4 pb-10">
          {filteredEvents.map((event) => (
            <EventHeroCard
              key={event.codigo}
              slug={generateSlug(event.titulo, event.codigo)}
              title={event.titulo}
              date={formatDate(event.fecInicio)}
              location={event.ubicacion ?? ''}
              description={event.descripcion}
              image={event.dirImagen}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventMainClient;
