import React, { Suspense } from 'react';
import HeaderTitle from '../ui/HeaderTitle';
import NewsContent from './NewsContent';
import NewsSkeleton from './NewsSkeleton';

interface NewsSectionProps {
  tipoEvento?: number;
  seccion?: number;
  tipSitio?: number;
}

const NewsSection: React.FC<NewsSectionProps> = ({ tipoEvento = 1, seccion = 1, tipSitio = 1 }) => {
  return (
    <div className="relative flex h-full w-full flex-col items-stretch gap-[15px]">
      <HeaderTitle titleFirstWorld="Últimas" titleSecondWorld="NOTICIAS" link="/noticias" />
      <div className="relative min-h-[635px] w-full flex-1 overflow-hidden rounded-[20px] bg-white shadow-[0px_10px_30px_#00000012]">
        <div className="flex h-full w-full rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)] bg-white">
          <div className="relative mx-4 flex h-auto w-full flex-col items-start gap-7 py-4">
            <Suspense fallback={<NewsSkeleton />}>
              <NewsContent tipoEvento={tipoEvento} seccion={seccion} tipSitio={tipSitio} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
