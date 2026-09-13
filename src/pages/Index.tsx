import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ApiPlayground from "@/components/ApiPlayground";
import ProjectsSection from "@/components/ProjectsSection";
import GitHubSection from "@/components/GitHubSection";
import JourneySection from "@/components/JourneySection";
import Certifications from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import BackgroundOrbs from "@/components/BackgroundOrbs";

const Index = () => {
  return (
    <>
      <BackgroundOrbs />

      <main className="bg-background min-h-screen relative">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ApiPlayground />
        <ProjectsSection />
        <GitHubSection />
        <JourneySection />
        <Certifications />
        <ContactSection />
        <WhatsAppFloat />
        <InteractiveTerminal />
      </main>
    </>
  );
};

export default Index;
