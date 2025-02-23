"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

interface GalleryCardProps {
  img: string;
}

const GalleryCard = ({ img }: GalleryCardProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-md">
      {/* Skeleton Loader */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg"></div>
      )}

      <Suspense fallback={<div className="w-full h-48 bg-gray-300 animate-pulse"></div>}>
        <Image
          src={img}
          alt="Gallery Image"
          width={500}
          height={300}
          className={clsx(
            "w-full object-cover rounded-lg transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          priority={false} // Lazy loading
        />
      </Suspense>
    </div>
  );
};

export default GalleryCard;
