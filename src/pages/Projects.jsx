import React, { useState, useEffect } from "react";
import { useNavigation } from "../context/NavigationContext";
import { initScrollStagger } from "../animations";
import { getProjects } from "../contentRegistry";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const { navigateTo } = useNavigation();
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = getProjects();
  const categories = ["All", ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  useEffect(() => {
    initScrollStagger(".projects-grid-container", ".project-card-item");
  }, [activeCategory]);

  return (
    <div className="section-pad">
      <div className="container">
        {/* Hero Area */}
        <div style={{ marginBottom: "var(--space-8)" }}>
          <h1 style={{ fontSize: "var(--fs-display-lg)", marginBottom: "var(--space-4)" }}>Selected Projects</h1>
          <p style={{ maxWidth: "620px", color: "var(--text-secondary)", fontSize: "var(--fs-body-lg)" }}>
            Research-driven explorations into products, systems, growth strategy, and user behavior.
          </p>
        </div>

        {/* Filter Bar */}
        <div
          style={{
            display: "flex",
            gap: "var(--space-3)",
            marginBottom: "var(--space-8)",
            borderBottom: "1px solid var(--border-primary)",
            paddingBottom: "var(--space-4)",
            flexWrap: "wrap"
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`mono-btn ${activeCategory === cat ? "active" : ""}`}
              style={{ padding: "8px 20px" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "var(--space-6)"
          }}
          className="projects-grid-container"
        >
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              style={{ gridColumn: "span 6" }}
              className="project-card-item"
            >
              <ProjectCard
                project={p}
                onClick={() => navigateTo(`#/projects/${p.id}`)}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card-item {
          transition: all 0.4s var(--ease-primary);
        }
        @media (max-width: 768px) {
          .project-card-item {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
