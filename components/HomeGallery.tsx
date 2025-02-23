"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface HomeGalleryProps {
    css?: string;
    text?: string;
}

const HomeGallery = ({ css, text }: HomeGalleryProps) => {
  return (
    <motion.div 
        whileTap={{ 
            scale: 0.8,
            transition: { duration: 1 }
        }}
        className={clsx("relative rounded-md w-full h-full overflow-hidden", css)}
    >
        <Link
            href="gallery"
            className="absolute inset-0"
        >
            <Image
                src="/image/test.png"
                style={{
                    objectFit: 'cover',
                }}
                fill
                alt="Picture of hero"
            />

            {/* แสดงข้อความ และเพิ่มBackDrop */}
            {text && (
                <>
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div> 
                    <div className="absolute inset-0 flex items-center justify-center text-white font-semibold md:text-lg text-sm">
                        {text}
                    </div>
                </>
            )}
        </Link>
    </motion.div>
  )
}

export default HomeGallery
