"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface HomeGalleryProps {
    css?: string;
    text?: string;
    img?: string;
}

const HomeGallery = ({ css, text, img = "/image/test.png" }: HomeGalleryProps) => {
  return (
    <motion.div 
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        className={clsx("relative rounded-md w-full h-full overflow-hidden shadow-md", css)}
    >
        <Link
            href="gallery"
            className="absolute inset-0"
        >
            <Image
                src={img}
                style={{
                    objectFit: 'cover',
                }}
                fill
                alt="Picture of hero"
            />

            {/* แสดงข้อความ และเพิ่มBackDrop */}
            {text && (
                <>
                    <div className="absolute inset-0 bg-neutral-800/30 backdrop-blur-sm"></div> 
                    <div className="absolute inset-0 flex items-center justify-center text-slate-200 font-semibold md:text-lg text-sm">
                        {text}
                    </div>
                </>
            )}
        </Link>
    </motion.div>
  )
}

export default HomeGallery
