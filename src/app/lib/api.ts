import {
  ComunicacionEspecifica,
  ComunicacionesParams,
  NewsMainSectionData,
} from '../types/comunicaciones';

const API_BASE_URL = process.env.API_URL || 'http://localhost:8080';

/**
 * Cache de noticias por sección para evitar múltiples llamadas al mismo endpoint.
 * Next.js automáticamente deduplica fetches con la misma URL dentro de un request,
 * pero mantener esto explícito ayuda a la claridad y permite control adicional.
 */

/**
 * Obtiene comunicaciones específicas con optimizaciones de cache.
 * Usa revalidación ISR y tags para invalidación granular.
 */
export async function getComunicacionesEspecificas(
  params: ComunicacionesParams
): Promise<ComunicacionEspecifica[]> {
  const { tipoEvento, seccion, tipSitio } = params;
  const cacheTag = `comunicaciones-${tipoEvento}-${seccion}-${tipSitio}`;

  const url = `${API_BASE_URL}/api/comunicaciones/especificas?tipoEvento=${tipoEvento}&seccion=${seccion}&tipSitio=${tipSitio}`;

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60, // ISR: revalidar cada 60 segundos
        tags: [cacheTag, 'comunicaciones'], // Tags para invalidación on-demand
      },
    });

    if (!response.ok) {
      console.error(`[API] Error fetching comunicaciones (${response.status}):`, url);
      return []; // Retorna array vacío en vez de lanzar error para no romper la UI
    }

    return response.json();
  } catch (error) {
    console.error('[API] Network error fetching comunicaciones:', error);
    return [];
  }
}

/**
 * Obtiene una comunicación específica por su código.
 * Busca en todas las secciones relevantes (1, 2, 3) para encontrar la noticia.
 *
 * NOTA: Idealmente el backend debería tener un endpoint GET /api/comunicaciones/{codigo}
 * para evitar este approach de búsqueda múltiple.
 */
export async function getComunicacionByCodigo(
  codigo: number,
  tipoEvento: number = 1
): Promise<ComunicacionEspecifica | null> {
  // Buscar en las secciones más comunes en paralelo
  const secciones = [1, 2, 3, 4];

  try {
    const promises = secciones.map((seccion) =>
      getComunicacionesEspecificas({
        tipoEvento,
        seccion,
        tipSitio: 1,
      })
    );

    // Ejecutar todas las búsquedas en paralelo
    const results = await Promise.all(promises);

    // Buscar el código en todos los resultados
    for (const comunicaciones of results) {
      const found = comunicaciones.find((c) => c.codigo === codigo);
      if (found) return found;
    }

    return null;
  } catch (error) {
    console.error('[API] Error fetching comunicacion by codigo:', codigo, error);
    return null;
  }
}

/**
 * Obtiene y agrupa las comunicaciones para NewsMainSection.
 * - featuredNews: destacado='S' y subseccion='main'
 * - sideNews: subseccion='side_news', ordenados por indice
 * - smallNews: subseccion='small_news', ordenados por indice
 *
 * El filtrado se hace en cliente para minimizar llamadas al servidor,
 * aprovechando el cache de Next.js.
 */
export async function getNewsMainSectionData(
  params: ComunicacionesParams
): Promise<NewsMainSectionData> {
  const comunicaciones = await getComunicacionesEspecificas(params);

  // Usar un solo recorrido para mejor performance con arrays grandes
  let featuredNews: ComunicacionEspecifica | null = null;
  const sideNews: ComunicacionEspecifica[] = [];
  const smallNews: ComunicacionEspecifica[] = [];

  for (const c of comunicaciones) {
    if (c.destacado === 'S' && c.subseccion === 'main' && !featuredNews) {
      featuredNews = c;
    } else if (c.subseccion === 'side_news') {
      sideNews.push(c);
    } else if (c.subseccion === 'small_news') {
      smallNews.push(c);
    }
  }

  // Ordenar por indice después del filtrado
  sideNews.sort((a, b) => (a.indice ?? 0) - (b.indice ?? 0));
  smallNews.sort((a, b) => (a.indice ?? 0) - (b.indice ?? 0));

  return {
    featuredNews,
    sideNews,
    smallNews,
  };
}
