import React, { useState } from "react";
import { Clock, Tag } from "lucide-react";
import { getEssays } from "../contentRegistry";
import EssayCard from "../components/EssayCard";

const Essays = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const essays = getEssays();
  const categories = ["All", ...new Set(essays.map(e => e.category))];

  const filteredEssays = selectedCategory === "All"
    ? essays
    : essays.filter(e => e.category === selectedCategory);

  const featuredEssay = essays.find(e => e.featured);

  return (
    <div className="section-pad">
      <div className="container" style={{ maxWidth: "var(--reading-max)" }}>
        
        {/* Header Block */}
        <div style={{ marginBottom: "var(--space-8)", textAlign: "center" }}>
          <h1 style={{ fontSize: "var(--fs-display-lg)", marginBottom: "var(--space-4)" }}>Notes</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "var(--fs-body-lg)" }}>
            Analytical strategy essays, product design breakdowns, growth studies, and learning notes.
          </p>
        </div>

        {/* Categories Pills */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "var(--space-8)",
            borderBottom: "1px solid var(--border-primary)",
            paddingBottom: "var(--space-5)"
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`mono-btn ${selectedCategory === cat ? "active" : ""}`}
              style={{ padding: "6px 14px", fontSize: "11px" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FEATURED ESSAY */}
        {selectedCategory === "All" && featuredEssay && (
          <div
            className="featured-essay-card border-grid"
            style={{
              padding: "var(--space-6)",
              marginBottom: "var(--space-8)",
              cursor: "pointer",
              transition: "border-color 0.3s ease"
            }}
          >
            <div style={{ display: "flex", gap: "12px", fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)", color: "var(--terminal-orange)", marginBottom: "12px" }}>
              <span>FEATURED ARTICLE</span>
              <span>•</span>
              <span>{featuredEssay.date}</span>
            </div>

            <h2 style={{ fontSize: "var(--fs-display-md)", marginBottom: "var(--space-3)", lineHeight: "1.05" }}>
              {featuredEssay.title}
            </h2>

            <p style={{ fontSize: "var(--fs-body-lg)", color: "var(--text-secondary)", marginBottom: "var(--space-4)", lineHeight: "var(--lh-loose)" }}>
              {featuredEssay.summary}
            </p>

            <div style={{ display: "flex", gap: "24px", color: "var(--text-muted)", fontSize: "var(--fs-small)", fontFamily: "var(--font-mono)", marginBottom: "var(--space-5)" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><Tag size={12} /> {featuredEssay.category}</span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><Clock size={12} /> {featuredEssay.readTime}</span>
            </div>

            {/* Simulated Reading Sandbox */}
            <div
              style={{
                backgroundColor: "var(--bg-primary)",
                border: "1px solid var(--border-primary)",
                padding: "var(--space-5)",
                fontFamily: "var(--font-sans)",
                borderRadius: "var(--radius-sm)",
                lineHeight: "1.8",
                fontSize: "14px",
                color: "var(--text-secondary)"
              }}
            >
              <p style={{ marginBottom: "12px", fontStyle: "italic", fontSize: "13px", color: "var(--text-muted)" }}>
                Snippet:
              </p>
              {typeof featuredEssay.content === "string" ? featuredEssay.content : featuredEssay.content?.body || ""}
            </div>
          </div>
        )}

        {/* FEED LIST */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "var(--space-2)" }}>
            Articles ({filteredEssays.length})
          </h3>

          {filteredEssays.map((essay, idx) => (
            <EssayCard
              key={essay.id || idx}
              essay={essay}
            />
          ))}
        </div>

      </div>

      <style>{`
        .featured-essay-card:hover {
          border-color: var(--accent) !important;
        }
        .essay-row-item:hover {
          border-color: var(--accent) !important;
          background-color: var(--bg-secondary);
        }
        .essay-row-item:hover .essay-row-explore {
          color: var(--text-primary) !important;
        }
        .essay-row-item:hover .essay-arrow {
          transform: translate(1.5px, -1.5px);
        }
        .essay-arrow {
          transition: transform 0.3s var(--ease-primary);
        }
        @media (max-width: 768px) {
          .essay-row-header-mobile {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px;
          }
          .essay-row-time-mobile {
            margin-top: 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default Essays;
