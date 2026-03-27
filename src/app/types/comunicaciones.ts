// Tipo para la respuesta del API de comunicaciones
export interface ComunicacionEspecifica {
  codigo: number;
  titulo: string;
  descripcion: string;
  fecInicio: string;
  dirImagen: string;
  banner?: string;
  categoria?: string;
  slug?: string;
  highlight?: string;
  detalleDesc?: string;
  // Campos para filtrado y ordenamiento
  tipoEvento?: number;
  seccion?: number;
  tipSitio?: number;
  indice?: number;
  destacado?: string; // 'S' o 'N'
  subseccion?: 'main' | 'side_news' | 'small_news' | 'hero_news';
  ubicacion?: string;
  descOrganiza?: string;
}

// Parámetros para el query
export interface ComunicacionesParams {
  tipoEvento: number;
  seccion: number;
  tipSitio: number;
}

// Tipo para datos filtrados de NewsMainSection
export interface NewsMainSectionData {
  featuredNews: ComunicacionEspecifica | null;
  sideNews: ComunicacionEspecifica[];
  smallNews: ComunicacionEspecifica[];
}
