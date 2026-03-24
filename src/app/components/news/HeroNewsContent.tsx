import { getComunicacionesEspecificas } from '@/app/lib/api'
import SmallNewsCard from './SmallNewsCard'
import MediumNewsCard from './MediumNewsCard'
import Image from 'next/image'

interface HeroNewsContentProps {
  tipoEvento?: number
  seccion?: number
  tipSitio?: number
}

const HeroNewsContent: React.FC<HeroNewsContentProps> = async ({
  tipoEvento = 1,
  seccion = 3, // Default seccion para HeroNewsSection
  tipSitio = 1
}) => {
  const comunicaciones = await getComunicacionesEspecificas({
    tipoEvento,
    seccion,
    tipSitio
  })

  if (comunicaciones.length === 0) {
    return null
    // <div className="w-full h-full flex items-center justify-center text-gray-500 py-12">
    //   No hay noticias disponibles
    // </div>
  }

  // Distribuir las noticias según el layout
  // - Primeras 2: small cards (columna izquierda arriba)
  // - Tercera: hero image grande
  // - 4-6: medium cards (fila inferior)
  const smallNewsItems = comunicaciones.filter(
    (c) => c.subseccion === 'side_news'
  )
  const isHeroFromThird = !!comunicaciones[2]
  const heroNews = comunicaciones[2] || comunicaciones[0]
  const bottomNewsItems = comunicaciones.filter(
    (c) => c.subseccion === 'hero_news'
  )

  return (
    <section className="w-full mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* TOP ROW */}

        {/* Top Left: 2 Small Items (Stacked) - Spans 4 columns (1/3) */}
        <div className="lg:col-span-4 flex flex-col gap-6 justify-start">
          {smallNewsItems.map((item) => (
            <SmallNewsCard key={item.codigo} news={item} />
          ))}
        </div>

        {/* Top Right: Large Hero Image - Spans 8 columns (2/3) */}
        <div className="lg:col-span-8 relative lg:h-[470px] lg:min-h-0 rounded-2xl overflow-hidden group">
          <Image
            src={heroNews.dirImagen}
            alt={heroNews.banner || heroNews.titulo}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          {isHeroFromThird && heroNews.banner && (
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/70 to-transparent">
              <h2 className="text-white text-2xl font-bold">
                {heroNews.banner}
              </h2>
            </div>
          )}
        </div>

        {/* BOTTOM ROW */}

        {/* 3 Medium Items - Span 4 columns each (1/3 each) */}
        {bottomNewsItems.map((item) => (
          <div key={item.codigo} className="lg:col-span-4">
            <MediumNewsCard news={item} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default HeroNewsContent
