import { notFound } from 'next/navigation';

import NewsDetail from '@/app/components/news/NewsDetail';
import BreadcrumbsNav from '@/app/components/ui/BreadcrumbsNav';
import { getComunicacionByCodigo } from '@/app/lib/api';
import { extractCodigoFromSlug } from '@/app/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsPage({ params }: PageProps) {
  const { slug } = await params;

  // Extraer el código del slug (último segmento después del guión)
  const codigo = extractCodigoFromSlug(slug);

  if (!codigo) {
    notFound();
  }

  // Obtener la noticia por código
  const news = await getComunicacionByCodigo(codigo);

  if (!news) {
    notFound();
  }

  return (
    <>
      <BreadcrumbsNav items={[{ label: 'Noticias', href: '/noticias' }, { label: news.titulo }]} />
      <NewsDetail news={news} />
    </>
  );
}
