import React from 'react';
import { Birthday } from '../../types/birthday';

interface BirthdayDayCardProps {
  day: string;
  people: Birthday[];
  showMonth?: boolean;
}

const monthNames: Record<string, string> = {
  '01': 'Ene',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Abr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Ago',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dic',
};

const BirthdayDayCard: React.FC<BirthdayDayCardProps> = React.memo(
  ({ day, people, showMonth = false }) => {
    return (
      <div className="flex w-full items-start justify-start gap-4">
        <div className="relative h-12 w-12 shrink-0 rounded-lg bg-zinc-100 outline -outline-offset-1 outline-rose-800">
          <div className="relative top-0 left-0 flex h-full items-center justify-center text-center font-['Poppins'] text-2xl leading-6 font-extrabold tracking-wide text-rose-800/90">
            {day}
          </div>
        </div>
        <div className="inline-flex flex-1 flex-col items-start justify-start gap-2">
          {people.map((person, index) => (
            <div
              key={index}
              className="flex h-auto flex-col items-start justify-start self-stretch"
            >
              <div className="inline-flex items-start justify-start self-stretch">
                <div className="w-full justify-start font-['Poppins'] text-sm leading-4 font-normal text-neutral-900">
                  <span className="capitalize">{person.nombre.toLowerCase()}</span>
                  {showMonth && (
                    <span className="ml-1 text-neutral-500">({monthNames[person.mes]})</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

BirthdayDayCard.displayName = 'BirthdayDayCard';

export default BirthdayDayCard;
