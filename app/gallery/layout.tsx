"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"; // แก้ไข import framer-motion

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen"> 
            {/* Header คงที่ด้านบน */}
            <section className="pt-8 px-4 pb-1 flex flex-row items-center justify-between bg-whitebg">
                <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
                    <Link
                        href="/"
                        className="w-6 h-6 bg-slate-200/80 rounded-md flex justify-center items-center"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4 text-slate-400/80" />
                    </Link>
                </motion.div>
                <h1 className="font-bold text-3xl text-textb flex-1 text-center">แกลลอรี่</h1>
            </section>

            {/* ส่วนนี้สามารถเลื่อนลงได้ */}
            <section className="px-6 pt-2 max-w-xl mx-auto overflow-y-auto flex-1">
                {children}

                {/* Spacer ด้านล่า */}
                <div className="h-24"></div>
            </section>

        </div>
    );
}
