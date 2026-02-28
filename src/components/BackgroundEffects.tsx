const floatingKeywords = [
  { text: "AI", top: "8%", left: "5%", size: "text-lg", delay: "0s" },
  { text: "ML", top: "22%", left: "85%", size: "text-sm", delay: "3s" },
  { text: "Data", top: "45%", left: "8%", size: "text-base", delay: "1.5s" },
  { text: "Analytics", top: "65%", left: "78%", size: "text-xs", delay: "5s" },
  { text: "Insights", top: "80%", left: "20%", size: "text-sm", delay: "2s" },
  { text: "Python", top: "15%", left: "55%", size: "text-xs", delay: "4s" },
  { text: "SQL", top: "70%", left: "50%", size: "text-sm", delay: "6s" },
  { text: "Neural", top: "35%", left: "92%", size: "text-xs", delay: "1s" },
  { text: "Cloud", top: "90%", left: "70%", size: "text-xs", delay: "3.5s" },
  { text: "Deep Learning", top: "55%", left: "30%", size: "text-xs", delay: "7s" },
];

const BackgroundEffects = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Grid pattern */}
    <div className="absolute inset-0 grid-pattern opacity-50" />

    {/* Neural network SVG pattern */}
    <svg className="absolute inset-0 w-full h-full animate-drift opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
      {/* Dots */}
      {[
        [5, 12], [15, 35], [25, 18], [38, 55], [50, 25], [62, 42], [75, 15],
        [85, 60], [92, 30], [10, 70], [30, 80], [55, 72], [70, 85], [88, 48],
        [20, 50], [45, 40], [65, 65], [80, 22], [42, 88], [95, 75],
        [8, 90], [35, 10], [58, 50], [78, 70], [12, 45],
      ].map(([cx, cy], i) => (
        <circle key={`d${i}`} cx={`${cx}%`} cy={`${cy}%`} r="2" fill="hsl(var(--primary))" />
      ))}
      {/* Connecting lines */}
      {[
        [[5, 12], [15, 35]], [[15, 35], [25, 18]], [[25, 18], [50, 25]], [[50, 25], [75, 15]],
        [[38, 55], [62, 42]], [[62, 42], [85, 60]], [[10, 70], [30, 80]], [[30, 80], [55, 72]],
        [[55, 72], [70, 85]], [[75, 15], [92, 30]], [[20, 50], [38, 55]], [[45, 40], [62, 42]],
        [[65, 65], [85, 60]], [[80, 22], [92, 30]], [[42, 88], [55, 72]], [[95, 75], [85, 60]],
        [[8, 90], [10, 70]], [[35, 10], [25, 18]], [[58, 50], [65, 65]], [[78, 70], [70, 85]],
        [[12, 45], [20, 50]], [[15, 35], [20, 50]], [[50, 25], [45, 40]], [[88, 48], [80, 22]],
      ].map(([[x1, y1], [x2, y2]], i) => (
        <line
          key={`l${i}`}
          x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`}
          stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5"
        />
      ))}
    </svg>

    {/* Floating tech keywords */}
    {floatingKeywords.map(({ text, top, left, size, delay }) => (
      <span
        key={text}
        className={`absolute ${size} font-mono text-primary/[0.06] blur-[0.5px] animate-float-slower select-none`}
        style={{ top, left, animationDelay: delay }}
      >
        {text}
      </span>
    ))}

    {/* Blurred tech hint icons */}
    <svg className="absolute top-[5%] right-[8%] w-16 h-16 opacity-[0.04] blur-[1px] animate-float-slow" style={{ animationDelay: "2s" }} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 4L58 18V46L32 60L6 46V18L32 4Z" stroke="hsl(var(--accent))" strokeWidth="1.5" />
      <path d="M32 4V60M6 18L58 46M58 18L6 46" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.5" />
    </svg>
    <svg className="absolute bottom-[15%] left-[5%] w-12 h-12 opacity-[0.03] blur-[1px] animate-float-slower" style={{ animationDelay: "5s" }} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="4" y="34" fontSize="28" fontFamily="monospace" fill="hsl(var(--primary))">{"</>"}</text>
    </svg>
    <svg className="absolute top-[60%] right-[3%] w-14 h-14 opacity-[0.035] blur-[1px] animate-float-slow" style={{ animationDelay: "8s" }} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="20" stroke="hsl(var(--cyan))" strokeWidth="1" />
      <circle cx="28" cy="28" r="10" stroke="hsl(var(--cyan))" strokeWidth="0.8" />
      <line x1="28" y1="8" x2="28" y2="48" stroke="hsl(var(--cyan))" strokeWidth="0.5" />
      <line x1="8" y1="28" x2="48" y2="28" stroke="hsl(var(--cyan))" strokeWidth="0.5" />
    </svg>

    {/* Floating gradient orbs */}
    <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.07] blur-[120px] animate-float-slow" />
    <div className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent/[0.06] blur-[100px] animate-float-slower" />
    <div className="absolute bottom-[10%] left-[30%] w-[350px] h-[350px] rounded-full bg-cyan/[0.05] blur-[100px] animate-float-slow" style={{ animationDelay: "2s" }} />
    <div className="absolute top-[30%] right-[40%] w-[250px] h-[250px] rounded-full bg-primary/[0.04] blur-[80px] animate-float-slower" style={{ animationDelay: "4s" }} />
  </div>
);

export default BackgroundEffects;
