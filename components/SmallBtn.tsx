"use client";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ใช้เพื่อเช็ค path ปัจจุบัน
import clsx from "clsx";

interface SmallBtnProps {
  icon: IconDefinition;
  txt: string;
  path: string;
}

const SmallBtn = ({ icon, txt, path }: SmallBtnProps) => {
  const pathname = usePathname(); // ดึง path ปัจจุบัน

  return (
    <motion.div
      className={clsx(
        "py-1 px-3 rounded-full shadow-sm transition-colors",
        pathname === path ? "bg-amber-500/30" : "bg-slate-100/70"
      )}
    >
      <Link href={path} className="flex flex-row gap-2 items-center text-sm">
        <FontAwesomeIcon icon={icon} />
        <h3>{txt}</h3>
      </Link>
    </motion.div>
  );
};

export default SmallBtn;
