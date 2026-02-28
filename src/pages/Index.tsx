import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import PhilosophySection from "@/components/PhilosophySection";
import AIUseCasesSection from "@/components/AIUseCasesSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import WhyMeSection from "@/components/WhyMeSection";
import ExtrasSection from "@/components/ExtrasSection";
import ContactSection from "@/components/ContactSection";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScrollProgress from "@/components/ScrollProgress";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  const backgroundDisabled = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("bg") === "off";

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground noise-overlay">
      <ScrollProgress />
      {!backgroundDisabled && <BackgroundEffects />}

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <div className="section-alt">
          <EducationSection />
        </div>
        <SectionDivider />
        <PhilosophySection />
        <SectionDivider />
        <div className="section-alt">
          <AIUseCasesSection />
        </div>
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <div className="section-alt">
          <SkillsSection />
        </div>
        <SectionDivider />
        <CertificationsSection />
        <SectionDivider />
        <div className="section-alt">
          <WhyMeSection />
        </div>
        <SectionDivider />
        <ExtrasSection />
        <SectionDivider />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
