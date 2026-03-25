import React, { Suspense } from 'react';
import EventMainContent from './EventMainContent';
import EventMainSkeleton from './EventMainSkeleton';

interface EventMainSectionProps {
  tipoEvento?: number;
  seccion?: number;
  tipSitio?: number;
}

const EventMainSection: React.FC<EventMainSectionProps> = ({
  tipoEvento = 2,
  seccion = 1,
  tipSitio = 1,
}) => {
  return (
    <div className="relative flex w-full flex-col items-start gap-[15px]">
      <div className="relative z-0 h-auto w-full overflow-hidden rounded-[20px] bg-white shadow-[0px_10px_30px_#00000012]">
        <div className="flex h-full w-full rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)]">
          <Suspense fallback={<EventMainSkeleton />}>
            <EventMainContent tipoEvento={tipoEvento} seccion={seccion} tipSitio={tipSitio} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default EventMainSection;
