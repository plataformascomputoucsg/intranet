import SocialSection from '@/app/components/social/SocialSection';
import NewsSection from '@/app/components/news/NewSection';
import EventsSection from '../components/events/EventSection';
import BirthdayTodayWidget from '@/app/components/birthday/BirthdayTodayWidget';

export default async function Home() {
  return (
    /* Contenido Principal */
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
        {/* <div className="flex flex-col flex-1"> */}
        <EventsSection />
        {/* </div> */}
        <BirthdayTodayWidget />
      </div>
    </div>
  );
}
