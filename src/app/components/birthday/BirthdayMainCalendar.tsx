import 'client-only';
import React, { useMemo } from 'react';
import { ScrollShadow } from '@heroui/scroll-shadow';
import BirthdayMonthCard from './BirthdayMonthCard';
import { Birthday } from '../../types/birthday';

interface BirthdayMainCalendarProps {
  birthdays: Birthday[];
  showMonth?: boolean;
}

const BirthdayMainCalendar: React.FC<BirthdayMainCalendarProps> = React.memo(
  ({ birthdays, showMonth = false }) => {
    // Group birthdays by day - memoize this expensive operation
    const birthdaysByDay = useMemo(() => {
      return birthdays.reduce(
        (acc, birthday) => {
          const day = birthday.dia;
          if (!acc[day]) {
            acc[day] = [];
          }
          acc[day].push(birthday);
          return acc;
        },
        {} as Record<string, Birthday[]>
      );
    }, [birthdays]);

    // Sort days
    const sortedDays = useMemo(() => Object.keys(birthdaysByDay).sort(), [birthdaysByDay]);

    return (
      <div className="flex w-full flex-col items-start justify-start gap-7">
        <ScrollShadow
          className="h-[450px] w-full overflow-x-hidden overflow-y-auto p-2"
          size={40}
          hideScrollBar
        >
          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-y-6">
            {sortedDays.map((day) => (
              <BirthdayMonthCard key={day} day={day} people={birthdaysByDay[day]} />
            ))}
          </div>
        </ScrollShadow>
      </div>
    );
  }
);

BirthdayMainCalendar.displayName = 'BirthdayMainCalendar';

export default BirthdayMainCalendar;
