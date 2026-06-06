import React, { useEffect } from "react";
import { ArrowDown, ArrowUpRight, CheckCircle, TrendingUp, Cpu, Network, Compass, BarChart } from "lucide-react";
import { useNavigation } from "../context/NavigationContext";
import SystemDiagram from "../components/SystemDiagram";
import { initScrollStagger, revealHeadingText } from "../animations";
import { getProjects, getEssays, getJournal } from "../contentRegistry";
import ProjectCard from "../components/ProjectCard";
import EssayCard from "../components/EssayCard";

const Home = () => {
  const { navigateTo } = useNavigation();

  useEffect(() => {
    // Fire heading entrance reveal
    revealHeadingText(".hero-reveal-title");
    
    // Fire scroll-linked staggered reveals for sections
    initScrollStagger(".work-stagger-container", ".project-card");
    initScrollStagger(".research-stagger-container", ".research-system-card");
    initScrollStagger(".focus-stagger-container", ".focus-row");
  }, []);

  const selectedProjects = getProjects().slice(0, 4);

  const essays = getEssays().slice(0, 3);
  const journalReflections = getJournal().slice(0, 3);

  const currentFocus = [
    { name: "Product Strategy", status: "Active", progress: 85, note: "Exploring onboarding systems, retention mechanics, and user workflows." },
    { name: "Growth Systems", status: "Active", progress: 90, note: "Learning acquisition models, positioning strategy, and GTM frameworks." },
    { name: "Behavioral Design", status: "Exploration", progress: 65, note: "Understanding user psychology, cognitive friction, and decision systems." },
    { name: "Marketing", status: "Nominal", progress: 75, note: "Studying market analysis, positioning, and business communication systems." },
    { name: "MBA Preparation", status: "Staged", progress: 80, note: "Building analytical and business foundations alongside technical education." }
  ];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section
        style={{
          position: "relative",
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          alignItems: "center",
          overflow: "hidden"
        }}
      >
        <div className="bg-grid-lines" />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "var(--space-6)",
              alignItems: "center"
            }}
            className="hero-grid-mobile"
          >
            {/* Left Column: Thesis & Navigation Callouts */}
             <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--fs-small)",
                  color: "var(--terminal-green)",
                  marginBottom: "var(--space-4)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <span className="pulse-dot" style={{ width: "6px", height: "6px", backgroundColor: "var(--terminal-green)", borderRadius: "50%" }} />
                Currently Exploring
              </div>

              <h1
                className="hero-reveal-title"
                style={{
                  fontSize: "var(--fs-display-xl)",
                  lineHeight: "0.95",
                  marginBottom: "var(--space-6)",
                  fontFamily: "var(--font-display)",
                  fontWeight: "800"
                }}
              >
                Building products,<br />
                systems &<br />
                <span style={{ color: "var(--text-muted)" }}>strategic thinking.</span>
              </h1>

              <p style={{ maxWidth: "540px", marginBottom: "var(--space-7)", fontSize: "var(--fs-body-lg)" }}>
                I’m an IIT Roorkee undergraduate studying engineering, focusing on product strategy, growth systems, and systems-oriented business research through grounded case studies.
              </p>

              <div style={{ display: "flex", gap: "var(--space-4)" }}>
                <button
                  onClick={() => navigateTo("#/projects")}
                  className="mono-btn"
                  data-magnetic
                  data-magnetic-strength="0.25"
                  style={{
                    padding: "16px 28px",
                    backgroundColor: "var(--accent)",
                    color: "var(--bg-primary)"
                  }}
                >
                  View Projects <ArrowDown size={14} style={{ marginLeft: "6px" }} />
                </button>

                <button
                  onClick={() => navigateTo("#/research")}
                  className="mono-btn"
                  data-magnetic
                  data-magnetic-strength="0.2"
                  style={{ padding: "16px 28px" }}
                >
                  Research Interests
                </button>
              </div>
            </div>

            {/* Right Column: Premium Desaturated Personal Portrait with layered lighting shadows */}
            <div style={{ display: "flex", justifyContent: "center", position: "relative" }} className="hero-portrait-column">
              <div 
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "480px",
                  aspectRatio: "4/5",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  border: "1px solid var(--border-primary)",
                  backgroundColor: "var(--bg-secondary)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)"
                }}
              >
                {/* Sharp editorial portrait with original natural color tones */}
                <img 
                  src="/profilepfp.jpg" 
                  alt="Anshul Eskey Portrait" 
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "40% 20%",
                    filter: "contrast(1.02) brightness(1.0)",
                    transition: "transform 0.5s var(--ease-primary)"
                  }}
                  className="portrait-hover-scale"
                />
                
                {/* Minimal clean thin border overlay */}
                <div 
                  style={{
                    position: "absolute",
                    inset: 0,
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "var(--radius-lg)",
                    pointerEvents: "none"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 INTRO / IDENTITY LAYER */}
      <section className="section-pad" style={{ borderTop: "1px solid var(--border-primary)", backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "var(--space-8)",
              alignItems: "start"
            }}
            className="about-preview-mobile"
          >
            {/* Left Side: Grounded Identity Narrative */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--terminal-green)",
                  marginBottom: "var(--space-3)"
                }}
              >
                00 // IDENTITY
              </div>
              <h2 style={{ fontSize: "var(--fs-display-sm)", marginBottom: "var(--space-4)", lineHeight: "1.1" }}>
                Who is Anshul Eskey?
              </h2>
              <p style={{ fontSize: "var(--fs-body-lg)", marginBottom: "var(--space-4)", color: "var(--text-primary)" }}>
                I am an undergraduate student at IIT Roorkee exploring product strategy, growth systems, behavioral design, and business intelligence.
              </p>
              <p style={{ color: "var(--text-secondary)", marginBottom: "var(--space-4)" }}>
                Instead of treating product development as a series of isolated design loops, I view it as an interconnected system. My work is anchored in translating high-level business goals directly into auditable strategies, progressive user flows, and local competitive maps.
              </p>
              <p style={{ color: "var(--text-secondary)" }}>
                Whether studying transactional pacing wizards in digital health or competitive delivery networks in quick commerce, I focus on systems analysis, structured writing, and research-driven iteration logs.
              </p>
            </div>

            {/* Right Side: Mini Visual Cards Deck */}
            <div style={{ display: "grid", gridTemplateRows: "auto auto auto auto", gap: "var(--space-3)" }}>
              {[
                { label: "ACADEMIC ORIGIN", val: "IIT Roorkee Undergraduate", detail: "Analytical engineering foundations, systems thinking, and structured analysis.", accent: "var(--terminal-green)" },
                { label: "ENGINEERING FOUNDATION", val: "Chemical Engineering", detail: "Studying thermodynamics, transport processes, and system modeling paradigms.", accent: "var(--terminal-blue)" },
                { label: "STRATEGIC DOMAINS", val: "Product Strategy & Growth", detail: "Exploring acquisition loops, user behavior, GTM models, and retention systems.", accent: "var(--terminal-orange)" },
                { label: "RESEARCH CURIO", val: "Quick Commerce & AI Products", detail: "Analyzing localized logistics (Zepto, Swiggy) and modern AI workflow runtimes.", accent: "#af52de" }
              ].map((card, i) => (
                <div
                  key={i}
                  className="border-grid"
                  style={{
                    padding: "var(--space-4)",
                    backgroundColor: "var(--bg-primary)",
                    borderRadius: "var(--radius-sm)",
                    transition: "border-color 0.3s ease"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--text-muted)" }}>{card.label}</span>
                    <span style={{ width: "6px", height: "6px", backgroundColor: card.accent, borderRadius: "50%" }} />
                  </div>
                  <strong style={{ fontSize: "13px", display: "block", color: "var(--text-primary)", marginBottom: "2px" }}>{card.val}</strong>
                  <span style={{ fontSize: "11px", color: "var(--text-secondary)", display: "block", lineHeight: "1.4" }}>{card.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SELECTED WORK SECTION */}
      <section className="section-pad" style={{ borderTop: "1px solid var(--border-primary)", position: "relative" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--space-8)" }}>
            <h2 style={{ fontSize: "var(--fs-display-md)" }}>Selected Work</h2>
            <a
              href="#/projects"
              onClick={(e) => { e.preventDefault(); navigateTo("#/projects"); }}
              style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)", display: "flex", alignItems: "center", gap: "4px" }}
            >
              Browse all projects <ArrowUpRight size={14} />
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "var(--space-6)"
            }}
            className="work-stagger-container"
          >
            {selectedProjects.map((p, idx) => {
              const isLarge = idx === 0 || idx === 3;
              return (
                <div key={p.id} style={{ gridColumn: isLarge ? "span 12" : "span 6" }}>
                  <ProjectCard
                    project={p}
                    onClick={() => navigateTo(`#/projects/${p.id}`)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. RESEARCH SYSTEMS SECTION */}
      <section className="section-pad" style={{ borderTop: "1px solid var(--border-primary)", backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ marginBottom: "var(--space-8)" }}>
            <h2 style={{ fontSize: "var(--fs-display-md)" }}>Research Interests</h2>
            <p style={{ maxWidth: "560px", color: "var(--text-secondary)" }}>
              Areas of curiosity, long-term interests, and strategic strategic business exploration.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "var(--space-5)"
            }}
            className="research-stagger-container research-grid-mobile"
          >
            {[
              {
                title: "Quick Commerce Systems",
                desc: "Studying dynamic pricing loops, local delivery networks, and localized competitor supply systems.",
                icon: <BarChart size={20} />,
                accent: "var(--terminal-blue)",
                items: ["Swiggy Instamart", "Zepto", "Blinkit catalog models"]
              },
              {
                title: "Product Growth & Retention",
                desc: "Exploring activation loops, progressive onboarding Wizards, and transactional friction frameworks.",
                icon: <TrendingUp size={20} />,
                accent: "var(--terminal-green)",
                items: ["Funnel conversion loops", "Habit reinforcement mechanics", "Duolingo habit vector maps"]
              },
              {
                title: "AI Product Workflows",
                desc: "Analyzing trust thresholds, search positioning, and deep-linked workflow integrations in modern apps.",
                icon: <Cpu size={20} />,
                accent: "var(--terminal-orange)",
                items: ["Citation psychology", "Workflow tool embedding", "Perplexity search ecosystems"]
              },
              {
                title: "Consumer Apps & Strategy",
                desc: "Investigating user attention models, value perception timing, GTM strategies, and platform designs.",
                icon: <Network size={20} />,
                accent: "#af52de",
                items: ["Cognitive load pacing", "Product GTM positioning", "Notion & workspace dynamics"]
              }
            ].map((sys) => (
              <div
                key={sys.title}
                className="research-system-card border-grid"
                style={{
                  padding: "var(--space-5)",
                  display: "flex",
                  flexDirection: "column",
                  height: "380px",
                  transition: "all 0.4s var(--ease-primary)",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Visual Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
                  <div style={{ color: sys.accent }}>{sys.icon}</div>
                </div>

                <h3 style={{ fontSize: "var(--fs-h3)", marginBottom: "var(--space-2)" }}>{sys.title}</h3>
                <p style={{ fontSize: "var(--fs-small)", color: "var(--text-secondary)", marginBottom: "var(--space-4)", flexGrow: 1 }}>{sys.desc}</p>
                
                {/* Interactive Sub-items showing on Hover expand */}
                <div className="hover-expand-items" style={{ borderTop: "1px solid var(--border-primary)", paddingTop: "var(--space-3)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", marginBottom: "var(--space-2)" }}>
                    REPORTS & FRAMEWORKS:
                  </div>
                  <ul style={{ listStyle: "none", fontSize: "11px", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {sys.items.map((it) => (
                      <li key={it} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ width: "3px", height: "3px", backgroundColor: sys.accent, borderRadius: "50%" }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 4. NOTES & REFLECTIONS */}
      <section className="section-pad" style={{ borderTop: "1px solid var(--border-primary)" }}>
        <div className="container" style={{ maxWidth: "var(--reading-max)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)" }} className="about-preview-mobile">
            
            {/* Left: Professional Notes */}
            <div>
              <div style={{ marginBottom: "var(--space-6)" }}>
                <h2 style={{ fontSize: "var(--fs-display-sm)" }}>Notes</h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "var(--fs-small)", marginTop: "4px" }}>
                  Product thinking breakdowns, strategy essays, growth system maps, and research findings.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginBottom: "var(--space-5)" }}>
                {essays.map((essay, index) => (
                  <EssayCard
                    key={essay.id || index}
                    essay={essay}
                    onClick={() => navigateTo("#/notes")}
                  />
                ))}
              </div>

              <button
                onClick={() => navigateTo("#/notes")}
                className="mono-btn"
                data-magnetic
                data-magnetic-strength="0.15"
                style={{ fontSize: "11px", padding: "10px 20px" }}
              >
                Explore Notes
              </button>
            </div>

            {/* Right: Personal Reflections (Journal) */}
            <div>
              <div style={{ marginBottom: "var(--space-6)" }}>
                <h2 style={{ fontSize: "var(--fs-display-sm)" }}>Reflections</h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "var(--fs-small)", marginTop: "4px" }}>
                  Personal mindset shifts, routines, sports discipline logs, and reflections on development.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginBottom: "var(--space-5)" }}>
                {journalReflections.map((jr, index) => (
                  <EssayCard
                    key={jr.id || index}
                    essay={jr}
                    onClick={() => navigateTo("#/reflections")}
                  />
                ))}
              </div>

              <button
                onClick={() => navigateTo("#/reflections")}
                className="mono-btn"
                data-magnetic
                data-magnetic-strength="0.15"
                style={{ fontSize: "11px", padding: "10px 20px" }}
              >
                Explore Reflections
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CURRENT FOCUS */}
      <section className="section-pad" style={{ borderTop: "1px solid var(--border-primary)", backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ marginBottom: "var(--space-6)" }}>
            <h2 style={{ fontSize: "var(--fs-h2)", fontFamily: "var(--font-display)" }}>Current Focus</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "var(--fs-small)" }}>
              Areas I’m currently exploring and developing through research, projects, and long-term learning.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid var(--border-primary)",
              borderRadius: "var(--radius-md)",
              backgroundColor: "var(--bg-primary)",
              overflow: "hidden"
            }}
            className="focus-stagger-container"
          >
            {/* Table Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.5fr 1fr 1.5fr 3fr",
                padding: "var(--space-4)",
                borderBottom: "1px solid var(--border-primary)",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--fs-small)",
                color: "var(--text-muted)",
                backgroundColor: "var(--bg-secondary)",
                gap: "var(--space-4)"
              }}
              className="focus-table-mobile-header"
            >
              <div>FOCUS AREA</div>
              <div>STATUS</div>
              <div>PROGRESS</div>
              <div>EXPLORATION NOTES</div>
            </div>

            {/* Focus Rows */}
            {currentFocus.map((focus) => (
              <div
                key={focus.name}
                className="focus-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.5fr 1fr 1.5fr 3fr",
                  padding: "var(--space-4)",
                  borderBottom: "1px solid var(--border-secondary)",
                  alignItems: "center",
                  fontSize: "var(--fs-small)",
                  gap: "var(--space-4)"
                }}
              >
                <div style={{ fontFamily: "var(--font-mono)", fontWeight: "500", color: "var(--text-primary)" }}>{focus.name}</div>
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: focus.status === "Active" ? "var(--terminal-green)" : 
                             focus.status === "Exploration" ? "var(--terminal-blue)" : "var(--text-muted)",
                      border: "1px solid var(--border-primary)",
                      padding: "2px 8px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--bg-secondary)"
                    }}
                  >
                    {focus.status}
                  </span>
                </div>
                
                {/* Progress bar visual alignment */}
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", paddingRight: "var(--space-4)" }}>
                  <div style={{ flexGrow: 1, height: "3px", backgroundColor: "var(--border-primary)", borderRadius: "1.5px", overflow: "hidden" }}>
                    <div
                      style={{
                        width: `${focus.progress}%`,
                        height: "100%",
                        backgroundColor: focus.status === "Active" ? "var(--terminal-green)" : "var(--accent-muted)",
                        borderRadius: "1.5px"
                      }}
                    />
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", minWidth: "26px", textAlign: "right", color: "var(--text-muted)" }}>
                    {focus.progress}%
                  </span>
                </div>

                <div style={{ color: "var(--text-secondary)", fontSize: "var(--fs-small)", lineHeight: "1.4" }}>{focus.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ABOUT PREVIEW */}
      <section className="section-pad" style={{ borderTop: "1px solid var(--border-primary)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "var(--space-8)"
            }}
            className="about-preview-mobile"
          >
            {/* Left: Statement */}
            <div>
              <h2 style={{ fontSize: "var(--fs-display-md)", marginBottom: "var(--space-4)" }}>About</h2>
              <p style={{ fontSize: "var(--fs-body-lg)", marginBottom: "var(--space-4)" }}>
                I started exploring product strategy and growth systems through independent case studies, startup exposure, and research-driven projects during my time at IIT Roorkee.
              </p>
              <p style={{ marginBottom: "var(--space-5)" }}>
                Over time, I became increasingly interested in how products shape user behavior, how businesses scale, and how strategic systems influence decision-making. My work focuses on combining structured thinking, behavioral analysis, and product exploration through long-form research and experimentation.
              </p>
              <button
                onClick={() => navigateTo("#/about")}
                className="mono-btn"
                data-magnetic
                data-magnetic-strength="0.15"
              >
                Learn More
              </button>
            </div>

            {/* Right: Personal OS Timeline */}
            <div>
              <h3 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--space-5)" }}>Timeline</h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", position: "relative", paddingLeft: "24px" }}>
                {/* Vertical timeline connector */}
                <div style={{ position: "absolute", left: "6px", top: "12px", bottom: "12px", width: "1px", backgroundColor: "var(--border-primary)" }} />

                {[
                  { year: "2024", event: "IIT Roorkee Entry", desc: "Scientific and analytical core engineering foundations." },
                  { year: "2025", event: "Product Exploration", desc: "Independent case studies and startup cohort exposure." },
                  { year: "2026", event: "Research & Strategy", desc: "Systems-based GTM exploration and retention audits." },
                  { year: "Future", event: "Management & Systems", desc: "Strategic product leadership & B-school exploration." }
                ].map((item) => (
                  <div key={item.year} style={{ position: "relative" }}>
                    {/* Timeline node dot */}
                    <div
                      className="timeline-dot"
                      style={{
                        position: "absolute",
                        left: "-23px",
                        top: "6px",
                        width: "11px",
                        height: "11px",
                        borderRadius: "50%",
                        backgroundColor: "var(--bg-primary)",
                        border: "2px solid var(--accent)",
                        transition: "all 0.3s ease"
                      }}
                    />
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "4px" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-3)" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontWeight: "bold", color: "var(--terminal-green)", fontSize: "var(--fs-small)" }}>
                          {item.year}
                        </span>
                        <h4 style={{ fontSize: "var(--fs-body)", fontWeight: "bold" }}>{item.event}</h4>
                      </div>
                      <p style={{ fontSize: "11px", color: "var(--text-secondary)", paddingLeft: "0px", margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Embedded Styles */}
      <style>{`
        /* Project hover animations */
        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent) !important;
        }
        .project-card:hover img {
          transform: scale(1.05);
          opacity: 0.95;
        }
        .project-card:hover .card-arrow {
          transform: translate(2px, -2px);
          color: var(--terminal-green);
        }
        .card-arrow {
          transition: transform 0.3s var(--ease-primary);
        }

        /* Research system cards hover effect */
        .research-system-card:hover {
          border-color: var(--accent) !important;
          transform: translateY(-4px);
        }



        /* Essay rows hover */
        .essay-row:hover {
          border-color: var(--accent) !important;
          background-color: var(--bg-tertiary);
        }
        .essay-row:hover .essay-row-arrow {
          transform: translate(2px, -2px);
          color: var(--text-primary) !important;
        }
        .essay-row-arrow {
          transition: transform 0.3s var(--ease-primary);
        }

        /* Timeline dot interaction */
        .timeline-dot:hover {
          border-color: var(--terminal-green) !important;
          transform: scale(1.3);
        }

        /* Portrait zoom transition on container hover */
        .hero-portrait-column:hover .portrait-hover-scale {
          transform: scale(1.03);
        }

        /* Responsive custom hacks */
        @media (max-width: 1024px) {
          .hero-grid-mobile {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-portrait-column {
            order: -1;
            margin-bottom: var(--space-6);
          }
          .hero-grid-mobile div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .research-grid-mobile {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .research-grid-mobile {
            grid-template-columns: 1fr !important;
          }
          .focus-table-mobile-header {
            display: none !important;
          }
          .focus-row {
            grid-template-columns: 1fr !important;
            gap: 8px;
            padding: var(--space-4) !important;
          }
          .about-preview-mobile {
            grid-template-columns: 1fr !important;
            gap: var(--space-6) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
