// Urban Company — Post-Diagnostic Decision Scaffold
// PM Case Study Module — Enhanced Premium Version

export const frontmatter = {
  id: "urban-company-diagnosis",
  title: "Urban Company — Post-Diagnostic Decision Support",
  description: "Helping customers make a more informed repair decision when the final scope and price only become clear after diagnosis.",
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
  // Hero thesis statement
  thesis: "Helping customers make a more informed repair decision when the final scope and price only become clear after diagnosis.",
  
  // D005: Core Problem Definition (unchanged - verbatim)
  problem: "For customers booking diagnosis-dependent home services, the final cost can become uncertain after booking because the exact scope of work is determined only after on-site inspection, while the diagnostic/visitation cost and subsequent repair quote affect the customer's ability to confidently decide whether to proceed.",
  
  context: {
    industry: "On-Demand Home Services Marketplace",
    market: "Urban India — Metro & Tier-1 Cities",
    segment: "Diagnosis-Dependent Service Bookers"
  },
  
  // Journey visualization data
  journey: {
    steps: [
      { name: "Booking", status: "known", label: "Service type selected" },
      { name: "On-Site Diagnosis", status: "transition", label: "Technician inspects" },
      { name: "Findings", status: "unknown-before", label: "Exact fault revealed" },
      { name: "Quote", status: "unknown-before", label: "Repair scope + price" },
      { name: "Decision", status: "critical", label: "Accept / Decline / Need Time" }
    ],
    knownBefore: ["Service category", "Base visitation fee", "General service promise"],
    determinedAfter: ["Exact fault", "Parts required", "Repair scope", "Final repair amount"]
  },
  
  // Evidence Section — Research Signals (N=179 public review sample)
  research: {
    sampleSize: 179,
    breakdown: {
      negative: 51,
      positive: 93,
      mixed: 30,
      neutral: 5
    },
    pricingSignalCount: 13,
    observations: "Analysis of N=179 public Google Play reviews reveals pricing uncertainty as a recurring friction point. 13 reviews (E014) explicitly mention unexpected costs post-diagnosis, creating decision paralysis after sunk visitation fees.",
    insights: "The core tension is not the absolute price level, but the inability to form accurate pre-diagnostic expectations and the lack of structured support for the accept/reject decision after inspection.",
    painPoints: "Customers face three compounding frictions: (1) no pre-visit cost expectation range, (2) unclear what the diagnostic fee covers, (3) pressure to decide immediately post-inspection without comparison ability.",
    evidenceCards: [
      { code: "E014", count: 13, label: "Reviews with on-site add-on / price-inflation signal", classification: "QUALITATIVE SIGNAL — NOT PREVALENCE" },
      { code: "E041", label: "Observed diagnosis/visitation fee mechanism (AC-repair/Mumbai flow)", classification: "JOURNEY-SPECIFIC OBSERVATION" },
      { code: "E040", label: "Granular rate-card evidence", classification: "CATEGORY-SPECIFIC" },
      { code: "E022", label: "₹99 checkout/payment-stage delta observed", classification: "OBSERVATION / HYPOTHESIS TRIGGER" },
      { code: "E047", label: "October 2021 company claim on cancellation-fee pass-through", classification: "HISTORICAL COMPANY CLAIM" },
      { code: "E048", label: "Warranty-related company evidence", classification: "COMPANY CLAIM" }
    ]
  },
  
  // Research Limitations
  limitations: {
    title: "What this research can — and cannot — establish",
    points: [
      { title: "Public Reviews", limitation: "Self-selected sample; not representative of all users or transactions." },
      { title: "E014 Signal", limitation: "Qualitative signal only; cannot be extrapolated as prevalence or incidence rate." },
      { title: "Observed Flows", limitation: "Journey/category-specific observations; not universal company policy claims." },
      { title: "Company Claims", limitation: "Historical or category-specific; may not reflect current or universal practice." }
    ]
  },
  
  // Segmentation — D006
  analysis: {
    frameworks: "Segmentation by Booking Context & Price Sensitivity",
    breakdowns: "Primary segment: First-Time Diagnosis-Dependent Bookers — unfamiliar with the inspection → quote → repair flow increases decision uncertainty. Secondary business-risk segment: Price-Sensitive Quote Evaluators — likely to decline after seeing the quote, representing potential partner revenue loss.",
    segments: [
      { 
        type: "PRIMARY", 
        name: "First-Time Diagnosis-Dependent Bookers", 
        rationale: "Lower familiarity with the diagnosis → quote → repair journey can increase decision uncertainty and anxiety.",
        characteristics: ["Unfamiliar with diagnostic process", "Uncertain about fair pricing", "High decision anxiety"]
      },
      { 
        type: "SECONDARY", 
        name: "Price-Sensitive Quote Evaluators", 
        rationale: "The post-diagnostic quote becomes a major factor in deciding whether to proceed; decline represents partner revenue risk.",
        characteristics: ["Comparison-heavy", "Budget-constrained", "Quote-dependent decision"]
      }
    ],
    modifier: "Urgency is a modifier, not a third segment.",
    mapping: [
      { name: "First-Time Booker", speed: "Low familiarity", trust: "Uncertain", friction: "High decision anxiety" },
      { name: "Repeat Booker", speed: "High familiarity", trust: "Established", friction: "Low" },
      { name: "Price-Sensitive Evaluator", speed: "Comparison-heavy", trust: "Conditional", friction: "Quote-dependent" }
    ]
  },
  
  // Opportunity Landscape — D007
  opportunities: {
    all: [
      { code: "O1", name: "Pre-Diagnostic Price Expectation & Cost Education", selected: false },
      { code: "O2", name: "Structured On-Site Quote Transparency & Itemization", selected: false },
      { code: "O3", name: "Quote Verification & Rate-Card Confidence", selected: false },
      { code: "O4", name: "Accept/Reject Decision Support & Sunk-Cost Clarification", selected: true, primary: true },
      { code: "O5", name: "Diagnostic-Fee Reinvestment & Alternative Resolution Paths", selected: false },
      { code: "O6", name: "Post-Quote Dispute Escalation & Price Verification Support", selected: false }
    ],
    selected: {
      primary: "O4 — Accept/Reject Decision Support & Sunk-Cost Clarification",
      complementary: "O1 — Pre-Diagnostic Price Expectation & Cost Education"
    },
    rationale: "The strongest product opportunity is not promising an accurate repair price before diagnosis. It is improving the customer's ability to understand the resulting quote and decide what to do next."
  },
  
  // Strategic Insight
  strategicInsight: {
    headline: "CLARITY ≠ AFFORDABILITY",
    body: "The product can improve scope clarity, cost composition, sunk-cost understanding, and decision confidence/comprehension. The product cannot guarantee lower repair prices, customer acceptance, partner economics, or affordability.",
    canImprove: ["Scope clarity", "Cost composition", "Sunk-cost understanding", "Decision confidence/comprehension"],
    cannotGuarantee: ["Lower repair prices", "Customer acceptance", "Partner economics", "Affordability"]
  },
  
  // Product Strategy Principles
  principles: [
    { number: 1, title: "Set expectations before diagnosis", desc: "Provide realistic ranges and explain what the diagnostic fee covers." },
    { number: 2, title: "Make the post-diagnostic quote structured and understandable", desc: "Itemize parts, labour, and other components clearly." },
    { number: 3, title: "Separate already-paid diagnostic cost from new repair cost", desc: "Clarify sunk cost vs. additional payable amount." },
    { number: 4, title: "Preserve customer agency at the decision point", desc: "Offer Authorize, Need Time/Clarify, and Decline options." },
    { number: 5, title: "Validate customer outcomes without assuming partner or business outcomes", desc: "Measure decision quality, not just conversion." }
  ],
  
  // Solution Architecture — C1 to C4 (Lean MVP)
  strategy: {
    solution: "O4 (Primary): Accept/Reject Decision Support & Sunk-Cost Clarification — help customers understand what they've paid for (diagnosis) and make an informed choice on repairs without pressure. O1 (Complementary): Pre-Diagnostic Price Expectation & Cost Education — set realistic ranges before the technician arrives.",
    architecture: {
      title: "Solution Architecture: C1 → C4",
      components: [
        { code: "C1", name: "Upstream Expectation Setting", desc: "Pre-diagnostic range and diagnostic fee explanation" },
        { code: "C2", name: "Structured Quote / Rate-Card Input", desc: "Itemized findings with parts, labour, and other components" },
        { code: "C3", name: "Sunk-Cost / Net-Payable Clarification", desc: "Clear separation of diagnostic fee (paid) from repair amount (new)" },
        { code: "C4", name: "Customer Decision Choice", desc: "Three explicit options: Authorize repair, Need time/clarify, Decline" }
      ]
    },
    recommendations: "Build a post-inspection decision interface that: (1) clearly separates diagnostic fee from repair quote, (2) shows itemized cost breakdown, (3) provides a 'Need Time / Clarify' option, (4) offers a conceptual summary of findings.",
    experiments: "Partner-cohort randomization: expose 50% of eligible partners to the new decision-support flow, measure decision comprehension, authorization rates, and downstream support tickets over 4 weeks."
  },
  
  // Conceptual UX Interface Proposal
  uxProposal: {
    title: "Conceptual UX: Post-Diagnosis Decision Interface",
    subtitle: "DESIGN PROPOSAL — NOT CURRENTLY IMPLEMENTED",
    screens: [
      {
        name: "Diagnosis Complete",
        elements: [
          { type: "header", text: "Diagnosis Complete" },
          { type: "finding", label: "Problem / Finding", value: "e.g., Compressor malfunction detected" },
          { type: "scope", label: "Repair Scope", value: "e.g., Replace compressor, gas refill required" }
        ]
      },
      {
        name: "Quote Breakdown",
        elements: [
          { type: "lineItem", label: "Part", value: "₹X,XXX (illustrative)" },
          { type: "lineItem", label: "Labour", value: "₹XXX (illustrative)" },
          { type: "lineItem", label: "Other applicable components", value: "₹XXX (illustrative)" },
          { type: "total", label: "Repair Amount", value: "₹X,XXX (illustrative — NOT COMPANY TELEMETRY)" }
        ]
      },
      {
        name: "Sunk-Cost Ledger",
        elements: [
          { type: "paid", label: "Diagnostic Amount", value: "₹XX" },
          { type: "status", label: "Status", value: "Already paid" },
          { type: "total", label: "Total Amount Today", value: "₹X,XXX (illustrative)" }
        ]
      },
      {
        name: "Decision Choices",
        elements: [
          { type: "button", variant: "primary", text: "Repair now" },
          { type: "button", variant: "secondary", text: "Need time / clarify" },
          { type: "button", variant: "tertiary", text: "Decline" }
        ],
        note: "A decline is NOT automatically a product success or commercial success. The objective is better-informed decisions."
      }
    ]
  },
  
  // MVP vs Later
  mvpVsLater: {
    mvp: {
      title: "MVP (C1–C4)",
      items: [
        "Upstream expectation setting (pre-diagnostic range)",
        "Structured quote with itemized breakdown",
        "Sunk-cost clarification (diagnostic fee separated)",
        "Three explicit decision choices (Authorize / Need Time / Decline)"
      ]
    },
    later: {
      title: "Later / Subject to Validation",
      items: [
        "Richer diagnostic documentation",
        "Stronger verification mechanisms",
        "Certificate concepts (PDF/in-app summary)",
        "Additional operational/partner tooling"
      ]
    },
    removed: {
      title: "Removed After Adversarial Review",
      items: [
        "Bluetooth / QR P2P mechanics",
        "Automated 2FA locking concepts",
        "Rigid 2-hour decision SLA",
        "Certificate infrastructure as core MVP requirement",
        "Arbitrary technical constraints",
        "Unsupported partner economics assumptions"
      ]
    }
  },
  
  // Metrics — Hardened Hierarchy
  metrics: {
    primary: {
      title: "PRIMARY PRODUCT OUTCOME",
      metric: "Decision Comprehension / Clarity",
      questions: [
        "Can customers correctly understand what was diagnosed?",
        "Can customers correctly understand what is being proposed?",
        "Can customers correctly understand what has already been paid?",
        "Can customers correctly understand what are they being asked to approve?"
      ]
    },
    secondary: {
      title: "SECONDARY PROCESS METRIC",
      metric: "PDCR — Post-Diagnostic Conversion Rate",
      note: "PDCR is a process metric, not a North Star."
    },
    behavioral: {
      title: "BEHAVIORAL OUTCOMES",
      outcomes: ["Authorize", "Need time / clarify", "Decline"],
      note: "A decline is not inherently a product success or commercial success. The objective is better-informed decisions."
    },
    guardrails: {
      title: "BUSINESS GUARDRAILS",
      items: ["Authorization Volume Stability", "Partner Economics (Revenue/Job)", "Billing Disputes Rate", "Support Ticket Volume"]
    }
  },
  
  // Validation / Experiment Design
  validation: {
    title: "PROPOSED EXPERIMENT DESIGN",
    subtitle: "This experiment has NOT been run. Design shown for illustration.",
    hypothesis: "Providing structured post-diagnostic decision support improves customer decision comprehension without reducing overall authorization volume.",
    intervention: "Expose eligible partner-cohorts to the C1–C4 decision-support flow vs. current experience.",
    measurement: {
      primary: "Decision Comprehension Score (post-interaction survey clarity)",
      secondary: "PDCR, Time-to-Decision Median, Need-Time Selection Rate",
      guardrails: "Authorization volume, partner revenue/job, billing disputes, support tickets"
    },
    design: {
      approach: "Partner-cohort randomization or switchback design (candidate approaches)",
      duration: "4 weeks proposed",
      unresolved: ["Operational training requirements", "Partner incentive alignment", "Edge-case handling for urgent repairs"]
    },
    risks: ["Contamination between cohorts", "Partner compliance variability", "Seasonality effects"]
  },
  
  // Red-Team Evolution
  redTeam: {
    title: "What Changed After Red-Teaming",
    changes: [
      { before: "Feature-heavy solution", after: "Lean C1–C4 MVP" },
      { before: "PDCR treated too strongly", after: "Decision quality/comprehension becomes primary" },
      { before: "Pricing signal (E014) treated too broadly", after: "E014 classified as qualitative signal only" },
      { before: "Rigid second-opinion timing (2-hour SLA)", after: "'Need time / clarify scope' (flexible)" },
      { before: "Infrastructure-heavy concepts (Bluetooth/QR, 2FA)", after: "Deferred pending validation" },
      { before: "Geographic cluster randomization", after: "Candidate partner-cohort/switchback designs" },
      { before: "Arbitrary metric thresholds", after: "Baseline-led experiment parameters" }
    ]
  },
  
  // AI Workflow
  aiWorkflow: {
    title: "AI-Assisted, Human-Owned Product Work",
    stages: [
      { stage: "Research", role: "AI accelerates retrieval and aggregation of public signals" },
      { stage: "Synthesis", role: "AI identifies patterns across review data and evidence" },
      { stage: "Adversarial Review", role: "AI challenges assumptions, identifies gaps and overclaims" },
      { stage: "Product Structuring", role: "AI proposes frameworks and architectural options" },
      { stage: "Human Product Judgment", role: "Final decisions, evidence classification, and trade-offs remain human-owned" }
    ],
    statement: "AI accelerated retrieval, synthesis, comparison and adversarial review. Product decisions, evidence classification and final judgments remained human-owned.",
    humanOwned: ["Problem definition", "Strategic decisions", "Evidence boundaries", "Trade-offs", "Final product judgment"]
  },
  
  // Final Takeaway
  finalTakeaway: {
    thesis: "The opportunity is not to predict the repair price perfectly. It is to make the transition from diagnosis to decision easier to understand, more explicit and less ambiguous.",
    blocks: [
      { title: "RESEARCH SIGNAL", content: "Public reviews reveal pricing uncertainty and decision paralysis post-diagnosis (N=179, E014=13 qualitative signals)." },
      { title: "PRODUCT RESPONSE", content: "C1–C4 decision-support flow: expectation setting, structured quote, sunk-cost clarity, explicit choice." },
      { title: "VALIDATION REQUIREMENT", content: "Partner-cohort randomization needed to test impact on decision comprehension and authorization stability." }
    ]
  },
  
  reflection: "This work reinforced that marketplace trust is built not just in the transaction, but in the clarity of the decision process. PDCR is a process metric, not a North Star — declining is a valid customer outcome when the repair doesn't match their needs or budget. The AI-assisted workflow accelerated synthesis of review data and adversarial critique, but all strategic decisions remained human-owned.",
  
  nextId: "perplexity-gtm",
  
  buildLogs: [
    { date: "March 2026", title: "Problem Discovery & Evidence Gathering", desc: "Analyzed N=179 public reviews, identified pricing uncertainty pattern (E014 = 13 qualitative signals). Defined D005 problem statement." },
    { date: "April 2026", title: "Segmentation & Opportunity Mapping", desc: "Established D006 segments (Primary: First-Time Bookers, Secondary: Price-Sensitive Evaluators). Mapped D007 opportunities (O4 primary, O1 complementary)." },
    { date: "May 2026", title: "Solution Design & Validation Planning", desc: "Designed C1–C4 post-inspection decision interface. Created partner-cohort randomization experiment design. Completed red-team self-critique cycle." }
  ],
  
  relatedEssays: [],
  relatedResearch: ["product-strategy", "consumer-behavior"]
};
