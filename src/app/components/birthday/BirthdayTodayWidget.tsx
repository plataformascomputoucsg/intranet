import HeaderTitle from '../ui/HeaderTitle';
import BirthdayHomepageCard from './BirthdayHomepageCard';
import { Birthday } from '../../types/birthday';

const getBirthdays = async (): Promise<Birthday[]> => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/cumpleanios`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch birthdays');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching birthdays for widget:', error);
    return [];
  }
};

export default async function BirthdayTodayWidget() {
  const birthdays = await getBirthdays();

  const now = new Date();
  const today = String(now.getDate()).padStart(2, '0');
  const currentMonth = String(now.getMonth() + 1).padStart(2, '0');

  // Filter birthdays for today
  const todayBirthdays = birthdays.filter((b) => b.mes === currentMonth && b.dia === today);

  return (
    <div className="relative flex w-full flex-col items-stretch gap-[15px]">
      <HeaderTitle titleFirstWorld="Cumpleaños del" titleSecondWorld="DÍA" link="/cumpleanios" />

      <div className="relative flex w-full flex-col items-start gap-4 rounded-[20px] bg-white p-6 shadow-[0px_10px_30px_#00000086]">
        {todayBirthdays.length > 0 ? (
          <BirthdayHomepageCard people={todayBirthdays} />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 py-2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c0 1-1 1.5-1 2.5S12 7 12 8s1-1 1-2-1-1.5-1-3Zm-6 7h12M7 10v8m10-8v8M5 18h14v2H5v-2Zm1-8h12l-1 8H7l-1-8Z"
              />
            </svg>

            <p className="font-['Poppins'] text-sm font-medium">
              No hay cumpleaños para esta fecha.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
