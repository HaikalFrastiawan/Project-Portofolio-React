import { motion } from "framer-motion";
import { Code2, Database, Globe, Server } from "lucide-react";

const focusAreas = [
  { icon: Globe, title: "Frontend Development", desc: "Crafting responsive, performant UIs with React & Next.js" },
  { icon: Server, title: "Backend Development", desc: "Building robust APIs with Golang and Node.Js" },
  { icon: Code2, title: "API Development", desc: "Designing RESTful and GraphQL APIs at scale" },
  { icon: Database, title: "Database Design", desc: "Modeling data with PostgreSQL and MongoDB" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-column mx-auto w-full">
        <div className="section-divider mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary mb-2">{"// about me"}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10">
            Get To Know Me
          </h2>

          <div className="glass-card rounded-xl p-8 md:p-12 mb-12">
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed mb-6">
              I'm <span className="text-primary font-medium">Haikal Frastiawan</span> an Informatics student with a strong interest in software development and modern web technologies. I enjoy learning how applications work behind the scenes and how different parts of a system connect with each other.

            </p>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-6">
            Currently, I'm focusing on building my skills as a full-stack developer. I'm learning backend development using Go and Node.js, working with databases like PostgreSQL and MongoDB, and developing frontend interfaces with React and modern JavaScript.

            </p>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
            I enjoy building real projects to improve my problem-solving skills, writing clean and maintainable code, and continuously exploring better ways to design scalable and reliable systems.
            </p>
          </div>

          {/* Focus areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 text-center group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-sm mb-2">{area.title}</h3>
                <p className="text-muted-foreground text-xs font-body leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
