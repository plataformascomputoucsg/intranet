'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MonthCard from './MonthCard';

interface MonthCarouselProps {
  selectedMonth: string;
  onMonthSelect: (month: string) => void;
  currentMonthIndex: number;
}

const MonthCarousel: React.FC<MonthCarouselProps> = ({
  selectedMonth,
  onMonthSelect,
  currentMonthIndex,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Array of month names in Spanish
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  // Generate 12 months starting from January (index 0)
  const orderedMonths = Array.from({ length: 12 }, (_, i) => {
    const monthName = months[i];
    const monthNumber = String(i + 1).padStart(2, '0');
    return {
      name: monthName,
      number: monthNumber,
      isActive: monthNumber === selectedMonth,
    };
  });

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 for tolerance
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      // Check initial state
      checkScroll();
      window.addEventListener('resize', checkScroll);

      // Scroll to currently selected month on mount
      const activeMonthCard = container.querySelector('[data-active="true"]') as HTMLElement | null;
      if (activeMonthCard) {
        // Find the parent div with .shrink-0 that contains the card
        const cardContainer = activeMonthCard.closest('.shrink-0') as HTMLElement | null;
        if (cardContainer) {
          const containerWidth = container.clientWidth;
          const cardLeft = cardContainer.offsetLeft;
          const cardWidth = cardContainer.offsetWidth;
          // Align the active card to the left of the visible area
          const scrollTo = Math.max(0, cardLeft - container.offsetLeft);
          container.scrollTo({ left: scrollTo, behavior: 'instant' });

          // Re-check scroll state after layout/scroll finishes
          requestAnimationFrame(() => {
            checkScroll();
          });
        }
      }
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollBy({
        left: -container.clientWidth / 2,
        behavior: 'smooth',
      });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollBy({
        left: container.clientWidth / 2,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="group relative flex h-28 w-full items-center rounded-lg bg-neutral-50 px-8">
      {/* Custom Navigation Buttons */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollLeft}
        className="swiper-button-prev-custom hover:text-primary absolute left-2 z-10 text-gray-600 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Previous months"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={scrollNext}
        disabled={!canScrollRight}
        className="swiper-button-next-custom hover:text-primary absolute right-2 z-10 text-gray-600 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Next months"
      >
        <ChevronRight size={24} />
      </button>

      <div
        ref={scrollContainerRef}
        className="scrollbar-hide flex w-full gap-4 overflow-x-auto scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {orderedMonths.map((month) => (
          <div
            key={month.number}
            className="flex w-1/2 shrink-0 justify-center py-4 sm:w-1/4 md:w-1/6 lg:w-[12.5%]"
          >
            <MonthCard
              month={month.name}
              isActive={month.isActive}
              onClick={() => onMonthSelect(month.number)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthCarousel;
