import BreadcrumbsNav from '../components/ui/BreadcrumbsNav';

import Header from '../components/layout/Header';
import Navbar from '../components/layout/NavBar';
import HeaderTitle from '../components/ui/HeaderTitle';
import TopBar from '../components/layout/TopBar';
import { WaveBackground } from '../components/layout/WaveBackground';
import Footer from '../components/layout/Footer';
import EventMainSection from '../components/events/EventMainSection';

export const dynamic = 'force-dynamic';

export default async function EventosPage() {
  return (
    <div className={`relative z-0 flex min-h-screen w-full flex-col font-sans`}>
      <WaveBackground />
      <TopBar />
      <Header />
      <Navbar />

      <div className="relative z-10 mx-4 mb-8 flex grow flex-col items-start gap-[22px] xl:mx-[10%]">
        <BreadcrumbsNav items={[{ label: 'Eventos' }]} />
        <div className="relative flex w-full items-start gap-[27px] self-stretch">
          <HeaderTitle titleFirstWorld="Eventos de" titleSecondWorld="INTERES" viewAll={false} />
        </div>
        <EventMainSection />
      </div>

      <Footer />
    </div>
  );
}
