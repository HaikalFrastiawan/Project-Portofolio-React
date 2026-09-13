import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

const SkillsSection = () => {
  const { t } = useTranslation();

  const categories = [
    {
      title: t("skills.cat.1"),
      icon: <Server size={20} />,
      skills: ["Java", "SpringBoot", "Spring", "Hibernate"],
    },
    {
      title: t("skills.cat.2"),
      icon: <Database size={20} />,
      skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
    },
    {
      title: t("skills.cat.3"),
      icon: <Wrench size={20} />,
      skills: ["Docker", "ApacheKafka", "Git", "Postman", "Linux"],
    },
    {
      title: t("skills.cat.4"),
      icon: <Code2 size={20} />,
      skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="section-divider mb-16 opacity-20" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-primary mb-2">{t("skills.badge")}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {t("skills.title")}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 overflow-hidden py-10 w-full">
          {categories.map((cat, catIdx) => {
            const isEven = catIdx % 2 === 0;
            return (
              <div key={cat.title} className="relative w-full flex flex-col group/marquee">
                <div className="flex items-center gap-3 mb-6 px-6 max-w-6xl mx-auto w-full z-10">
                  <span className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                    {cat.icon}
                  </span>
                  <h3 className="font-bold text-xl text-white tracking-wide">
                    {cat.title}
                  </h3>
                </div>

                {/* Marquee Container */}
                <div className="flex overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <motion.div
                    animate={{ x: isEven ? ["0%", "-50%"] : ["-50%", "0%"] }}
                    transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                    className="flex whitespace-nowrap gap-6 shrink-0 w-max px-3"
                  >
                    {[...cat.skills, ...cat.skills, ...cat.skills, ...cat.skills].map((skill, i) => (
                      <div
                        key={`${skill}-${i}`}
                        className="px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md text-gray-300 font-medium hover:bg-primary/10 hover:text-white hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:border-primary/40 transition-all flex items-center gap-4 group/item shrink-0 cursor-pointer"
                      >
                        <img 
                          src={`https://cdn.simpleicons.org/${skill.toLowerCase().replace(' ', '').replace('.', 'dot')}`} 
                          className="w-8 h-8 object-contain opacity-50 group-hover/item:opacity-100 transition-all drop-shadow-md"
                          alt={skill} 
                          onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                        />
                        <span className="text-lg tracking-wide">{skill}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;