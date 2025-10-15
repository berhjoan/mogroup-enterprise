import Image from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  priority = false,
}: OptimizedImageProps) {
  // Si la imagen está en /public, la ruta debe empezar con /
  const imageSrc = src.startsWith("/") ? src : `/${src}`;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={(e) => {
        // Fallback si la imagen no carga
        const target = e.target as HTMLImageElement;
        target.src = "/images/placeholder.png";
      }}
    />
  );
}
