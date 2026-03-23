import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ApiPlayground from "@/components/ApiPlayground";
import ProjectsSection from "@/components/ProjectsSection";
import GitHubSection from "@/components/GitHubSection";
import JourneySection from "@/components/JourneySection";
import Certifications from "@/components/CertificatesSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [showSplash]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} key="splash" />}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="bg-background min-h-screen relative"
      >
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ApiPlayground />
        <ProjectsSection />
        <GitHubSection />
        <JourneySection />
        <Certifications />
        <BlogSection />
        <ContactSection />
        <WhatsAppFloat />
        <InteractiveTerminal />
      </motion.main>
    </>
  );
};

export default Index;
