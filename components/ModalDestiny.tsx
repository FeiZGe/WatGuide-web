"use client";

import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "motion/react";
import { Dispatch, SetStateAction, ReactNode } from "react";

// 👉 กำหนด Type ของ props
interface ModalDestinyProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

const ModalDestiny = ({ open, setOpen, children }: ModalDestinyProps) => {
    const [scope, animate] = useAnimate();
    const [drawerRef, { height }] = useMeasure();
  
    const y = useMotionValue(0);
    const controls = useDragControls();
  
    const handleClose = async () => {
      animate(scope.current, {
        opacity: [1, 0],
      });
  
      const yStart = typeof y.get() === "number" ? y.get() : 0;
  
      await animate("#drawer", {
        y: [yStart, height],
      });
  
      setOpen(false);
    };
  
    return (
        <>
        {open && (
          <motion.div
            ref={scope}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-neutral-900/70 bg-opacity-30 backdrop-blur-md"
          >
            <motion.div
              id="drawer"
              ref={drawerRef}
              onClick={(e) => e.stopPropagation()}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
              className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
              style={{ y }}
              drag="y"
              dragControls={controls}
              onDragEnd={() => { if (y.get() >= 100) handleClose(); }}
              dragListener={false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.5 }}
            >
              <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
                <button
                  onPointerDown={(e) => controls.start(e)}
                  className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
                ></button>
              </div>
              <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
                {children}
              </div>
            </motion.div>
          </motion.div>
        )}
      </>
    );
}

export default ModalDestiny;