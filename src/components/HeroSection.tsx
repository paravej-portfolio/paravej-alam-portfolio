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
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "hsl(var(--background))",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 text-xs sm:text-sm text-muted-foreground border border-border">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Open to opportunities
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight text-foreground">
          Hi, I'm{" "}
          <span className="text-gradient-animated">Paravej Alam</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-xl md:text-2xl text-foreground/70 mb-3 leading-relaxed">
          From Raw Data to Intelligent Decisions — Powered by Analytics & AI
        </p>

        {/* Typing effect */}
        <div className="min-h-[2.5rem] md:min-h-[2.5rem] flex items-center justify-center mb-3">
          <p className="text-sm sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
            Transforming business data into actionable insights using{" "}
            <span className="text-primary font-semibold">{text}</span>
            <span className="border-r-2 border-primary animate-blink ml-0.5">&nbsp;</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
          Built dashboards, analyzed datasets, and applied AI to accelerate insights.
        </p>

        {/* CTA Buttons — always stack on mobile */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
          <Button size="lg" className="bg-gradient-accent text-primary-foreground w-full sm:w-auto" asChild>
            <a href="#projects">
              <FolderOpen className="h-5 w-5" />
              View Projects
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 w-full sm:w-auto" asChild>
            <a href="/resume.pdf" download>
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Info badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5 rounded-full px-3 py-1.5 border border-border">
            <MapPin className="h-4 w-4 text-primary" /> Gorakhpur, UP, India
          </span>
          <span className="flex items-center gap-1.5 rounded-full px-3 py-1.5 border border-border">
            <GraduationCap className="h-4 w-4 text-primary" /> MCA, MMMUT (2024–2026)
          </span>
        </div>

        {/* Scroll indicator */}
        <a href="#about" className="inline-block text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
