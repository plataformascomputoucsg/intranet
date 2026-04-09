'use client';
import React, { useState, useMemo, useDeferredValue } from 'react';
import Image from 'next/image';
import MonthCarousel from '../shared/MonthCarousel';
import SearchInput from '../ui/SearchInput';
import BirthdayMainCalendar from './BirthdayMainCalendar';
import { BirthdayBackground } from './BirthdayBackground';
import ClientOnly from '../ui/ClientOnly';
import { Birthday } from '../../types/birthday';
// @ts-expect-error — imagen estática sin tipos declarados
import birthdayImg from '@/assets/images/birthday_img.png';

interface BirthdayMainSectionProps {
  birthdays: Birthday[];
  initialMonth: string;
  currentMonthIndex: number;
}

const BirthdayMainSection: React.FC<BirthdayMainSectionProps> = ({
  birthdays,
  initialMonth,
  currentMonthIndex,
}) => {
  const [selectedMonth, setSelectedMonth] = useState<string>(initialMonth);
  const [searchQuery, setSearchQuery] = useState('');
  const deferredSearchQuery = useDeferredValue(searchQuery);

  const isSearching = deferredSearchQuery.trim().length > 0;

  const filteredBirthdays = useMemo(() => {
    return birthdays.filter((birthday) => {
      // Always filter by selected month
      if (birthday.mes !== selectedMonth) return false;

      // If searching, further filter by name
      if (isSearching) {
        return birthday.nombre.toLowerCase().includes(deferredSearchQuery.toLowerCase());
      }
      return true;
    });
  }, [birthdays, isSearching, deferredSearchQuery, selectedMonth]);

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month);
    setSearchQuery(''); // Clear search when selecting a month
  };

  return (
    <div className="relative flex w-full flex-col items-start gap-[15px]">
      <div className="relative z-0 flex min-h-[635px] w-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0px_10px_30px_#00000012] lg:flex-row">
        <ClientOnly>
          <BirthdayBackground />
        </ClientOnly>
        {/* Left Column - Image */}
        <div className="relative hidden w-full items-center justify-center bg-rose-50/20 p-8 lg:flex lg:w-[40%] xl:w-[35%]">
          <div className="relative h-full min-h-[500px] w-full">
            <Image
              src={birthdayImg}
              alt="Feliz Cumpleaños"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="relative mt-2 flex w-full flex-col p-6 lg:w-[60%] lg:p-10 xl:w-[65%]">
          <MonthCarousel
            selectedMonth={selectedMonth}
            onMonthSelect={handleMonthSelect}
            currentMonthIndex={currentMonthIndex}
          />

          <div className="mt-6 mb-8 flex w-full items-center justify-start">
            <div className="w-full">
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                className="h-full w-full px-4"
              />
            </div>
          </div>

          <div className="w-full flex-1">
            <BirthdayMainCalendar birthdays={filteredBirthdays} showMonth={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayMainSection;
