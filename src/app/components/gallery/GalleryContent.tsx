import GalleryClient from './GalleryClient';
import { getComunicacionesEspecificas } from '@/app/lib/api';

export default async function GalleryContent() {
  const fotos = await getComunicacionesEspecificas({
    tipoEvento: 3,
    seccion: 2,
    tipSitio: 1,
  });

  return <GalleryClient items={fotos} />;
}
