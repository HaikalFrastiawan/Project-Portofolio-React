import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const roles = [
  "Backend Engineering Specialist",
  "Golang (Gin & Fiber) Developer",
  "NestJS Framework Expert",
  "Node.js Ecosystem Specialist",
  "High-Performance API Architect",
];

const techIconsData = [
  { label: "Golang", x: "75%", y: "15%", delay: 0, color: "#00ADD8" },
  { label: "NestJS", x: "85%", y: "40%", delay: 0.5, color: "#E0234E" },
  { label: "Gin/Fiber", x: "65%", y: "55%", delay: 0.8, color: "#00ADD8" },
  { label: "Node.js", x: "75%", y: "75%", delay: 1, color: "#339933" },
  { label: "Postgres", x: "90%", y: "85%", delay: 1.5, color: "#4169E1" },
];

// PERBAIKAN: Pindahkan socialData ke luar agar bisa diakses oleh HeroSection
const socialLinks = [
  { Icon: Github, url: "https://github.com/HaikalFrastiawan" },
  { Icon: Linkedin, url: "https://www.linkedin.com/in/haikal-frastiawan-5b8287277/" },
  { Icon: Mail, url: "mailto:haikalfrastiawan16@gmail.com" },
  { Icon: MessageCircle, url: "https://wa.me/08136761485" },
];

