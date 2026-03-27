import GalleryDetailClient from '@/app/components/gallery/GalleryDetailClient';
import BreadcrumbsNav from '@/app/components/ui/BreadcrumbsNav';
// @ts-ignore
import { dummyGalleryData } from '@/app/components/gallery/GalleryContent';
import { extractCodigoFromSlug } from '@/app/lib/utils';
import { notFound } from 'next/navigation';
import { ComunicacionEspecifica } from '@/app/types/comunicaciones';

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

  // BUSCAMOS EN LA DUMMY DATA POR AHORA
  const evento = (dummyGalleryData as ComunicacionEspecifica[]).find(
    (item) => item.codigo === codigo
  );

  if (!evento) {
    notFound();
  }

  // Fotos dummy para el detalle basadas en la imagen principal
  const photosArray = [
    evento.dirImagen,
    'https://images.unsplash.com/photo-1540575861501-7ad068e38ad3?q=80&w=1200',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200',
    'https://images.unsplash.com/photo-1523050853064-dbad350e020d?q=80&w=1200',
    'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200',
  ].filter(Boolean) as string[];

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
