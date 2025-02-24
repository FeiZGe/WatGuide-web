"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function EventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Header คงที่ด้านบน */}
      <section className="fixed top-0 left-0 right-0 w-full pt-8 px-4 pb-2 bg-gradient-to-b from-background via-slate-50 to-transparent bg-opacity-80 backdrop-blur-sm z-10">
        <div className="flex flex-row items-center justify-between">
            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
                <Link
                    href="/"
                    className="w-8 h-8 bg-slate-200/80 rounded-md flex justify-center items-center"
                >
                    <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5 text-slate-400/80" />
                </Link>
            </motion.div>
            <h1 className="font-bold text-3xl text-textb flex-1 text-center">ที่ควรสักการะ</h1>
        </div>
      </section>

      {/* ส่วนนี้สามารถเลื่อนลงได้ */}
      <section className="px-6 pt-20 max-w-xl mx-auto">

        {children}
        {/* Spacer ด้านล่าง */}
        <div className="h-24"></div>
      </section>
    </div>
  );
}
