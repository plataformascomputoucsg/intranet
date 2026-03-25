'use client';

import React, { useMemo, useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DayCard from './DayCard';

interface DayCarouselProps {
  selectedMonth: string; // e.g., "01" for January
  year: number;
  selectedDay: number;
  onDaySelect: (day: number) => void;
  daysWithEvents?: number[];
}

const DayCarousel: React.FC<DayCarouselProps> = ({
  selectedMonth,
  year,
  selectedDay,
  onDaySelect,
  daysWithEvents = [],
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const daysInMonth = useMemo(() => {
    const monthIndex = parseInt(selectedMonth, 10) - 1;
    // Get number of days in the month (0 day of next month gives last day of current)
    return new Date(year, monthIndex + 1, 0).getDate();
  }, [selectedMonth, year]);

  const days = useMemo(() => {
    const monthIndex = parseInt(selectedMonth, 10) - 1;
    return Array.from({ length: daysInMonth }, (_, i) => {
      const date = new Date(year, monthIndex, i + 1);
      const dayName = date
        .toLocaleDateString('es-ES', { weekday: 'short' })
        .toUpperCase()
        .replace('.', ''); // Remove potential dot abbreviated

      return {
        number: i + 1,
        name: dayName,
      };
    });
  }, [daysInMonth, selectedMonth, year]);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Scroll to the selected day on mount / when selectedDay changes
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container && selectedDay) {
      const dayElement = container.children[selectedDay - 1] as HTMLElement;
      if (dayElement) {
        const containerWidth = container.clientWidth;
        const dayLeft = dayElement.offsetLeft;
        const dayWidth = dayElement.offsetWidth;
        // Center the selected day in the visible area
        const scrollTo = dayLeft - containerWidth / 2 + dayWidth / 2;
        container.scrollTo({ left: scrollTo, behavior: 'smooth' });
      }
    }
  }, [selectedDay, days]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll(); // Initial check
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, [days]); // Re-run when days change as content size changes

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="group relative flex h-24 w-full items-center rounded-lg px-8">
      {/* Custom Navigation Buttons (reusing styles from MonthCarousel if valid, or adjusting) */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollLeft}
        className="swiper-button-prev-days hover:text-primary absolute left-2 z-10 text-gray-600 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Previous days"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={scrollNext}
        disabled={!canScrollRight}
        className="swiper-button-next-days hover:text-primary absolute right-2 z-10 text-gray-600 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Next days"
      >
        <ChevronRight size={24} />
      </button>

      <div
        ref={scrollContainerRef}
        className="scrollbar-hide flex w-full gap-2 overflow-x-auto scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {days.map((day) => (
          <div key={day.number} className="flex h-24 w-auto! shrink-0 justify-center py-2">
            {/* Added height to slide container to accommodate the absolute positioned dots below the card if needed */}
            <div className="relative flex h-full w-14 flex-col items-center justify-between gap-4 pt-2">
              <DayCard
                dayNumber={day.number}
                dayName={day.name}
                isActive={day.number === selectedDay}
                onClick={() => onDaySelect(day.number)}
              />
              <div
                className={`relative top-0 left-0 inline-flex items-start justify-start gap-[3px] ${daysWithEvents.includes(day.number) ? 'opacity-100' : 'opacity-0'}`}
              >
                {/* Placeholder for dots if needed externally or handled by parent styles */}
                <div className="h-[5px] w-[5px] rounded-[38px] bg-teal-400" />
                <div className="h-[5px] w-[5px] rounded-[38px] bg-teal-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayCarousel;
