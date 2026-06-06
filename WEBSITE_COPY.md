# ANSHUL ESKEY — Portfolio Website Master Copy Blueprint
## Version 2.0 — Product Strategy & Systems Portfolio

---

## 🎨 Master Design Tokens & Style References
To maintain consistent tone and styling integrations, all copy updates should align with the defined typography system and color palette:

### 1. Typography & Styling Reference Links
- **Google Fonts Integration:** 
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap" rel="stylesheet">
  ```
- **Type Spec:**
  - **Display / Headings:** `Outfit` (sans-serif)
  - **Body Text:** `Inter` (sans-serif)
  - **Terminal / System Readouts:** `JetBrains Mono` (monospace)

### 2. Core Functional Colors
- **Accent Primary (Terminal Green):** `var(--terminal-green)` (Typically `#00ff88` - representing active system state)
- **Accent Secondary (Terminal Blue):** `var(--terminal-blue)` (Typically `#5ac8fa` - representing market tracking & intelligence)
- **Accent Tertiary (Terminal Orange):** `var(--terminal-orange)` (Typically `#ff9f0a` - representing behavioral & friction alerts)
- **High-Contrast White:** `var(--text-primary)` / `var(--accent)` (`#ffffff` / `#f7f7f7`)
- **Muted Slate:** `var(--text-muted)` (`#8e8e93`)

---

## 🏠 Page 1: Home (`Home.jsx`)

### Section 1.1: Hero Area
- **System Tag:** `Currently Exploring` (Color: `var(--terminal-green)`)
- **Display Heading (Outfit):** 
  > Building products,
  > systems &
  > **strategic thinking.** (Muted Color)
- **Body Thesis (Inter):**
  > I’m an IIT Roorkee undergraduate exploring product strategy, growth systems, behavioral design, and business intelligence through research-driven case studies and long-term projects.
- **CTAs:**
  - Button 1: `View Projects` (ArrowDown icon)
  - Button 2: `Research Archive`

### Section 1.2: Selected Work (Preview Cards)
- **Section Title:** `Selected Work`
- **Utility Link:** `Browse all projects`
- **Cards Content Structure:**
  - **Card 1 (Perplexity GTM Strategy):**
    - Subtags: `["Strategy", "AI Search", "Growth"]`
    - Title: `Perplexity GTM Strategy`
    - Copy: `Explored how AI-powered search products can expand enterprise adoption through trust, citation systems, and institutional workflows.`
    - Action: `View Case Study`
  - **Card 2 (Quick Commerce Competitive Intelligence):**
    - Subtags: `["Market Research", "Quick Commerce", "Operations"]`
    - Title: `Quick Commerce Competitive Intelligence`
    - Copy: `Analyzed inventory systems, pricing dynamics, and operational behavior across modern quick-commerce ecosystems.`
    - Action: `View Case Study`
  - **Card 3 (Telemedicine Retention Systems):**
    - Subtags: `["Behavioral Design", "Healthtech", "Retention"]`
    - Title: `Telemedicine Retention Systems`
    - Copy: `Studied how onboarding friction and cognitive load influence patient drop-offs in telemedicine platforms.`
    - Action: `View Case Study`
  - **Card 4 (Structor AI Platform):**
    - Subtags: `["Product Design", "Systems", "AI Tools"]`
    - Title: `Structor AI Platform`
    - Copy: `Conceptual exploration of visual product workflows that connect strategic planning with AI-assisted execution systems.`
    - Action: `View Case Study`

### Section 1.3: Research Archive Preview
- **Section Title:** `Research Archive`
- **Section Subtitle:** `A structured collection of research notes, market explorations, product breakdowns, and strategic observations.`
- **Preview Cards:**
  - **Card 1: Market Intelligence**
    - Description: `Competitive landscapes, market structures, pricing systems, and business ecosystem analysis.`
  - **Card 2: Product Research**
    - Description: `User behavior, onboarding systems, UX friction analysis, and product strategy explorations.`
  - **Card 3: Behavioral Systems**
    - Description: `Research on habit loops, attention systems, retention mechanics, and cognitive load patterns.`
  - **Card 4: Growth Strategy**
    - Description: `Acquisition systems, GTM thinking, positioning frameworks, and growth experimentation.`

