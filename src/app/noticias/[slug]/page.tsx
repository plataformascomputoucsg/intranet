import { notFound } from 'next/navigation';

import NewsDetail from '../../components/news/NewsDetail';
import BreadcrumbsNav from '../../components/ui/BreadcrumbsNav';
import Header from '../../components/layout/Header';
import Navbar from '../../components/layout/NavBar';
import TopBar from '../../components/layout/TopBar';
import { WaveBackground } from '../../components/layout/WaveBackground';
import Footer from '../../components/layout/Footer';
import { getComunicacionByCodigo } from '../../lib/api';
import { extractCodigoFromSlug } from '../../lib/utils';

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
    <div className="relative z-0 flex min-h-screen w-full flex-col font-sans">
      <WaveBackground />
      <TopBar />
      <Header />
      <Navbar />

      <div className="relative z-10 mx-4 mb-8 flex grow flex-col items-start gap-[22px] xl:mx-[10%]">
        <BreadcrumbsNav
          items={[{ label: 'Noticias', href: '/noticias' }, { label: news.titulo }]}
        />

        <NewsDetail news={news} />
      </div>

      <Footer />
    </div>
  );
}
