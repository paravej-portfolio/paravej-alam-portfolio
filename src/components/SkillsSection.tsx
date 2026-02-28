import { BarChart3, Code2, Brain, Layers } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    icon: BarChart3,
    title: "Analytics & Visualization",
    skills: ["Power BI", "Excel", "Data Storytelling", "KPI Design", "DAX", "Power Query"],
  },
  {
    icon: Code2,
    title: "Programming & Data",
    skills: ["Python", "Pandas", "NumPy", "SQL", "Data Modeling"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: ["Applied AI", "Generative AI", "ML Basics", "AI Tools"],
  },
  {
    icon: Layers,
    title: "Currently Learning",
    skills: ["Machine Learning", "Cloud Basics", "Advanced AI"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 md:py-28 bg-gradient-hero">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <SectionHeading title="Skills & Tools" subtitle="My technical toolkit" />
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {categories.map((cat, i) => (
          <AnimatedSection key={i} delay={i * 150}>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cat.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
