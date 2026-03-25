'use client'; // Importante: Taggbox necesita ejecutarse en el cliente
import Script from 'next/script';

export default function InstagramFeed() {
  return (
    <div className="h-full min-h-[500px] w-full">
      {/* 1. El contenedor con tus IDs específicos */}
      <div
        className="taggbox"
        style={{ width: '100%', height: '100%', overflow: 'auto' }}
        data-widget-id="311652"
        data-website="1"
      ></div>

      {/* 2. Carga del script usando el componente de Next.js */}
      <Script src="https://widget.taggbox.com/embed.min.js" strategy="lazyOnload" />
    </div>
  );
}
