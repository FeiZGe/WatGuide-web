"use client";

import { useParams } from "next/navigation";
import hotels from "@/utils/hotelData";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import {
  faLocationDot,
  faMoneyBill,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "motion/react";

const HotelItem = () => {
  const params = useParams();
  const [loaded, setLoaded] = useState(false);

  // แปลง params.hotelID ให้เป็น number
  const hotelID = Number(params.hotelID);

  // ค้นหาโรงแรมจาก hotelID
  const hotel = hotels.find((h) => h.id === hotelID);

  return (
    <div>
      {/* Title */}
      <div className="mb-3">
        <h2 className="text-4xl font-bold text-pretty">{hotel?.name_th}</h2>
        <h2 className="text-lg text-pretty">{hotel?.name_en}</h2>
      </div>

      {/* Skeleton Loader */}
      <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
        )}

        <Image
          src={`/image/hotel/${hotel?.id}.jpg`}
          alt={`${hotel?.name_en} Image`}
          fill
          className={clsx(
            "object-cover transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
      </div>

      {/* detail */}
      <div className="mt-3">
        <p className="indent-6">{hotel?.description}</p>

        {/* Rating */}
        <div className="flex flex-row gap-2 items-start w-full mt-3">
          <div className="flex flex-row items-center gap-1 w-20 min-w-20 text-amber-600">
            <FontAwesomeIcon icon={faStar} />
            <h4 className="font-semibold text-nowrap">คะแนน</h4>
          </div>
          <p className="text-pretty">{hotel?.rating}</p>
        </div>

        {/* Price */}
        <div className="flex flex-row gap-2 items-start w-full">
          <div className="flex flex-row items-center gap-1 w-20 min-w-20 text-amber-600">
            <FontAwesomeIcon icon={faMoneyBill} />
            <h4 className="font-semibold text-nowrap">ราคา</h4>
          </div>
          <p className="text-pretty">{hotel?.price}</p>
        </div>

        {/* Address */}
        <div className="flex flex-row gap-2 items-start w-full mb-5">
          <div className="flex flex-row items-center gap-1 w-20 min-w-20 text-amber-600">
            <FontAwesomeIcon icon={faLocationDot} />
            <h4 className="font-semibold text-nowrap">ที่อยู่</h4>
          </div>
          <p className="text-pretty">{hotel?.location}</p>
        </div>

        <Link href={hotel?.url || `/map/hotel/${params.hotelID}`}>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="bg-amber-600 text-white w-full py-2 px-4 rounded-md shadow-md"
          >
            พิกัด
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default HotelItem;
