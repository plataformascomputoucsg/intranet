'use client';

import { Button } from '@heroui/button';

const GestorBanner: React.FC = () => {
  return (
    <div className="bg-ucsg-cuarto flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl">
      <div className="inline-flex w-full items-center justify-center gap-3.5">
        <div className="relative flex w-full items-center justify-center gap-2">
          <div className="relative justify-start font-['Poppins'] text-xl leading-6 font-bold text-neutral-900">
            ¿Tienes dudas sobre algún{''}
            <div
              className="absolute top-6 -left-2 z-0"
              style={{
                width: '50px',
                height: '50px',
                border: 'solid 2px #000',
                borderColor: '#A81549 transparent transparent transparent',
                borderRadius: '50% / 10px 10px 10px 0',
              }}
            ></div>
          </div>
          <div className="justify-start font-['Poppins'] text-xl leading-6 font-bold tracking-wide text-rose-800/90">
            proceso o funcionalidad?
          </div>
        </div>
      </div>
      <div className="inline-flex h-7 w-full flex-col items-center justify-center">
        <div className="inline-flex items-center justify-center self-stretch">
          <div className="w-full justify-center text-center font-['Poppins'] text-base leading-5 font-medium text-neutral-900">
            Visita nuestro Gestor Documental, donde encontrarás manuales, guías y documentación de
            apoyo para resolver tus consultas.
          </div>
        </div>
      </div>
      <Button className="bg-ucsg-primary flex items-center justify-center font-['Poppins'] font-normal text-white">
        Ir al gestor documental
      </Button>
    </div>
  );
};

export default GestorBanner;
