"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const ImageItem = ({ path }: { path: string }) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
        )}

        <Image
          src={path}
          alt="Gallery Image"
          fill
          className={clsx(
            "object-cover transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
      </div>
  )
}

export default ImageItem
