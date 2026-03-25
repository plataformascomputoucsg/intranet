import Header from '../components/layout/Header';
import Navbar from '../components/layout/NavBar';
import HeaderTitle from '../components/ui/HeaderTitle';
import TopBar from '../components/layout/TopBar';
import BirthdayMainSection from '../components/birthday/BirthdayMainSection';
import { WaveBackground } from '../components/layout/WaveBackground';
import Footer from '../components/layout/Footer';
import { Birthday } from '../types/birthday';

export const dynamic = 'force-dynamic';

const getBirthdays = async (): Promise<Birthday[]> => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/cumpleanios`, {
      cache: 'no-store', // Ensure fresh data
    });
    if (!res.ok) {
      throw new Error('Failed to fetch birthdays');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching birthdays:', error);
    return [];
  }
};

export default async function BirthdayPage() {
  const birthdays = await getBirthdays();

  // Calculate current date info on the server
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
        <div className="relative flex w-full items-start gap-[27px] self-stretch">
          <HeaderTitle titleFirstWorld="Cumpleaños del" titleSecondWorld="MES" viewAll={false} />
        </div>
        <BirthdayMainSection
          birthdays={birthdays}
          initialMonth={currentMonth}
          currentMonthIndex={currentMonthIndex}
        />
      </div>

      <Footer />
    </div>
  );
}
