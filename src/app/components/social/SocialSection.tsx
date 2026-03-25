import React from 'react';
import HeaderTitle from '../ui/HeaderTitle';
import InstagramFeed from './InstagramFeed';

const SocialSection: React.FC = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-stretch gap-[15px]">
      <HeaderTitle
        titleFirstWorld="Redes"
        titleSecondWorld="SOCIALES"
        link="https://www.instagram.com/ucsgrectorado/"
      />
      <div className="relative min-h-[635px] w-full flex-1 overflow-hidden rounded-[20px] bg-white shadow-[0px_10px_30px_#00000012]">
        <div className="flex h-full w-full rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)] bg-white">
          <div className="relative mx-4 flex h-auto w-full flex-col items-start gap-7 py-4">
            <InstagramFeed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
