import GalleryClient from './GalleryClient';
import { ComunicacionEspecifica } from '@/app/types/comunicaciones';

// DATA DUMMY PARA VISUALIZACIÓN HASTA QUE EL BACKEND ESTÉ LISTO
export const dummyGalleryData: ComunicacionEspecifica[] = [
  {
    codigo: 1,
    titulo: 'Ceremonia de Graduación Facultad de Ingeniería 2024',
    dirImagen:
      'https://images.unsplash.com/photo-1523050853064-dbad350e020d?q=80&w=800&auto=format&fit=crop',
    fecInicio: '15 Nov, 2023',
    tipoEvento: 3,
    seccion: 1,
    tipSitio: 1,
    descripcion: 'Descripción dummy',
  },
  {
    codigo: 2,
    titulo: 'Congreso Internacional de Innovación Tecnológica',
    dirImagen:
      'https://images.unsplash.com/photo-1540575861501-7ad068e38ad3?q=80&w=800&auto=format&fit=crop',
    fecInicio: '12 Nov, 2023',
    tipoEvento: 3,
    seccion: 1,
    tipSitio: 1,
    descripcion: 'Descripción dummy',
  },
  {
    codigo: 3,
    titulo: 'Inauguración del Nuevo Auditorio Principal',
    dirImagen:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop',
    fecInicio: '10 Nov, 2023',
    tipoEvento: 3,
    seccion: 1,
    tipSitio: 1,
    descripcion: 'Descripción dummy',
  },
  {
    codigo: 4,
    titulo: 'Talleres de Liderazgo Estudiantil UCSG',
    dirImagen:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    fecInicio: '08 Nov, 2023',
    tipoEvento: 3,
    seccion: 1,
    tipSitio: 1,
    descripcion: 'Descripción dummy',
  },
  {
    codigo: 5,
    titulo: 'Feria de Emprendimiento y Proyectos Sociales',
    dirImagen:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    fecInicio: '05 Nov, 2023',
    tipoEvento: 3,
    seccion: 1,
    tipSitio: 1,
    descripcion: 'Descripción dummy',
  },
  {
    codigo: 6,
    titulo: 'Encuentro Alumni: 15 años de Excelencia',
    dirImagen:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
    fecInicio: '01 Nov, 2023',
    tipoEvento: 3,
    seccion: 1,
    tipSitio: 1,
    descripcion: 'Descripción dummy',
  },
];

interface GalleryContentProps {
  tipoEvento?: number;
  seccion?: number;
}

export default async function GalleryContent({ tipoEvento = 3, seccion = 1 }: GalleryContentProps) {
  try {
    // COMENTADO HASTA QUE EL BACKEND ESTÉ LISTO
    /*
    const fotos = await getComunicacionesEspecificas({
      tipoEvento,
      seccion,
      tipSitio: 1,
    });
    return <GalleryClient items={fotos || []} />;
    */

    return <GalleryClient items={dummyGalleryData} />;
  } catch (error) {
    console.error('Error fetching gallery photos:', error);
    return (
      <div className="flex w-full flex-col items-center justify-center py-20 text-center">
        <p className="font-['Poppins'] text-lg text-red-500">
          Ocurrió un error al cargar la galería. Por favor, intenta de nuevo más tarde.
        </p>
      </div>
    );
  }
}
