import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const roles = [
  "Backend Architecture Specialist", 
  "Full Stack Web Engineer",      
  "Golang & React Developer",      
  "Building High-Performance APIs", 
  "Database & System Designer",     
];

const techIcons = [
  { label: "React", x: "75%", y: "15%", delay: 0 },
  { label: "Go", x: "85%", y: "40%", delay: 0.5 },
  { label: "TS", x: "70%", y: "65%", delay: 1 },
  { label: "PG", x: "90%", y: "70%", delay: 1.5 },
  { label: "Node", x: "80%", y: "85%", delay: 2 },
];

const TypingEffect = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const handleTyping = () => {
      if (!deleting) {
        // FASE MENGETIK
        const nextText = currentRole.slice(0, text.length + 1);
        setText(nextText);

        // Jika sudah selesai mengetik satu role
        if (nextText === currentRole) {
          setTimeout(() => setDeleting(true), 2000); // Tunggu 2 detik sebelum hapus
        }
      } else {
        // FASE MENGHAPUS
        const nextText = currentRole.slice(0, text.length - 1);
        setText(nextText);

        // Jika sudah habis terhapus
        if (nextText === "") {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="font-mono text-primary text-lg md:text-xl">
      {text}
      <span className="typing-cursor" />
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-column mx-auto w-full px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-sm text-muted-foreground mb-4"
            >
              {"// Hello, World! I'm"}
            </motion.p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-4">
              <span className="text-foreground">Haikal</span>
              <br />
              <span className="gradient-text">Frastiawan</span>
            </h1>

            <div className="h-8 mb-6">
              <TypingEffect />
            </div>

            <p className="text-muted-foreground font-body text-base md:text-lg max-w-md mb-8 leading-relaxed">
              I build robust, scalable systems from database to interface.
              Focused on clean architecture and meaningful user experiences.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium text-sm hover:opacity-90 transition-all glow-border"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="glass px-6 py-3 rounded-lg font-body font-medium text-sm text-foreground hover:border-primary/50 transition-all"
              >
                Contact Me
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/HaikalFrastiawan", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/haikal-frastiawan-5b8287277/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:haikalfrastiawan16@gmail.com", label: "Email" },
                { icon: MessageCircle, href: "https://wa.me/089654461348", label: "WhatsApp" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Floating tech icons + code block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative h-[400px]"
          >
            {/* Code block */}
            <div className="glass-card rounded-xl p-6 max-w-sm mx-auto">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-primary/40" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <pre className="font-mono text-xs text-muted-foreground leading-relaxed">
                <code>
                  <span className="text-primary">const</span>{" "}
                  <span className="text-foreground">developer</span> = {`{`}
                  {"\n"}  name: <span className="text-primary">"Haikal"</span>,
                  {"\n"}  role: <span className="text-primary">"Full Stack"</span>,
                  {"\n"}  skills: [
                  {"\n"}    <span className="text-primary">"React"</span>,{" "}
                  <span className="text-primary">"Go"</span>,
                  {"\n"}    <span className="text-primary">"TypeScript"</span>,
                  {"\n"}    <span className="text-primary">"PostgreSQL"</span>
                  {"\n"}  ],
                  {"\n"}  passion: <span className="text-primary">"∞"</span>
                  {"\n"}{`}`};
                </code>
              </pre>
            </div>

            {/* Floating tech badges */}
            {techIcons.map((tech, i) => (
              <motion.div
                key={tech.label}
                className="absolute glass rounded-lg px-3 py-1.5 text-xs font-mono text-primary border border-primary/20"
                style={{ left: tech.x, top: tech.y }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  delay: tech.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {tech.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
