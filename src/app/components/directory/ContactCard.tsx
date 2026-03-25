import { CircleUserRound } from 'lucide-react';
import { PersonIcon } from '../icons/PersonIcon';
import { BadgeIcon } from '../icons/BadgeIcon';
import { CallIcon } from '../icons/CallIcon';
import { MailIcon } from '../icons/MailIcon';
import { Contact } from '../../../types/directory';

interface ContactCardProps {
  contact: Contact;
}

const ContactCard = ({ contact }: ContactCardProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-[5px] border-t-[3px] border-rose-800/90 bg-white shadow-[0px_0px_11.600000381469727px_0px_rgba(128,128,128,0.25)]">
      <div className="flex items-center justify-center px-5 pt-5">
        <div className="flex items-center justify-center w-32 h-32 rounded-full shrink-0 bg-zinc-100">
          <CircleUserRound className="w-24 h-24 text-zinc-400" strokeWidth={1.25} />
        </div>
      </div>
      <div className="flex items-start gap-1.5 px-5">
        <PersonIcon className="mt-0.5 h-5 w-5 shrink-0" />
        <div className="font-['Poppins'] text-sm leading-4 font-normal text-neutral-900">
          {contact.nombres} {contact.apellidos}
        </div>
      </div>
      <div className="flex items-start gap-1.5 px-5">
        <BadgeIcon className="mt-0.5 h-5 w-5 shrink-0" />
        <div className="font-['Poppins'] text-sm leading-4 font-normal text-neutral-900">
          {contact.cargo}
        </div>
      </div>
      <div className="flex items-start gap-1.5 px-5">
        <CallIcon className="mt-0.5 h-5 w-5 shrink-0" />
        <div className="font-['Poppins'] text-sm leading-4 font-normal text-neutral-900">
          {contact.extension}
        </div>
      </div>
      <div className="flex items-start gap-1.5 px-5 pb-4">
        <MailIcon className="mt-0.5 h-5 w-5 shrink-0" />
        <div className="font-['Poppins'] text-sm leading-4 font-normal break-all text-rose-800 underline">
          {contact.correo}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
