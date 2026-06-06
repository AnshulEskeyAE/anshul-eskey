import React, { useState, useEffect } from "react";
import { Search, FileText, ArrowUpRight } from "lucide-react";
import { initScrollStagger } from "../animations";
import { getResearchNotes, getProjects, getEssays, getEssayById } from "../contentRegistry";
import ResearchCard from "../components/ResearchCard";
import ProjectCard from "../components/ProjectCard";
import EssayCard from "../components/EssayCard";
import { useNavigation } from "../context/NavigationContext";

const ResearchArchive = () => {
  const { navigateTo } = useNavigation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedNoteId, setExpandedNoteId] = useState(null);

  const researchNotes = getResearchNotes();
  const projects = getProjects();
  const essays = getEssays();

  const categories = ["All", ...new Set(researchNotes.map(n => n.category))];

  // Global search filtering logic across projects, essays, and research notes
  const searchLower = searchQuery.toLowerCase();
  const isSearching = searchQuery.trim().length > 0;

  const matchedNotes = researchNotes.filter((note) => {
    const matchesCategory = activeCategory === "All" || note.category === activeCategory;
    const matchesSearch = !isSearching || 
                          note.title.toLowerCase().includes(searchLower) || 
                          note.tags.some(t => t.toLowerCase().includes(searchLower)) ||
                          note.abstract.toLowerCase().includes(searchLower);
    return matchesCategory && matchesSearch;
  });

  const matchedProjects = isSearching ? projects.filter((proj) => 
    proj.title.toLowerCase().includes(searchLower) ||
    proj.description.toLowerCase().includes(searchLower) ||
    proj.tags.some(t => t.toLowerCase().includes(searchLower))
  ) : [];

  const matchedEssays = isSearching ? essays.filter((essay) => 
    essay.title.toLowerCase().includes(searchLower) ||
    essay.summary.toLowerCase().includes(searchLower) ||
    essay.category.toLowerCase().includes(searchLower)
  ) : [];

  useEffect(() => {
    initScrollStagger(".research-archive-container", ".research-note-card");
  }, [activeCategory, searchQuery]);

  return (
    <div className="section-pad">
      <div className="container">
        
        {/* Header Block */}
        <div style={{ marginBottom: "var(--space-8)" }}>
          <h1 style={{ fontSize: "var(--fs-display-lg)", marginBottom: "var(--space-4)" }}>Research Interests</h1>
          <p style={{ maxWidth: "600px", color: "var(--text-secondary)", fontSize: "var(--fs-body-lg)" }}>
            Thoughtful explorations, active areas of curiosity, systems thinking, and strategy investigations.
          </p>
        </div>

        {/* Dynamic Controls Bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "var(--space-5)",
            alignItems: "center",
            marginBottom: "var(--space-6)",
            borderBottom: "1px solid var(--border-primary)",
            paddingBottom: "var(--space-5)"
          }}
          className="research-controls-mobile"
        >
          {/* Category Filter list */}
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`mono-btn ${activeCategory === cat ? "active" : ""}`}
                style={{ padding: "6px 14px", fontSize: "11px" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar integration */}
          <div style={{ position: "relative" }}>
            <Search size={14} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
            <input
              type="text"
              placeholder="Search across projects, essays & notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px 10px 36px",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border-primary)",
                color: "var(--text-primary)",
                outline: "none",
                borderRadius: "var(--radius-md)"
              }}
            />
          </div>
        </div>

        {/* Global Search Results Display */}
        {isSearching && (matchedProjects.length > 0 || matchedEssays.length > 0) && (
          <div style={{ marginBottom: "var(--space-8)", borderBottom: "1px solid var(--border-secondary)", paddingBottom: "var(--space-6)" }}>
            <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)", color: "var(--terminal-orange)", marginBottom: "var(--space-5)" }}>
              CROSS-ARCHIVE SEARCH HITS
            </h2>
            
            {matchedProjects.length > 0 && (
              <div style={{ marginBottom: "var(--space-6)" }}>
                <h3 style={{ fontSize: "var(--fs-small)", fontFamily: "var(--font-mono)", color: "var(--text-muted)", marginBottom: "var(--space-3)" }}>
                  MATCHING PROJECTS ({matchedProjects.length})
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }} className="research-grid-mobile">
                  {matchedProjects.map(proj => (
                    <ProjectCard key={proj.id} project={proj} onClick={() => navigateTo(`#/projects/${proj.id}`)} />
                  ))}
                </div>
              </div>
            )}

            {matchedEssays.length > 0 && (
              <div>
                <h3 style={{ fontSize: "var(--fs-small)", fontFamily: "var(--font-mono)", color: "var(--text-muted)", marginBottom: "var(--space-3)" }}>
                  MATCHING ESSAYS ({matchedEssays.length})
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                  {matchedEssays.map(essay => (
                    <EssayCard key={essay.id} essay={essay} onClick={() => navigateTo("#/essays")} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Database Content Grid */}
        <div>
          {isSearching && (
            <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)", color: "var(--terminal-green)", marginBottom: "var(--space-4)" }}>
              MATCHING RESEARCH NOTES ({matchedNotes.length})
            </h2>
          )}
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-5)"
            }}
            className="research-archive-container research-grid-mobile"
          >
            {matchedNotes.map((note, index) => (
              <ResearchCard
                key={index}
                note={note}
                onClick={() => setExpandedNoteId(note.id)}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Premium Research Drawer */}
        {expandedNoteId && (() => {
          const note = researchNotes.find(n => n.id === expandedNoteId);
          if (!note) return null;
          return (
            <div
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                backdropFilter: "blur(8px)",
                zIndex: "var(--z-overlay)",
                display: "flex",
                justifyContent: "flex-end",
                transition: "all 0.4s ease"
              }}
              onClick={() => setExpandedNoteId(null)}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "100%",
                  backgroundColor: "var(--bg-secondary)",
                  borderLeft: "1px solid var(--border-primary)",
                  padding: "var(--space-6)",
                  display: "flex",
                  flexDirection: "column",
                  overflowY: "auto",
                  position: "relative",
                  boxShadow: "-10px 0 30px rgba(0,0,0,0.5)"
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header info */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--space-5)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--terminal-green)" }}>
                    {note.type.toUpperCase()} // {note.date}
                  </span>
                  <button
                    onClick={() => setExpandedNoteId(null)}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer"
                    }}
                  >
                    [CLOSE_X]
                  </button>
                </div>

                <h2 style={{ fontSize: "var(--fs-h1)", marginBottom: "var(--space-4)", lineHeight: "1.1" }}>
                  {note.title}
                </h2>

                <p style={{ fontSize: "var(--fs-body)", color: "var(--text-secondary)", marginBottom: "var(--space-6)", lineHeight: "var(--lh-loose)" }}>
                  {note.abstract}
                </p>

                {/* Frameworks */}
                <div style={{ marginBottom: "var(--space-6)", borderTop: "1px solid var(--border-primary)", paddingTop: "var(--space-4)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", marginBottom: "var(--space-3)" }}>
                    ACTIVE_FRAMEWORKS:
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {note.frameworks.map((fw) => (
                      <span
                        key={fw}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "10px",
                          backgroundColor: "var(--bg-primary)",
                          padding: "4px 10px",
                          border: "1px solid var(--border-secondary)",
                          color: "var(--text-secondary)"
                        }}
                      >
                        {fw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interconnection mappings */}
                <div style={{ marginBottom: "var(--space-6)", borderTop: "1px solid var(--border-primary)", paddingTop: "var(--space-4)", flexGrow: 1 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", marginBottom: "var(--space-3)" }}>
                    INTERCONNECTED_LOGS:
                  </div>
                  
                  {note.relatedProjects?.length > 0 && (
                    <div style={{ marginBottom: "12px" }}>
                      <span style={{ fontSize: "11px", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>Related Projects:</span>
                      {note.relatedProjects.map(projId => {
                        const proj = projects.find(p => p.id === projId);
                        if (!proj) return null;
                        return (
                          <div
                            key={projId}
                            onClick={() => { setExpandedNoteId(null); navigateTo(`#/projects/${projId}`); }}
                            style={{ cursor: "pointer", fontSize: "12px", color: "var(--terminal-blue)", textDecoration: "underline", marginBottom: "4px" }}
                          >
                            {proj.title}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {note.relatedEssays?.length > 0 && (
                    <div>
                      <span style={{ fontSize: "11px", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>Related Essays:</span>
                      {note.relatedEssays.map(essayId => {
                        const essay = getEssayById(essayId);
                        if (!essay) return null;
                        return (
                          <div
                            key={essayId}
                            onClick={() => { setExpandedNoteId(null); navigateTo("#/essays"); }}
                            style={{ cursor: "pointer", fontSize: "12px", color: "var(--terminal-green)", textDecoration: "underline", marginBottom: "4px" }}
                          >
                            {essay.title}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Notion Deep Link CTA */}
                {note.notionLink && (
                  <a
                    href={note.notionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono-btn active"
                    style={{
                      width: "100%",
                      padding: "16px",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px"
                    }}
                  >
                    Open Deep Notes in Notion <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          );
        })()}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .research-controls-mobile {
            grid-template-columns: 1fr !important;
            gap: var(--space-4) !important;
          }
          .research-grid-mobile {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ResearchArchive;
