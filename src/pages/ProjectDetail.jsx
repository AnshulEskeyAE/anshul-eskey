import React, { useState, useEffect } from "react";
import { useNavigation } from "../context/NavigationContext";
import { ArrowLeft, ArrowRight, ShieldCheck, HelpCircle, Layers, Activity, Star, Eye } from "lucide-react";
import { getProjectById, getProjects, getEssayById, getResearchNotes } from "../contentRegistry";
import PdfViewer from "../components/PdfViewer";

const ProjectDetail = () => {
  const { currentPath, navigateTo } = useNavigation();
  
  // Extract project ID from path hash
  const pathParts = currentPath.split("/");
  const projectId = pathParts[pathParts.length - 1] || "perplexity-gtm";

  const rawCase = getProjectById(projectId) || getProjects()[0];
  const caseData = {
    ...rawCase,
    ...rawCase.content
  };
  
  const [imgSrc, setImgSrc] = useState(caseData.image);
  const [showPdfPreview, setShowPdfPreview] = useState(false);

  useEffect(() => {
    setImgSrc(caseData.image);
    setShowPdfPreview(false);
  }, [caseData.id]);

  // Dynamically calculate the next project to read
  const allProjects = getProjects();
  const currentIndex = allProjects.findIndex(p => p.id === caseData.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div style={{ paddingBottom: "var(--space-10)" }}>
      {/* 1. HERO SECTION */}
      <section
        style={{
          borderBottom: "1px solid var(--border-primary)",
          backgroundColor: "var(--bg-secondary)",
          padding: "var(--space-8) 0"
        }}
      >
        <div className="container">
          <button
            onClick={() => navigateTo("#/projects")}
            className="mono-btn"
            style={{ marginBottom: "var(--space-6)", padding: "8px 16px" }}
          >
            <ArrowLeft size={12} style={{ marginRight: "6px" }} /> Back to projects
          </button>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 0.7fr",
              gap: "var(--space-6)",
              alignItems: "flex-end",
              marginBottom: "var(--space-6)"
            }}
            className="detail-hero-mobile"
          >
            <div>
              <h1 style={{ fontSize: "var(--fs-display-md)", marginBottom: "var(--space-3)" }}>{caseData.title}</h1>
              <p style={{ fontSize: "var(--fs-body-lg)", color: "var(--text-secondary)", maxWidth: "620px" }}>
                {caseData.thesis}
              </p>
            </div>

            <div
              style={{
                border: "1px solid var(--border-primary)",
                padding: "var(--space-4)",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--bg-primary)",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--fs-small)"
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div style={{ color: "var(--text-muted)" }}>TIMELINE:</div>
                <div style={{ color: "var(--text-primary)" }}>{caseData.timeline}</div>
                <div style={{ color: "var(--text-muted)" }}>CATEGORY:</div>
                <div style={{ color: "var(--text-primary)" }}>{caseData.category}</div>
                <div style={{ color: "var(--text-muted)" }}>ROLE:</div>
                <div style={{ color: "var(--text-primary)" }}>{caseData.role}</div>
              </div>
            </div>
          </div>

          {/* Large cover image */}
          <div
            style={{
              width: "100%",
              height: "440px",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid var(--border-primary)",
              backgroundColor: "#111"
            }}
            className="detail-hero-image"
          >
            <img
              src={imgSrc}
              alt={caseData.title}
              onError={() => {
                setImgSrc("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 500%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23111%22/><text x=%22600%22 y=%22250%22 fill=%22%23ff3b30%22 font-family=%22monospace%22 font-size=%2214%22 text-anchor=%22middle%22>IMAGE_LOAD_FAILED</text></svg>");
              }}
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: "0.85" }}
            />
          </div>
        </div>
      </section>

      {/* CASE STUDY CORE CONTENT */}
      <section className="section-pad">
        <div className="container" style={{ maxWidth: "var(--case-max)" }}>
          
          {/* 1. PROBLEM */}
          <div className="case-section border-grid" style={{ padding: "var(--space-6)", marginBottom: "var(--space-6)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)", color: "var(--terminal-orange)", marginBottom: "12px" }}>
              <HelpCircle size={16} /> 01 // PROBLEM
            </div>
            <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--space-3)" }}>The Critical Problem</h2>
            <p>{caseData.problem}</p>
          </div>

          {/* 2. CONTEXT */}
          <div className="case-section border-grid" style={{ padding: "var(--space-6)", marginBottom: "var(--space-6)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)", color: "var(--terminal-blue)", marginBottom: "12px" }}>
              <Layers size={16} /> 02 // CONTEXT
            </div>
            <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--space-3)" }}>Context & Boundaries</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginTop: "var(--space-4)" }} className="context-cols-mobile">
              <div style={{ borderRight: "1px solid var(--border-secondary)", paddingRight: "12px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)" }}>INDUSTRY</div>
                <div style={{ fontWeight: "bold", fontSize: "13px", marginTop: "4px" }}>{caseData.context.industry}</div>
              </div>
              <div style={{ borderRight: "1px solid var(--border-secondary)", paddingRight: "12px" }} className="no-border-mobile">
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)" }}>TARGET MARKET</div>
                <div style={{ fontWeight: "bold", fontSize: "13px", marginTop: "4px" }}>{caseData.context.market}</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)" }}>USER SEGMENT</div>
                <div style={{ fontWeight: "bold", fontSize: "13px", marginTop: "4px" }}>{caseData.context.segment}</div>
              </div>
            </div>
          </div>

          {/* 3. OBSERVATIONS */}
          <div className="case-section border-grid" style={{ padding: "var(--space-6)", marginBottom: "var(--space-6)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)", color: "var(--terminal-green)", marginBottom: "12px" }}>
              <Star size={16} /> 03 // OBSERVATIONS
            </div>
            <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--space-3)" }}>Key Observations</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "var(--space-4)" }}>
              <div>
                <strong style={{ fontSize: "13px" }}>Observed Action:</strong>
                <p style={{ fontSize: "var(--fs-small)", color: "var(--text-secondary)" }}>{caseData.research.observations}</p>
              </div>
              <div>
                <strong style={{ fontSize: "13px" }}>Core Insight:</strong>
                <p style={{ fontSize: "var(--fs-small)", color: "var(--text-secondary)" }}>{caseData.research.insights}</p>
              </div>
              <div>
                <strong style={{ fontSize: "13px" }}>Friction Vector:</strong>
                <p style={{ fontSize: "var(--fs-small)", color: "var(--text-secondary)" }}>{caseData.research.painPoints}</p>
              </div>
            </div>
          </div>

          {/* 4. ANALYSIS */}
          <div className="case-section border-grid" style={{ padding: "var(--space-6)", marginBottom: "var(--space-6)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)", color: "var(--accent)", marginBottom: "12px" }}>
              <Layers size={16} fill="currentColor" /> 04 // ANALYSIS
            </div>
            <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--space-3)" }}>Product & Market Analysis</h2>
            <p style={{ marginBottom: "var(--space-4)" }}>{caseData.analysis.breakdowns}</p>

            <div
              style={{
                border: "1px solid var(--border-primary)",
                borderRadius: "var(--radius-sm)",
                overflow: "hidden",
                marginTop: "var(--space-4)"
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  padding: "10px",
                  backgroundColor: "var(--bg-secondary)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--text-muted)",
                  borderBottom: "1px solid var(--border-primary)"
                }}
                className="analysis-table-mobile-header"
              >
                <div>COGNITIVE ENTITY</div>
                <div>INTELLIGENCE SPEED</div>
                <div>TRUST RATIO</div>
                <div>FRICTION MULTIPLIER</div>
              </div>

              {caseData.analysis.mapping.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    padding: "12px 10px",
                    borderBottom: "1px solid var(--border-secondary)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--fs-small)",
                    alignItems: "center"
                  }}
                  className="analysis-row-mobile"
                >
                  <div style={{ fontWeight: "bold" }}>{m.name}</div>
                  <div style={{ color: "var(--terminal-green)" }}>{m.speed}</div>
                  <div>{m.trust}</div>
                  <div style={{ color: "var(--terminal-orange)" }}>{m.friction}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. STRATEGIC INSIGHTS */}
          <div className="case-section border-grid" style={{ padding: "var(--space-6)", marginBottom: "var(--space-6)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)", color: "var(--terminal-green)", marginBottom: "12px" }}>
              <Eye size={16} /> 05 // STRATEGIC INSIGHTS
            </div>
            <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--space-3)" }}>Strategic Insights</h2>
            <p style={{ fontSize: "var(--fs-body)", color: "var(--text-secondary)" }}>{caseData.strategy.solution}</p>
          </div>

          {/* 6. PROPOSED SOLUTIONS */}
          <div className="case-section border-grid" style={{ padding: "var(--space-6)", marginBottom: "var(--space-6)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)", color: "var(--terminal-green)", marginBottom: "12px" }}>
              <ShieldCheck size={16} /> 06 // PROPOSED SOLUTIONS
            </div>
            <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--space-3)" }}>Proposed Interventions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "var(--space-4)" }}>
              <div>
                <strong>Recommendations:</strong>
                <p style={{ fontSize: "var(--fs-small)", color: "var(--text-secondary)" }}>{caseData.strategy.recommendations}</p>
              </div>
              <div>
                <strong>Proposed Testing Loops:</strong>
                <p style={{ fontSize: "var(--fs-small)", color: "var(--text-secondary)" }}>{caseData.strategy.experiments}</p>
              </div>
            </div>
          </div>



          {/* 7. METRICS */}
          <div className="case-section border-grid" style={{ padding: "var(--space-6)", marginBottom: "var(--space-6)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)", color: "var(--terminal-orange)", marginBottom: "12px" }}>
              <Activity size={16} /> 07 // METRICS
            </div>
            <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--space-3)" }}>Fulfillment & Adoption Metrics</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginTop: "var(--space-4)" }} className="context-cols-mobile">
              <div style={{ borderRight: "1px solid var(--border-secondary)", paddingRight: "12px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)" }}>NORTH STAR</div>
                <div style={{ fontWeight: "bold", fontSize: "13px", marginTop: "4px" }}>{caseData.metrics.northStar}</div>
              </div>
              <div style={{ borderRight: "1px solid var(--border-secondary)", paddingRight: "12px" }} className="no-border-mobile">
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)" }}>GUARDRAILS</div>
                <div style={{ fontWeight: "bold", fontSize: "13px", marginTop: "4px" }}>{caseData.metrics.guardrails}</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)" }}>INPUT INDICATORS</div>
                <div style={{ fontWeight: "bold", fontSize: "13px", marginTop: "4px" }}>{caseData.metrics.indicators}</div>
              </div>
            </div>
          </div>

          {/* 8. LEARNINGS */}
          <div className="case-section border-grid" style={{ padding: "var(--space-6)", marginBottom: "var(--space-8)" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)", color: "var(--text-muted)", marginBottom: "12px" }}>
              08 // LEARNINGS
            </div>
            <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--space-3)" }}>Retrospective Learnings</h2>
            <p>{caseData.reflection}</p>
          </div>

          {/* PDF DELIVERABLE SECTION */}
          {caseData.pdfUrl && (
            <div className="case-section border-grid" style={{ padding: "var(--space-6)", marginBottom: "var(--space-6)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)", color: "var(--terminal-green)", marginBottom: "12px" }}>
                <Layers size={16} /> 08.5 // PROJECT DELIVERABLE
              </div>
              <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--space-4)" }}>Case Study Deliverable</h2>
              <p style={{ fontSize: "var(--fs-body)", color: "var(--text-secondary)", marginBottom: "var(--space-4)" }}>
                Review the complete findings, analytical framework decks, and strategic proposals.
              </p>
              
              <div style={{ display: "flex", gap: "var(--space-3)", marginBottom: showPdfPreview ? "var(--space-5)" : "0" }}>
                {caseData.previewEnabled && (
                  <button 
                    onClick={() => setShowPdfPreview(!showPdfPreview)} 
                    className={`mono-btn ${showPdfPreview ? "active" : ""}`}
                    style={{ padding: "10px 20px" }}
                  >
                    {showPdfPreview ? "Hide Preview Deck" : "Preview Deck"}
                  </button>
                )}
                <a 
                  href={caseData.pdfUrl} 
                  download 
                  className="mono-btn"
                  style={{ padding: "10px 20px", textDecoration: "none", display: "inline-flex", alignItems: "center" }}
                >
                  Download PDF
                </a>
              </div>

              {showPdfPreview && (
                <div style={{ marginTop: "var(--space-4)", width: "100%" }}>
                  <PdfViewer url={caseData.pdfUrl} />
                </div>
              )}
            </div>
          )}

          {/* RELATED CONTENT SECTION */}
          {((caseData.relatedEssays && caseData.relatedEssays.length > 0) || (caseData.relatedResearch && caseData.relatedResearch.length > 0)) && (
            <div className="case-section border-grid" style={{ padding: "var(--space-6)", marginBottom: "var(--space-6)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)", color: "var(--terminal-blue)", marginBottom: "12px" }}>
                <Layers size={16} /> 09 // RELATED INTELLIGENCE
              </div>
              <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--space-4)" }}>Connected Work & Research</h2>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }} className="context-cols-mobile">
                {/* Related Essays */}
                {caseData.relatedEssays && caseData.relatedEssays.length > 0 && (
                  <div>
                    <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", marginBottom: "var(--space-3)" }}>
                      RELATED ESSAYS
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                      {caseData.relatedEssays.map(essayId => {
                        const essay = getEssayById(essayId);
                        if (!essay) return null;
                        return (
                          <div
                            key={essayId}
                            onClick={() => navigateTo("#/essays")}
                            className="border-grid"
                            style={{ padding: "12px", cursor: "pointer", backgroundColor: "var(--bg-secondary)", borderRadius: "var(--radius-sm)" }}
                          >
                            <h4 style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "4px" }}>{essay.title}</h4>
                            <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>{essay.category}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Related Research Notes */}
                {caseData.relatedResearch && caseData.relatedResearch.length > 0 && (
                  <div>
                    <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", marginBottom: "var(--space-3)" }}>
                      RELATED RESEARCH NOTES
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                      {caseData.relatedResearch.map(noteId => {
                        const note = getResearchNotes().find(n => n.id === noteId);
                        if (!note) return null;
                        return (
                          <div
                            key={noteId}
                            onClick={() => navigateTo("#/research")}
                            className="border-grid"
                            style={{ padding: "12px", cursor: "pointer", backgroundColor: "var(--bg-secondary)", borderRadius: "var(--radius-sm)" }}
                          >
                            <h4 style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "4px" }}>{note.title}</h4>
                            <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>{note.category}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* NEXT PROJECT ROUTER */}
          <div
            onClick={() => navigateTo(`#/projects/${nextProject.id}`)}
            className="border-grid next-project-link"
            style={{
              padding: "var(--space-6)",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "all 0.4s var(--ease-primary)"
            }}
          >
            <div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)" }}>CONTINUE READING</span>
              <h3 style={{ fontSize: "var(--fs-h2)", marginTop: "4px" }}>
                Next Case Study: {nextProject.title}
              </h3>
            </div>
            <ArrowRight size={24} style={{ color: "var(--text-muted)" }} className="next-arrow" />
          </div>

        </div>
      </section>

      <style>{`
        .case-section {
          transition: all 0.3s ease;
        }
        .case-section:hover {
          border-color: rgba(255, 255, 255, 0.12) !important;
        }
        .next-project-link {
          transition: all 0.4s var(--ease-primary);
        }
        .next-project-link:hover {
          border-color: var(--accent) !important;
          background-color: var(--bg-secondary);
        }
        .next-project-link:hover .next-arrow {
          transform: translateX(6px);
          color: var(--text-primary) !important;
        }
        .next-arrow {
          transition: transform 0.3s var(--ease-primary);
        }
        @media (max-width: 768px) {
          .detail-hero-mobile {
            grid-template-columns: 1fr !important;
          }
          .detail-hero-image {
            height: 280px !important;
          }
          .context-cols-mobile {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .no-border-mobile {
            border-right: none !important;
          }
          .analysis-table-mobile-header {
            display: none !important;
          }
          .analysis-row-mobile {
            grid-template-columns: 1fr !important;
            gap: 6px;
            padding: var(--space-4) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetail;
