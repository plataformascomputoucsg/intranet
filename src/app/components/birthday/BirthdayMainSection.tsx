'use client'
import { useState, useMemo, useDeferredValue } from 'react'
import Image from 'next/image'
import MonthCarousel from '../shared/MonthCarousel'
import SearchInput from '../ui/SearchInput'
import BirthdayMainCalendar from './BirthdayMainCalendar'
import { BirthdayBackground } from './BirthdayBackground'
import ClientOnly from '../ui/ClientOnly'
import { Birthday } from '../../types/birthday'
// @ts-ignore
import birthdayImg from '@/assets/images/birthday_img.png'

interface BirthdayMainSectionProps {
  birthdays: Birthday[]
  initialMonth: string
  currentMonthIndex: number
}

const BirthdayMainSection: React.FC<BirthdayMainSectionProps> = ({
  birthdays,
  initialMonth,
  currentMonthIndex
}) => {
  const [selectedMonth, setSelectedMonth] = useState<string>(initialMonth)
  const [searchQuery, setSearchQuery] = useState('')
  const deferredSearchQuery = useDeferredValue(searchQuery)

  const isSearching = deferredSearchQuery.trim().length > 0

  const filteredBirthdays = useMemo(() => {
    return birthdays.filter((birthday) => {
      // Always filter by selected month
      if (birthday.mes !== selectedMonth) return false

      // If searching, further filter by name
      if (isSearching) {
        return birthday.nombre
          .toLowerCase()
          .includes(deferredSearchQuery.toLowerCase())
      }
      return true
    })
  }, [birthdays, isSearching, deferredSearchQuery, selectedMonth])

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month)
    setSearchQuery('') // Clear search when selecting a month
  }

  return (
    <div className="flex flex-col w-full items-start gap-[15px] relative">
      <div className="relative w-full flex flex-col lg:flex-row rounded-[20px] overflow-hidden shadow-[0px_10px_30px_#00000012] bg-white z-0 min-h-[635px]">
        <ClientOnly>
          <BirthdayBackground />
        </ClientOnly>
        {/* Left Column - Image */}
        <div className="hidden lg:flex w-full lg:w-[40%] xl:w-[35%] relative bg-rose-50/20 items-center justify-center p-8">
          <div className="relative w-full h-full min-h-[500px]">
            <Image
              src={birthdayImg}
              alt="Feliz Cumpleaños"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="w-full lg:w-[60%] xl:w-[65%] flex flex-col p-6 lg:p-10 relative mt-2">
          <MonthCarousel
            selectedMonth={selectedMonth}
            onMonthSelect={handleMonthSelect}
            currentMonthIndex={currentMonthIndex}
          />

          <div className="w-full flex justify-start items-center mt-6 mb-8">
            <div className="w-full">
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                className="w-full h-full px-4"
              />
            </div>
          </div>

          <div className="w-full flex-1">
            <BirthdayMainCalendar
              birthdays={filteredBirthdays}
              showMonth={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BirthdayMainSection
