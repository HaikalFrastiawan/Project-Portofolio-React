const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Dicoding Indonesia",
    date: "2024",
    link: "https://link-sertifikat-kamu.com",
    icon: "Award"
  },
  // Tambahkan sertifikat lainnya di sini
];

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const CertificateSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-column mx-auto">
        <p className="font-mono text-sm text-primary mb-2">{"// achievements"}</p>
        <h2 className="text-3xl font-heading font-bold mb-12">Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl flex items-center justify-between hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};