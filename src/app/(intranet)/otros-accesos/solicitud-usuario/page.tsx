import BreadcrumbsNav from '@/app/components/ui/BreadcrumbsNav';
import { Users, UserCog, ArrowRight } from 'lucide-react';

// Página informativa "Conoce tu usuario y clave" del sistema de servicios administrativos
const SOLICITUD_USUARIO_URL =
  process.env.NEXT_PUBLIC_SOLICITUD_USUARIO_URL ??
  'https://www46.ucsg.edu.ec/ServiciosEnLineaAdministrativos/Informacion.htm';

export default function SolicitudUsuarioPage() {
  return (
    <>
      <BreadcrumbsNav
        items={[
          { label: 'Otros accesos', href: '/otros-accesos' },
          { label: 'Solicitud de usuario' },
        ]}
      />

      <div className="flex w-full flex-col gap-10 py-4 font-['Poppins']">
        {/* Título centrado en dos líneas */}
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold tracking-wide text-[#a90046] uppercase">
            SOLICITUD DE USUARIO
          </h1>
          <h2 className="text-lg font-bold tracking-wide text-[#a90046]/80 uppercase">
            Para personal administrativo
          </h2>
        </div>

        {/* Casos: ícono circular a la izquierda, texto a la derecha */}
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
          <div className="flex items-center gap-6">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#a90046]/10">
              <Users className="h-12 w-12 text-sky-600" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-base leading-snug font-bold text-sky-600 uppercase">
                Eres (docente y/o estudiante) y trabajas como administrativo en la UCSG
              </h3>
              <p className="text-sm leading-relaxed font-semibold text-gray-800 uppercase">
                Tu usuario y clave es el mismo que ingresas en los servicios en línea docentes y/o
                estudiantes
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#a90046]/10">
              <UserCog className="h-12 w-12 text-sky-600" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-base leading-snug font-bold text-sky-600 uppercase">
                Eres solo administrativo de la UCSG
              </h3>
              <p className="text-sm leading-relaxed font-semibold text-gray-800 uppercase">
                <a
                  href={SOLICITUD_USUARIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-red-600 underline decoration-dotted underline-offset-4 hover:text-red-700"
                >
                  Click aquí
                </a>{' '}
                para que conozcas tu usuario y clave
              </p>
            </div>
          </div>
        </div>

        {/* Cómo ingresar */}
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
          <h3 className="text-base leading-snug font-bold text-gray-900 uppercase">
            Para ingresar a los servicios en línea administrativos lo puedes hacer a través de:
          </h3>

          <ul className="ml-12 flex flex-col gap-3">
            <li className="inline-flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400 text-white">
                <ArrowRight className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-gray-800 uppercase">Intranet</span>
            </li>
            <li className="inline-flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400 text-white">
                <ArrowRight className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-gray-800 uppercase">Portal Web</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
