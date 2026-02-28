import { Wrench, BrainCircuit, BarChart3, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const cards = [
  {
    icon: Wrench,
    title: "Skill",
    desc: "Strong foundation in Power BI, SQL, Python, and Data Modeling to handle real-world datasets.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: BrainCircuit,
    title: "Thinking",
    desc: "Analytical mindset to break down business problems and design data-driven solutions.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: BarChart3,
    title: "Impact",
    desc: "Focused on generating actionable insights that help businesses make better decisions.",
    gradient: "from-primary/20 to-accent/5",
  },
];

const PhilosophySection = () => (
  <section id="philosophy" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <SectionHeading title="What I Bring to the Table" subtitle="I don't just build projects — I deliver value" />
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {cards.map((card, i) => (
          <AnimatedSection key={i} delay={i * 150}>
            <div className={`glass rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 bg-gradient-to-br ${card.gradient}`}>
              <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mx-auto mb-5 text-primary-foreground">
                <card.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={500}>
        <p className="text-center text-muted-foreground max-w-xl mx-auto italic">
          Applied this approach in real-world projects involving sales and business analytics.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={600}>
        <div className="flex items-center justify-center gap-3 mt-8 glass rounded-xl px-6 py-4 max-w-lg mx-auto">
          <Rocket className="h-5 w-5 text-primary shrink-0" />
          <p className="text-sm font-medium">
            My goal: Combine <span className="text-primary">Skill</span>, <span className="text-accent">Thinking</span>, and <span className="text-primary">Impact</span> to build intelligent, AI-powered analytics solutions.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PhilosophySection;
