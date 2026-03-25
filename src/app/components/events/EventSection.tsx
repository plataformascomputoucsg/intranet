import React, { Suspense } from 'react';
import HeaderTitle from '../ui/HeaderTitle';
import EventContent from './EventContent';
import EventSkeleton from './EventSkeleton';

interface EventsSectionProps {
  tipoEvento?: number;
  seccion?: number;
  tipSitio?: number;
}

const EventsSection: React.FC<EventsSectionProps> = ({
  tipoEvento = 2,
  seccion = 1,
  tipSitio = 1,
}) => {
  return (
    <div className="relative flex h-full w-full flex-col items-stretch gap-[15px]">
      <HeaderTitle titleFirstWorld="Últimos" titleSecondWorld="EVENTOS" link="/eventos" />
      <div className="relative min-h-[635px] w-full flex-1 overflow-hidden rounded-[20px] bg-white shadow-[0px_10px_30px_#00000012]">
        <div className="h-full w-full rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)] bg-white">
          <div className="relative mx-[27px] flex h-full w-auto flex-col items-start justify-center gap-[22px] pt-4 pb-4">
            <Suspense fallback={<EventSkeleton />}>
              <EventContent tipoEvento={tipoEvento} seccion={seccion} tipSitio={tipSitio} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
