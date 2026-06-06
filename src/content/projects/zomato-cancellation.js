export const frontmatter = {
  id: "zomato-cancellation",
  title: "Reducing Post-Order Cancellations",
  description: "Reducing early-stage order cancellations in food delivery platforms through progress signaling and behavioral assurance messaging.",
  date: "2026-03",
  category: "Behavioral Design",
  featured: true,
  tags: ["Behavioral Economics", "Growth Experimentation", "User Retention Systems", "Conversion Optimization"],
  status: "Case Study",
  thumbnail: "/zomato-cancellation.webp",
  image: "/zomato-cancellation.webp",
  pdfUrl: "/projects/zomato-cancellation.pdf",
  previewEnabled: true,
  timeline: "Q1 2026",
  role: "Product Growth"
};

export const content = {
  thesis: "Displaying timely assurance messaging immediately after order placement reduces preventable cancellations by addressing post-purchase anxiety and uncertainty.",
  problem: "Food delivery platforms experience a disproportionate number of cancellations within the first few minutes after an order is placed. While operational factors contribute to cancellations, a significant portion originates from user uncertainty immediately after purchase. The challenge is not transaction completion. The challenge is post-purchase confidence. How can a platform reduce preventable cancellations without introducing friction into the ordering flow?",
  context: {
    industry: "Food Delivery & Quick Commerce",
    market: "Post-Purchase Experience",
    segment: "Users placing food orders through mobile applications"
  },
  research: {
    observations: "Many cancellations occur before any operational issue has actually occurred.",
    insights: "Users often experience uncertainty immediately after spending money online. The period immediately after checkout creates a psychological vulnerability where doubt can override initial purchase intent.",
    painPoints: "The problem is not always service failure. The problem can be perceived uncertainty. A timely reassurance message may reduce cancellation behavior before it occurs."
  },
  analysis: {
    frameworks: "Progress Signaling, Commitment Effect, and Uncertainty Reduction models.",
    breakdowns: "The proposed solution targeted the 'regret window' immediately after order placement where cancellation probability is highest, leveraging progress signaling and commitment effects.",
    mapping: [
      { name: "Control (No Reassurance)", speed: "None", trust: "Low reassurance", friction: "Post-purchase regret" },
      { name: "Variant (Assurance Message)", speed: "Instant signaling", trust: "High reassurance", friction: "Commitment reinforced" }
    ]
  },
  strategy: {
    solution: "Display a contextual reassurance message immediately after order confirmation to reinforce progress, increase confidence, and reduce purchase regret.",
    recommendations: "Reinforce order progress and improve perceived reliability through contextual assurance messaging.",
    experiments: "A/B Test comparing the existing confirmation experience (Control) against confirmation experience with assurance messaging (Variant) to measure reduction in early-stage cancellations."
  },
  metrics: {
    northStar: "10-Minute Cancellation Rate",
    guardrails: "User trust, customer complaints, and post-order experience quality indicators.",
    indicators: "Overall cancellation rate, customer support contacts, repeat order rate, user retention, and order completion rate."
  },
  reflection: "Behavioral design opportunities often exist in overlooked moments of the customer journey. Small interventions can create measurable business impact when deployed at psychologically sensitive decision points. Not every growth problem requires a new feature; sometimes it requires a better message.",
  nextId: "learning-execution-system",
  buildLogs: [
    { date: "January 2026", title: "Initial behavioral analysis", desc: "Explored the regret window and user uncertainty patterns immediately after order placement." },
    { date: "February 2026", title: "Intervention copywriting & UX design", desc: "Designed progress signaling messages and commitment reinforcement copy stacks." },
    { date: "March 2026", title: "A/B test deployment & validation", desc: "Deployed the reassurance variant to measure impact on early-stage cancellation rates." }
  ],
  relatedEssays: ["why-most-retention-fails", "habit-vectors"],
  relatedResearch: ["consumer-behavior"]
};
