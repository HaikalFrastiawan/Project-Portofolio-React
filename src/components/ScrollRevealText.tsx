import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollRevealText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 35%"],
  });

  const words = text.split(" ");
  
  return (
    <div className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Soft gradient backgrounds to emphasize the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div ref={containerRef} className="max-w-5xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold font-heading leading-[1.2] text-white/10 flex flex-wrap gap-x-3 gap-y-2 md:gap-x-5 md:gap-y-4">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            
            // Text color gradually turns to bright white
            const color = useTransform(scrollYProgress, [start, end], ["rgba(255,255,255,0.1)", "rgba(255,255,255,1)"]);
            // Glow gradually increases
            const textShadow = useTransform(scrollYProgress, [start, end], ["0px 0px 0px rgba(34,197,94,0)", "0px 0px 30px rgba(34,197,94,0.4)"]);
            
            return (
              <motion.span 
                key={i} 
                style={{ color, textShadow }} 
                className="transition-colors duration-75 uppercase tracking-tighter"
              >
                {word}
              </motion.span>
            );
          })}
        </h2>
      </div>
    </div>
  );
}
