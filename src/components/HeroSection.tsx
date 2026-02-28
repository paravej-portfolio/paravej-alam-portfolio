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
    <section className="relative min-h-[100svh] bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] md:bg-none">
      {/* Desktop-only background effects */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full bg-primary/[0.12] blur-[100px]" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-accent/[0.12] blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[hsl(192_91%_36%/0.06)] blur-[80px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        {/* Vignette */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 45%, hsl(var(--background)) 100%)" }} />
      </div>

      {/* Content — always visible, clean flex layout */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] px-4 py-16 text-center">
        <div className="w-full max-w-[900px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 text-xs sm:text-sm text-muted-foreground border border-border md:glass md:gradient-border">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Open to opportunities
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight text-foreground break-words max-w-full">
            Hi, I'm{" "}
            <span className="text-gradient-animated">Paravej Alam</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl md:text-2xl text-foreground/70 mb-3 leading-relaxed max-w-full">
            From Raw Data to Intelligent Decisions — Powered by Analytics & AI
          </p>

          {/* Typing effect */}
          <div className="min-h-[2.5rem] flex items-center justify-center mb-3">
            <p className="text-sm sm:text-lg md:text-xl text-foreground/80 leading-relaxed break-words max-w-full">
              Transforming business data into actionable insights using{" "}
              <span className="text-primary font-semibold">{text}</span>
              <span className="border-r-2 border-primary animate-blink ml-0.5">&nbsp;</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
            Built dashboards, analyzed datasets, and applied AI to accelerate insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
            <Button size="lg" className="bg-gradient-accent text-primary-foreground animate-pulse-glow w-full sm:w-auto" asChild>
              <a href="#projects">
                <FolderOpen className="h-5 w-5" />
                View Projects
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 hover:border-primary/60 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300 w-full sm:w-auto" asChild>
              <a href="/resume.pdf" download>
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Info badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5 rounded-full px-3 py-1.5 border border-border md:glass md:gradient-border">
              <MapPin className="h-4 w-4 text-primary" /> Gorakhpur, UP, India
            </span>
            <span className="flex items-center gap-1.5 rounded-full px-3 py-1.5 border border-border md:glass md:gradient-border">
              <GraduationCap className="h-4 w-4 text-primary" /> MCA, MMMUT (2024–2026)
            </span>
          </div>

          {/* Scroll indicator */}
          <a href="#about" className="inline-block animate-float text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
