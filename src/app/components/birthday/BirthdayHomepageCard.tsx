import React from 'react';
import { Birthday } from '../../types/birthday';
import { PartyPopper, Mail } from 'lucide-react';

interface BirthdayHomepageCardProps {
  people: Birthday[];
}

const createBirthdayMail = (correo: string, nombre: string) => {
  const subject = encodeURIComponent('¡Feliz Cumpleaños!');
  const body = encodeURIComponent(
    `¡Feliz Cumpleaños, ${nombre}! 🎂\n\nQue tengas un día increíble lleno de alegría y éxitos.\n\nCon cariño,`
  );
  return `https://outlook.office.com/mail/deeplink/compose?to=${correo}&subject=${subject}&body=${body}`;
};

const BirthdayHomepageCard: React.FC<BirthdayHomepageCardProps> = React.memo(({ people }) => {
  return (
    <div className="flex w-full items-start justify-start gap-4">
      {/* Icon Container */}
      <div className="relative flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-xl border border-rose-800 bg-rose-50">
        <PartyPopper className="h-8 w-8 text-rose-800" strokeWidth={2} />
      </div>

      {/* People List */}
      <div className="mt-1 flex min-w-0 flex-1 flex-col items-stretch justify-start gap-3.5">
        {people.map((person, index) => (
          <div key={index} className="flex w-full min-w-0 items-center justify-between">
            <div
              className="mr-2 flex-1 truncate font-['Poppins'] text-[15px] leading-none font-normal text-neutral-800 capitalize"
              title={person.nombre}
            >
              {person.nombre.toLowerCase()}
            </div>
            {person.correo && (
              <a
                href={createBirthdayMail(person.correo, person.nombre)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-neutral-600 transition-colors hover:text-rose-800"
                title="Enviar felicitación"
              >
                <Mail className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

BirthdayHomepageCard.displayName = 'BirthdayHomepageCard';

export default BirthdayHomepageCard;
