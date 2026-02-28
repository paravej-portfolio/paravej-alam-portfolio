import { Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const WhyMeSection = () => (
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <div className="max-w-3xl mx-auto text-center glass rounded-2xl p-10 glow-primary bg-gradient-to-br from-primary/10 to-accent/10">
          <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Me?</h2>
          <p className="text-lg text-foreground/90 leading-relaxed">
            I combine <span className="text-primary font-semibold">analytics</span> +{" "}
            <span className="text-accent font-semibold">AI</span> to deliver faster insights,
            reduce manual effort, and solve real business problems using data-driven approaches.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="glass rounded-full px-4 py-2">🎯 Business-focused</span>
            <span className="glass rounded-full px-4 py-2">⚡ AI-powered</span>
            <span className="glass rounded-full px-4 py-2">📊 Data-driven</span>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default WhyMeSection;
