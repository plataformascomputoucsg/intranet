import React from 'react';

interface MonthCardProps {
  month: string;
  isActive?: boolean;
  onClick?: () => void;
}

const MonthCard: React.FC<MonthCardProps> = ({ month, isActive = false, onClick }) => {
  return (
    <div
      className="relative flex w-full cursor-pointer flex-col items-center gap-4"
      onClick={onClick}
      data-active={isActive}
    >
      <div
        className={`relative h-16 w-full rounded-lg outline -outline-offset-1 ${
          isActive ? 'bg-rose-800/5 outline-rose-800' : 'bg-white outline-zinc-300'
        }`}
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-2.5 px-2">
          <div
            className={`text-center font-['Poppins'] text-base leading-3 font-medium whitespace-nowrap ${
              isActive ? 'text-rose-800' : 'text-black'
            }`}
          >
            {month}
          </div>
        </div>
      </div>
      <div className="relative top-0 left-0 inline-flex items-center justify-center gap-[3px]">
        <div className="h-[5px] w-[5px] rounded-[38px] bg-teal-400" />
        <div className="h-[5px] w-[5px] rounded-[38px] bg-teal-400" />
      </div>
    </div>
  );
};

export default MonthCard;
