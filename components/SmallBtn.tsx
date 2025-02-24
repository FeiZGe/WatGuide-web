"use client";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import Link from "next/link";

interface SmallBtnProps {
    icon: IconDefinition;
    txt: string;
    path: string;
}

const SmallBtn = ({ icon, txt, path }: SmallBtnProps) => {
  return (
    <motion.div
        className="py-1 px-3 bg-slate-100/70 rounded-full shadow-sm"
    >
      <Link
        href={path}
        className="flex flex-row gap-2 items-center text-sm"
      >
        <FontAwesomeIcon icon={icon} />
        <h3>{txt}</h3>
      </Link>
    </motion.div>
  )
}

export default SmallBtn
