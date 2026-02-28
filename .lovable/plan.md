

## Premium UI Upgrade Plan

This is a large visual overhaul touching the global styles, layout wrapper, hero, and all section components to achieve a FAANG-level portfolio aesthetic.

### Files to Modify/Create

#### 1. `src/index.css` — Complete theme overhaul
- Update dark mode colors: background to deep navy (#0a0f1f → HSL ~222 60% 5%), card to slightly lighter navy
- Update primary to Electric Blue (217 91% 60%), accent to Purple (258 90% 66%), add cyan accent
- Add new utility classes:
  - `.glass` upgraded: `bg-white/[0.03]`, `backdrop-blur-xl`, subtle gradient border
  - `.glass-strong` upgraded similarly
  - `.glow-primary` / `.glow-accent` with stronger box-shadows
  - `.section-alt` for alternating section backgrounds
  - `.gradient-border` for cards with gradient borders
  - `.noise-overlay` using CSS pseudo-element with SVG noise filter
- Add scroll progress bar styles (top fixed bar)
- Add gradient divider utility

#### 2. Create `src/components/BackgroundEffects.tsx`
- Animated floating gradient orbs (3-4 divs with absolute positioning, blur, and CSS animation)
- Grid/mesh pattern overlay using CSS background-image
- Noise texture overlay div
- All positioned fixed/absolute with pointer-events-none

#### 3. Create `src/components/ScrollProgress.tsx`
- Fixed top bar showing scroll progress
- Uses `useEffect` + scroll listener
- Gradient bar (primary → accent)

#### 4. Create `src/components/SectionDivider.tsx`
- Gradient horizontal line component
- Used between sections in Index.tsx

#### 5. `src/pages/Index.tsx` — Layout wrapper
- Add `BackgroundEffects` component
- Add `ScrollProgress` component
- Add `SectionDivider` between sections
- Alternate section backgrounds using `section-alt` class

#### 6. `src/components/HeroSection.tsx` — Premium hero
- Add spotlight glow div behind the name (absolute radial gradient)
- Add animated gradient on "Paravej Alam" text (background-size animation)
- Add subtle grid background (CSS grid pattern)
- Enhance button hover with glow pulse
- Larger, more dramatic gradient blobs

#### 7. `src/components/Navbar.tsx` — Glass navbar upgrade
- Gradient bottom border when scrolled
- Enhanced glass effect with the new utility classes

#### 8. All section components — Micro-interaction upgrades
- `AboutSection.tsx`: Add gradient border on timeline cards, enhanced hover
- `EducationSection.tsx`: Gradient border cards, glow on hover
- `PhilosophySection.tsx`: Enhanced card hover with glow
- `AIUseCasesSection.tsx`: Gradient borders, enhanced glass
- `ProjectsSection.tsx`: Gradient border on project cards, deeper shadows
- `SkillsSection.tsx`: Enhanced badge hover glow, gradient progress bars
- `CertificationsSection.tsx`: Gradient border cards
- `WhyMeSection.tsx`: Enhanced glow effect
- `ExtrasSection.tsx`: Gradient border cards
- `ContactSection.tsx`: Enhanced glass cards, gradient footer divider

#### 9. `src/components/SectionHeading.tsx`
- Add subtle glow behind heading text
- Enhanced gradient text animation

#### 10. `tailwind.config.ts`
- Add `float-slow`, `float-slower` animation variants for background orbs
- Add `glow-pulse` keyframe for button hover
- Add `gradient-shift` keyframe for animated gradient text

### Design System Summary
- **Background**: Deep navy (#060b18) with layered radial glows and noise
- **Cards**: `bg-white/[0.03]` with `backdrop-blur-xl` and gradient borders
- **Colors**: Electric Blue primary, Purple accent, Cyan highlights
- **Interactions**: Scale(1.03) + glow increase on hover, 0.3s transitions
- **Sections**: Alternating dark/slightly-lighter backgrounds with gradient dividers
- **Hero**: Spotlight glow, animated gradient name, grid pattern

