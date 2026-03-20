import React, { Suspense } from 'react'
import HeaderTitle from '../ui/HeaderTitle'
import NewsContent from './NewsContent'
import NewsSkeleton from './NewsSkeleton'

interface NewsSectionProps {
  tipoEvento?: number
  seccion?: number
  tipSitio?: number
}

const NewsSection: React.FC<NewsSectionProps> = ({
  tipoEvento = 1,
  seccion = 1,
  tipSitio = 1
}) => {
  return (
    <div className="flex flex-col w-full lg:w-2/3 items-stretch gap-[15px] relative h-full">
      <HeaderTitle
        titleFirstWorld="Últimas"
        titleSecondWorld="NOTICIAS"
        link="/noticias"
      />
      <div className="relative w-full flex-1 min-h-[635px] bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_#00000012]">
        <div className="w-full h-full flex bg-white rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)]">
          <div className="w-full h-auto mx-4 py-4 flex-col items-start gap-7 flex relative">
            <Suspense fallback={<NewsSkeleton />}>
              <NewsContent
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

export default NewsSection
