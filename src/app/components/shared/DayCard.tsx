import React from 'react';

interface DayCardProps {
  dayNumber: string | number;
  dayName: string;
  isActive?: boolean;
  onClick?: () => void;
}

const DayCard: React.FC<DayCardProps> = ({ dayNumber, dayName, isActive = false, onClick }) => {
  return (
    <div
      className={`relative h-16 w-14 cursor-pointer rounded-lg outline -outline-offset-1 transition-all ${
        isActive ? 'bg-rose-800/10 outline-1 outline-rose-800' : 'bg-white outline-zinc-300'
      }`}
      onClick={onClick}
    >
      <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center gap-2.5 self-center">
        <div className="justify-start self-stretch text-center font-['Poppins'] text-sm leading-4 font-medium text-stone-500">
          {dayName}
        </div>
        <div className="justify-start self-stretch text-center font-['Poppins'] text-2xl leading-4 font-medium text-black">
          {dayNumber}
        </div>
      </div>
    </div>
  );
};

export default DayCard;
