'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { normalizeImageSrc } from '@/app/lib/utils';

interface AppImageProps extends Omit<ImageProps, 'src' | 'onError'> {
  src?: string | null;
  fallbackSrc?: string;
  alt: string;
}

const DEFAULT_FALLBACK = '/assets/images/placeholder.png';

/**
 * Componente Image personalizado con manejo de errores y placeholder.
 * Evita que se vean imágenes rotas si la URL de la API falla.
 */
export default function AppImage({
  src,
  fallbackSrc = DEFAULT_FALLBACK,
  alt,
  className,
  ...props
}: AppImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(() => normalizeImageSrc(src) ?? fallbackSrc);
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (!hasError) {
          setImgSrc(fallbackSrc);
          setHasError(true);
        }
      }}
    />
  );
}
