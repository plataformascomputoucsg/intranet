import TopBar from './components/layout/TopBar'
import Header from './components/layout/Header'
import NavBar from './components/layout/NavBar'
import SocialSection from './components/social/SocialSection'
import NewsSection from './components/news/NewSection'
import EventsSection from './components/events/EventSection'
import BirthdayTodayWidget from './components/birthday/BirthdayTodayWidget'
import { WaveBackground } from './components/layout/WaveBackground'
import Footer from './components/layout/Footer'

export default async function Home() {
  return (
    <div className="min-h-screen w-full font-sans relative flex flex-col z-0">
      <WaveBackground />
      <TopBar />
      <Header />
      <NavBar />

      {/* 4. Contenido Principal */}
      <div className="flex flex-col items-start gap-[22px] relative w-full px-4 lg:px-[10%] xl:px-[5%] 2xl:px-[10%] max-w-[1920px] mx-auto z-10 grow mb-8 mt-4 lg:mt-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-[27px] relative self-stretch w-full">
          {/* Left Column - Social */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <SocialSection />
          </div>

          {/* Middle Column - News */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <NewsSection />
          </div>

          {/* Right Column - Events & Birthdays */}
          <div className="w-full lg:w-1/3 flex flex-col gap-[27px]">
            <EventsSection />
            <BirthdayTodayWidget />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
