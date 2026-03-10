import { motion } from "framer-motion";

interface JourneyEntry {
  year: string;
  title: string;
  description: string;
}

const journey: JourneyEntry[] = [
  {
    year: "2023",
    title: "Started Programming",
    description: "Started my coding journey by mastering JavaScript fundamentals, DOM manipulation, and asynchronous programming.",
  },
  {
    year: "2024",
    title: "Building Backend APIs",
    description: "Explored server-side development with Node.js, Express, and RESTful API design patterns.",
  },
  {
    year: "2025",
    title: "Learning Golang & System Design",
    description: "Currently focusing on backend development using Golan, Learning about scalable APIs, database optimization, and system architecture.",
  },
  {
    year: "2026",
    title: "Building Real Projects",
    description: "Building real-world projects and improving my full-stack development skills using React, modern JavaScript, and backend technologies",
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-24 px-6">
      <div className="max-w-column mx-auto w-full">
        <div className="section-divider mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary mb-2">{"// experience"}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            My Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
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
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-2 pulse-glow z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="font-mono text-xs text-primary">{entry.year}</span>
                  <h3 className="font-heading font-semibold text-lg mt-1 mb-2">{entry.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
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
