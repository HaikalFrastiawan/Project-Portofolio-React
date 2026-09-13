import { motion } from "framer-motion";
import { Code2, Database, Server, ShieldCheck, Activity, Coffee, Github as RepoIcon, Code } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useTranslation } from "@/context/TranslationContext";

const AboutSection = () => {
  const { t } = useTranslation();

  const focusAreas = [
    { icon: Server, title: t("about.focus.1.title"), desc: t("about.focus.1.desc") },
    { icon: Database, title: t("about.focus.2.title"), desc: t("about.focus.2.desc") },
    { icon: Code2, title: t("about.focus.3.title"), desc: t("about.focus.3.desc") },
    { icon: ShieldCheck, title: t("about.focus.4.title"), desc: t("about.focus.4.desc") },
  ];

  const stats = [
    { label: t("about.stats.projects"), value: 15, suffix: "+", icon: RepoIcon },
    { label: t("about.stats.commits"), value: 850, suffix: "+", icon: Activity },
    { label: t("about.stats.coffee"), value: 1200, suffix: "+", icon: Coffee },
    { label: t("about.stats.hours"), value: 2500, suffix: "+", icon: Code },
  ];

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
          <p className="font-mono text-sm text-primary mb-2">{t("about.badge")}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10">
            {t("about.title")}
          </h2>

          <div className="glass-card rounded-xl p-8 md:p-12 mb-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed mb-6 relative z-10">
              {t("about.p1")}
            </p>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-6 relative z-10">
              {t("about.p2")}
            </p>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed relative z-10">
              {t("about.p3")}
            </p>
          </div>

          {/* Quick Stats Grid with Counters */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:border-primary/20 transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <stat.icon className="text-primary w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white flex items-center shadow-black drop-shadow-md">
                    <AnimatedCounter value={stat.value} />
                    <span className="text-primary ml-0.5">{stat.suffix}</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 font-mono mt-1">{stat.label}</p>
                </div>
              </motion.div>
            ))}
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
                className="glass-card rounded-xl p-6 text-center group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <area.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-sm mb-2 group-hover:text-primary transition-colors">{area.title}</h3>
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