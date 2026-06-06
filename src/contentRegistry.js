// CMS Content Registry - dynamic compiler of projects, essays, and research notes.
import * as perplexityGtm from "./content/projects/perplexity-gtm";
import * as quickCommerceIntel from "./content/projects/quick-commerce-intel";
import * as telemedicineRetention from "./content/projects/telemedicine-retention";
import * as zomatoCancellation from "./content/projects/zomato-cancellation";
import * as learningExecutionSystem from "./content/projects/learning-execution-system";
import * as structorAiPlatform from "./content/projects/structor-ai-platform";

import * as whyMostRetentionFails from "./content/essays/why-most-retention-fails";
import * as intelLoops from "./content/essays/intel-loops";
import * as dynamicFrameworks from "./content/essays/dynamic-frameworks";
import * as habitVectors from "./content/essays/habit-vectors";
import * as productBeyondFeatures from "./content/essays/product-beyond-features";

import * as disciplineFirst from "./content/journal/discipline-first";
import * as mindsetShifts from "./content/journal/mindset-shifts";

// Combine project modules
const rawProjects = [
  perplexityGtm,
  quickCommerceIntel,
  telemedicineRetention,
  zomatoCancellation,
  learningExecutionSystem,
  structorAiPlatform
];

// Combine essay modules
const rawEssays = [
  whyMostRetentionFails,
  intelLoops,
  dynamicFrameworks,
  habitVectors,
  productBeyondFeatures
];

// Combine journal modules
const rawJournal = [
  disciplineFirst,
  mindsetShifts
];

