import { motion } from "framer-motion";
import { 
  Code2, Server, Database, Wrench 
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Code2 size={20} />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    skills: ["Node.js", "Go", "Express", "NestJS"],
  },
  {
    title: "Database",
    icon: <Database size={20} />,
  /* Pastikan nama skill sesuai dengan nama brand agar logo muncul */
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench size={20} />,
    skills: ["Git", "Docker", "Postman"],
  },
];

const SkillsSection = () => {
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
          <p className="font-mono text-sm text-primary mb-2">{"// tech_stack"}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm group hover:border-primary/30 transition-all duration-500"
            >
              <h3 className="flex items-center gap-3 font-bold text-lg text-white mb-8 tracking-wide">
                <span className="p-2 rounded-lg bg-primary/10 text-primary">
                  {cat.icon}
                </span>
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.03] text-gray-300 text-sm font-medium hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all flex items-center gap-3 group/item"
                  >

                    <img 
                      src={`https://cdn.simpleicons.org/${skill.toLowerCase().replace(' ', '').replace('.', 'dot')}`} 
                      className="w-5 h-5 object-contain brightness group-hover/item:opacity-100 group-hover/item:brightness-100 transition-all"
                      alt={skill} 
                      onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                    />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;