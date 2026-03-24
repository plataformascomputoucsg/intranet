import HeaderTitle from '../ui/HeaderTitle'
import BirthdayHomepageCard from './BirthdayHomepageCard'
import { Birthday } from '../../types/birthday'

const getBirthdays = async (): Promise<Birthday[]> => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/cumpleanios`, {
      cache: 'no-store'
    })
    if (!res.ok) {
      throw new Error('Failed to fetch birthdays')
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching birthdays for widget:', error)
    return []
  }
}

export default async function BirthdayTodayWidget() {
  const birthdays = await getBirthdays()

  const now = new Date()
  const today = String(now.getDate()).padStart(2, '0')
  const currentMonth = String(now.getMonth() + 1).padStart(2, '0')

  // Filter birthdays for today
  const todayBirthdays = birthdays.filter(
    (b) => b.mes === currentMonth && b.dia === today
  )

  return (
    <div className="flex flex-col w-full items-stretch gap-[15px] relative">
      <HeaderTitle
        titleFirstWorld="Cumpleaños del"
        titleSecondWorld="DÍA"
        link="/cumpleanios"
      />

      <div className="w-full bg-white rounded-[20px] shadow-[0px_10px_30px_#00000012] p-6 relative flex flex-col items-start gap-4">
        {todayBirthdays.length > 0 ? (
          <BirthdayHomepageCard people={todayBirthdays} />
        ) : (
          <div className="text-gray-500 text-sm font-['Poppins'] text-center w-full py-4">
            No hay cumpleaños registrados para hoy.
          </div>
        )}
      </div>
    </div>
  )
}