// Helper to calculate reading time dynamically
export const calculateReadingTime = (text = "") => {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes || 1} min`;
};

// Expose Projects with parsed frontmatter & content (filtering out structor-ai-platform for public portfolio visibility)
export const getProjects = () => {
  return rawProjects
    .map(p => ({
      ...p.frontmatter,
      content: p.content
    }))
    .filter(p => p.id !== "structor-ai-platform");
};

export const getProjectById = (id) => {
  return getProjects().find(p => p.id === id);
};

// Expose Essays
export const getEssays = () => {
  return rawEssays.map(e => {
    const fullText = e.content.body || "";
    return {
      ...e.frontmatter,
      readTime: e.frontmatter.readTime || calculateReadingTime(fullText),
      content: e.content
    };
  });
};

export const getEssayById = (id) => {
  return getEssays().find(e => e.id === id);
};

// Expose Journal
export const getJournal = () => {
  return rawJournal.map(j => {
    const fullText = j.content.body || "";
    return {
      ...j.frontmatter,
      readTime: j.frontmatter.readTime || calculateReadingTime(fullText),
      content: j.content
    };
  });
};

export const getJournalById = (id) => {
  return getJournal().find(j => j.id === id);
};

// Dynamic Research Archive Data Matrix (Decoupled from Page)
export const getResearchNotes = () => {
  return [
    {
      id: "quick-commerce-systems",
      title: "Quick Commerce Systems",
      type: "Operational Strategy",
      date: "May 2026",
      tags: ["Dark Stores", "Logistics", "Operations"],
      category: "Quick Commerce Systems",
      abstract: "Studying the operational mechanics and supply economics behind hyper-local delivery apps. Focuses on dark store layout optimization, dynamic inventory levels, and competitor pricing dynamics using platforms like Zepto, Blinkit, and Swiggy Instamart as references.",
      frameworks: ["Localized Stockout Auditing", "Dark Store Replenishment Loops"],
      relatedProjects: ["quick-commerce-intel"],
      relatedEssays: ["intel-loops"],
      notionLink: "https://notion.so/anshul-eskey/quick-commerce-systems"
    },
    {
      id: "ai-product-positioning",
      title: "AI Product Positioning",
      type: "Product & GTM",
      date: "May 2026",
      tags: ["AI Search", "GTM", "Trust Models"],
      category: "AI Product Positioning",
      abstract: "Exploring how AI-native products build trust and integrate into existing workflows. Investigates citation psychology, search product positioning, and go-to-market strategies with a specific focus on Perplexity and other search ecosystems.",
      frameworks: ["Citation Trust Synthesis", "Workflow Integration Mechanics"],
      relatedProjects: ["perplexity-gtm"],
      relatedEssays: ["why-most-retention-fails"],
      notionLink: "https://notion.so/anshul-eskey/ai-product-positioning"
    },
    {
      id: "product-growth-retention",
      title: "Product Growth & Retention",
      type: "Growth & UX",
      date: "Apr 2026",
      tags: ["Onboarding", "Retention", "Habit Loops"],
      category: "Product Growth & Retention",
      abstract: "Analyzing onboarding conversion loops, customer drop-off points, and digital activation systems. Explores progressive disclosure models and retention loops to compress cognitive friction and build long-term user habits.",
      frameworks: ["Wizard Friction Decay", "Habit Loop Reinforcement"],
      relatedProjects: ["telemedicine-retention"],
      relatedEssays: ["why-most-retention-fails", "habit-vectors"],
      notionLink: "https://notion.so/anshul-eskey/product-growth-retention"
    },
    {
      id: "marketing-strategy",
      title: "Marketing Strategy",
      type: "Kotler-style Marketing",
      date: "Apr 2026",
      tags: ["Brand Strategy", "Kotler Core", "Positioning"],
      category: "Marketing Strategy",
      abstract: "Focusing on core marketing strategy, brand positioning, consumer perception pathways, and category entry points. Grounded in traditional Kotler-style strategic marketing principles applied to modern consumer ecosystems.",
      frameworks: ["Category Entry Points", "Competitor Positioning Maps"],
      relatedProjects: ["perplexity-gtm"],
      relatedEssays: ["product-beyond-features"],
      notionLink: "https://notion.so/anshul-eskey/marketing-strategy"
    },
    {
      id: "consumer-behavior",
      title: "Consumer Behavior",
      type: "Behavioral Design",
      date: "Mar 2026",
      tags: ["User Motivation", "Decision Making", "Trust"],
      category: "Consumer Behavior",
      abstract: "Investigating how digital consumers make decisions, evaluate options, and establish trust in digital interfaces. Explores behavioral psychology applied to product experience, user motivations, and transactional decision-making.",
      frameworks: ["Trust Funnel Mapping", "Cognitive Value Metrics"],
      relatedProjects: ["telemedicine-retention"],
      relatedEssays: ["habit-vectors"],
      notionLink: "https://notion.so/anshul-eskey/consumer-behavior"
    },
    {
      id: "product-strategy",
      title: "Product Strategy",
      type: "Product Thinking",
      date: "Feb 2026",
      tags: ["PMF Alignment", "Tradeoffs", "Product Thinking"],
      category: "Product Strategy",
      abstract: "Developing models for product prioritization, mapping systemic design tradeoffs, and identifying product-market fit indicators. Focuses on the tradeoffs between user experience and system constraints.",
      frameworks: ["Product Tradeoff Elasticity", "Prioritization Frameworks"],
      relatedProjects: ["quick-commerce-intel", "telemedicine-retention"],
      relatedEssays: ["product-beyond-features"],
      notionLink: "https://notion.so/anshul-eskey/product-strategy"
    },
    {
      id: "competitive-strategy",
      title: "Competitive Strategy",
      type: "Market Analysis",
      date: "Jan 2026",
      tags: ["Ecosystem Maps", "Market Models", "Category Growth"],
      category: "Competitive Strategy",
      abstract: "Analyzing competitive dynamics, category maturity evolution, and business models. Evaluates multi-sided marketplaces and category entry points to map competitive advantages and positioning shifts.",
      frameworks: ["Competitive Matrix Grid", "Category Evolution Index"],
      relatedProjects: ["quick-commerce-intel", "perplexity-gtm"],
      relatedEssays: ["intel-loops"],
      notionLink: "https://notion.so/anshul-eskey/competitive-strategy"
    }
  ];
};
