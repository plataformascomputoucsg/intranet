import React, { Suspense } from 'react'
import HeaderTitle from '../ui/HeaderTitle'
import EventContent from './EventContent'
import EventSkeleton from './EventSkeleton'

interface EventsSectionProps {
  tipoEvento?: number
  seccion?: number
  tipSitio?: number
}

const EventsSection: React.FC<EventsSectionProps> = ({
  tipoEvento = 2,
  seccion = 1,
  tipSitio = 1
}) => {
  return (
    <div className="flex flex-col w-full lg:w-1/3 items-stretch gap-[15px] relative h-full">
      <HeaderTitle
        titleFirstWorld="Últimos"
        titleSecondWorld="EVENTOS"
        link="/eventos"
      />
      <div className="relative w-full flex-1 min-h-[635px] rounded-[20px] overflow-hidden shadow-[0px_10px_30px_#00000012] bg-white">
        <div className="w-full h-full bg-white rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)]">
          <div className="flex w-auto justify-center h-full pt-4 mx-[27px] relative flex-col items-start gap-[22px] pb-4">
            <Suspense fallback={<EventSkeleton />}>
              <EventContent
                tipoEvento={tipoEvento}
                seccion={seccion}
                tipSitio={tipSitio}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsSection
