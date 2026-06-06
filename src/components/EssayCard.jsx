import React from "react";
import { ArrowUpRight, Clock } from "lucide-react";

export const EssayCard = ({ essay, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="essay-row-item border-grid"
      style={{
        padding: "var(--space-5)",
        cursor: "pointer",
        transition: "all 0.3s var(--ease-primary)"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "var(--space-2)"
        }}
        className="essay-row-header-mobile"
      >
        <h4 style={{ fontSize: "var(--fs-h3)", fontWeight: "600" }}>{essay.title}</h4>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--fs-small)",
            color: "var(--text-muted)",
            backgroundColor: "var(--bg-primary)",
            padding: "4px 8px",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--border-secondary)"
          }}
          className="essay-row-time-mobile"
        >
          <Clock size={10} /> {essay.readTime}
        </div>
      </div>

      <p style={{ fontSize: "var(--fs-small)", color: "var(--text-secondary)", marginBottom: "var(--space-3)" }}>
        {essay.summary}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--text-muted)"
        }}
      >
        <div style={{ display: "flex", gap: "12px" }}>
          <span>{essay.date}</span>
          <span>•</span>
          <span>{essay.category}</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            color: "var(--terminal-green)"
          }}
          className="essay-row-explore"
        >
          Read Essay <ArrowUpRight size={12} className="essay-arrow" />
        </div>
      </div>
    </div>
  );
};

export default EssayCard;
