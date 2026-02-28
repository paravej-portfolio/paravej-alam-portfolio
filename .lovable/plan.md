

## Fix Hero Section Overlay & Text Readability on Mobile

### Changes to `src/components/HeroSection.tsx`

**1. Reduce gradient blob sizes on mobile**
- Line 43: `w-[600px] h-[600px]` → `w-[300px] h-[300px] md:w-[600px] md:h-[600px]` with reduced blur
- Line 44: `w-[500px] h-[500px]` → `w-[250px] h-[250px] md:w-[500px] md:h-[500px]` with reduced blur
- Line 45: `w-[300px] h-[300px]` → `w-[150px] h-[150px] md:w-[300px] md:h-[300px]` with reduced blur
- All blobs get `z-0` explicitly

**2. Reduce spotlight glow behind heading on mobile**
- Line 56: Change `-inset-x-10` to `-inset-x-4` and `-inset-y-5` to `-inset-y-2`, reduce mobile blur from `60px` to `30px`

**3. Boost content z-index**
- Line 47: Change `z-10` to `z-20` on the content container

**4. Reduce heading size on mobile & add max-width**
- Line 57: Change `text-3xl` to `text-2xl` for smallest screens
- Add `max-w-[90vw] md:max-w-none` to the heading

**5. Add max-width to subheading and typing text**
- Line 64: Add `max-w-[90vw]` to subheading
- Line 70: Add `max-w-[90vw]` to typing paragraph

