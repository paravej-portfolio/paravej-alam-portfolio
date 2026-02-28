import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  gradient?: boolean;
}

const SectionHeading = ({ title, subtitle, className, gradient = true }: SectionHeadingProps) => (
  <div className={cn("text-center mb-12 md:mb-16", className)}>
    <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold mb-4", gradient && "text-gradient")}>
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

export default SectionHeading;
