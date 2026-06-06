import React, { useState } from "react";
import { Download, ArrowUpRight, GraduationCap, Briefcase, Code, FileText, Star, Trophy, Layers } from "lucide-react";
import { getProjects } from "../contentRegistry";

const Resume = () => {
  const [activeMode, setActiveMode] = useState("interactive"); // "interactive" or "formal"
  const projects = getProjects().slice(0, 3);
  
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "ANSHUL_ESKEY_RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="section-pad">
      <div className="container" style={{ maxWidth: "1200px" }}>
        
        {/* Switcher & Header Area */}
        <div 
          style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            marginBottom: "var(--space-8)",
            borderBottom: "1px solid var(--border-primary)",
            paddingBottom: "var(--space-4)"
          }} 
          className="resume-header-mobile"
        >
          <div>
            <h1 style={{ fontSize: "var(--fs-display-sm)", marginBottom: "4px" }}>Resume</h1>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)" }}>
              [SELECT_MODE] // INTERACTIVE vs ATS_FORMAL
            </span>
          </div>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }} className="switcher-row-mobile">
            <button
              onClick={() => setActiveMode("interactive")}
              className={`mono-btn ${activeMode === "interactive" ? "active" : ""}`}
              style={{ padding: "8px 14px", fontSize: "11px" }}
            >
              Interactive Preview
            </button>
            <button
              onClick={() => setActiveMode("formal")}
              className={`mono-btn ${activeMode === "formal" ? "active" : ""}`}
              style={{ padding: "8px 14px", fontSize: "11px" }}
            >
              ATS PDF Mode
            </button>
          </div>
        </div>

        {/* MODE A: INTERACTIVE RESUME PREVIEW */}
        {activeMode === "interactive" && (
          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "var(--space-8)" }} className="resume-layout-mobile">
            
            {/* Sticky Sidebar Navigation */}
            <div style={{ position: "sticky", top: "100px", height: "fit-content" }} className="resume-sidebar-hidden">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--text-muted)", display: "block", marginBottom: "var(--space-4)" }}>
                RESUME_INDEX
              </span>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "12px", fontFamily: "var(--font-mono)" }}>
                {[
                  { name: "Education", id: "education" },
                  { name: "Experience", id: "experience" },
                  { name: "Projects", id: "projects" },
                  { name: "Skills", id: "skills" },
                  { name: "Achievements", id: "achievements" }
                ].map(sec => (
                  <li key={sec.id}>
                    <button
                      onClick={() => scrollToSection(sec.id)}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "var(--text-secondary)",
                        cursor: "pointer",
                        textAlign: "left",
                        padding: "4px 0",
                        transition: "color 0.2s ease"
                      }}
                      onMouseEnter={(e) => e.target.style.color = "var(--terminal-green)"}
                      onMouseLeave={(e) => e.target.style.color = "var(--text-secondary)"}
                    >
                      &gt; {sec.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resume Content Body */}
            <div>
              <div
                className="border-grid"
                style={{
                  padding: "var(--space-7)",
                  backgroundColor: "var(--bg-secondary)",
                  marginBottom: "var(--space-6)",
                  fontSize: "14px"
                }}
              >
                {/* Resume Name & Contact Block */}
                <div style={{ borderBottom: "1px solid var(--border-primary)", paddingBottom: "var(--space-5)", marginBottom: "var(--space-5)" }}>
                  <h2 style={{ fontSize: "var(--fs-h1)", marginBottom: "6px" }}>Anshul Eskey</h2>
                  <div style={{ display: "flex", gap: "16px", fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)", color: "var(--text-muted)" }} className="resume-contact-mobile">
                    <span>IIT Roorkee Undergraduate</span>
                    <span>Product Strategy & Growth Explorer</span>
                    <span>anshuleskey999@gmail.com</span>
                  </div>
                </div>

                {/* Education Block */}
                <div id="education" style={{ marginBottom: "var(--space-7)", scrollMarginTop: "120px" }}>
                  <h3 style={{ fontSize: "var(--fs-h3)", display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-4)", fontFamily: "var(--font-mono)", color: "var(--terminal-green)" }}>
                    <GraduationCap size={16} /> 01 // EDUCATION
                  </h3>
                  <div style={{ paddingLeft: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", color: "var(--text-primary)" }}>
                      <span>Indian Institute of Technology, Roorkee (IIT Roorkee)</span>
                      <span>Graduation: 2026</span>
                    </div>
                    <div style={{ color: "var(--text-muted)", fontSize: "13px", marginTop: "2px" }}>
                      Bachelor of Technology (B.Tech) — Chemical Engineering Curriculum & Quantitative Strategy Foundations
                    </div>
                  </div>
                </div>

                {/* Experience Block */}
                <div id="experience" style={{ marginBottom: "var(--space-7)", scrollMarginTop: "120px" }}>
                  <h3 style={{ fontSize: "var(--fs-h3)", display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-4)", fontFamily: "var(--font-mono)", color: "var(--terminal-blue)" }}>
                    <Briefcase size={16} /> 02 // RELEVANT EXPERIENCE
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", paddingLeft: "12px" }}>
                    
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", color: "var(--text-primary)" }}>
                        <span>Product & Strategy Analyst (Intern)</span>
                        <span>May 2025 – July 2025</span>
                      </div>
                      <div style={{ color: "var(--text-muted)", fontSize: "12px", fontStyle: "italic", marginBottom: "4px" }}>
                        Seed-stage Architecture Workflow & Intelligence Startup
                      </div>
                      <ul style={{ paddingLeft: "16px", color: "var(--text-secondary)", fontSize: "13px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <li>Mapped onboarding loops and diagnostic wizard paths for high-skilled technical practitioners.</li>
                        <li>Identified key attention decay variables, helping redesign progressive disclosures to boost intake rate.</li>
                        <li>Formulated automated workflow pathways translating structured user inputs directly to clean git specs.</li>
                      </ul>
                    </div>

                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", color: "var(--text-primary)" }}>
                        <span>Research & Growth Analytics Lead</span>
                        <span>Jan 2025 – Present</span>
                      </div>
                      <div style={{ color: "var(--text-muted)", fontSize: "12px", fontStyle: "italic", marginBottom: "4px" }}>
                        CDC Research & Analytics Initiative
                      </div>
                      <ul style={{ paddingLeft: "16px", color: "var(--text-secondary)", fontSize: "13px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <li>Audited localized competitor delivery networks and dark store inventories in high-density regions.</li>
                        <li>Compiled pricing elasticity frameworks linked directly to regional competitor stockout indicators.</li>
                        <li>Conducted user studies on context trust, driving positioning improvements for enterprise GTM pathways.</li>
                      </ul>
                    </div>

                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", color: "var(--text-primary)" }}>
                        <span>Department Representative (Elected Officer)</span>
                        <span>July 2024 – Present</span>
                      </div>
                      <div style={{ color: "var(--text-muted)", fontSize: "12px", fontStyle: "italic", marginBottom: "4px" }}>
                        IIT Roorkee Student Affairs Council
                      </div>
                      <ul style={{ paddingLeft: "16px", color: "var(--text-secondary)", fontSize: "13px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <li>Represented academic interests and structured feedback channels for over 120 undergraduate peers.</li>
                        <li>Organized departmental operations, structured scheduling tables, and managed peer mentoring networks.</li>
                      </ul>
                    </div>

                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", color: "var(--text-primary)" }}>
                        <span>Team Lead / Core Coordinator</span>
                        <span>Aug 2024 – Present</span>
                      </div>
                      <div style={{ color: "var(--text-muted)", fontSize: "12px", fontStyle: "italic", marginBottom: "4px" }}>
                        IIT Roorkee Weightlifting & Strength Sports Club
                      </div>
                      <ul style={{ paddingLeft: "16px", color: "var(--text-secondary)", fontSize: "13px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <li>Coordinated sports logistics, structured scheduling plans, and organized training camps for institutional meets.</li>
                        <li>Led motivational group coaching sessions, optimizing athletic pacing schedules and physical conditioning cycles.</li>
                      </ul>
                    </div>

                  </div>
                </div>

                {/* Projects Block */}
                <div id="projects" style={{ marginBottom: "var(--space-7)", scrollMarginTop: "120px" }}>
                  <h3 style={{ fontSize: "var(--fs-h3)", display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-4)", fontFamily: "var(--font-mono)", color: "var(--terminal-green)" }}>
                    <Layers size={16} /> 03 // FEATURED STUDIES
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "12px" }}>
                    {projects.map((proj) => (
                      <div key={proj.id}>
                        <strong style={{ color: "var(--text-primary)" }}>{proj.title}</strong>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", marginLeft: "8px" }}>
                          ({proj.date})
                        </span>
                        <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px", lineHeight: "1.5" }}>
                          {proj.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Block */}
                <div id="skills" style={{ marginBottom: "var(--space-7)", scrollMarginTop: "120px" }}>
                  <h3 style={{ fontSize: "var(--fs-h3)", display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-4)", fontFamily: "var(--font-mono)", color: "var(--terminal-orange)" }}>
                    <Code size={16} /> 04 // STRATEGIC & ANALYTICAL TOOLKIT
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingLeft: "12px" }}>
                    {[
                      "Product Strategy", 
                      "GTM Systems", 
                      "Behavioral Design", 
                      "Market Research", 
                      "User Research", 
                      "Business Analysis",
                      "KPI Tracking",
                      "SQL", 
                      "Excel Modelling", 
                      "Tableau",
                      "React 19", 
                      "GSAP Engine", 
                      "Vanilla CSS"
                    ].map((sk) => (
                      <span
                        key={sk}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "11px",
                          border: "1px solid var(--border-primary)",
                          padding: "4px 10px",
                          borderRadius: "var(--radius-sm)",
                          backgroundColor: "var(--bg-primary)"
                        }}
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements Block */}
                <div id="achievements" style={{ scrollMarginTop: "120px" }}>
                  <h3 style={{ fontSize: "var(--fs-h3)", display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-4)", fontFamily: "var(--font-mono)", color: "#af52de" }}>
                    <Trophy size={16} /> 05 // KEY ACHIEVEMENTS
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "12px", fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                      <span style={{ width: "4px", height: "4px", backgroundColor: "#af52de", borderRadius: "50%" }} />
                      <span><strong>Physics Brawl Rank:</strong> Achieved distinguished rank in national competitive physics challenges.</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                      <span style={{ width: "4px", height: "4px", backgroundColor: "#af52de", borderRadius: "50%" }} />
                      <span><strong>NTSE Scholar:</strong> Prestigious National Talent Search Examination scholarship recipient.</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                      <span style={{ width: "4px", height: "4px", backgroundColor: "#af52de", borderRadius: "50%" }} />
                      <span><strong>Sports Medals:</strong> Secured institutional medals and podium finishes in regional weightlifting events.</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* LinkedIn Connection CTA */}
              <div
                className="border-grid resume-footer-grid-mobile"
                style={{
                  padding: "var(--space-5)",
                  display: "grid",
                  gridTemplateColumns: "1.2fr 0.8fr",
                  gap: "var(--space-5)",
                  alignItems: "center"
                }}
              >
                <div>
                  <h3 style={{ fontSize: "var(--fs-h3)", marginBottom: "4px" }}>Connect on LinkedIn</h3>
                  <p style={{ fontSize: "var(--fs-small)", color: "var(--text-secondary)" }}>
                    Access student milestones and analytical career pathways.
                  </p>
                </div>
                <div style={{ textAlign: "right" }} className="text-left-mobile">
                  <a
                    href="https://linkedin.com/in/anshul-eskey-ba0821292"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono-btn"
                    style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                  >
                    Open LinkedIn <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* MODE B: ATS PDF PREVIEW & DOWNLOAD CARD */}
        {activeMode === "formal" && (
          <div style={{ animation: "fadeIn 0.4s ease" }}>
            {/* Visual ATS PDF Layout Simulator */}
            <div
              className="border-grid ats-resume-sheet"
              style={{
                padding: "var(--space-6) var(--space-8)",
                backgroundColor: "#ffffff",
                color: "#111111",
                borderRadius: "var(--radius-sm)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
                marginBottom: "var(--space-6)",
                fontFamily: "Georgia, serif",
                fontSize: "11px",
                lineHeight: "1.5"
              }}
            >
              {/* ATS Header */}
              <div style={{ textAlign: "center", borderBottom: "1.5px solid #111", paddingBottom: "12px", marginBottom: "16px" }}>
                <h2 style={{ fontSize: "22px", fontFamily: "Georgia, serif", fontWeight: "normal", color: "#111", margin: "0 0 4px 0", letterSpacing: "0.5px" }}>
                  ANSHUL ESKEY
                </h2>
                <div style={{ fontSize: "11px", color: "#444", display: "flex", justifyContent: "center", gap: "12px" }}>
                  <span>IIT Roorkee Undergraduate</span>
                  <span>•</span>
                  <span>anshuleskey999@gmail.com</span>
                  <span>•</span>
                  <span>linkedin.com/in/anshul-eskey-ba0821292</span>
                </div>
              </div>

              {/* ATS Education */}
              <div style={{ marginBottom: "16px" }}>
                <h3 style={{ fontSize: "11px", fontFamily: "Arial, sans-serif", fontWeight: "bold", borderBottom: "1px solid #ddd", paddingBottom: "2px", margin: "0 0 8px 0", color: "#333", letterSpacing: "0.5px" }}>
                  EDUCATION
                </h3>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", color: "#111" }}>
                  <span>INDIAN INSTITUTE OF TECHNOLOGY, ROORKEE (IIT ROORKEE)</span>
                  <span>Roorkee, India</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#444", fontStyle: "italic", fontSize: "11px" }}>
                  <span>Bachelor of Technology (B.Tech) — Chemical Engineering Curriculum & Quantitative Analytics</span>
                  <span>Graduation: May 2026</span>
                </div>
              </div>

              {/* ATS Experience */}
              <div style={{ marginBottom: "16px" }}>
                <h3 style={{ fontSize: "11px", fontFamily: "Arial, sans-serif", fontWeight: "bold", borderBottom: "1px solid #ddd", paddingBottom: "2px", margin: "0 0 8px 0", color: "#333", letterSpacing: "0.5px" }}>
                  RELEVANT EXPERIENCE
                </h3>
                
                <div style={{ marginBottom: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", color: "#111" }}>
                    <span>PRODUCT & STRATEGY ANALYST (INTERN) — ARCHITECTURE WORKFLOW STARTUP</span>
                    <span>May 2025 – July 2025</span>
                  </div>
                  <ul style={{ margin: "4px 0 0 16px", padding: 0 }}>
                    <li>Mapped onboarding loops and intake wizard pipelines for high-skilled technical practitioners.</li>
                    <li>Designed modular progressive disclosures, optimizing cognitive pace to elevate consultation completion.</li>
                  </ul>
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", color: "#111" }}>
                    <span>RESEARCH & GROWTH ANALYTICS LEAD — CDC RESEARCH INITIATIVE</span>
                    <span>Jan 2025 – Present</span>
                  </div>
                  <ul style={{ margin: "4px 0 0 16px", padding: 0 }}>
                    <li>Audited local dark store inventories and mapped regional stockout metrics across fulfillment nodes.</li>
                    <li>Formulated competitive pricing models boosting contribution margins on dynamic supply slots by 14.8%.</li>
                  </ul>
                </div>
              </div>

              {/* ATS Projects */}
              <div style={{ marginBottom: "16px" }}>
                <h3 style={{ fontSize: "11px", fontFamily: "Arial, sans-serif", fontWeight: "bold", borderBottom: "1px solid #ddd", paddingBottom: "2px", margin: "0 0 8px 0", color: "#333", letterSpacing: "0.5px" }}>
                  SELECTED STRATEGY & PRODUCT STUDIES
                </h3>
                
                <div style={{ marginBottom: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", color: "#111" }}>
                    <span>PERPLEXITY ENTERPRISE GTM STRATEGY CASE</span>
                    <span>Q1 2026</span>
                  </div>
                  <ul style={{ margin: "4px 0 0 16px", padding: 0 }}>
                    <li>Analyzed GTM expansion strategies for AI search engines transitioning to enterprise distributions.</li>
                    <li>Designed Context Synthesis models showing citation validation paths improve decision velocity.</li>
                  </ul>
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", color: "#111" }}>
                    <span>TELEMEDICINE PROGRESSIVE INTAKE RETENTION STUDY</span>
                    <span>Q3 2025</span>
                  </div>
                  <ul style={{ margin: "4px 0 0 16px", padding: 0 }}>
                    <li>Audited patient intake questionnaires to measure attention decay and dropoffs in clinical wizards.</li>
                  </ul>
                </div>
              </div>

              {/* ATS Skills */}
              <div style={{ marginBottom: "16px" }}>
                <h3 style={{ fontSize: "11px", fontFamily: "Arial, sans-serif", fontWeight: "bold", borderBottom: "1px solid #ddd", paddingBottom: "2px", margin: "0 0 8px 0", color: "#333", letterSpacing: "0.5px" }}>
                  TECHNICAL SKILLS & TOOLKIT
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  <div><strong>Strategy & Core:</strong> Product Strategy, GTM, Analytics, Excel, User Research, Business Analysis</div>
                  <div><strong>Tech & Tools:</strong> SQL, Tableau, KPI Tracking, React 19, Systems Engineering</div>
                </div>
              </div>

              {/* ATS Achievements */}
              <div>
                <h3 style={{ fontSize: "11px", fontFamily: "Arial, sans-serif", fontWeight: "bold", borderBottom: "1px solid #ddd", paddingBottom: "2px", margin: "0 0 8px 0", color: "#333", letterSpacing: "0.5px" }}>
                  ACHIEVEMENTS
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  <div>• Physics Brawl competitive challenge rank</div>
                  <div>• NTSE Scholar talent search recipient</div>
                  <div>• PODIUM/Medals in weightlifting meets</div>
                </div>
              </div>

            </div>

            {/* Formal Downloader Callout Box */}
            <div
              className="border-grid"
              style={{
                padding: "var(--space-6)",
                backgroundColor: "var(--bg-secondary)",
                borderRadius: "var(--radius-sm)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              <div style={{ color: "var(--terminal-orange)", marginBottom: "var(--space-3)" }}><FileText size={36} /></div>
              <h3 style={{ fontSize: "var(--fs-h2)", marginBottom: "4px" }}>Download Official ATS Resume</h3>
              <p style={{ fontSize: "var(--fs-small)", color: "var(--text-secondary)", maxWidth: "480px", marginBottom: "var(--space-5)" }}>
                Get the clean, single-page, ATS-optimized PDF resume configured for automated application checkers and recruiter databases.
              </p>
              
              <button
                onClick={handleDownload}
                className="mono-btn active"
                style={{
                  padding: "16px 36px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "13px"
                }}
              >
                <Download size={16} /> Download ATS Resume PDF
              </button>
            </div>

          </div>
        )}

      </div>

      <style>{`
        .ats-resume-sheet {
          transition: border-color 0.3s ease;
        }
        .ats-resume-sheet:hover {
          border-color: rgba(255, 255, 255, 0.1) !important;
        }
        @media (max-width: 1024px) {
          .resume-sidebar-hidden {
            display: none !important;
          }
          .resume-layout-mobile {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .resume-header-mobile {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px;
          }
          .switcher-row-mobile {
            width: 100%;
            justify-content: flex-start;
          }
          .resume-contact-mobile {
            flex-direction: column !important;
            gap: 6px !important;
          }
          .resume-footer-grid-mobile {
            grid-template-columns: 1fr !important;
            gap: var(--space-4) !important;
          }
          .text-left-mobile {
            text-align: left !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Resume;
