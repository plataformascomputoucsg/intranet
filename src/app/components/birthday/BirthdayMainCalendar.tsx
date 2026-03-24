import 'client-only'
import React, { useMemo } from 'react'
import { ScrollShadow } from '@heroui/scroll-shadow'
import BirthdayMonthCard from './BirthdayMonthCard'
import { Birthday } from '../../types/birthday'

interface BirthdayMainCalendarProps {
  birthdays: Birthday[]
  showMonth?: boolean
}

const BirthdayMainCalendar: React.FC<BirthdayMainCalendarProps> = React.memo(
  ({ birthdays, showMonth = false }) => {
    // Group birthdays by day - memoize this expensive operation
    const birthdaysByDay = useMemo(() => {
      return birthdays.reduce(
        (acc, birthday) => {
          const day = birthday.dia
          if (!acc[day]) {
            acc[day] = []
          }
          acc[day].push(birthday)
          return acc
        },
        {} as Record<string, Birthday[]>
      )
    }, [birthdays])

    // Sort days
    const sortedDays = useMemo(
      () => Object.keys(birthdaysByDay).sort(),
      [birthdaysByDay]
    )

    return (
      <div className="w-full flex flex-col justify-start items-start gap-7">
        <ScrollShadow
          className="w-full h-[450px] overflow-y-auto overflow-x-hidden p-2"
          size={40}
          hideScrollBar
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-6 items-stretch">
            {sortedDays.map((day) => (
              <BirthdayMonthCard
                key={day}
                day={day}
                people={birthdaysByDay[day]}
              />
            ))}
          </div>
        </ScrollShadow>
      </div>
    )
  }
)

BirthdayMainCalendar.displayName = 'BirthdayMainCalendar'

export default BirthdayMainCalendar
