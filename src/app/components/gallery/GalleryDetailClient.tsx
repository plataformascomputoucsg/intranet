'use client';

import React from 'react';
import AppImage from '@/components/shared/AppImage';

interface GalleryDetailClientProps {
  title: string;
  photos: string[];
}

const GalleryDetailClient: React.FC<GalleryDetailClientProps> = ({ title, photos }) => {
  return (
    <section className="relative flex w-full flex-col items-center gap-8 rounded-[20px] rounded-bl bg-white p-8">
      {/* Grid de Fotos - Diseño irregular/alterno optimizado */}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => {
          // Lógica para grid irregular: algunas imágenes ocupan 2 columnas o filas
          const isLarge = index === 0; // La primera siempre es destacada
          const isWide = index === 4 || index === 7; // Algunas intermedias anchas

          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-transform duration-500 hover:scale-[1.02] ${
                isLarge
                  ? 'h-[400px] sm:col-span-2 sm:row-span-2 lg:h-[600px]'
                  : isWide
                    ? 'h-[250px] sm:col-span-2'
                    : 'h-[250px]'
              }`}
            >
              <AppImage
                src={photo}
                alt={`Foto ${index + 1} de ${title}`}
                fill
                className="object-cover"
                // Optimización: Priority para las primeras 3 (las que se ven al cargar)
                priority={index < 3}
                // Sizes adecuados para performance
                sizes={
                  isLarge
                    ? '(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 800px'
                    : isWide
                      ? '(max-width: 640px) 100vw, 800px'
                      : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px'
                }
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GalleryDetailClient;