// --- ROBOT HEAD ---
const SittingRobotHead = ({ mousePos }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const xVal = (mousePos.x - window.innerWidth / 3) / 35;
    const yVal = (mousePos.y - window.innerHeight / 3) / 35;
    setRotation({
      x: Math.max(Math.min(xVal, 20), -20),
      y: Math.max(Math.min(yVal, 20), -20)
    });
  }, [mousePos]);

  return (
    <div className="flex flex-col items-center pointer-events-none mr-3">
      <motion.div
        animate={{ rotateY: rotation.x, rotateX: -rotation.y, y: [0, -2, 0] }}
        transition={{
          rotateY: { type: "spring", stiffness: 100, damping: 10 },
          rotateX: { type: "spring", stiffness: 100, damping: 10 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="w-10 h-8 bg-gradient-to-b from-zinc-800 to-black border border-primary/40 rounded-xl flex items-center justify-center relative shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
      >
        <div className="w-[85%] h-[75%] bg-black rounded-lg flex items-center justify-center overflow-hidden relative border border-white/5">
          <div className="flex gap-1.5 relative z-10">
            <motion.div
              animate={{ x: rotation.x / 4, y: rotation.y / 4, scaleY: [1, 1, 0.1, 1] }}
              transition={{ x: { type: "spring", stiffness: 150 }, scaleY: { duration: 4, repeat: Infinity, times: [0, 0.9, 0.95, 1] } }}
              className="w-1.5 h-2.5 bg-primary rounded-full shadow-[0_0_8px_#22c55e]"
            />
            <motion.div
              animate={{ x: rotation.x / 4, y: rotation.y / 4, scaleY: [1, 1, 0.1, 1] }}
              transition={{ x: { type: "spring", stiffness: 150 }, scaleY: { duration: 4, repeat: Infinity, times: [0, 0.9, 0.95, 1] } }}
              className="w-1.5 h-2.5 bg-primary rounded-full shadow-[0_0_8px_#22c55e]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- FLOATING ICON ---
const FloatingTechIcon = ({ tech, mousePos }) => {
  const iconRef = useRef(null);
  const avoidX = useSpring(0, { stiffness: 80, damping: 15 });
  const avoidY = useSpring(0, { stiffness: 80, damping: 15 });

  useEffect(() => {
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      const iconCenterX = rect.left + rect.width / 2;
      const iconCenterY = rect.top + rect.height / 2;
      const dx = mousePos.x - iconCenterX;
      const dy = mousePos.y - iconCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const radius = 120;

      if (distance < radius) {
        const force = (radius - distance) / radius;
        avoidX.set((dx / distance) * -60 * force);
        avoidY.set((dy / distance) * -60 * force);
      } else {
        avoidX.set(0);
        avoidY.set(0);
      }
    }
  }, [mousePos, avoidX, avoidY]);

  return (
    <motion.div
      ref={iconRef}
      className="absolute glass rounded-xl px-4 py-2 text-xs font-bold border border-white/10 shadow-lg cursor-default select-none z-30"
      style={{ left: tech.x, top: tech.y, color: tech.color, x: avoidX, y: avoidY }}
      animate={{ y: [0, -15, 0] }}
      transition={{ y: { duration: 5, delay: tech.delay, repeat: Infinity, ease: "easeInOut" } }}
    >
      {tech.label}
    </motion.div>
  );
};

// --- TYPING EFFECT ---
const TypingEffect = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const handleTyping = () => {
      if (!deleting) {
        const nextText = currentRole.slice(0, text.length + 1);
        setText(nextText);
        if (nextText === currentRole) setTimeout(() => setDeleting(true), 2000);
      } else {
        const nextText = currentRole.slice(0, text.length - 1);
        setText(nextText);
        if (nextText === "") {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };
    const timeout = setTimeout(handleTyping, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="font-mono text-primary text-lg md:text-xl border-r-2 border-primary pr-1">
      {text}
      <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} />
    </span>
  );
};

// --- HERO SECTION ---
const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <section
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-[#0a0a0a] selection:bg-primary/30"
    >
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
        style={{ background: `radial-gradient(750px at ${mousePos.x}px ${mousePos.y}px, rgba(34, 197, 94, 0.05), transparent 85%)` }}
      />

      <div className="max-w-6xl mx-auto w-full px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center mb-4">
              <SittingRobotHead mousePos={mousePos} />
              <p className="font-mono text-sm text-primary/70 tracking-[0.3em] uppercase">{" Hi there, I'm"}</p>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-white tracking-tighter mb-4">
              Haikal<br /><span className="text-primary drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]">Frastiawan</span>
            </h1>
            <div className="h-10 mb-8"><TypingEffect /></div>
            <p className="text-gray-400 font-medium text-base md:text-lg max-w-md mb-10 leading-relaxed italic border-l-2 border-primary/20 pl-4">
              "Architecting high-performance systems with <span className="text-white">Go (Gin/Fiber)</span> and <span className="text-white">NestJS</span>. Dedicated to scalable backend solutions."
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-12 relative z-50">
              <a href="#projects" className="flex-1 sm:flex-none flex items-center justify-center bg-primary text-black px-6 py-3.5 rounded-xl font-bold transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] text-sm">Explore Projects</a>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex items-center justify-center bg-white/10 text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold hover:bg-white/20 transition-all text-sm">Download CV</a>
              <a href="#contact" className="flex-1 sm:flex-none flex items-center justify-center border border-white/10 px-6 py-3.5 rounded-xl font-bold text-white hover:bg-white/10 transition-all text-sm">Contact Me</a>
            </div>

            {/* PERBAIKAN: Menggunakan variabel socialLinks yang sudah di pindahkan ke luar */}
            <div className="flex gap-4 relative z-50">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-white/5 bg-white/[0.03] text-gray-400 hover:text-green-400 hover:border-green-400/50 transition-all duration-300 pointer-events-auto cursor-pointer"
                >
                  <item.Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* TERMINAL SECTION */}
          <motion.div className="hidden lg:block relative h-[500px]">
            <div className="glass border border-white/10 rounded-2xl p-8 max-w-sm mx-auto shadow-2xl relative z-20 overflow-hidden">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <pre className="font-mono text-xs md:text-sm leading-relaxed text-gray-300">
                <code>
                  <span className="text-purple-400">const</span> <span className="text-blue-400">stack</span> = {"{"}
                  {"\n"}  go: [<span className="text-green-400">"Gin"</span>, <span className="text-green-400">"Fiber"</span>],
                  {"\n"}  node: <span className="text-orange-400">"NestJS"</span>,
                  {"\n"}  db: <span className="text-blue-400">"PostgreSQL"</span>,
                  {"\n"}  architecture: <span className="text-green-400">"Microservices"</span>,
                  {"\n"}  scaling: <span className="text-green-400">"Docker"</span>
                  {"\n"}{"}"};
                </code>
              </pre>
            </div>
            {techIconsData.map((tech) => (
              <FloatingTechIcon key={tech.label} tech={tech} mousePos={mousePos} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;