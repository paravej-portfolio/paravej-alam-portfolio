import { ArrowDown, Download, FolderOpen, MapPin, GraduationCap, Handshake, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const roles = [
  "Power BI",
  "SQL",
  "Python",
  "Machine Learning",
  "AI Systems",
  "LLM",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIndex];
    if (typing) {
      if (text.length < target.length) {
        const t = setTimeout(() => setText(target.slice(0, text.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [text, typing, roleIndex]);

  return (
    <section className="relative min-h-[100svh] bg-gradient-to-b from-[hsl(222,60%,4%)] via-[hsl(222,50%,7%)] to-[hsl(222,60%,4%)] md:bg-none">
      {/* Desktop background effects */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full bg-primary/[0.08] blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-accent/[0.08] blur-[100px] animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan/[0.05] blur-[80px]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 45%, hsl(var(--background)) 100%)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] px-4 py-16 md:py-24 text-center">
        <div className="w-full max-w-[900px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-8 text-xs sm:text-sm text-muted-foreground border border-primary/20 badge-glow glass-card">
            <span className="w-2 h-2 rounded-full bg-[hsl(142,69%,58%)] animate-pulse" />
            Open to AI / Data Analyst / Business Intelligence roles
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight text-foreground break-words max-w-full">
            Hi, I'm{" "}
            <span className="text-gradient-animated">Paravej Alam</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-2xl text-foreground/70 mb-4 leading-relaxed max-w-full">
            From Raw Data to Intelligent Decisions — Powered by Analytics & AI
          </p>

          {/* Typing effect */}
          <div className="min-h-[2.5rem] flex items-center justify-center mb-5">
            <p className="text-sm sm:text-lg md:text-xl text-foreground/80 leading-relaxed break-words max-w-full font-mono">
              <span className="text-muted-foreground">{">"}</span>{" "}
              <span className="text-primary font-semibold">{text}</span>
              <span className="border-r-2 border-primary animate-blink ml-0.5">&nbsp;</span>
            </p>
          </div>

          {/* Value proposition */}
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            I help businesses transform raw data into{" "}
            <span className="text-primary font-medium">actionable insights</span>,{" "}
            <span className="text-accent font-medium">dashboards</span>, and{" "}
            <span className="text-cyan font-medium">AI-driven solutions</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
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
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-cyan text-primary-foreground btn-premium w-full sm:w-auto text-base px-8 animate-pulse-glow"
              style={{ animationDelay: "1s" }}
              asChild
            >
              <a href="#contact">
                <Handshake className="h-5 w-5" />
                Let's Work Together
              </a>
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs text-muted-foreground">
            {["Built real-world projects", "Hands-on analytics experience", "Focused on business impact"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[hsl(142,69%,58%)]" />
                {t}
              </span>
            ))}
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
