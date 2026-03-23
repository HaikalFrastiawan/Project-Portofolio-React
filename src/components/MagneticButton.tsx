import { useRef, ReactNode } from "react";
import { motion, useSpring } from "framer-motion";
import { useSoundEffect } from "@/hooks/useSoundEffect";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  sensitivity?: number;
}

export default function MagneticButton({ children, className = "", sensitivity = 0.2 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { playHover, playClick } = useSoundEffect();

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * sensitivity);
    y.set(middleY * sensitivity);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ position: "relative", x, y, zIndex: 50 }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={playHover}
      onClick={playClick}
      onMouseLeave={reset}
      className={`inline-block w-full sm:w-auto ${className}`}
    >
      {children}
    </motion.div>
  );
}
