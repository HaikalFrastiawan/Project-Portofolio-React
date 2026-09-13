import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Database, Server, GitMerge, Monitor } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";
import SpotlightCard from "@/components/SpotlightCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.item1.title"),
      description: t("projects.item1.desc"),
      stack: ["Java 21", "Spring Boot 3", "Spring Cloud", "PostgreSQL", "Docker"],
      github: "https://github.com/HaikalFrastiawan/MySkill-Go-Ecommerce-Api.git",
      status: t("projects.status.in_progress"),
      icon: <Server className="text-primary" size={24} />,
    },
    {
      title: t("projects.item2.title"),
      description: t("projects.item2.desc"),
      stack: ["Java", "Spring Boot", "Spring Data JPA", "Redis", "MySQL"],
      github: "https://github.com/HaikalFrastiawan/Project-Marketplace-nest.git",
      status: t("projects.status.completed"),
      icon: <Code2 className="text-primary" size={24} />,
    },
    {
      title: t("projects.item3.title"),
      description: t("projects.item3.desc"),
      stack: ["Java 21", "Spring Security 6", "OAuth2", "JWT", "PostgreSQL"],
      github: "https://github.com/HaikalFrastiawan/RestfulApi-Typescript.git",
      status: t("projects.status.completed"),
      icon: <Database className="text-primary" size={24} />,
    },
    {
      title: t("projects.item4.title"),
      description: t("projects.item4.desc"),
      stack: ["React", "Java", "Spring Boot", "Neon", "Vercel"],
      demo: "https://electronic-service-five.vercel.app/",
      status: t("projects.status.completed"),
      icon: <Monitor className="text-primary" size={24} />,
    },
    {
      title: t("projects.item5.title"),
      description: t("projects.item5.desc"),
      stack: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Docker"],
      github: "https://github.com/HaikalFrastiawan/AnimeList-Next-js.git",
      status: t("projects.status.concept"),
      icon: <Server className="text-primary" size={24} />,
    },
  ];

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
              className="h-full"
            >
              <SpotlightCard className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 transition-all hover:border-primary/30 h-full">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 h-full">
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
                          className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-primary hover:bg-primary/10 transition-all cursor-pointer relative z-20"
                        >
                          <GitMerge size={20} />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="bg-[#0b0f19] border-white/10 text-white w-[92vw] max-w-2xl max-h-[85vh] overflow-y-auto p-4 sm:p-6 z-[99999]">
                        <DialogHeader>
                          <DialogTitle className="text-base sm:text-lg">{project.title} - {t("projects.arch_title")}</DialogTitle>
                          <DialogDescription className="text-gray-400 text-xs sm:text-sm">
                            {t("projects.arch_desc")}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4 border border-white/10 rounded-xl bg-black/50 p-4 sm:p-6 flex flex-col items-center justify-center min-h-[260px] overflow-x-auto">
                          <div className="text-center space-y-3 sm:space-y-4 text-gray-400 font-mono text-xs sm:text-sm min-w-[280px]">
                            <div className="flex items-center justify-center gap-2 w-full">
                              <div className="border border-green-500/30 bg-green-500/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded text-green-400">Client</div>
                              <div className="w-6 sm:w-8 h-px bg-white/20"></div>
                              <div className="border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded text-blue-400">API Gateway</div>
                            </div>
                            <div className="w-px h-6 sm:h-8 bg-white/20 mx-auto"></div>
                            <div className="flex justify-center gap-3 sm:gap-8 w-full flex-wrap sm:flex-nowrap">
                              <div className="border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded text-purple-400">Auth Service</div>
                              <div className="border border-yellow-500/30 bg-yellow-500/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded text-yellow-400">Core Service</div>
                            </div>
                            <div className="w-px h-6 sm:h-8 bg-white/20 mx-auto"></div>
                            <div className="flex justify-center gap-3 sm:gap-8 w-full flex-wrap sm:flex-nowrap">
                              <div className="border border-gray-500/30 bg-gray-500/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded flex items-center gap-1.5"><Database size={14} /> Redis</div>
                              <div className="border border-teal-500/30 bg-teal-500/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded flex items-center gap-1.5 text-teal-400"><Database size={14} /> DB Master</div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-primary hover:bg-primary/10 transition-all cursor-pointer relative z-20"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-primary hover:bg-primary/10 transition-all cursor-pointer relative z-20"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;