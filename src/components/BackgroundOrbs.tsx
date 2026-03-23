import { motion } from "framer-motion";

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-50 mix-blend-screen">
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -150, 150, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-green-500/20 blur-[130px]"
        style={{ willChange: "transform" }}
      />
      <motion.div
        animate={{
          x: [0, -150, 150, 0],
          y: [0, 100, -100, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-500/15 blur-[150px]"
        style={{ willChange: "transform" }}
      />
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-purple-500/10 blur-[120px]"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
