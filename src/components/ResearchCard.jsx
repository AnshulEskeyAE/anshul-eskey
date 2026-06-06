import React from "react";
import { ArrowUpRight, FileText } from "lucide-react";

export const ResearchCard = ({ note, onClick }) => {
  return (
    <div
      className="research-note-card border-grid"
      style={{
        padding: "var(--space-5)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transition: "all 0.3s ease"
      }}
    >
      {/* Card Meta row */}
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", marginBottom: "var(--space-3)" }}>
        <span>{note.type}</span>
        <span>{note.date}</span>
      </div>

      <h3 style={{ fontSize: "var(--fs-h3)", marginBottom: "var(--space-2)" }}>{note.title}</h3>
      <p style={{ fontSize: "var(--fs-small)", color: "var(--text-secondary)", marginBottom: "var(--space-4)", flexGrow: 1 }}>
        {note.abstract}
      </p>

      {/* Framework tags list */}
      {note.frameworks && note.frameworks.length > 0 && (
        <div style={{ borderTop: "1px solid var(--border-secondary)", paddingTop: "var(--space-3)", marginBottom: "var(--space-4)" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--text-muted)", marginBottom: "6px" }}>
            INTEGRATED_FRAMEWORKS:
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {note.frameworks.map((fw) => (
              <span
                key={fw}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  backgroundColor: "var(--bg-tertiary)",
                  padding: "3px 8px",
                  border: "1px solid var(--border-primary)",
                  color: "var(--text-secondary)"
                }}
              >
                {fw}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tags & Action callout */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
        <div style={{ display: "flex", gap: "6px" }}>
          {note.tags.map((tag) => (
            <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--text-muted)" }}>
              #{tag}
            </span>
          ))}
        </div>

        <div
          onClick={onClick}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--terminal-green)",
            cursor: "pointer"
          }}
          className="research-open-btn"
        >
          <FileText size={12} /> Open Research <ArrowUpRight size={10} className="open-arrow" />
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;
