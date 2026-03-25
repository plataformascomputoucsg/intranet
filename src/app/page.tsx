import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import NavBar from './components/layout/NavBar';
import SocialSection from './components/social/SocialSection';
import NewsSection from './components/news/NewSection';
import EventsSection from './components/events/EventSection';
import BirthdayTodayWidget from './components/birthday/BirthdayTodayWidget';
import { WaveBackground } from './components/layout/WaveBackground';
import Footer from './components/layout/Footer';

export default async function Home() {
  return (
    <div className="relative z-0 flex min-h-screen w-full flex-col font-sans">
      <WaveBackground />
      <TopBar />
      <Header />
      <NavBar />

      {/* 4. Contenido Principal */}
      <div className="relative z-10 mx-auto mt-4 mb-8 flex w-full max-w-[1920px] grow flex-col items-start gap-[22px] px-4 lg:mt-6 lg:px-[10%] xl:px-[5%] 2xl:px-[10%]">
        <div className="relative flex w-full flex-col items-stretch gap-[27px] self-stretch lg:flex-row">
          {/* Left Column - Social */}
          <div className="flex w-full flex-col lg:w-1/3">
            <SocialSection />
          </div>

          {/* Middle Column - News */}
          <div className="flex w-full flex-col lg:w-1/3">
            <NewsSection />
          </div>

          {/* Right Column - Events & Birthdays */}
          <div className="flex w-full flex-col gap-[27px] lg:w-1/3">
            <EventsSection />
            <BirthdayTodayWidget />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
