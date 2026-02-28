import { Mail, Linkedin, Github, ExternalLink, Download } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-28">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <SectionHeading title="Let's Connect" subtitle="I'm actively seeking opportunities in Data Analytics & AI" />
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <div className="max-w-md mx-auto text-center">
          <div className="space-y-4 mb-8">
            <a
              href="mailto:parvejalamsiddiqui1436@gmail.com"
              className="flex items-center gap-3 glass rounded-xl p-4 gradient-border hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm text-foreground">parvejalamsiddiqui1436@gmail.com</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto" />
            </a>

            <a
              href="https://www.linkedin.com/in/paravejaalam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 glass rounded-xl p-4 gradient-border hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <Linkedin className="h-5 w-5 text-primary" />
              <span className="text-sm text-foreground">LinkedIn Profile</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto" />
            </a>

            <a
              href="https://github.com/Paravejalam/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 glass rounded-xl p-4 gradient-border hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <Github className="h-5 w-5 text-primary" />
              <span className="text-sm text-foreground">GitHub Projects</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-3 glass rounded-xl p-4 gradient-border hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <Download className="h-5 w-5 text-primary" />
              <span className="text-sm text-foreground">Download Resume (PDF)</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto" />
            </a>
          </div>

          <Button size="lg" className="bg-gradient-accent text-primary-foreground animate-pulse-glow" asChild>
            <a href="mailto:parvejalamsiddiqui1436@gmail.com">
              <Mail className="h-5 w-5" />
              Get in Touch
            </a>
          </Button>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <div className="mt-20 pt-8 text-center text-sm text-muted-foreground">
        <div className="gradient-divider mb-8" />
        <p>© 2026 Paravej Alam. Built with passion for data & AI.</p>
      </div>
    </div>
  </section>
);

export default ContactSection;
