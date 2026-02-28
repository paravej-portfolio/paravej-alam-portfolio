import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PhilosophySection from "@/components/PhilosophySection";
import AIUseCasesSection from "@/components/AIUseCasesSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import WhyMeSection from "@/components/WhyMeSection";
import ExtrasSection from "@/components/ExtrasSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <PhilosophySection />
    <AIUseCasesSection />
    <ProjectsSection />
    <SkillsSection />
    <WhyMeSection />
    <ExtrasSection />
    <ContactSection />
  </div>
);

export default Index;
