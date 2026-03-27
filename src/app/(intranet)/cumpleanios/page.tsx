import HeaderTitle from '@/app/components/ui/HeaderTitle';
import BirthdayMainSection from '@/app/components/birthday/BirthdayMainSection';
import { Birthday } from '@/app/types/birthday';

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
    <>
      <div className="relative flex w-full items-start gap-[27px] self-stretch">
        <HeaderTitle titleFirstWorld="Cumpleaños del" titleSecondWorld="MES" viewAll={false} />
      </div>
      <BirthdayMainSection
        birthdays={birthdays}
        initialMonth={currentMonth}
        currentMonthIndex={currentMonthIndex}
      />
    </>
  );
}
