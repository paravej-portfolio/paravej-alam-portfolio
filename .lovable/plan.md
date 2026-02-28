

## Plan: AI/Data-Inspired Background Enhancement

### 1. Rewrite `src/components/BackgroundEffects.tsx`
Add three new visual layers on top of existing gradient orbs:

**Neural Network Pattern (SVG canvas)**
- An SVG overlay with ~20-30 small dots connected by thin lines in a network/constellation pattern
- Opacity 5-8%, color using primary/accent
- Slow CSS drift animation (translate + subtle scale over 20-30s)

**Floating Tech Keywords**
- 8-10 absolutely positioned `<span>` elements with words: AI, ML, Data, Analytics, Insights, Python, SQL, Neural, Cloud, Deep Learning
- Each with: `text-primary/[0.06]`, `blur-[1px]`, `text-sm`/`text-xs`, unique float animation delays
- Scattered across the viewport, slow floating animation (reuse `animate-float-slow`/`animate-float-slower`)

**Blurred Tech Hint Icons**
- 3-4 very faint abstract shapes (hexagons, brackets `</>`, circuit-like paths) as small inline SVGs
- Opacity ~3-5%, blur applied, slow animation
- Positioned in corners/edges to avoid center clutter

Keep existing gradient orbs and grid pattern unchanged.

### 2. Add CSS in `src/index.css`
- Add `animate-drift` keyframe: slow translateX/Y over 25s for the neural network SVG
- Add `.floating-keyword` utility class for the tech text styling

### 3. Add keyframes in `tailwind.config.ts`
- `drift` keyframe for the neural network slow movement

### Files Modified
- `src/components/BackgroundEffects.tsx` — add neural network SVG, floating keywords, blurred hints
- `src/index.css` — add drift animation + floating keyword styles
- `tailwind.config.ts` — add drift keyframe/animation

