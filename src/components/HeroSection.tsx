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
    <section className="relative min-h-[100svh] bg-gradient-to-b from-[hsl(222,60%,5%)] via-[hsl(222,50%,8%)] to-[hsl(222,60%,5%)] md:bg-none">
      {/* Desktop-only background effects */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full bg-primary/[0.10] blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-accent/[0.10] blur-[100px] animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan/[0.06] blur-[80px]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 45%, hsl(var(--background)) 100%)" }} />
      </div>

      {/* Content — always visible, clean flex layout */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] px-4 py-16 md:py-24 text-center">
        <div className="w-full max-w-[900px]">
          {/* Open to opportunities badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-6 text-xs sm:text-sm text-muted-foreground border border-primary/20 badge-glow glass-card">
            <span className="w-2 h-2 rounded-full bg-[hsl(142,69%,58%)] animate-pulse" />
            Open to opportunities
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-foreground break-words max-w-full">
            Hi, I'm{" "}
            <span className="text-gradient-animated">Paravej Alam</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-2xl text-foreground/70 mb-4 leading-relaxed max-w-full">
            From Raw Data to Intelligent Decisions — Powered by Analytics & AI
          </p>

          {/* Typing effect */}
          <div className="min-h-[2.5rem] flex items-center justify-center mb-4">
            <p className="text-sm sm:text-lg md:text-xl text-foreground/80 leading-relaxed break-words max-w-full">
              Transforming business data into actionable insights using{" "}
              <span className="text-primary font-semibold">{text}</span>
              <span className="border-r-2 border-primary animate-blink ml-0.5">&nbsp;</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm sm:text-base mb-8 leading-relaxed max-w-2xl mx-auto">
            Built dashboards, analyzed datasets, and applied AI to accelerate insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
            <Button size="lg" className="bg-gradient-accent text-primary-foreground btn-premium animate-pulse-glow w-full sm:w-auto text-base px-8" asChild>
              <a href="#projects">
                <FolderOpen className="h-5 w-5" />
                View Projects
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-card border-primary/30 hover:border-primary/60 btn-premium w-full sm:w-auto text-base px-8"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Info badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 text-sm text-muted-foreground">
            <span className="flex items-center gap-2 rounded-full px-4 py-2 glass-card gradient-border">
              <MapPin className="h-4 w-4 text-primary" /> Gorakhpur, UP, India
            </span>
            <span className="flex items-center gap-2 rounded-full px-4 py-2 glass-card gradient-border">
              <GraduationCap className="h-4 w-4 text-primary" /> MCA, MMMUT (2024–2026)
            </span>
          </div>

          {/* Scroll indicator */}
          <a href="#about" className="inline-block animate-float text-muted-foreground hover:text-primary transition-colors duration-300">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
