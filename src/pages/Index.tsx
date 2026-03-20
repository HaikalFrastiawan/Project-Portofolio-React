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

const Index = () => {
  return (
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
      <BlogSection />
      <ContactSection />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
