"use client";

import { easeInOut, motion } from "motion/react";

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

interface GalleryCardProps {
    img: string,
}

const GalleryCard = ({ img }: GalleryCardProps ) => {
  return (
    <motion.img
        src={img}
        className="w-full object-fill rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
            ease: easeInOut,
            duration: 0.3,
        }}
        viewport={{ amount: 0 }}
    >
      
    </motion.img>
  )
}

export default GalleryCard
