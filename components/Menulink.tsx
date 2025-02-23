"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";
import { motion } from "motion/react";

interface menuProps {
  path?: string;
  icon: IconDefinition;
  bg?: string;
}

const Menulink = ({ path = "#", icon, bg }: menuProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-full h-full"
    >
      <Link
        href={path}
        className={clsx(
          "p-2 w-full h-full flex justify-center items-center rounded-md",
          bg ? bg : "bg-slate-100 bg-opacity-10 backdrop-blur-sm text-slate-700"
        )}
      >
        <FontAwesomeIcon icon={icon} className="w-5 h-5" />
      </Link>
    </motion.div>
  );
};

export default Menulink;
