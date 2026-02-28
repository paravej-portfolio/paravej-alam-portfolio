

# Portfolio Website with Enhanced Storytelling & Impact

## What We're Building
A complete single-page portfolio for Paravej Alam with all the requested enhancements baked in: proof lines, measurable impact, visual proof, and a "Why Me" section.

## Implementation Steps

### 1. Set up theme and design system
- Update `src/index.css` with dark/light mode colors: deep navy background, cyan/blue accents, glassmorphism utilities
- Add scroll animation keyframes and gradient utilities to `tailwind.config.ts`

### 2. Create shared components
- `src/components/ThemeToggle.tsx` — dark/light mode switcher
- `src/components/SectionHeading.tsx` — reusable section title with subtitle
- `src/components/AnimatedSection.tsx` — scroll-triggered fade-in wrapper using Intersection Observer

### 3. Build section components
- `src/components/Navbar.tsx` — sticky nav with smooth scroll links + theme toggle
- `src/components/HeroSection.tsx` — headline, tagline, proof line, typing effect on subheading, two CTA buttons
- `src/components/AboutSection.tsx` — journey timeline (Math → MCA → AI)
- `src/components/PhilosophySection.tsx` — three glassmorphism cards (Skill/Thinking/Impact) + "Applied this approach..." closing line
- `src/components/AIUseCasesSection.tsx` — grid of AI use case cards + real example callout + vision statement
- `src/components/ProjectsSection.tsx` — three project cards with Problem/Approach/AI Angle/Impact/Tools, measurable impact highlights, placeholder dashboard visuals
- `src/components/SkillsSection.tsx` — categorized skill badges
- `src/components/WhyMeSection.tsx` — accent-styled micro section: "I combine analytics + AI..."
- `src/components/ExtrasSection.tsx` — learning path and future goals
- `src/components/ContactSection.tsx` — email, LinkedIn, GitHub links with icons

### 4. Assemble in Index page
- `src/pages/Index.tsx` — compose all sections in order with the navbar

### 5. Key enhancements included
- **Hero**: proof line + tagline both present from the start
- **Philosophy**: closing line about real-world application
- **Projects**: each card includes measurable impact callouts (e.g., "Analyzed 10,000+ records", "Reduced analysis time significantly") styled as highlighted badges
- **Projects**: placeholder dashboard screenshot area in each card using gradient placeholders with chart icons
- **AI Use Cases**: dedicated real-world example card with the provided quote
- **Why Me**: standalone accent section between Skills and Contact
- **Animations**: scroll-triggered fade-ins on all sections, hover scale on cards

## Technical Details
- Theme toggle via class-based dark mode (already configured in tailwind)
- localStorage persistence for theme preference
- Intersection Observer for scroll animations (no extra dependencies)
- All content hardcoded (no CMS needed)
- Responsive: mobile-first with grid breakpoints at sm/md/lg
- ~13 new files total

