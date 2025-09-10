'use client';

import { useState } from 'react';

interface OptimizedImageProps {
  webpSrc: string;
  jpgSrc: string;
  alt: string;
  className?: string;
  fallbackEmoji?: string;
  fallbackBg?: string;
}

export default function OptimizedImage({
  webpSrc,
  jpgSrc,
  alt,
  className = '',
  fallbackEmoji = '👤',
  fallbackBg = 'bg-gray-400'
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [webpSupported, setWebpSupported] = useState(true);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleWebpError = () => {
    setWebpSupported(false);
  };

  if (imageError) {
    return (
      <div className={`w-full h-full ${fallbackBg} rounded-full flex items-center justify-center border-4 border-gray-200 shadow-lg ${className}`}>
        <span className="text-4xl">{fallbackEmoji}</span>
      </div>
    );
  }

  return (
    <picture>
      {webpSupported && (
        <source 
          srcSet={webpSrc} 
          type="image/webp" 
          onError={handleWebpError}
        />
      )}
      <img 
        src={jpgSrc} 
        alt={alt}
        className={className}
        loading="lazy"
        onError={handleImageError}
        onLoad={() => {
          // Предзагрузка следующего изображения
          const nextImage = new Image();
          nextImage.src = webpSrc;
        }}
      />
    </picture>
  );
}
