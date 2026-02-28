

## Plan: Replace Projects Section with Advanced, Impact-Driven Version

### Changes

#### 1. Rewrite `src/components/ProjectsSection.tsx`
Replace the current 3-project grid with a new layout containing 3 distinct sections:

**Project 1 — College Placement Predictor & Resume Insights Dashboard**
- Full-width card with all provided content (Problem, Approach with 8 bullet points, AI/ML Angle with 3 points, Impact with 4 points)
- Tools: Python, Pandas, NumPy, Scikit-learn, SQL, Power BI, Excel, Streamlit, SHAP, Git
- Live links: Live App + GitHub (using the provided lnkd.in URLs)
- Icon: Brain, gradient accent

**Project 2 — Sales Performance Analytics Dashboard**
- Full-width card with Problem, Approach (6 points), AI Angle (2 points), Impact (4 points), Key Features (5 points)
- Tools: Power BI, DAX, Power Query, Data Modeling, Vercel, AI Tools
- Placeholder link note
- Icon: BarChart3, gradient accent

**Project 3 — Learning & Certifications**
- Two sub-cards side by side:
  - AI/Data Analytics/Power BI Learning (4 bullets)
  - AWS DevSecOps NIELIT (3 bullets)
- A "What Makes Me Different" callout block with 4 differentiator points

**Layout**: Switch from 3-column grid to stacked full-width cards (max-w-4xl) for the two main projects, then a 2-column grid for the learning section. Each card keeps glassmorphism styling, hover effects, and scroll animations. Add external link buttons using ExternalLink icon from lucide-react.

#### 2. Update `src/components/ExtrasSection.tsx`
Keep as-is — the Learning & Certifications content goes into the Projects section per the user's request, while Extras retains its "What's Next" roadmap focus.

### Files Modified
- `src/components/ProjectsSection.tsx` — complete rewrite

