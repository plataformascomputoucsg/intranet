import GalleryDetailClient from '@/app/components/gallery/GalleryDetailClient';
import BreadcrumbsNav from '@/app/components/ui/BreadcrumbsNav';
import { extractCodigoFromSlug } from '@/app/lib/utils';
import { getComunicacionByCodigo, getImagenesEvento } from '@/app/lib/api';
import { notFound } from 'next/navigation';

interface GalleryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function GalleryDetailPage({ params }: GalleryPageProps) {
  const { slug } = await params;
  const codigo = extractCodigoFromSlug(slug);

  if (!codigo) {
    notFound();
  }

  const [evento, fotos] = await Promise.all([
    getComunicacionByCodigo(codigo, 3),
    getImagenesEvento(codigo),
  ]);

  if (!evento) {
    notFound();
  }

  // Si el endpoint de imágenes devuelve resultados los usamos,
  // sino caemos al dirImagen principal como fallback
  const photosArray = fotos.length > 0 ? fotos : [evento.dirImagen].filter(Boolean) as string[];

  return (
    <div className="flex w-full flex-col gap-8 p-4 md:p-8">
      <BreadcrumbsNav items={[{ label: 'Galería', href: '/galeria' }, { label: evento.titulo }]} />

      <h1 className="font-['Poppins'] text-3xl font-bold text-neutral-900 md:text-4xl">
        {evento.titulo}
      </h1>

      <GalleryDetailClient title={evento.titulo} photos={photosArray} />
    </div>
  );
}
