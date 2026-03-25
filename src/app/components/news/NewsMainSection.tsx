import React, { Suspense } from 'react';
import NewsMainContent from './NewsMainContent';
import NewsMainSkeleton from './NewsMainSkeleton';

interface NewsMainSectionProps {
  tipoEvento?: number;
  seccion?: number;
  tipSitio?: number;
}

const NewsMainSection: React.FC<NewsMainSectionProps> = ({
  tipoEvento = 1,
  seccion = 2,
  tipSitio = 1,
}) => {
  return (
    <div className="relative flex w-full flex-col items-start gap-8">
      <div className="relative z-0 h-auto w-full overflow-hidden rounded-[20px] bg-white p-8 shadow-[0px_10px_30px_#00000012]">
        <Suspense fallback={<NewsMainSkeleton />}>
          <NewsMainContent tipoEvento={tipoEvento} seccion={seccion} tipSitio={tipSitio} />
        </Suspense>
      </div>
    </div>
  );
};

export default NewsMainSection;
