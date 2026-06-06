# Context

This file contains high-value contextual information for AI agents interacting with this repository.

## Project Identity
- **Website Purpose**: Personal portfolio and digital garden for an IIT Roorkee Chemical Engineering undergraduate focusing on product, growth, business, and competitive strategy.
- **Target Positioning**: Grounded, believable, product/business-oriented, and intellectually curious.
- **Intended Vibe**: Clean editorial appearance, premium, authentic, and modern. 
- **Core Philosophy**: Authentic exploration of modern product/market systems. Strictly NO AI-generated jargon, speculative terminology, fake research reports, or consulting buzzwords.

## Tech Stack
- **Framework**: React 19 + Vite 8.
- **Routing**: Custom Context-based routing (`NavigationContext.js`) using hash navigation. No `react-router-dom`.
- **Content System**: Centralized Javascript registry (`src/contentRegistry.js`). Acts as the single source of truth for projects, notes, and research.
- **Styling System**: Vanilla CSS (`index.css`) utilizing CSS variables for consistent design tokens (colors, spacing, typography).
- **Animation System**: Custom JS utilities (`src/animations.js`), `gsap` for complex animations, and `lucide-react` for iconography.

## Content Architecture
- **Pages**: Managed in `src/pages/` (`Home.jsx`, `About.jsx`, `Projects.jsx`, `ProjectDetail.jsx`, `ResearchArchive.jsx`, `Notes.jsx`).
- **Content Structure**: Content is defined as JS objects in `contentRegistry.js` containing rich HTML strings or React elements. Components derive their UI state dynamically from this registry.
- **Content Categories**:
  - **Research**: 7 core authentic interests: Quick Commerce Systems, AI Product Positioning, Product Growth & Retention, Marketing Strategy, Consumer Behavior, Product Strategy, Competitive Strategy.
  - **Projects**: Real case studies, builds, and strategic analyses.
  - **Notes**: Personal reflections and shorter-form content.

## Design Language
- **Visual Philosophy**: Premium, dynamic, modern web design. Emphasizes clean editorial layouts, soft neutral tones, architectural symmetry, and typography.
- **Typography Behavior**: Modern sans-serif typography, high contrast headers, structured hierarchy.
- **Layout Behavior**: Intentional and balanced. Image integration must maintain appropriate aspect ratios (e.g., Hero portrait at 4/5, About portrait at 480px height) without feeling disconnected or undersized.
- **Interaction Patterns**: Micro-animations (e.g., smooth scaling, zoom-in/pop-out hover effects) to make UI feel alive. **Crucial Rule**: Never apply grayscale/monochrome filters on hover for portraits; preserve original image colors at all times.
