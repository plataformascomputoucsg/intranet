import BreadcrumbsNav from '../components/ui/BreadcrumbsNav';

import Header from '../components/layout/Header';
import Navbar from '../components/layout/NavBar';
import HeaderTitle from '../components/ui/HeaderTitle';
import TopBar from '../components/layout/TopBar';
import { WaveBackground } from '../components/layout/WaveBackground';
import Footer from '../components/layout/Footer';
import NewsMainSection from '../components/news/NewsMainSection';
import HeroNewsSection from '../components/news/HeroNewsSection';
import BottomNewsSection from '../components/news/BottomNewsSection';

export const dynamic = 'force-dynamic';

// ... existing code

export default async function NewsPage() {
  // ... existing code
  const events: any = [];
  const now = new Date();
  const currentMonth = String(now.getMonth() + 1).padStart(2, '0');
  const currentMonthIndex = now.getMonth();

  return (
    <div className={`relative z-0 flex min-h-screen w-full flex-col font-sans`}>
      <WaveBackground />
      <TopBar />
      <Header />
      <Navbar />

      <div className="relative z-10 mx-4 mb-8 flex grow flex-col items-start gap-[22px] xl:mx-[10%]">
        <BreadcrumbsNav items={[{ label: 'Noticias' }]} />
        <div className="relative flex w-full items-start gap-[27px] self-stretch">
          <HeaderTitle titleFirstWorld="Noticias" titleSecondWorld="de Interés" viewAll={false} />
        </div>
        <NewsMainSection />
        {/* <GestorBanner /> */}
        <HeroNewsSection />
        <BottomNewsSection />
        {/* <div className="flex flex-col items-start gap-5 w-full">
          <div className="w-full h-full border rounded-xl">
            <InstagramFeed />
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  );
}
