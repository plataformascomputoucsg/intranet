'use client';
import { useSyncExternalStore } from 'react';

function subscribe() {
  // El userAgent no cambia dinámicamente, así que no necesitamos escuchar eventos.
  // Devolvemos una función de limpieza vacía.
  return () => {};
}

function getSnapshot() {
  // Esta función se ejecuta en el cliente.
  const ua = window.navigator.userAgent;
  // Detectar Edge ('Edg') O Firefox 8 ('Firefox/8.')
  return /Edg/.test(ua) || /Firefox\/8\./.test(ua);
}

function getServerSnapshot() {
  // Esta función se utiliza durante el SSR y la hidratación.
  // Devolvemos false para asegurar consistencia inicial.
  return false;
}

export function useEdgeDetector() {
  // useSyncExternalStore es la forma moderna (React 18+) de suscribirse a fuentes externas (como window).
  // Evita el problema de "cascading renders" del useEffect al manejar la sincronización correctamente.
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
