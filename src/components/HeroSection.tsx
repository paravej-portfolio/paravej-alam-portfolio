import { ArrowDown, Download, FolderOpen, MapPin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const roles = [
  "Power BI, SQL, Python, and AI.",
  "dashboards that drive decisions.",
  "AI-powered analytics solutions.",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIndex];
    if (typing) {
      if (text.length < target.length) {
        const t = setTimeout(() => setText(target.slice(0, text.length + 1)), 50);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [text, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Open to opportunities
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="text-gradient">Paravej Alam</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-2 max-w-3xl mx-auto">
          From Raw Data to Intelligent Decisions — Powered by Analytics & AI
        </p>

        {/* Typing effect */}
        <div className="h-10 flex items-center justify-center mb-4">
          <p className="text-lg md:text-xl text-foreground/80">
            Transforming business data into actionable insights using{" "}
            <span className="text-primary font-semibold">{text}</span>
            <span className="border-r-2 border-primary animate-blink ml-0.5">&nbsp;</span>
          </p>
        </div>

        {/* Proof line */}
        <p className="text-muted-foreground text-base mb-8 max-w-2xl mx-auto">
          Built dashboards, analyzed datasets, and applied AI to accelerate insights.
        </p>

        {/* Info badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-primary" /> Gorakhpur, UP, India
          </span>
          <span className="flex items-center gap-1.5">
            <GraduationCap className="h-4 w-4 text-primary" /> MCA, MMMUT (2024–2026)
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button size="lg" className="bg-gradient-accent text-primary-foreground glow-primary" asChild>
            <a href="#projects">
              <FolderOpen className="h-5 w-5" />
              View Projects
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
            <a href="#contact">
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <a href="#about" className="inline-block animate-float text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
