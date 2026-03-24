import React from 'react'
import { Birthday } from '../../types/birthday'
import { PartyPopper, Mail } from 'lucide-react'

interface BirthdayHomepageCardProps {
  people: Birthday[]
}

const BirthdayHomepageCard: React.FC<BirthdayHomepageCardProps> = React.memo(
  ({ people }) => {
    return (
      <div className="w-full flex justify-start items-start gap-4">
        {/* Icon Container */}
        <div className="w-[60px] h-[60px] relative bg-rose-50 rounded-xl border border-rose-800 shrink-0 flex items-center justify-center">
          <PartyPopper className="w-8 h-8 text-rose-800" strokeWidth={2} />
        </div>

        {/* People List */}
        <div className="flex-1 flex flex-col justify-start items-stretch gap-[14px] mt-1 min-w-0">
          {people.map((person, index) => (
            <div
              key={index}
              className="flex justify-between items-center w-full min-w-0"
            >
              <div 
                className="text-neutral-800 text-[15px] font-normal font-['Poppins'] leading-none capitalize truncate flex-1 mr-2"
                title={person.nombre}
              >
                {person.nombre.toLowerCase()}
              </div>
              <a
                href="#"
                className="text-neutral-600 hover:text-rose-800 transition-colors shrink-0"
                title="Enviar felicitación"
              >
                <Mail className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }
)

BirthdayHomepageCard.displayName = 'BirthdayHomepageCard'

export default BirthdayHomepageCard
