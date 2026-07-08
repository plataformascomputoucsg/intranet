import NewsSection from '@/app/components/news/NewSection';
import EventsSection from '../components/events/EventSection';
import BirthdayTodayWidget from '@/app/components/birthday/BirthdayTodayWidget';

export default async function Home() {
  return (
    /* Contenido Principal */
    <div className="relative flex w-full flex-col items-stretch gap-[27px] self-stretch lg:flex-row">
      {/* Left Column - News (wider) */}
      <div className="flex w-full flex-col lg:w-2/3">
        <NewsSection />
      </div>

      {/* Right Column - Events & Birthdays */}
      <div className="flex h-[550px] w-full flex-col gap-[27px] lg:w-1/3">
        <EventsSection />
        <BirthdayTodayWidget />
      </div>
    </div>
  );
}
