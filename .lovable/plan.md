

## Portfolio Enhancement Plan

### 1. Update Contact Links
- **ContactSection.tsx**: Change LinkedIn href to `https://www.linkedin.com/in/paravejaalam`, GitHub to placeholder text "https://github.com/paravejaalam"
- Add a downloadable resume button (link to `#contact` with a note to upload PDF later)

### 2. Update "Why Me" Text
- **WhyMeSection.tsx**: Replace the description with: "I combine analytics + AI to deliver faster insights, reduce manual effort, and solve real business problems using data-driven approaches."

### 3. Enhance Project Impact Numbers
- **ProjectsSection.tsx**: Make impact statements more specific and numbers-driven:
  - Sales Dashboard: "Identified top 3 revenue-driving factors", "Analyzed 10,000+ sales records", "Improved reporting efficiency by ~35%"
  - AI-Driven Analysis: "Reduced analysis time by 30-40%", "Processed 5,000+ data points automatically", "Cut manual effort by ~50%"
  - SQL + Python: "Queried 50,000+ rows efficiently", "Identified 3 key business trends", "Improved decision support turnaround"

### 4. Hero Resume Button Fix
- **HeroSection.tsx**: Keep "Download Resume" button but have it link to a placeholder PDF path (`/resume.pdf`) so it's functional once a PDF is uploaded to `public/`

### 5. Files Changed
- `src/components/ContactSection.tsx` — real LinkedIn URL, GitHub placeholder, resume download button
- `src/components/WhyMeSection.tsx` — updated description text
- `src/components/ProjectsSection.tsx` — stronger measurable impact statements
- `src/components/HeroSection.tsx` — resume button links to `/resume.pdf`

All other sections (Hero headline, proof line, philosophy closing line, AI use cases real example) already have the requested content in place.

