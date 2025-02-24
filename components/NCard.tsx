"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "motion/react";

interface NCardProps {
  img: string;
  title: string;
  detail: string;
}

const NCard = ({ img, title, detail }: NCardProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className="w-full overflow-hidden rounded-lg flex flex-col"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
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
      </div>

      {/* Title & Detail */}
      <div className="px-2 pt-2">
        <h3 className="text-lg font-semibold text-wrap">{title}</h3>
        <p className="text-sm opacity-70 text-pretty">{detail}</p>
      </div>
    </motion.div>
  );
};

export default NCard;
