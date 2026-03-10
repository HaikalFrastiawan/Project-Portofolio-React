import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Database Oracle",
    issuer: "Universitas Dian Nusantara",
    date: "june 2025",
    link: "https://drive.google.com/file/d/158p-DzQPkHAhbfs1DxmSykU0BA3ln8f6/view?usp=drive_link",
  },
    {
    title: "Node Js",
    issuer: "CodePolitan",
    date: "september 2025",
    link: "https://drive.google.com/file/d/1sB6YavmZ1qL2clPf_IIQmokZGIz6LdIR/view?usp=sharing",
  },
    {
    title: "Tailwind",
    issuer: "Dicoding Indonesia",
    date: "september 2025",
    link: "https://drive.google.com/file/d/13G9I0fPHPuxjbBzz8ShaF6-IxgcT9OK-/view?usp=sharing",
  },
    {
    title: "MongoDb",
    issuer: "CodePolitan",
    date: "september 2025",
    link: "https://drive.google.com/file/d/1YZFB11I2cHr3eLom_6_FK1ssyztFNN8H/view?usp=sharing",
  },
    {
    title: "Mongoose",
    issuer: "CodePolitan",
    date: "september 2025",
    link: "https://drive.google.com/file/d/1gfD1sWmCG8pY59U8M8Fmpw7XlOPUl36B/view?usp=sharing",
  },
    {
    title: "Project Express & MongoDb",
    issuer: "CodePolitan",
    date: "september 2025",
    link: "https://drive.google.com/file/d/1Vv6eg0K492I6nubaAmZQMd9Bk72UcDOP/view?usp=sharing",
  },
    {
    title: "Express",
    issuer: "CodePolitan",
    date: "september 2025",
    link: "https://drive.google.com/file/d/1TfRnT0X2I4s4dDiO2arje0s9_xNH65c8/view?usp=sharing",
  },
    {
    title: "Express & EJS",
    issuer: "CodePolitan",
    date: "september 2025",
    link: "https://drive.google.com/file/d/1xMXWj9Atm94Ec7MkW34iDvQxuxlsgDAM/view?usp=sharing",
  },
    {
    title: "MiddleWare Express",
    issuer: "CodePolitan",
    date: "september 2025",
    link: "https://drive.google.com/file/d/1rTqYrwsLnXIYilTYkxDb7y7K28CxHOBl/view?usp=sharing",
  },
    {
    title: "React Js",
    issuer: "MySkill",
    date: "july 2025",
    link: "https://drive.google.com/file/d/1sNacmcNk7DoyTZHY1VFoGVCZ6V9iLqH6/view?usp=sharing",
  },
    {
    title: "GO",
    issuer: "MySkill",
    date: "August 2025",
    link: "https://drive.google.com/file/d/108ijtNXchVeSV0ML-eD_hwIuueniu5dx/view?usp=sharing",
  },


  
];

const Certifications = () => { // Saya samakan namanya agar tidak bingung
  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-column mx-auto">
        <p className="font-mono text-sm text-primary mb-2">{"// achievements"}</p>
        <h2 className="text-3xl font-heading font-bold mb-12 text-white">Certificates</h2>
        
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
              className="glass-card p-6 rounded-xl flex items-center justify-between hover:border-primary/50 transition-all group border border-white/10 bg-white/5"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors text-white">
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

export default Certifications; // Export dengan nama yang konsisten