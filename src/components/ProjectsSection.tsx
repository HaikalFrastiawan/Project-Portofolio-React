import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Database, Server, GitMerge, Monitor } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  stack: string[];
  github: string;
  status: "In Progress" | "Concept" | "Completed";
  icon: any;
}

const projects: Project[] = [
  {
    title: "High-Performance Go API",
    description:
      "Developing a RESTful API using Go (Gin/Fiber) with a focus on execution speed and memory efficiency. Implementing JWT Authentication and Clean Architecture patterns.",
    stack: ["Golang", "Gin", "PostgreSQL", "Docker"],
    github: "https://github.com/HaikalFrastiawan/MySkill-Go-Ecommerce-Api.git",
    status: "In Progress",
    icon: <Server className="text-primary" size={24} />,
  },
  {
    title: "NestJS Modular Microservice",
    description:
      "Architecting a modular backend system using NestJS. Managing complex data streams with Redis for caching and MongoDB for schema flexibility.",
    stack: ["NestJS", "TypeScript", "Redis", "MongoDB"],
    github: "https://github.com/HaikalFrastiawan/Project-Marketplace-nest.git",
    status: "In Progress",
    icon: <Code2 className="text-primary" size={24} />,
  },
  {
    title: "AnimeList Web App",
    description:
      "A modern web application to browse, search, and track anime. Built with Next.js to leverage Server-Side Rendering (SSR) and Server Components for optimal performance.",
    stack: ["Next.js", "React", "TailwindCSS", "API Integration"],
    github: "https://github.com/HaikalFrastiawan/AnimeList-Next-js.git",
    status: "Completed",
    icon: <Monitor className="text-primary" size={24} />,
  },
  {
    title: "Scalable Database Schema Design",
    description:
      "A research project focused on query optimization and database standardization using MySQL and Postgres to efficiently handle high-volume data loads.",
    stack: ["MySQL", "Postgres", "Database Design"],
    github: "https://github.com/HaikalFrastiawan/RestfulApi-Typescript.git",
    status: "Concept",
    icon: <Database className="text-primary" size={24} />,
  },
];

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto w-full">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary mb-2">{t("projects.badge")}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t("projects.title")}
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl italic">
            {t("projects.desc")}
          </p>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] transition-all hover:border-primary/30"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    {project.icon}
                    <span className="text-xs font-mono text-primary/60 bg-primary/5 border border-primary/10 px-2 py-0.5 rounded">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono text-gray-400 border border-white/10 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        title={t("projects.arch")}
                        className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-primary hover:bg-primary/10 transition-all cursor-pointer"
                      >
                        <GitMerge size={20} />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#0b0f19] border-white/10 text-white sm:max-w-2xl overflow-hidden p-6">
                      <DialogHeader>
                        <DialogTitle>{project.title} Architecture</DialogTitle>
                        <DialogDescription className="text-gray-400">
                          High-level system design and data flow for this backend service.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4 border border-white/10 rounded-xl bg-black/50 p-6 flex flex-col items-center justify-center min-h-[300px]">
                        <div className="text-center space-y-4 text-gray-400 font-mono text-sm w-full">
                          <div className="flex items-center justify-center gap-2 w-full">
                            <div className="border border-green-500/30 bg-green-500/10 px-4 py-2 rounded">Client</div>
                            <div className="w-8 h-px bg-white/20"></div>
                            <div className="border border-blue-500/30 bg-blue-500/10 px-4 py-2 rounded text-blue-400">API Gateway</div>
                          </div>
                          <div className="w-px h-8 bg-white/20 mx-auto"></div>
                          <div className="flex justify-center gap-8 w-full">
                            <div className="border border-purple-500/30 bg-purple-500/10 px-4 py-2 rounded text-purple-400">Auth Service</div>
                            <div className="border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 rounded text-yellow-400">Core Service</div>
                          </div>
                          <div className="flex justify-center gap-[110px] w-full pt-1">
                            <div className="w-px h-8 bg-white/20"></div>
                            <div className="w-px h-8 bg-white/20"></div>
                          </div>
                          <div className="flex justify-center gap-8 w-full">
                            <div className="border border-gray-500/30 bg-gray-500/10 px-4 py-2 rounded flex items-center gap-2"><Database size={14} /> Redis</div>
                            <div className="border border-teal-500/30 bg-teal-500/10 px-4 py-2 rounded flex items-center gap-2 text-teal-400"><Database size={14} /> DB Master</div>
                          </div>
                          <p className="mt-8 text-xs italic text-gray-500 pt-4 border-t border-white/5">*This is a placeholder architecture diagram block. Update with actual image or detailed nodes later.</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-primary hover:bg-primary/10 transition-all cursor-pointer"
                  >
                    <Github size={20} />
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