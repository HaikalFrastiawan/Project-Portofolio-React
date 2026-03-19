import { motion } from "framer-motion";

interface JourneyEntry {
  year: string;
  title: string;
  description: string;
}

const journey: JourneyEntry[] = [
  {
    year: "2023",
    title: "The Foundation",
    description: "Started my coding journey by mastering JavaScript fundamentals. Focused on core programming logic, data structures, and asynchronous patterns.",
  },
  {
    year: "2024",
    title: "Backend & Database Entry",
    description: "Deep-dived into Node.js and Express. Started building RESTful APIs and managing relational databases (MySQL/Postgres) and NoSQL (MongoDB).",
  },
  {
    year: "2025",
    title: "Enterprise Architecture & Go",
    description: "Transitioned to NestJS for modular architecture. Started adopting Golang (Gin/Fiber) for high-performance services and implementing Redis for caching.",
  },
  {
    year: "2026",
    title: "Scalable Systems & DevOps",
    description: "Focusing on containerization with Docker, database optimization, and architecting scalable, production-ready backend ecosystems.",
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto w-full">
        {/* Decorative Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary mb-2">{"// my_evolution"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            Career Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

          <div className="space-y-16">
            {journey.map((entry, i) => (
              <motion.div
                key={entry.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot with Glow Effect */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-2 z-10 shadow-[0_0_10px_#22c55e]" />

                {/* Content Area */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
                    <span className="font-mono text-xs text-primary font-bold">{entry.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{entry.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;