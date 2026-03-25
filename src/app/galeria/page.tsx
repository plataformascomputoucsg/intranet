import BreadcrumbsNav from '@/app/components/ui/BreadcrumbsNav';
import Header from '@/app/components/layout/Header';
import Navbar from '@/app/components/layout/NavBar';
import HeaderTitle from '@/app/components/ui/HeaderTitle';
import TopBar from '@/app/components/layout/TopBar';
import { WaveBackground } from '@/app/components/layout/WaveBackground';
import Footer from '@/app/components/layout/Footer';
import GalleryMainSection from '@/app/components/gallery/GalleryMainSection';

export const dynamic = 'force-dynamic';

export default async function GaleriaPage() {
  return (
    <div className="relative z-0 flex min-h-screen w-full flex-col font-sans">
      <WaveBackground />
      <TopBar />
      <Header />
      <Navbar />

      <main className="relative z-10 mx-4 mb-16 flex grow flex-col items-start gap-[22px] md:mx-6 xl:mx-[10%]">
        <BreadcrumbsNav items={[{ label: 'Galería de fotos' }]} />

        <div className="relative flex w-full items-start gap-[27px] self-stretch">
          <HeaderTitle titleFirstWorld="GALERÍA DE" titleSecondWorld="EVENTOS" viewAll={false} />
        </div>

        <GalleryMainSection />
      </main>

      <Footer />
    </div>
  );
}