### Section 1.4: Thinking Archive
- **Section Title:** `Essays & Notes`
- **Section Subtitle:** `Thoughts on products, growth systems, behavioral design, and strategy.`
- **Featured Essays:**
  - **Essay 1:**
    - Title: `Why Most Retention Systems Fail`
    - Sub-metadata: `May 2026 • Product Thinking • 6 min read`
  - **Essay 2:**
    - Title: `The Mechanics of Competitive Intelligence`
    - Sub-metadata: `Apr 2026 • Growth Systems • 8 min read`
  - **Essay 3:**
    - Title: `Dynamic Frameworks vs Static Strategy`
    - Sub-metadata: `Mar 2026 • Business Strategy • 5 min read`
- **CTA:** `Explore Essays`

### Section 1.5: Current Focus
- **Section Title:** `Current Focus`
- **Section Subtitle:** `Areas I’m currently exploring and developing through research, projects, and long-term learning.`
- **Grid Items:**
  1. **Product Strategy:**
     - Copy: `Exploring onboarding systems, retention mechanics, and user workflows.`
  2. **Growth Systems:**
     - Copy: `Learning acquisition models, positioning strategy, and GTM frameworks.`
  3. **Behavioral Design:**
     - Copy: `Understanding user psychology, cognitive friction, and decision systems.`
  4. **Marketing:**
     - Copy: `Studying market analysis, positioning, and business communication systems.`
  5. **MBA Preparation:**
     - Copy: `Building analytical and business foundations alongside technical education.`

### Section 1.6: About Preview & Timeline
- **Section Title:** `About`
- **Narrative Body:** 
  > I started exploring product strategy and growth systems through independent case studies, startup exposure, and research-driven projects during my time at IIT Roorkee.
  > 
  > Over time, I became increasingly interested in how products shape user behavior, how businesses scale, and how strategic systems influence decision-making.
  > 
  > My work focuses on combining structured thinking, behavioral analysis, and product exploration through long-form research and experimentation.
- **Timeline Steps:**
  - **2024:** `IIT Roorkee`
  - **2025:** `Product Exploration`
  - **2026:** `Research & Strategy`
  - **Future:** `Management & Systems`
- **CTA:** `Learn More`

---

## 💡 Page 2: About / Strategic Profile (`About.jsx`)

### Section 2.1: Header
- **Main Heading:** `About Me`
- **Subtitle:** `Exploring products, systems, user behavior, and strategic thinking through research-driven learning.`

### Section 2.2: Deep Core Philosophy
- **Title:** `Personal Philosophy`
- **Narrative Copy:**
  > I’m interested in understanding how systems influence people — from product onboarding and business incentives to behavioral loops and strategic decision-making.
  > 
  > What started as curiosity around startups and product management gradually evolved into a deeper interest in growth systems, user psychology, market structures, and long-term strategic thinking.
  > 
  > I enjoy breaking down complex problems into structured systems and exploring how thoughtful product decisions shape real-world outcomes.

### Section 2.3: Areas of Interest
- **Categories:**
  1. **Product Strategy:** `Retention systems, onboarding flows, user journeys, and platform thinking.`
  2. **Growth & GTM:** `Acquisition loops, positioning, competitive analysis, and growth frameworks.`
  3. **Behavioral Design:** `Cognitive load, friction systems, habit loops, and attention patterns.`
  4. **Business Intelligence:** `Market research, industry analysis, and strategic systems thinking.`

### Section 2.4: Timeline
- **Timeline Records:**
  - **IIT Roorkee:** `Scientific and analytical foundations through engineering education.`
  - **Product Exploration:** `Independent projects and startup exposure.`
  - **Research & Strategy:** `Long-form case studies and systems-based analysis.`
  - **Future Direction:** `Management, strategy, and product-focused leadership.`

---

## 🔍 Page 3: Projects (`Projects.jsx`)

### Section 3.1: Header
- **Main Heading:** `Selected Projects`
- **Subtitle:** `Research-driven explorations into products, systems, growth strategy, and user behavior.`

### Section 3.2: Filter Categories
- Categories List: `["All", "Product", "Growth", "Research", "Behavioral", "Strategy"]`

---

## 📈 Page 4: Deep Case Breakdown Core (`ProjectDetail.jsx`)

