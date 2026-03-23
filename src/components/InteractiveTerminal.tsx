import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Minus } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

interface CommandHistory {
  command: string;
  output: string | JSX.Element;
  type: "success" | "error" | "system" | "info";
}

export default function InteractiveTerminal() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "",
      output: (
        <div className="space-y-2 mb-2 mt-2">
          <p className="text-green-400 font-bold text-base">=== Welcome to Haikal's Terminal ===</p>
          <p className="text-gray-300">
            Hi! I am the interactive assistant. To get started, type <span className="text-yellow-400 font-bold bg-yellow-400/10 px-1 rounded">help</span> and press Enter to see what I can do!
          </p>
          <p className="text-gray-400 text-xs italic">
            (Try typing: whoami, skills, projects, contact)
          </p>
        </div>
      ),
      type: "system",
    },
  ]);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output: string | JSX.Element = "";
    let type: "success" | "error" | "system" | "info" = "info";

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1">
            <p>Available commands:</p>
            <ul className="list-none pl-4 text-green-400">
              <li><span className="text-yellow-400">whoami</span>    - Display summary about me</li>
              <li><span className="text-yellow-400">skills</span>    - List my technical skills</li>
              <li><span className="text-yellow-400">projects</span>  - Shortcut to projects section</li>
              <li><span className="text-yellow-400">contact</span>   - Show contact information</li>
              <li><span className="text-yellow-400">clear</span>     - Clear the terminal</li>
            </ul>
          </div>
        );
        break;
      case "whoami":
        output = "Haikal Frastiawan - A Software Engineer passionate about scalable backend systems and responsive frontends.";
        type = "success";
        break;
      case "skills":
        output = "JavaScript, TypeScript, Golang, NestJS, React, Next.js, Postgres, MongoDB, Docker, Redis.";
        type = "success";
        break;
      case "projects":
        output = "Scrolling to projects section...";
        type = "system";
        setTimeout(() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }, 800);
        break;
      case "contact":
        output = "Email: haikalfrastiawan@example.com | LinkedIn: /in/haikalfrastiawan";
        type = "success";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "sudo":
        output = "Nice try! This incident will be reported. 🚨";
        type = "error";
        break;
      default:
        output = `Command not found: ${cmd}. Type 'help' for available commands.`;
        type = "error";
    }

    setHistory((prev) => [...prev, { command: input, output, type }]);
    setInput("");
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-5 z-50 p-4 bg-black border border-green-500/30 text-green-400 rounded-full shadow-lg shadow-green-500/20 hover:bg-green-500/10 transition-colors backdrop-blur-sm"
        title="Open CLI"
      >
        <TerminalIcon size={24} />
      </motion.button>

      {/* Terminal Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed z-50 flex flex-col bg-[#0a0a0a]/95 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden font-mono text-sm transition-all duration-300 ${
              isMaximized
                ? "inset-0 rounded-none border-0"
                : "bottom-5 right-5 w-full max-w-[500px] h-[400px] sm:bottom-24 sm:right-24 rounded-xl"
            }`}
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10 select-none">
              <div className="flex items-center gap-2 text-gray-400">
                <TerminalIcon size={14} />
                <span className="text-xs">haikal@portfolio:~</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <Minus size={14} />
                </button>
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-red-400 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div
              className="flex-1 p-4 overflow-y-auto w-full custom-scrollbar text-gray-300"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((item, idx) => (
                <div key={idx} className="mb-4">
                  {item.command && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-green-500">➜</span>
                      <span className="text-blue-400">~</span>
                      <span className="text-white">{item.command}</span>
                    </div>
                  )}
                  <div
                    className={`${
                      item.type === "error"
                        ? "text-red-400"
                        : item.type === "success"
                        ? "text-green-300"
                        : item.type === "system"
                        ? "text-purple-400"
                        : "text-gray-400"
                    } pl-4 border-l-2 border-white/5 py-1`}
                  >
                    {item.output}
                  </div>
                </div>
              ))}
              
              {/* Input Line */}
              <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
                <span className="text-green-500">➜</span>
                <span className="text-blue-400">~</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none border-none text-white font-mono placeholder:text-gray-600/70"
                  placeholder="Ketik 'help' di sini lalu tekan Enter..."
                  spellCheck="false"
                  autoComplete="off"
                  autoFocus
                />
              </form>
              <div ref={endOfMessagesRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
