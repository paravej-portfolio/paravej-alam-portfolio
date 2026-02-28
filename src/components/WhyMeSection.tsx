import { Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const WhyMeSection = () => (
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <div className="max-w-3xl mx-auto text-center glass-card rounded-2xl p-10 gradient-border bg-gradient-subtle card-hover relative overflow-hidden">
          <Sparkles className="h-8 w-8 text-primary mx-auto mb-4 relative" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 relative">Why Me?</h2>
          <p className="text-lg text-foreground/90 leading-relaxed relative">
            I combine <span className="text-primary font-semibold">Analytics</span>,{" "}
            <span className="text-accent font-semibold">AI</span>, and real-world problem solving
            to deliver faster insights, reduce manual effort, and drive better business decisions.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground relative">
            <span className="glass-card rounded-full px-4 py-2 gradient-border hover:scale-105 transition-transform duration-300">🎯 Business-focused</span>
            <span className="glass-card rounded-full px-4 py-2 gradient-border hover:scale-105 transition-transform duration-300">⚡ AI-powered</span>
            <span className="glass-card rounded-full px-4 py-2 gradient-border hover:scale-105 transition-transform duration-300">📊 Data-driven</span>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default WhyMeSection;
