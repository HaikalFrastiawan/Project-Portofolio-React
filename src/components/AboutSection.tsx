import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, ShieldCheck, Zap } from "lucide-react";

const focusAreas = [
  { icon: Server, title: "Server-Side Logic", desc: "Building scalable backend systems using Golang and Node.js" },
  { icon: Database, title: "Database Management", desc: "Designing efficient schemas with PostgreSQL and MongoDB" },
  { icon: Code2, title: "API Architecture", desc: "Developing robust RESTful and gRPC services" },
  { icon: ShieldCheck, title: "System Security", desc: "Implementing secure authentication and data protection" },
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
              I'm <span className="text-primary font-medium">Haikal Frastiawan</span>, an Informatics student dedicated to mastering the core of web ecosystems: <span className="italic">the Backend</span>. I have a deep fascination with how complex systems handle data, manage high traffic, and maintain seamless communication between services.
            </p>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-6">
              Currently, I am sharpening my expertise in Backend Engineering, focusing on building high-performance services using Golang and Node.js. I specialize in designing structured databases with PostgreSQL, caching strategies, and ensuring that every API I build is not only functional but also scalable and secure.
            </p>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
              I believe that a great application starts with a solid foundation. That’s why I’m committed to writing clean, maintainable code and exploring advanced topics like microservices, system design, and cloud infrastructure.
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