export const frontmatter = {
  id: "telemedicine-retention",
  title: "Telemedicine Retention Systems",
  description: "Studying how onboarding friction and behavioral systems influence patient retention in telemedicine platforms.",
  date: "2026-01",
  category: "Behavioral Design",
  featured: true,
  tags: ["Healthtech", "Retention", "Behavioral Design", "Product"],
  thumbnail: "/telemedicine.webp",
  image: "/telemedicine.webp",
  pdfUrl: "/projects/telemedicine.pdf",
  previewEnabled: true,
  status: "Case Study",
  timeline: "Q3 2025",
  role: "Product Growth"
};

export const content = {
  problem: "Medical consult drop-offs often occur during long, detailed clinical intake processes. However, clinical intake completeness is vital for diagnostic safety. How do we compress intake friction while preserving critical clinical data vectors?",
  context: {
    industry: "Digital Health & Telemedicine Platforms",
    market: "Direct-to-Consumer Clinical Consulting Markets",
    segment: "Chronic Care & General Consult Patients"
  },
  research: {
    observations: "Many onboarding systems overload users before establishing trust and perceived value. Friction drops occur exponentially past question step 5 in intake wizards.",
    insights: "Reducing cognitive load and improving reassurance timing may significantly improve first-session completion rates.",
    painPoints: "Existing systems present intake forms as massive, scary checklists resembling administrative paperwork."
  },
  analysis: {
    frameworks: "Cognitive Load and Wizards Progress Friction Ratios",
    breakdowns: "We audited onboarding dropoff sessions to trace the exact coordinates where attention decay triggers.",
    mapping: [
      { name: "Single Page Form", speed: "25% completion", trust: "9 min duration", friction: "Extreme" },
      { name: "Progressive Wizard", speed: "58% completion", trust: "6 min duration", friction: "Medium" },
      { name: "System-Curated Intake", speed: "84% completion", trust: "3.5 min duration", friction: "Minimal" }
    ]
  },
  strategy: {
    solution: "This case study explored how cognitive friction, onboarding complexity, and trust timing influence user drop-offs in telemedicine platforms.",
    recommendations: "Build progressive progressive disclosure modals that pre-populate data using public healthcare record integrations.",
    experiments: "A/B test medical jargon descriptors against plain spoken language prompts."
  },
  metrics: {
    northStar: "Intake Form Completion Rate",
    guardrails: "Diagnostic accuracy & intake safety indicators",
    indicators: "Consultation Book Rate"
  },
  reflection: "Friction is not always a visual layout problem; it is a psychological pacing problem. Sequence queries correctly to convert users.",
  nextId: "structor-ai-platform",
  buildLogs: [
    { date: "March 2026", title: "Wizard progressive layout blueprints", desc: "Wizard progressive layout blueprints completed. Grouped clinical inquiries into progressive disclosure questionnaire wizard stacks." },
    { date: "April 2026", title: "Perceived utility timing modeling", desc: "Mapped perceived diagnostic utility timing thresholds and cognitive loading constraints." },
    { date: "May 2026", title: "Attention dropoff rate audits", desc: "Audited attention dropoff rates across progressive stacks to maximize patient intake completion." }
  ],
  relatedEssays: ["why-most-retention-fails", "habit-vectors"],
  relatedResearch: ["cognitive-load-wizard"]
};
