import React from 'react';
import { ChevronIcon } from '../icons/ChevronIcon';

interface HeaderTitleProps {
  titleFirstWorld: string;
  titleSecondWorld: string;
  viewAll?: boolean;
  link?: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  titleFirstWorld,
  titleSecondWorld,
  viewAll = true,
  link,
}) => {
  return (
    <div className="relative flex w-full items-center justify-between">
      <div className="relative flex w-auto flex-col items-start">
        <div className="relative flex h-6 w-full items-start gap-2">
          <div className="relative font-['Poppins'] text-[22px] leading-6 font-bold tracking-[0] whitespace-nowrap text-[#181818]">
            {titleFirstWorld}
          </div>

          <div className="relative font-['Poppins'] text-[22px] leading-6 font-bold tracking-[1.10px] whitespace-nowrap text-[#a90046db] [-webkit-text-stroke:0.35px_#a90046db]">
            {titleSecondWorld}
          </div>
          <br />
          <div
            className="absolute top-6 -left-2 z-0"
            style={{
              width: '50px',
              height: '50px',
              border: 'solid 2px #000',
              borderColor: '#A81549 transparent transparent transparent',
              borderRadius: '50% / 10px 10px 10px 0',
            }}
          ></div>
        </div>
      </div>

      {viewAll && (
        <div className="relative flex h-[26px] w-[99px] cursor-pointer items-center gap-[12.79px] transition-opacity hover:opacity-80">
          <div className="relative inline-flex flex-[0_0_auto] items-start">
            {/* <div className="relative w-fit mt-[-0.99px] font-['Poppins'] font-medium text-[#a90046] text-[12.5px] tracking-[0] leading-[25.6px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:0] [-webkit-box-orient:vertical]">
              Ver todas
            </div> */}
            <a
              href={link}
              className="text-ucsg-secondary flex items-center font-['Poppins'] text-sm font-medium whitespace-nowrap hover:underline"
            >
              Ver todas{' '}
            </a>
          </div>

          <ChevronIcon className="relative aspect-[1] h-[17.05px] w-[17.05px] text-rose-800" />
        </div>
      )}
    </div>
  );
};

export default HeaderTitle;
