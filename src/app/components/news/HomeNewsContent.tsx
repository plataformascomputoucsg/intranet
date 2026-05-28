import { getNewsMainSectionData, getComunicacionesEspecificas } from '@/app/lib/api';
import FeaturedNewsCard from './FeaturedNewsCard';
import HomeNewsCard from './HomeNewsCard';
import { ComunicacionEspecifica } from '@/app/types/comunicaciones';

interface HomeNewsContentProps {
  tipoEvento?: number;
  seccion?: number;
  tipSitio?: number;
}

const HomeNewsContent: React.FC<HomeNewsContentProps> = async ({
  tipoEvento = 1,
  seccion = 1,
  tipSitio = 1,
}) => {
  const { featuredNews, smallNews } = await getNewsMainSectionData({
    tipoEvento,
    seccion,
    tipSitio,
  });

  // Fallback: si no hay datos filtrados por subseccion, usar todas las comunicaciones
  let finalFeatured: ComunicacionEspecifica | null = featuredNews;
  let finalGrid: ComunicacionEspecifica[] = smallNews;

  if (!featuredNews && smallNews.length === 0) {
    const allNews = await getComunicacionesEspecificas({ tipoEvento, seccion, tipSitio });
    if (allNews.length > 0) {
      finalFeatured = allNews[0];
      finalGrid = allNews.slice(1);
    }
  }

  if (!finalFeatured && finalGrid.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center py-12 text-gray-500">
        No hay noticias disponibles
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      {/* Featured card */}
      {finalFeatured && <FeaturedNewsCard news={finalFeatured} />}

      {/* Grid 2 columnas */}
      {finalGrid.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {finalGrid.slice(0, 4).map((news) => (
            <HomeNewsCard key={news.codigo} news={news} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeNewsContent;
