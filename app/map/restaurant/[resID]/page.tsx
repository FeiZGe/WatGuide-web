"use client";

import { useParams } from "next/navigation";
import restaurants from "@/utils/resData";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import {
  faMoneyBill,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "motion/react";

const RestaurantItem = () => {
  const params = useParams();
  const [loaded, setLoaded] = useState(false);

  // แปลง params.hotelID ให้เป็น number
  const resID = Number(params.resID);

  // ค้นหาโรงแรมจาก hotelID
  const res = restaurants.find((r) => r.id === resID);

  return (
    <div>
      {/* Title */}
      <div className="mb-3">
        <h2 className="text-4xl font-bold text-pretty">{res?.name}</h2>
        <p className="opacity-80">{res?.typefood}</p>
      </div>

      {/* Skeleton Loader */}
      <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
        )}

        <Image
          src={`/image/res/${res?.id}.jpg`}
          alt="Restaurant Image"
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
        <p className="indent-6">{res?.description}</p>

        {/* Rating */}
        <div className="flex flex-row gap-2 items-start w-full mt-3">
          <div className="flex flex-row items-center gap-1 w-20 min-w-20 text-amber-600">
            <FontAwesomeIcon icon={faStar} />
            <h4 className="font-semibold text-nowrap">คะแนน</h4>
          </div>
          <p className="text-pretty">{res?.rating}</p>
        </div>

        {/* Price */}
        <div className="flex flex-row gap-2 items-start w-full">
          <div className="flex flex-row items-center gap-1 w-20 min-w-20 text-amber-600">
            <FontAwesomeIcon icon={faMoneyBill} />
            <h4 className="font-semibold text-nowrap">ราคา</h4>
          </div>
          <p className="text-pretty">{res?.price}</p>
        </div>

        {/* Tel */}
        <div className="flex flex-row gap-2 items-start w-full mb-5">
          <div className="flex flex-row items-center gap-1 w-20 min-w-20 text-amber-600">
            <FontAwesomeIcon icon={faPhone} />
            <h4 className="font-semibold text-nowrap">เบอร์โทร</h4>
          </div>
          <p className="text-pretty">{res?.phone_number}</p>
        </div>

        <Link href={res?.url || `/map/hotel/${params.resID}`}>
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

export default RestaurantItem;
