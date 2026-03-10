import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with real-time inventory management, payment processing, and an admin dashboard. Built for scale with optimistic UI updates and edge caching.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Task Management API",
    description:
      "A high-performance REST API built in Go, serving 10k+ requests per second. Features JWT authentication, rate limiting, and comprehensive test coverage.",
    stack: ["Golang", "PostgreSQL", "Docker", "Redis"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Real-Time Dashboard",
    description:
      "A monitoring dashboard with WebSocket-driven live data visualization. Displays system metrics, user analytics, and business KPIs with sub-second latency.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "WebSockets"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-column mx-auto w-full">
        <div className="section-divider mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary mb-2">{"// portfolio"}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-8 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 md:mt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass text-muted-foreground hover:text-primary transition-all"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass text-muted-foreground hover:text-primary transition-all"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
