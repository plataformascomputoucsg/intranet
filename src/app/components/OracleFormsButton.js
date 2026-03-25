'use client';
import { useState } from 'react';

import ClientOnly from './ui/ClientOnly'; // Tu componente basado en useSyncExternalStore
import { useEdgeDetector } from '../hooks/useEdgeDetector'; // Tu hook de detección de Edge
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
} from '@heroui/react';

export default function OracleFormsButton() {
  const isEdge = useEdgeDetector();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [copied, setCopied] = useState(false);
  //const formsUrl = 'http://ofr45.ucsg:7777/forms/frmservlet?config=00001'
  //const formsUrl = 'http://ucsgofr4.ucsg:7777/forms/frmservlet?config=00001'
  const formsUrl = process.env.NEXT_PUBLIC_SIU_URL || '#';

  return (
    <ClientOnly fallback={<SkeletonButton />}>
      <button
        onClick={() => {
          if (isEdge) {
            window.open(formsUrl, '_blank');
          } else {
            onOpen();
          }
        }}
        className={`flex h-full cursor-pointer items-center justify-center border-none bg-transparent p-0 font-['Poppins'] text-[10px] font-bold whitespace-nowrap transition-colors outline-none sm:text-xs lg:text-sm ${
          isEdge ? 'text-white hover:text-gray-300' : 'text-amber-400 hover:text-amber-300'
        }`}
      >
        {isEdge ? 'SIU' : '⚠️ SIU (Solo Edge/Firefox 8)'}
      </button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">Atención</ModalHeader>
              <ModalBody>
                <p className="text-black">
                  Este módulo requiere abrirse en <strong>Microsoft Edge</strong> (Modo IE) o{' '}
                  <strong>Mozilla Firefox 8</strong>.
                </p>
                <p className="text-sm text-gray-500">
                  Si ya estás en uno de estos navegadores, asegúrate de la configuración.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    window.open(`microsoft-edge:${formsUrl}`, '_blank');
                    onClose();
                  }}
                >
                  Abrir en Edge
                </Button>
                <Tooltip
                  content={copied ? '¡Copiado!' : 'Copiar al portapapeles'}
                  isOpen={copied}
                  onOpenChange={(open) => {
                    if (!open) setCopied(false);
                  }}
                >
                  <Button
                    color="warning"
                    className="text-white"
                    onPress={() => {
                      navigator.clipboard.writeText(formsUrl);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                  >
                    Copiar Enlace (Para Firefox)
                  </Button>
                </Tooltip>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </ClientOnly>
  );
}

function SkeletonButton() {
  return (
    <div className="flex h-full items-center justify-center font-['Poppins'] text-[10px] font-bold whitespace-nowrap text-white sm:text-xs lg:text-sm">
      ...
    </div>
  );
}
