import React from "react";
import { Compass, Book, Cpu, Landmark, Sparkles, Target, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div className="section-pad">
      <div className="container" style={{ maxWidth: "var(--reading-max)" }}>
        
        {/* 1. HERO SECTION */}
        <div style={{ marginBottom: "var(--space-8)" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--terminal-green)", display: "block", marginBottom: "8px" }}>
            [SYSTEM_OVERVIEW] // BIOGRAPHY
          </span>
          <h1 style={{ fontSize: "var(--fs-display-lg)", marginBottom: "var(--space-4)" }}>About Anshul</h1>
          <p style={{ fontSize: "var(--fs-body-lg)", color: "var(--text-secondary)", marginBottom: "var(--space-6)" }}>
            An undergraduate at IIT Roorkee studying systems analysis, growth frameworks, and progressive product strategy.
          </p>

          {/* Candid workspace-oriented reflective image */}
          <div 
            style={{
              position: "relative",
              width: "100%",
              height: "480px",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid var(--border-primary)",
              backgroundColor: "var(--bg-secondary)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)"
            }}
          >
            <img 
              src="/profilepfp.jpg" 
              alt="Anshul Eskey Candid Workspace Portrait" 
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 5%",
                filter: "contrast(1.02) brightness(1.0)"
              }}
            />
          </div>
        </div>

        {/* 2. INTRODUCTION */}
        <div className="border-grid" style={{ padding: "var(--space-6)", marginBottom: "var(--space-6)" }}>
          <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--space-3)", display: "flex", alignItems: "center", gap: "10px" }}>
            <Sparkles size={20} style={{ color: "var(--terminal-green)" }} /> Introduction
          </h2>
          <p style={{ marginBottom: "12px", lineHeight: "1.7" }}>
            I am a student, product strategist, and explorer of market structures. Growing up with an innate curiosity about how complex machinery works, I quickly realized that the most interesting systems are not mechanical—they are digital, behavioral, and organizational.
          </p>
          <p style={{ lineHeight: "1.7" }}>
            Currently pursuing my undergraduate studies at **IIT Roorkee**, I spend my cycles building strategic canvases, mapping local dark store inventory elasticities, and auditing cognitive pacing models in healthcare intake wizards.
          </p>
        </div>

        {/* 3. BACKGROUND & TRANSITION */}
        <div className="border-grid" style={{ padding: "var(--space-6)", marginBottom: "var(--space-6)" }}>
          <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--space-3)", display: "flex", alignItems: "center", gap: "10px" }}>
            <Landmark size={20} style={{ color: "var(--terminal-blue)" }} /> Background & Evolution
          </h2>
          <p style={{ marginBottom: "12px", lineHeight: "1.7" }}>
            At IIT Roorkee, my academic curriculum grounded me in statistical rigor, supply chain mapping, and quantitative logic. However, I wanted to connect these analytical abstractions to real-world products that shape user behavior.
          </p>
          <p style={{ marginBottom: "12px", lineHeight: "1.7" }}>
            My transition into product strategy and growth systems was sparked by analyzing onboarding pipelines. I noticed that companies routinely optimized visual UI layouts without understanding the underlying cognitive pacing scheduling constraints of their users.
          </p>
          <p style={{ lineHeight: "1.7" }}>
            This realization led me to draft independent case studies, explore local marketplace competitor supply vectors, and intern at early-stage startups where I mapped and analyzed conversion rates in the wild.
          </p>
        </div>

        {/* 4. PERSONAL PHILOSOPHY */}
        <div className="border-grid" style={{ padding: "var(--space-6)", marginBottom: "var(--space-6)" }}>
          <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--space-3)", display: "flex", alignItems: "center", gap: "10px" }}>
            <Compass size={20} style={{ color: "var(--terminal-orange)" }} /> Systems Philosophy
          </h2>
          <blockquote style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "16px", fontStyle: "italic", margin: "var(--space-4) 0", color: "var(--text-secondary)" }}>
            "A product is not a static bundle of visual pages. It is a dynamic state machine that maps user inputs to transactional business values."
          </blockquote>
          <p style={{ lineHeight: "1.7" }}>
            My approach to product is systems-oriented. I believe that retention is not a simple layout edit—it is a cognitive load scheduling problem. By prioritizing transparent citation trails, progressive questionnaires, and dynamic geo-pricing margins, we respect the user's attention while capturing corporate value.
          </p>
        </div>

        {/* 5. CURRENT INTERESTS */}
        <div className="border-grid" style={{ padding: "var(--space-6)", marginBottom: "var(--space-6)" }}>
          <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "10px" }}>
            <Cpu size={20} style={{ color: "#af52de" }} /> Active Exploration Areas
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ borderLeft: "2px solid var(--terminal-green)", paddingLeft: "12px" }}>
              <strong style={{ fontSize: "14px" }}>Product Strategy & Wizards</strong>
              <p style={{ fontSize: "var(--fs-small)", marginTop: "4px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                Analyzing medical consultation intake funnels, progressive disclosure wizards, and visual node strategy canvases to bridge the gap between design and Git executables.
              </p>
            </div>
            <div style={{ borderLeft: "2px solid var(--terminal-blue)", paddingLeft: "12px" }}>
              <strong style={{ fontSize: "14px" }}>Growth & Competitive GTM</strong>
              <p style={{ fontSize: "var(--fs-small)", marginTop: "4px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                Mapping local stockout parameters, competitor distribution catalog pathways, and dynamic supply chain checkout adjustments in micro-fulfillment spaces.
              </p>
            </div>
            <div style={{ borderLeft: "2px solid var(--terminal-orange)", paddingLeft: "12px" }}>
              <strong style={{ fontSize: "14px" }}>Behavioral Systems Design</strong>
              <p style={{ fontSize: "var(--fs-small)", marginTop: "4px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                Modeling user attention decay, measuring perceived diagnostic utility timing thresholds, and translating cognitive pacing loops into long-term conversion weights.
              </p>
            </div>
          </div>
        </div>

        {/* 6. DETAILED TIMELINE */}
        <div className="border-grid" style={{ padding: "var(--space-6)", marginBottom: "var(--space-6)" }}>
          <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "10px" }}>
            <GraduationCap size={20} style={{ color: "var(--terminal-green)" }} /> Detailed Milestones
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "relative", paddingLeft: "20px" }}>
            <div style={{ position: "absolute", left: "6px", top: "8px", bottom: "8px", width: "1px", backgroundColor: "var(--border-primary)" }} />

            {[
              {
                year: "2024",
                title: "IIT Roorkee Entry & Core Engineering Foundations",
                desc: "Entered IIT Roorkee. Immersed in scientific methodology, quantitative logic, statistical modeling, and active student tech communities. Developed structural frameworks for mathematical analysis and logical systems."
              },
              {
                year: "2025",
                title: "Product Analysis & Startup Cohort Exploration",
                desc: "Began independent case study research. Interned at early-stage startup mapping onboarding conversion funnels. Formulated dark store delivery economics and conducted localized stockout competitor intelligence audits."
              },
              {
                year: "2026",
                title: "Growth Systems, Strategy Canvas & Retention Audits",
                desc: "Launched strategic GTM explorations for AI search tools. Devised visual product intent canvas prototypes (Structor) and cognitive medical intake progressive disclosures, focusing on retention physics and behavioral pacing loops."
              },
              {
                year: "Future",
                title: "Premier Business School (MBA) & Product Leadership",
                desc: "Aimed toward a top-tier management program to connect deep systems analysis directly to B2B SaaS executive levels, managing complex product strategy and corporate growth pathways."
              }
            ].map((it, idx) => (
              <div key={idx} style={{ position: "relative" }}>
                {/* Timeline node dot indicator */}
                <div
                  style={{
                    position: "absolute",
                    left: "-19px",
                    top: "5px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    backgroundColor: "var(--bg-primary)",
                    border: "2px solid var(--accent)",
                    zIndex: 2
                  }}
                />
                <div style={{ display: "flex", gap: "12px", alignItems: "baseline", marginBottom: "2px" }} className="flex-col-mobile">
                  <span style={{ fontFamily: "var(--font-mono)", fontWeight: "bold", color: "var(--terminal-green)", fontSize: "11px" }}>
                    {it.year}
                  </span>
                  <strong style={{ fontSize: "13px", color: "var(--text-primary)" }}>{it.title}</strong>
                </div>
                <p style={{ fontSize: "var(--fs-small)", color: "var(--text-secondary)", lineHeight: "1.5" }}>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. CURRENT DIRECTION & FUTURE ASPIRATIONS */}
        <div className="border-grid" style={{ padding: "var(--space-6)" }}>
          <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--space-3)", display: "flex", alignItems: "center", gap: "10px" }}>
            <Target size={20} style={{ color: "var(--terminal-orange)" }} /> Future Aspirations
          </h2>
          <p style={{ marginBottom: "12px", lineHeight: "1.7" }}>
            My immediate focus is executing B2B GTM strategic frameworks and refining structured low-code strategy canvasing prototypes. I am targeting roles that require robust analytical capabilities, process documentation, and customer retention focus.
          </p>
          <p style={{ lineHeight: "1.7" }}>
            In the long run, I plan to leverage my engineering and analytics foundations at a premier Business School (MBA) to step into product leadership, scaling products that connect business intent directly with beautiful systems execution.
          </p>
        </div>

      </div>

      <style>{`
        .border-grid {
          transition: border-color 0.3s ease;
        }
        .border-grid:hover {
          border-color: rgba(255, 255, 255, 0.12) !important;
        }
        @media (max-width: 768px) {
          .flex-col-mobile {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
