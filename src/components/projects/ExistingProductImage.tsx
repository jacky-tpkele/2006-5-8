'use client';

import { useState } from 'react';

type Props = {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
};

export default function ExistingProductImage({ src, fallback, alt, className }: Props) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (currentSrc !== fallback) setCurrentSrc(fallback);
      }}
    />
  );
}
