import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [

  {
    title: "Project Express & MongoDB",
    issuer: "Code Politan",
    date: "September 2025",
    link: "https://drive.google.com/file/d/1Vv6eg0K492I6nubaAmZQMd9Bk72UcDOP/view?usp=sharing",
  },
  {
    title: "Node.js", 
    issuer: "Code Politan",
    date: "September 2025",
    link: "https://drive.google.com/file/d/1sB6YavmZ1qL2clPf_IIQmokZGIz6LdIR/view?usp=sharing",
  },
  {
    title: "Express & EJS",
    issuer: "Code Politan",
    date: "September 2025",
    link: "https://drive.google.com/file/d/1xMXWj9Atm94Ec7MkW34iDvQxuxlsgDAM/view?usp=sharing",
  },
  {
    title: "Middleware Express",
    issuer: "Code Politan",
    date: "September 2025",
    link: "https://drive.google.com/file/d/1rTqYrwsLnXIYilTYkxDb7y7K28CxHOBl/view?usp=sharing",
  },
  {
    title: "Express.js",
    issuer: "Code Politan",
    date: "September 2025",
    link: "https://drive.google.com/file/d/1TfRnT0X2I4s4dDiO2arje0s9_xNH65c8/view?usp=sharing",
  },
  {
    title: "Mongoose",
    issuer: "Code Politan",
    date: "September 2025",
    link: "https://drive.google.com/file/d/1gfD1sWmCG8pY59U8M8Fmpw7XlOPUl36B/view?usp=sharing",
  },
  {
    title: "MongoDB", 
    issuer: "Code Politan",
    date: "September 2025",
    link: "https://drive.google.com/file/d/1YZFB11I2cHr3eLom_6_FK1ssyztFNN8H/view?usp=sharing",
  },
  {
    title: "Tailwind CSS",
    issuer: "Code Politan",
    date: "September 2025",
    link: "https://drive.google.com/file/d/13G9I0fPHPuxjbBzz8ShaF6-IxgcT9OK-/view?usp=sharing",
  },
  {
    title: "Go (Golang)",
    issuer: "My Skill",
    date: "August 2025",
    link: "https://drive.google.com/file/d/108ijtNXchVeSV0ML-eD_hwIuueniu5dx/view?usp=sharing",
  },
  {
    title: "React.js", 
    issuer: "My Skill",
    date: "July 2025",
    link: "https://drive.google.com/file/d/1sNacmcNk7DoyTZHY1VFoGVCZ6V9iLqH6/view?usp=sharing",
  },
  {
    title: "Oracle Database", 
    issuer: "Universitas Dian Nusantara",
    date: "June 2025",
    link: "https://drive.google.com/file/d/158p-DzQPkHAhbfs1DxmSykU0BA3ln8f6/view?usp=drive_link",
  },
];

const Certifications = () => {
  return (
    <section id="certificates" className="py-24 px-6 bg-[#0a0a0a]"> 
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary mb-2">{"// achievements"}</p>
          <h2 className="text-4xl font-heading font-bold mb-12 text-white">Certificates</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              transition={{ delay: index * 0.05 }}
              className="glass-card p-5 rounded-xl flex items-center justify-between border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/40 transition-all group"
            >
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <Award size={22} />
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-heading font-semibold text-white group-hover:text-primary transition-colors truncate">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-400 truncate">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 ml-2 text-gray-500 group-hover:text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                <ExternalLink size={16} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;