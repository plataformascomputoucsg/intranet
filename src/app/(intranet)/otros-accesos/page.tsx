import HeaderTitle from '@/app/components/ui/HeaderTitle';
import { ServiceCard } from '@/app/components/ui/ServiceCard';
import { Key, FileText, Image, Download, BookOpen, ShieldCheck, ClipboardList } from 'lucide-react';

const SERVICES_DATA = [
  {
    title: 'Cambio de clave SIU',
    description: 'Cambia o desbloquea tu clave del SIU',
    icon: <Key className="h-6 w-6" />,
    href: process.env.NEXT_PUBLIC_CAMBIO_CLAVE_URL ?? '#',
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
  {
    title: 'Descarga de documentos',
    description: 'Encuentra documentos varios de acceso al sistema',
    icon: <Download className="h-6 w-6" />,
    href: process.env.NEXT_PUBLIC_DESCARGA_DOCUMENTOS_URL ?? '#',
  },
  {
    title: 'Manuales de gestión administrativa',
    description: 'Descarga manuales de ayuda',
    icon: <BookOpen className="h-6 w-6" />,
    href: process.env.NEXT_PUBLIC_MANUALES_URL ?? '#',
  },
  {
    title: 'Sistema de aseguramiento de la calidad',
    description: 'Descarga documentos del SMC',
    icon: <ShieldCheck className="h-6 w-6" />,
    href: process.env.NEXT_PUBLIC_SAC_URL ?? '#',
  },
  {
    title: 'Brief de solicitud DCM',
    description: 'Completa el formulario de solicitud',
    icon: <ClipboardList className="h-6 w-6" />,
    href: process.env.NEXT_PUBLIC_BRIEF_DCM_URL ?? '#',
  },
];

export default function OtrosAccesosPage() {
  return (
    <>
      <div className="relative flex w-full items-start gap-[27px] self-stretch">
        <HeaderTitle titleFirstWorld="Accesos a la" titleSecondWorld="UCSG" viewAll={false} />
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
