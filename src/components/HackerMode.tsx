import { useEffect, useRef, useState } from "react";
import { useSoundEffect } from "@/hooks/useSoundEffect";

export default function HackerMode() {
  const [isActive, setIsActive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { playClick } = useSoundEffect();
  const sequence = "sudo";
  const typedRef = useRef("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      typedRef.current += e.key.toLowerCase();
      if (typedRef.current.length > sequence.length) {
        typedRef.current = typedRef.current.slice(1);
      }
      if (typedRef.current === sequence) {
        setIsActive(true);
        playClick(); // Play sound effect
        setTimeout(() => setIsActive(false), 15000); // disable after 15s
        typedRef.current = "";
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playClick]);

  useEffect(() => {
    if (!isActive || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
    const fontSize = 16;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <>
      <style>{`
        body { filter: hue-rotate(90deg); transition: filter 2s ease; }
      `}</style>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[99998] pointer-events-none mix-blend-screen opacity-60"
      />
      <div className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center">
        <h1 className="text-5xl md:text-8xl font-black text-green-500 drop-shadow-[0_0_30px_rgba(0,255,0,0.8)] font-mono animate-pulse uppercase tracking-widest bg-black/50 px-8 py-4 rounded-3xl border-2 border-green-500/50">
          ACCESS GRANTED
        </h1>
      </div>
    </>
  );
}
