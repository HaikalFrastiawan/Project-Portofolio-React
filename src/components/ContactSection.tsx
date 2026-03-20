import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const submissionData = {
      ...formData,
      access_key: "1aed00de-c4c1-43c6-b89d-8ec0432635d8",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset form
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-column mx-auto w-full">
        <div className="section-divider mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary mb-2">{t("contact.badge")}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground font-body mb-12 max-w-md">
            {t("contact.desc")}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Form */}
            <div className="glass-card rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs font-mono text-muted-foreground tracking-wider uppercase block mb-2">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-muted/30 border border-border rounded-lg text-foreground font-body text-sm py-3 px-4 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-muted-foreground tracking-wider uppercase block mb-2">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-muted/30 border border-border rounded-lg text-foreground font-body text-sm py-3 px-4 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-muted-foreground tracking-wider uppercase block mb-2">
                    {t("contact.message")}
                  </label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-muted/30 border border-border rounded-lg text-foreground font-body text-sm py-3 px-4 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium text-sm hover:opacity-90 transition-all w-full flex items-center justify-center gap-2 glow-border ${status === "sending" ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <Send size={16} />
                  {status === "idle" && t("contact.send")}
                  {status === "sending" && t("contact.sending")}
                  {status === "success" && t("contact.sent")}
                  {status === "error" && t("contact.error")}
                </button>
              </form>
            </div>

            <div className="glass-card rounded-xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-sm text-primary tracking-wider uppercase mb-8">
                  {t("contact.quick")}
                </h3>
                <div className="space-y-5">
                  {[
                    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/08136761485", desc: "Chat with me directly" },
                    { icon: Mail, label: "Email", href: "mailto:haikalfrastiawan16@gmail.com", desc: "haikalfrastiawan16@gmail.com" },
                    { icon: Github, label: "GitHub", href: "https://github.com/HaikalFrastiawan", desc: "Check my repositories" },
                    { icon: Linkedin, label: "LinkedIn", href: "http://linkedin.com/in/haikal-frastiawan-5b8287277/", desc: "Let's connect" },
                  ].map(({ icon: Icon, label, href, desc }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <Icon size={18} />
                      </div>
                      <div>
                        <span className="font-body text-sm text-foreground block">{label}</span>
                        <span className="font-body text-xs text-muted-foreground">{desc}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-8 pt-4 border-t border-border/30">
                <p className="text-muted-foreground/50 font-body text-xs">
                  © {new Date().getFullYear()} Haikal Frastiawan
                </p>
                <img
                  src="https://komarev.com/ghpvc/?username=haikalfrastiawan-portfolio&label=Profile%20views&color=0e75b6&style=flat"
                  alt="Profile Views"
                  className="h-5 opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;