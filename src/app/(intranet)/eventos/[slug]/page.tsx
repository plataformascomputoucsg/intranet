import { notFound } from 'next/navigation';

import EventDetail from '@/app/components/events/EventDetail';
import BreadcrumbsNav from '@/app/components/ui/BreadcrumbsNav';
import { getComunicacionByCodigo } from '@/app/lib/api';
import { extractCodigoFromSlug } from '@/app/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params;

  // Extraer el código del slug (último segmento después del guión)
  const codigo = extractCodigoFromSlug(slug);

  if (!codigo) {
    notFound();
  }

  // Obtener el evento por código (tipoEvento=2 para eventos)
  const event = await getComunicacionByCodigo(codigo, 2);

  if (!event) {
    notFound();
  }

  return (
    <>
      <BreadcrumbsNav items={[{ label: 'Eventos', href: '/eventos' }, { label: event.titulo }]} />
      <EventDetail event={event} />
    </>
  );
}
