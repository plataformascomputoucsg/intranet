import React from 'react';
import { Birthday } from '../../types/birthday';
import { Mail } from 'lucide-react';

interface BirthdayMonthCardProps {
  day: string;
  people: Birthday[];
}

const createBirthdayMail = (correo: string, nombre: string) => {
  const subject = encodeURIComponent('¡Feliz Cumpleaños!');
  const body = encodeURIComponent(
    `¡Feliz Cumpleaños, ${nombre}! 🎂\n\nQue tengas un día increíble lleno de alegría y éxitos.\n\nCon cariño,`
  );
  return `https://outlook.office.com/mail/deeplink/compose?to=${correo}&subject=${subject}&body=${body}`;
};

const BirthdayMonthCard: React.FC<BirthdayMonthCardProps> = React.memo(({ day, people }) => {
  return (
    <div className="flex h-full w-full flex-row items-center gap-4 rounded-xl border border-t-[5px] border-neutral-100 border-t-rose-800 bg-white p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]">
      {/* Day Number Box */}
      <div className="relative h-12 w-12 shrink-0 rounded-lg bg-zinc-100 outline -outline-offset-1 outline-rose-800">
        <div className="relative top-0 left-0 flex h-full items-center justify-center text-center font-['Poppins'] text-2xl leading-6 font-extrabold tracking-wide text-rose-800/90">
          {day}
        </div>
      </div>

      {/* People List */}
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 py-1">
        {people.map((person, index) => (
          <div key={index} className="flex w-full min-w-0 items-center justify-between">
            <div
              className="mr-2 flex-1 truncate font-['Poppins'] text-[14px] font-normal text-neutral-700 capitalize"
              title={person.nombre}
            >
              {person.nombre.toLowerCase()}
            </div>
            {person.correo && (
              <a
                href={createBirthdayMail(person.correo, person.nombre)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-neutral-400 transition-colors hover:text-rose-800"
                title="Enviar felicitación"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

BirthdayMonthCard.displayName = 'BirthdayMonthCard';

export default BirthdayMonthCard;
