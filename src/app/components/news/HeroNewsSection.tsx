import React, { Suspense } from 'react';
import HeroNewsContent from './HeroNewsContent';
import HeroNewsSkeleton from './HeroNewsSkeleton';

interface HeroNewsSectionProps {
  tipoEvento?: number;
  seccion?: number;
  tipSitio?: number;
}

const HeroNewsSection: React.FC<HeroNewsSectionProps> = ({
  tipoEvento = 1,
  seccion = 3,
  tipSitio = 1,
}) => {
  return (
    <Suspense fallback={<HeroNewsSkeleton />}>
      <HeroNewsContent tipoEvento={tipoEvento} seccion={seccion} tipSitio={tipSitio} />
    </Suspense>
  );
};

export default HeroNewsSection;
