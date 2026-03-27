import HeaderTitle from '@/app/components/ui/HeaderTitle';
import { ServiceCard } from '@/app/components/ui/ServiceCard';
import { LaptopMinimal, ShieldQuestionMark, FileText, Image, Key } from 'lucide-react';

const SERVICES_DATA = [
  {
    title: 'Cambio de clave SIU',
    description: 'Cambia o desbloquee su clavel del SIU',
    icon: <Key className="h-6 w-6" />,
    href: process.env.NEXT_PUBLIC_CAMBIO_CLAVE_URL ?? '#',
  },
  {
    title: 'Servicios en línea administrativos',
    description: 'Servicios que ofrece a la UCSG',
    icon: <LaptopMinimal className="h-6 w-6" />,
    href: process.env.NEXT_PUBLIC_SERVICIOS_ADMIN_URL ?? '#',
  },
  {
    title: 'Mesa de ayuda',
    description: 'Consulta todas las dudas o solicita ayuda a soporte',
    icon: <ShieldQuestionMark className="h-6 w-6" />,
    href: process.env.NEXT_PUBLIC_MESA_AYUDA_URL ?? '#',
  },
  {
    title: 'Transparencia de la información',
    description: 'Documentos de la UCSG',
    icon: <FileText className="h-6 w-6" />,
    href: process.env.NEXT_PUBLIC_TRANSPARENCIA_URL ?? '#',
  },
  {
    title: 'Galería de eventos',
    description: 'Fotos de los eventos de interés',
    icon: <Image className="h-6 w-6" />,
    href: '/galeria',
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="relative flex w-full items-start gap-[27px] self-stretch">
        <HeaderTitle titleFirstWorld="Acerca de la" titleSecondWorld="UCSG" viewAll={false} />
      </div>
      <div className="flex flex-wrap items-start gap-4">
        {SERVICES_DATA.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            href={service.href}
          />
        ))}
      </div>
    </>
  );
}
