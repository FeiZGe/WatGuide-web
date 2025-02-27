"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "motion/react";

interface GalleryCardProps {
  img: string;
  title: string;
  detail: string;
  rate?: string;
  path: string;
}

const Card = ({ img, title, detail, rate, path }: GalleryCardProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className="w-full overflow-hidden rounded-lg flex flex-col"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link href={path}>
        {/* Skeleton Loader */}
        <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
          {!loaded && (
            <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
          )}

          <Image
            src={img}
            alt="Gallery Image"
            fill
            className={clsx(
              "object-cover transition-opacity duration-500",
              loaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
          />

          {rate && (
            <div className="absolute right-1 top-1 bg-amber-300 rounded-full p-1.5 text-sm">
              {rate}
            </div>
          )}

        </div>

        {/* Title & Detail */}
        <div className="px-2 pt-2">
          <h3 className="text-lg font-semibold text-wrap">{title}</h3>
          <p className="text-sm opacity-70 text-pretty">{detail}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
