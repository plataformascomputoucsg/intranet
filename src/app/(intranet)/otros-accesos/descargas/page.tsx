import BreadcrumbsNav from '@/app/components/ui/BreadcrumbsNav';
import HeaderTitle from '@/app/components/ui/HeaderTitle';
import {
  DownloadCategory,
  DownloadCategorySection,
} from '@/app/components/downloads/DownloadCategorySection';
import { KeyRound, Users, Wrench, Megaphone, Phone } from 'lucide-react';

// Los documentos siguen alojados en el servidor de la intranet antigua
const LEGACY_URL = process.env.NEXT_PUBLIC_LEGACY_INTRANET_URL ?? 'http://intranet';

const CATEGORIES: DownloadCategory[] = [
  {
    title: 'Acceso al Sistema',
    icon: <KeyRound className="h-6 w-6" />,
    items: [
      {
        title: 'Formulario de Acceso al Sistema',
        note: 'Se recomienda usar Microsoft Excel 2003',
        href: `${LEGACY_URL}/2010/docs/CC-AST-001.xls`,
      },
    ],
  },
  {
    title: 'Dirección de Recursos Humanos',
    icon: <Users className="h-6 w-6" />,
    items: [
      {
        title: 'Guía de llenado de nuevo formato de DF 2025',
        href: `${LEGACY_URL}/2025/docs/Guia-de-llenado-de-Nuevo-Formato-de-DF_2025.pdf`,
      },
      {
        title: 'Formato DF Perfiles de Cargo 2025 Usuario',
        href: `${LEGACY_URL}/2025/docs/Formato_DF_Perfiles_de_Cargo_2025_Usuario.docx`,
      },
      {
        title: 'Hoja de Datos del Personal',
        href: `${LEGACY_URL}/2010/docs/DatosPersonal.doc`,
      },
      {
        title: 'Formato de alcances de Programación Académica',
        href: `${LEGACY_URL}/2010/docs/Formato_alcances_programacion_academica.xlsx`,
      },
      {
        title: 'Requisitos obligatorios para el ingreso de Docentes nuevos — Grado',
        href: `${LEGACY_URL}/2010/docs/REQUISITOS-OBLIGATORIOS-PARA-INGRESO-DE-DOCENTES_GRADO.xlsx`,
      },
      {
        title: 'Requisitos obligatorios para el ingreso de Docentes nuevos — Posgrado',
        href: `${LEGACY_URL}/2010/docs/REQUISITOS-OBLIGATORIOS-PARA-INGRESO-DE-DOCENTES_POSGRADO.xlsx`,
      },
      {
        title: 'Requisitos obligatorios para el ingreso de Ayudantes de Cátedra nuevos — Grado',
        href: `${LEGACY_URL}/2010/docs/REQUISITOS-OBLIGATORIOS-PARA-INGRESO-AYUDANTES-CATEDRA-NUEVOS_GRADO.xlsx`,
      },
    ],
  },
  {
    title: 'Soporte Técnico',
    icon: <Wrench className="h-6 w-6" />,
    items: [
      {
        title: 'Test de Sistemas',
        href: process.env.NEXT_PUBLIC_CAMBIO_CLAVE_URL ?? '#',
        external: true,
      },
      {
        title: 'Requisitos para utilización de Sistemas',
        href: `${LEGACY_URL}/2010/docs/requisitos.zip`,
      },
      {
        title: 'Formulario identificación de máquina/usuario',
        href: `${LEGACY_URL}/2010/docs/formulario.zip`,
      },
      {
        title: 'Recepción de equipos',
        href: `${LEGACY_URL}/2010/docs/recepcion_de_equipos.pdf`,
      },
      {
        title: 'JRE 8u201 Windows i586',
        href: `${LEGACY_URL}/2010/docs/jre-8u201-windows-i586.exe`,
        isNew: true,
      },
      {
        title: 'Microsoft Outlook Connector',
        href: `${LEGACY_URL}/2010/docs/outlook_hotmail_connector/OutlookConnector.exe`,
      },
      {
        title: 'TeamViewer (Soporte en Línea)',
        href: `${LEGACY_URL}/2010/docs/TeamViewer/TeamViewer_Setup_es.exe`,
      },
      {
        title: 'Certificados JAVA',
        href: `${LEGACY_URL}/2010/docs/certificados_java.zip`,
      },
    ],
  },
  {
    title: 'Departamento de Comunicación & Marketing',
    icon: <Megaphone className="h-6 w-6" />,
    items: [
      {
        title: 'Manual Comunicacional 2025',
        href: `${LEGACY_URL}/2025/docs/MANUAL-COMUNICACION-UCSG_2025.pdf`,
      },
      {
        title: 'Formulario de requerimientos para eventos',
        href: `${LEGACY_URL}/2010/docs/FORMULARIO-DE-PETICION-DE-EVENTO-ACTUALIZADO-UP2019.xls`,
      },
      {
        title: 'Logo Institucional de la UCSG',
        href: `${LEGACY_URL}/2010/docs/logoucsg.zip`,
      },
      {
        title: 'Logo 57 años UCSG',
        href: `${LEGACY_URL}/2010/docs/logo57.zip`,
      },
    ],
  },
  {
    title: 'Guías Telefónicas',
    icon: <Phone className="h-6 w-6" />,
    items: [
      {
        title: 'Guía Telefónica Comerciales y Residenciales 2013 Ecuador — EDINA',
        href: `${LEGACY_URL}/2010/docs/guia_telefonica/guia.zip`,
      },
    ],
  },
];

export default function DescargasPage() {
  return (
    <>
      <BreadcrumbsNav
        items={[{ label: 'Otros accesos', href: '/otros-accesos' }, { label: 'Descargas' }]}
      />

      <div className="relative flex w-full items-start gap-[27px] self-stretch">
        <HeaderTitle titleFirstWorld="Descarga de" titleSecondWorld="Documentos" viewAll={false} />
      </div>

      <p className="-mt-2 font-['Poppins'] text-sm text-zinc-500">
        Encuentra formularios, manuales y utilitarios de acceso al sistema.
      </p>

      <div className="flex w-full flex-col gap-8">
        {CATEGORIES.map((category) => (
          <DownloadCategorySection key={category.title} category={category} />
        ))}
      </div>
    </>
  );
}
