import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [text, setText] = useState("");
  const fullText = "> system.initialize();\n> loading core_modules [===================] 100%\n> establishing secure connection...\n> access granted.\n> welcome, haikal_frastiawan.";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, currentIndex));
      currentIndex++;
      
      if (currentIndex > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 12); 

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] bg-[#050505] flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-2xl px-6">
        <div className="flex items-center gap-4 mb-8">
          <Terminal className="text-primary w-8 h-8 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.5)] bg-primary/10 rounded-lg p-1" />
          <div className="h-px w-full bg-gradient-to-r from-primary/50 via-primary/10 to-transparent" />
        </div>
        <pre className="font-mono text-primary/90 text-sm md:text-lg whitespace-pre-wrap leading-loose drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-3 h-5 bg-primary ml-1 align-middle shadow-[0_0_10px_rgba(34,197,94,0.8)]"
          />
        </pre>
      </div>
    </motion.div>
  );
}
