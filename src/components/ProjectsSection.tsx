import { BarChart3, Brain, Database, TrendingUp, Clock, Layers, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Sales Analytics Dashboard",
    subtitle: "Power BI",
    icon: BarChart3,
    problem: "Understanding sales performance from raw and unstructured data.",
    approach: [
      "Data cleaning using Power Query",
      "Data modeling (fact & dimension tables)",
      "KPI creation using DAX",
      "Interactive dashboard design",
    ],
    aiAngle: "Used AI tools to improve insights and dashboard storytelling.",
    impact: [
      { icon: TrendingUp, text: "Identified top-performing products" },
      { icon: Layers, text: "Analyzed 10,000+ sales records" },
      { icon: Clock, text: "Enabled faster decision-making" },
    ],
    tools: ["Power BI", "DAX", "Power Query", "AI Tools"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "AI-Driven Data Analysis",
    subtitle: "Python",
    icon: Brain,
    problem: "Manual data analysis is slow and inefficient.",
    approach: [
      "Data analysis using Pandas and NumPy",
      "Automated workflows",
      "AI-assisted insights generation",
    ],
    aiAngle: "Used Generative AI to speed up analysis and insight generation.",
    impact: [
      { icon: Clock, text: "Reduced analysis time by ~40%" },
      { icon: Zap, text: "Improved productivity significantly" },
      { icon: TrendingUp, text: "Faster insights extraction" },
    ],
    tools: ["Python", "Pandas", "NumPy", "AI Tools"],
    gradient: "from-accent/20 to-accent/5",
  },
  {
    title: "SQL + Python Data Analysis",
    subtitle: "Full Stack Analytics",
    icon: Database,
    problem: "Extracting insights from large datasets efficiently.",
    approach: [
      "SQL for data extraction",
      "Python for processing and analysis",
      "Visualization of trends",
    ],
    aiAngle: "Used AI for query optimization and logic improvement.",
    impact: [
      { icon: Zap, text: "Faster querying on 50K+ rows" },
      { icon: Layers, text: "Better data understanding" },
      { icon: TrendingUp, text: "Improved decision support" },
    ],
    tools: ["SQL", "Python", "Pandas", "AI Tools"],
    gradient: "from-primary/20 to-accent/5",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <SectionHeading
          title="Featured Projects"
          subtitle="Data Analytics + AI in Action"
        />
      </AnimatedSection>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <AnimatedSection key={i} delay={i * 200}>
            <div className={`glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col`}>
              {/* Visual placeholder */}
              <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.15),transparent_70%)]" />
                <project.icon className="h-16 w-16 text-primary/40" />
                <div className="absolute bottom-3 right-3">
                  <Badge variant="secondary" className="glass text-xs">{project.subtitle}</Badge>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                {/* Problem */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground">{project.problem}</p>
                </div>

                {/* Approach */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Approach</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.approach.map((a, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AI Angle */}
                <div className="mb-4 glass rounded-lg p-3 border-primary/20">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">🤖 AI Angle</p>
                  <p className="text-sm text-foreground/80">{project.aiAngle}</p>
                </div>

                {/* Impact */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Impact</p>
                  <div className="space-y-2">
                    {project.impact.map((imp, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <imp.icon className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-foreground/90 font-medium">{imp.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="text-xs border-primary/30 text-primary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
