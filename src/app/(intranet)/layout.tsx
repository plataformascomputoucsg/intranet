import TopBar from '@/app/components/layout/TopBar';
import Header from '@/app/components/layout/Header';
import NavBar from '@/app/components/layout/NavBar';
import { WaveBackground } from '@/app/components/layout/WaveBackground';
import Footer from '@/app/components/layout/Footer';

export default function IntranetLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-0 flex min-h-screen w-full flex-col font-sans">
      <WaveBackground />
      <TopBar />
      <Header />
      <NavBar />
      <div className="relative z-10 mx-4 mb-8 flex grow flex-col items-start gap-[22px] xl:mx-[10%]">
        {children}
      </div>
      <Footer />
    </div>
  );
}
