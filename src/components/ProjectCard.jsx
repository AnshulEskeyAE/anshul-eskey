import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export const ProjectCard = ({ project, onClick }) => {
  const [imgSrc, setImgSrc] = useState(project.thumbnail);

  useEffect(() => {
    setImgSrc(project.thumbnail);
  }, [project.thumbnail]);

  return (
    <div
      onClick={onClick}
      className="project-card border-grid"
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.4s var(--ease-primary), border-color 0.4s ease"
      }}
    >
      {/* Thumbnail Image Container */}
      <div
        style={{
          width: "100%",
          height: "260px",
          overflow: "hidden",
          borderBottom: "1px solid var(--border-primary)",
          backgroundColor: "#111",
          position: "relative"
        }}
        className="project-img-box"
      >
        <img
          src={imgSrc}
          alt={project.title}
          onError={() => {
            setImgSrc("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 500%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23111%22/><text x=%22600%22 y=%22250%22 fill=%22%23ff3b30%22 font-family=%22monospace%22 font-size=%2214%22 text-anchor=%22middle%22>IMAGE_LOAD_FAILED</text></svg>");
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: "0.8",
            transition: "transform 0.8s var(--ease-primary), opacity 0.5s ease"
          }}
        />
      </div>

      {/* Metadata & Title */}
      <div style={{ padding: "var(--space-5)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "var(--space-3)" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--text-muted)",
                border: "1px solid var(--border-secondary)",
                padding: "2px 6px",
                borderRadius: "var(--radius-sm)"
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--space-2)" }}>{project.title}</h3>
        <p style={{ fontSize: "var(--fs-body)", color: "var(--text-secondary)" }}>{project.description}</p>
        
        <div
          style={{
            marginTop: "var(--space-4)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--fs-small)",
            color: "var(--terminal-green)"
          }}
          className="card-explore-link"
        >
          View Case Study <ArrowUpRight size={14} className="card-arrow" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
