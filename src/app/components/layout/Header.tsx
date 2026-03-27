import React from 'react';
import { UcsgIcon } from '../icons/UcsgIcon';
import { IntranetIcon } from '../icons/IntranetIcon';

const Header: React.FC = () => {
  return (
    // <header className="bg-white py-6 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center shadow-sm">

    <header className="h-44 w-full bg-white">
      <div className="mx-auto grid w-[95%] max-w-[1920px] grid-cols-[1fr_auto_1fr] py-8 xl:w-[80%]">
        <div className="flex justify-start">
          <UcsgIcon className="h-12 w-auto lg:h-14" />
        </div>
        <div className="flex justify-center">
          <IntranetIcon className="h-10 w-auto lg:h-12" />
        </div>
        <div />
      </div>
    </header>
  );
};

export default Header;
