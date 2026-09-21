// Urban Company — Post-Diagnostic Decision Scaffold
// PM Case Study Module

export const frontmatter = {
  id: "urban-company-diagnosis",
  title: "Urban Company — Post-Diagnostic Decision Support",
  description: "Reducing decision friction and cost uncertainty for diagnosis-dependent home service bookings through structured post-inspection clarity.",
  date: "2026-05",
  category: "Product Strategy",
  featured: true,
  tags: ["Product Thinking", "UX Strategy", "Marketplace", "Decision Design"],
  thumbnail: "/projects/urban-company-diagnosis.svg",
  image: "/projects/urban-company-diagnosis.svg",
  pdfUrl: null,
  previewEnabled: false,
  status: "Case Study",
  timeline: "Q2 2026",
  role: "Product Strategist"
};

export const content = {
  // D005: Core Problem Definition (unchanged)
  problem: "For customers booking diagnosis-dependent home services, the final cost can become uncertain after booking because the exact scope of work is determined only after on-site inspection, while the diagnostic/visitation cost and subsequent repair quote affect the customer's ability to confidently decide whether to proceed.",
  
  context: {
    industry: "On-Demand Home Services Marketplace",
    market: "Urban India — Metro & Tier-1 Cities",
    segment: "First-Time Diagnosis-Dependent Service Bookers"
  },
  
  // Evidence Section — Research Signals (N=179 public review sample)
  research: {
    observations: "Analysis of 179 public Google Play reviews reveals pricing uncertainty as a recurring friction point. 13 reviews (E014) explicitly mention unexpected costs post-diagnosis, creating decision paralysis after sunk visitation fees.",
    insights: "The core tension is not the absolute price level, but the inability to form accurate pre-diagnostic expectations and the lack of structured support for the accept/reject decision after inspection.",
    painPoints: "Customers face three compounding frictions: (1) no pre-visit cost expectation range, (2) unclear what the diagnostic fee covers, (3) pressure to decide immediately post-inspection without comparison ability."
  },
  
  // Segmentation — D006
  analysis: {
    frameworks: "Segmentation by Booking Context & Price Sensitivity",
    breakdowns: "Primary segment: First-Time Diagnosis-Dependent Bookers — unfamiliar with the inspection → quote → repair flow. Secondary business-risk segment: Price-Sensitive Quote Evaluators — likely to decline after seeing the quote, representing potential partner revenue loss.",
    mapping: [
      { name: "First-Time Booker", speed: "Low familiarity", trust: "Uncertain", friction: "High decision anxiety" },
      { name: "Repeat Booker", speed: "High familiarity", trust: "Established", friction: "Low" },
      { name: "Price-Sensitive Evaluator", speed: "Comparison-heavy", trust: "Conditional", friction: "Quote-dependent" }
    ]
  },
  
  // Opportunity — D007
  strategy: {
    solution: "O4 (Primary): Accept/Reject Decision Support & Sunk-Cost Clarification — help customers understand what they've paid for (diagnosis) and make an informed choice on repairs without pressure. O1 (Complementary): Pre-Diagnostic Price Expectation & Cost Education — set realistic ranges before the technician arrives.",
    recommendations: "Build a post-inspection decision interface that: (1) clearly separates diagnostic fee from repair quote, (2) shows itemized cost breakdown, (3) provides a 'Need Time / Clarify' option, (4) offers a conceptual summary of findings.",
    experiments: "Partner-cohort randomization: expose 50% of eligible partners to the new decision-support flow, measure decision comprehension, authorization rates, and downstream support tickets over 4 weeks."
  },
  
  // Metrics — Hardened Hierarchy
  metrics: {
    northStar: "Decision Comprehension Score (Post-Interaction Survey Clarity)",
    guardrails: "Authorization Volume Stability, Partner Economics (Revenue/Job), Billing Disputes Rate, Support Ticket Volume",
    indicators: "PDCR (Post-Diagnostic Conversion Rate), Decline Rate, Need-Time Selection Rate, Time-to-Decision Median"
  },
  
  reflection: "This work reinforced that marketplace trust is built not just in the transaction, but in the clarity of the decision process. PDCR is a process metric, not a North Star — declining is a valid customer outcome when the repair doesn't match their needs or budget. The AI-assisted workflow accelerated synthesis of review data and adversarial critique, but all strategic decisions remained human-owned.",
  
  nextId: "perplexity-gtm",
  
  // Build Logs
  buildLogs: [
    { date: "March 2026", title: "Problem Discovery & Evidence Gathering", desc: "Analyzed 179 public reviews, identified pricing uncertainty pattern (E014 = 13 reviews). Defined D005 problem statement." },
    { date: "April 2026", title: "Segmentation & Opportunity Mapping", desc: "Established D006 segments (Primary: First-Time Bookers, Secondary: Price-Sensitive Evaluators). Mapped D007 opportunities (O4 primary, O1 complementary)." },
    { date: "May 2026", title: "Solution Design & Validation Planning", desc: "Designed post-inspection decision interface. Created partner-cohort randomization experiment design. Completed red-team self-critique cycle." }
  ],
  
  relatedEssays: [],
  relatedResearch: ["product-strategy", "consumer-behavior"]
};
