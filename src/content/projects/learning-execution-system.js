export const frontmatter = {
  id: "learning-execution-system",
  title: "Learning Execution System",
  description: "Improving educational outcomes by resolving the last-mile learning execution problem through automated scheduling and zero-decision frameworks.",
  date: "2026-04",
  category: "Product Systems",
  featured: true,
  tags: ["Behavioral Design", "Habit Formation", "Decision Fatigue", "Learning Systems", "Product-Led Retention", "EdTech Strategy"],
  status: "Concept Exploration",
  thumbnail: "/learning-execution-system.webp",
  image: "/learning-execution-system.webp",
  pdfUrl: "/projects/learning-execution-system.pdf",
  previewEnabled: true,
  timeline: "Q2 2026",
  role: "Platform Engineer"
};

export const content = {
  thesis: "Automating learning schedules and task breakdowns removes planning decision overhead to establish consistent habit loops.",
  problem: "Students rarely fail because information is unavailable. They fail because execution is inconsistent. Despite unprecedented access to educational content, completion rates remain low and many learners abandon programs before achieving meaningful outcomes. How can a system remove planning friction and increase learning consistency?",
  context: {
    industry: "Education Technology",
    market: "Students pursuing long-term academic/professional goals",
    segment: "Chronic learners & students needing consistency infrastructure"
  },
  research: {
    observations: "Students spend substantial effort deciding what to study. Planning overhead creates significant decision fatigue.",
    insights: "Learning platforms optimize content delivery but not execution. Consistency fails not because students lack motivation, but because they face too many micro-decisions before beginning work.",
    painPoints: "The project identified three primary barriers: Ambiguity (goals exist without actionable next steps), Friction (starting work requires excessive activation energy), and Blindness (progress remains difficult to visualize)."
  },
  analysis: {
    frameworks: "Ambiguity mitigation, friction reduction, and streak progress reinforcement models.",
    breakdowns: "We evaluated task activation times and habit streak values across student cohorts to determine the impact of planning automation.",
    mapping: [
      { name: "Slide Dossier / Syllabus", speed: "Weeks lag", trust: "Manual loop", friction: "Extreme" },
      { name: "Standard Code Spec / Task List", speed: "Days lag", trust: "Iterative loop", friction: "Medium" },
      { name: "Zero-Decision Execution Layer", speed: "Seconds lag", trust: "Real-time loop", friction: "Minimal" }
    ]
  },
  strategy: {
    solution: "A structure-first platform designed to convert educational content into executable daily actions, removing planning decisions and focusing on adherence.",
    recommendations: "Build a Zero-Decision Framework that converts raw learning materials into bite-sized tasks automatically.",
    experiments: "Deploy automated schedules and test daily streaks against manual syllabus self-organization."
  },
  metrics: {
    northStar: "Learning Adherence Rate",
    guardrails: "Completion accuracy & course dropoff warning levels.",
    indicators: "Daily task completion, retention after 30 days, weekly active learners, learning streak length, goal completion rate, and subscription retention."
  },
  reflection: "Planning and execution are fundamentally different problems. Most productivity systems assume users can consistently self-organize. The proposed system instead treats planning as a service and execution as the primary product experience.",
  nextId: "perplexity-gtm",
  buildLogs: [
    { date: "February 2026", title: "Execution gap research", desc: "Audited learning dropoffs and mapped decision fatigue inflection points." },
    { date: "March 2026", title: "Zero-decision layout design", desc: "Designed the syllabus-to-task auto-generation flow diagrams." },
    { date: "April 2026", title: "Streak tracking engine tests", desc: "Prototyped streak-tracking UI cards and automated schedule generators." }
  ],
  relatedEssays: ["dynamic-frameworks", "product-beyond-features"],
  relatedResearch: ["visual-strategist-canvas"]
};
