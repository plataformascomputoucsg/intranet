import { getComunicacionesEspecificas } from '@/app/lib/api';
import EventMainClient from './EventMainClient';

interface EventMainContentProps {
  tipoEvento?: number;
  seccion?: number;
  tipSitio?: number;
}

const EventMainContent: React.FC<EventMainContentProps> = async ({
  tipoEvento = 2,
  seccion = 1,
  tipSitio = 1,
}) => {
  const comunicaciones = await getComunicacionesEspecificas({
    tipoEvento,
    seccion,
    tipSitio,
  });

  if (comunicaciones.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center py-12 text-gray-500">
        No hay eventos disponibles
      </div>
    );
  }

  return <EventMainClient events={comunicaciones} />;
};

export default EventMainContent;
