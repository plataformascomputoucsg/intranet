'use client'; // Importante: Taggbox necesita ejecutarse en el cliente
import { useState } from 'react';
import Script from 'next/script';
import { Spinner } from '@heroui/react';

export default function InstagramFeed() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="h-full min-h-[500px] w-full">
      {isLoading && (
        <div className="flex h-[500px] w-full items-center justify-center">
          <Spinner
            size="lg"
            label="Cargando redes sociales..."
            color="danger"
            classNames={{
              label: "font-['Poppins']",
            }}
          />
        </div>
      )}
      {/* 1. El contenedor con tus IDs específicos */}
      <div
        className="taggbox"
        style={{ width: '100%', height: '100%', overflow: 'auto' }}
        data-widget-id="311652"
        data-website="1"
      ></div>

      {/* 2. Carga del script usando el componente de Next.js */}
      <Script
        src="https://widget.taggbox.com/embed.min.js"
        strategy="lazyOnload"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
