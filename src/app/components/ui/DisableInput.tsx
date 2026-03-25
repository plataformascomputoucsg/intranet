'use client';

import { useEffect } from 'react';

export default function DisableInput() {
  useEffect(() => {
    // Deshabilitar clic derecho
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Deshabilitar teclas de inspección
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Ctrl+Shift+I (Inspector)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
      }
      // Ctrl+Shift+J (Consola)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
      }
      // Ctrl+Shift+C (Inspector Elemento)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
      }
      // Ctrl+U (Ver código fuente)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // Medida adicional: 'Debugger' loop
    // Solo se activa en producción para no molestar durante el desarrollo
    if (process.env.NODE_ENV !== 'production') return;

    const interval = setInterval(() => {
      // eslint-disable-next-line no-debugger
      debugger;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
