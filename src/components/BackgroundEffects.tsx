const BackgroundEffects = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Grid pattern */}
    <div className="absolute inset-0 grid-pattern opacity-50" />

    {/* Floating gradient orbs */}
    <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.07] blur-[120px] animate-float-slow" />
    <div className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent/[0.06] blur-[100px] animate-float-slower" />
    <div className="absolute bottom-[10%] left-[30%] w-[350px] h-[350px] rounded-full bg-cyan/[0.05] blur-[100px] animate-float-slow" style={{ animationDelay: "2s" }} />
    <div className="absolute top-[30%] right-[40%] w-[250px] h-[250px] rounded-full bg-primary/[0.04] blur-[80px] animate-float-slower" style={{ animationDelay: "4s" }} />
  </div>
);

export default BackgroundEffects;
