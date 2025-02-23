"use client";
import ModalDestiny from "@/components/ModalDestiny";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const Destiny = () => {
    const constraintsRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false);
    const [isShaking, setIsShaking] = useState(false);
    
    const handleClick = () => {
        if (isShaking) return; // ป้องกันการกดซ้ำ
        setIsShaking(true);
        setIsOpen(true);

        setTimeout(() => {
            setIsShaking(false);
        }, 500); // จบ animation
    };

    return (
      <div className="bg-red-300 h-dvh flex flex-col items-center justify-center">
        <section className="px-8 max-w-xl mx-auto h-4/5 w-full">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <h1 className="text-4xl font-bold">เซียมซี</h1>
            <p className="opacity-70 mb-12">อธิษฐานก่อนเขย่า</p>

            {/* เซียมซี Zone */}
            <div ref={constraintsRef} className="relative w-44 h-44 md:w-52 md:h-52">
              <motion.button 
                onClick={handleClick}
                className="w-full h-full bg-slate-200 rounded-full flex flex-col justify-center items-center"
              >
                <motion.img
                  drag
                  dragConstraints={constraintsRef}
                  className="w-32 h-32"
                  src="/image/destiny/cup.png"
                  alt="เซียมซี"
                  animate={isShaking ? { x: [0, -10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </div>

            {/* แสดง Modal เมื่อ isOpen = true */}
            <ModalDestiny open={isOpen} setOpen={setIsOpen}>
                <p className="text-white text-center">ผลเซียมซีของคุณคือ...</p>
            </ModalDestiny>
          </div>
        </section>
      </div>
    );
  }
  
  export default Destiny;  