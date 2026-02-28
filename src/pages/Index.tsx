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

const Index = () => (
  <div className="min-h-screen bg-background text-foreground noise-overlay">
    <ScrollProgress />
    <BackgroundEffects />
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
);

export default Index;
