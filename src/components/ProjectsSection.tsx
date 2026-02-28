import { Brain, BarChart3, ExternalLink, TrendingUp, Clock, Layers, Zap, Rocket, Award, Target, Sparkles, BookOpen, Cloud } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => (
  <section id="projects" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <SectionHeading
          title="Featured Projects"
          subtitle="Data Analytics + AI in Action"
        />
      </AnimatedSection>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Project 1 — Placement Predictor */}
        <AnimatedSection>
          <div className="glass rounded-2xl overflow-hidden hover:scale-[1.01] transition-transform duration-300">
            <div className="h-44 bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.15),transparent_70%)]" />
              <Brain className="h-16 w-16 text-accent/40" />
              <div className="absolute bottom-3 right-3">
                <Badge variant="secondary" className="glass text-xs">AI + ML Project</Badge>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-5">
              <h3 className="text-xl md:text-2xl font-bold">College Placement Predictor & Resume Insights Dashboard</h3>

              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">🔍 Problem</p>
                <p className="text-sm text-muted-foreground">Students struggle to understand placement trends, evaluate their resume strength, and predict their chances of getting placed.</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">⚙️ Approach</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {[
                    "Built an end-to-end analytics + ML system",
                    "Processed student and resume data using Python (Pandas, NumPy)",
                    "Implemented Machine Learning model (Logistic Regression) for placement prediction",
                    "Used SHAP for model explainability",
                    "Created ATS Resume Match Score system",
                    "Built a What-If Simulator for skill improvement analysis",
                    "Developed dashboards using Excel & Power BI",
                    "Deployed full solution using Streamlit",
                  ].map((a, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-lg p-4 border-accent/20">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">🤖 AI / ML Angle</p>
                <ul className="text-sm text-foreground/80 space-y-1">
                  {[
                    "Machine Learning-based prediction system",
                    "SHAP Explainability for transparent decision-making",
                    "AI-assisted resume analysis & scoring",
                  ].map((a, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">📈 Impact</p>
                <div className="space-y-2">
                  {[
                    { icon: Layers, text: "Built a complete end-to-end pipeline (Data → ML → Dashboard → Deployment)" },
                    { icon: Target, text: "Helps students understand placement probability and improvement areas" },
                    { icon: TrendingUp, text: "Transforms raw data into actionable career insights" },
                    { icon: Zap, text: "Demonstrates real-world application of AI in analytics" },
                  ].map((imp, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <imp.icon className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-foreground/90 font-medium">{imp.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Python", "Pandas", "NumPy", "Scikit-learn", "SQL (SQLite)", "Power BI", "Excel", "Streamlit", "SHAP", "Git"].map((tool) => (
                  <Badge key={tool} variant="outline" className="text-xs border-primary/30 text-primary">{tool}</Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="sm" className="bg-gradient-accent text-primary-foreground">
                  <a href="https://lnkd.in/gUhK5QyU" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" /> Live App
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a href="https://lnkd.in/ge87FWyC" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" /> GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Project 2 — Sales Dashboard */}
        <AnimatedSection delay={200}>
          <div className="glass rounded-2xl overflow-hidden hover:scale-[1.01] transition-transform duration-300">
            <div className="h-44 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.15),transparent_70%)]" />
              <BarChart3 className="h-16 w-16 text-primary/40" />
              <div className="absolute bottom-3 right-3">
                <Badge variant="secondary" className="glass text-xs">Power BI + Deployment</Badge>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-5">
              <h3 className="text-xl md:text-2xl font-bold">Sales Performance Analytics Dashboard</h3>

              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">🔍 Problem</p>
                <p className="text-sm text-muted-foreground">Businesses often lack clarity on sales performance, revenue drivers, and regional trends due to static and fragmented reports.</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">⚙️ Approach</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {[
                    "Cleaned and transformed sales data using Power Query",
                    "Built relational data model (Fact & Dimension Tables)",
                    "Created KPIs (Revenue, Orders, AOV, Growth Rate) using DAX",
                    "Designed interactive Power BI dashboard",
                    "Integrated dashboard into a modern web interface",
                    "Deployed using Vercel",
                  ].map((a, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-lg p-4 border-primary/20">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">🤖 AI Angle</p>
                <ul className="text-sm text-foreground/80 space-y-1">
                  {[
                    "Used AI tools to identify key KPIs and improve dashboard storytelling",
                    "Generated insights faster using AI-assisted analytics",
                  ].map((a, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">📈 Impact</p>
                <div className="space-y-2">
                  {[
                    { icon: Layers, text: "Analyzed large-scale sales dataset (10,000+ records)" },
                    { icon: TrendingUp, text: "Identified top-performing regions, products, and revenue contributors" },
                    { icon: Zap, text: "Enabled business users to explore insights interactively" },
                    { icon: Clock, text: "Improved reporting efficiency and decision-making speed" },
                  ].map((imp, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <imp.icon className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-foreground/90 font-medium">{imp.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">📊 Key Features</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {[
                    "KPI-driven navigation (click → insights section)",
                    "Region-wise and city-level analysis",
                    "Store performance comparison",
                    "Trend analysis (Revenue, Orders, Growth)",
                    "Business-focused storytelling",
                  ].map((f, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Power BI", "DAX", "Power Query", "Data Modeling", "Vercel", "AI Tools"].map((tool) => (
                  <Badge key={tool} variant="outline" className="text-xs border-primary/30 text-primary">{tool}</Badge>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Learning & Certifications */}
        <AnimatedSection delay={400}>
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-center text-gradient">Learning & Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Rocket className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">AI, Data Analytics & Power BI</h4>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {[
                    "Completed Power BI & Generative AI MasterClass",
                    "Worked on real-world datasets for business analytics",
                    "Applied AI tools in analytics workflows",
                    "Built multiple dashboard-based and AI-integrated projects",
                  ].map((a, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Cloud className="h-5 w-5 text-accent" />
                  </div>
                  <h4 className="font-semibold">AWS DevSecOps (NIELIT)</h4>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {[
                    "Currently learning DevSecOps practices on AWS",
                    "Understanding CI/CD, cloud security, and automation",
                    "Integrating cloud concepts with analytics workflows",
                  ].map((a, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* What Makes Me Different */}
            <div className="glass rounded-2xl p-6 md:p-8 bg-gradient-to-br from-primary/10 to-accent/10 text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="text-lg font-bold mb-4">🎯 What Makes Me Different</h4>
              <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
                {[
                  "I don't just build dashboards — I build intelligent analytics systems",
                  "I combine Data Analytics + AI + Deployment",
                  "Focused on real-world problem solving, not just tools",
                  "Capable of building end-to-end data solutions",
                ].map((d, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm text-foreground/90 font-medium">
                    <Zap className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
