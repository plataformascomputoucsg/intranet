import SideNewsCard from './SideNewsCard'
import { getComunicacionesEspecificas } from '@/app/lib/api'

interface NewsContentProps {
  tipoEvento?: number
  seccion?: number
  tipSitio?: number
}

const NewsContent: React.FC<NewsContentProps> = async ({
  tipoEvento = 1,
  seccion = 1,
  tipSitio = 1
}) => {
  const comunicaciones = await getComunicacionesEspecificas({
    tipoEvento,
    seccion,
    tipSitio
  })

  if (!comunicaciones || comunicaciones.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-500">
        No hay noticias disponibles
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      {comunicaciones.map((item, idx) => (
        <SideNewsCard key={idx} news={item} />
      ))}
    </div>
  )
}

export default NewsContent
