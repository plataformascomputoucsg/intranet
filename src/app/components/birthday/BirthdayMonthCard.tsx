import React from 'react'
import { Birthday } from '../../types/birthday'
import { Mail } from 'lucide-react'

interface BirthdayMonthCardProps {
  day: string
  people: Birthday[]
}

const BirthdayMonthCard: React.FC<BirthdayMonthCardProps> = React.memo(
  ({ day, people }) => {
    return (
      <div className="w-full bg-white rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] border border-neutral-100 border-t-[5px] border-t-rose-800 flex flex-row p-4 gap-4 items-center h-full">
        {/* Day Number Box */}
        <div className="w-12 h-12 relative bg-zinc-100 rounded-lg outline -outline-offset-1 outline-rose-800 shrink-0">
          <div className="left-0 top-0 relative flex h-full items-center text-center justify-center text-rose-800/90 text-2xl font-extrabold font-['Poppins'] leading-6 tracking-wide">
            {day}
          </div>
        </div>

        {/* People List */}
        <div className="flex-1 flex flex-col gap-2 min-w-0 py-1 justify-center">
          {people.map((person, index) => (
            <div
              key={index}
              className="flex justify-between items-center w-full min-w-0"
            >
              <div
                className="text-neutral-700 text-[14px] font-normal font-['Poppins'] capitalize truncate flex-1 mr-2"
                title={person.nombre}
              >
                {person.nombre.toLowerCase()}
              </div>
              <a
                href="#"
                className="text-neutral-400 hover:text-rose-800 transition-colors shrink-0"
                title="Enviar felicitación"
              >
                <Mail className="w-[16px] h-[16px]" strokeWidth={1.5} />
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }
)

BirthdayMonthCard.displayName = 'BirthdayMonthCard'

export default BirthdayMonthCard
