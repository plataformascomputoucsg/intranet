import React, { Suspense } from 'react';
import BottomNewsContent from './BottomNewsContent';
import BottomNewsSkeleton from './BottomNewsSkeleton';

interface BottomNewsSectionProps {
  tipoEvento?: number;
  seccion?: number;
  tipSitio?: number;
}

const BottomNewsSection: React.FC<BottomNewsSectionProps> = ({
  tipoEvento = 1,
  seccion = 4,
  tipSitio = 1,
}) => {
  return (
    <Suspense fallback={<BottomNewsSkeleton />}>
      <BottomNewsContent tipoEvento={tipoEvento} seccion={seccion} tipSitio={tipSitio} />
    </Suspense>
  );
};

export default BottomNewsSection;
