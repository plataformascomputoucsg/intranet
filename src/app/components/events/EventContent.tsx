import { getComunicacionesEspecificas } from '@/app/lib/api';
import EventClient from './EventClient';

interface EventContentProps {
  tipoEvento?: number;
  seccion?: number;
  tipSitio?: number;
}

const EventContent: React.FC<EventContentProps> = async ({
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
      <div className="flex h-full w-full items-center justify-center text-gray-500">
        No hay eventos disponibles
      </div>
    );
  }

  return <EventClient events={comunicaciones} />;
};

export default EventContent;