### Case Study A: Perplexity GTM Strategy
- **Overview Metadata:**
  - Title: `Perplexity GTM Strategy`
  - Thesis: `Unlocking institutional search share through dynamic context synthesis and enterprise distribution APIs.`
  - Timeline: `Q1 2026` | Category: `Strategy` | Role: `Lead Strategist`
- **01 // PROBLEM:**
  > Explored how AI-powered search products can expand enterprise adoption through trust, citation systems, and institutional workflows. Traditional research workflows are bottlenecks, and high-skilled knowledge workers spend significant time doing raw validation.
- **02 // CONTEXT:**
  - Industry: `Information Services & Enterprise AI`
  - Target Market: `Institutional Finance & Consulting Services`
  - User Segment: `High-Skilled Knowledge Workers`
- **03 // OBSERVATIONS:**
  - Observed Action: `Analysts routinely verify AI-generated context across multiple databases to check citation paths.`
  - Core Insight: `High-tier consulting firms value data citation paths and transparency over generalized generative answers.`
  - Friction Vector: `Existing standard models lack rigorous, auditable trails for citation tracking.`
- **04 // ANALYSIS:**
  - Analysis Breakdown: `We evaluated search velocity thresholds across different analyst personas. The results demonstrate that traditional databases have high friction, whereas AI solutions have low validation trails.`
  - Data Mapping Grid:
    1. **Traditional Database:** Speed: `Slow` | Trust Ratio: `High` | Friction Multiplier: `High`
    2. **Standard LLM Chat:** Speed: `Rapid` | Trust Ratio: `Low` | Friction Multiplier: `Minimal`
    3. **Perplexity Enterprise:** Speed: `Instant` | Trust Ratio: `High` | Friction Multiplier: `Low`
- **05 // STRATEGIC INSIGHTS:**
  - Solution: `Deploying context synthesis frameworks with citation trails directly integrated into analyst work environments.`
- **06 // PROPOSED SOLUTIONS:**
  - Recommendations: `Build an Enterprise Distribution API that outputs markdown tables with deep-linked source credentials, bypassing long-form text summaries.`
- **07 // METRICS:**
  - North Star: `Analyst Decision Velocity (Minutes to verified deliverable)`
- **08 // LEARNINGS:**
  > Enterprise AI adoption is governed by verification mechanics, not raw text speed. By optimizing for citation pathways, we unlock immense productivity values.

---

## 🗄️ Page 5: Research Database Index (`ResearchArchive.jsx`)

### Section 5.1: Header
- **Main Title:** `Research Archive`
- **Subtitle:** `Research notes, product explorations, market analysis, and systems thinking.`

### Section 5.2: Filters & Search Placeholders
- Categories List: `["All", "Product", "Growth", "Behavioral", "Market", "Finance"]`
- Search bar placeholder: `Search notes and research...`

---

## ✍️ Page 6: Essays & Notes (`Essays.jsx`)

### Section 6.1: Header
- **Main Heading:** `Essays & Notes`
- **Subtitle:** `Thoughts on products, growth systems, behavioral design, and strategy.`

### Section 6.2: Featured Article
- **Featured Article:**
  - Title: `Why Most Retention Systems Fail`
  - Summary: `Most onboarding systems fail because they focus only on UI friction instead of understanding behavioral pacing, cognitive load, and perceived value timing.`

---

## 💼 Page 7: Resume (`Resume.jsx`)

### Section 7.1: Header
- **Main Heading:** `Resume`
- **Action Trigger:** `Download Resume` (Downloads file `[ANSHUL_ESKEY_RESUME.pdf]`)

### Section 7.2: Profile Header
- **Name:** `Anshul Eskey`
- **Subtitle:** `IIT Roorkee Undergraduate | Product Strategy & Growth Enthusiast`

---

## ✉️ Page 8: Contact (`Contact.jsx`)

### Section 8.1: Header
- **Main Heading:** `Contact`
- **Subtitle:** `Open to conversations around product strategy, growth systems, research, and opportunities.`

### Section 8.2: Contact Methods
- **Email:** `anshuleskey999@gmail.com`
- **LinkedIn:** `linkedin.com/in/anshul-eskey-ba0821292`

### Section 8.3: Form Fields
- Fields: `Name`, `Email`, `Organization`, `Message`
- Action: `Send Message`
