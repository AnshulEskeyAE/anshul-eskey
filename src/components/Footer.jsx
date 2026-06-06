import React from "react";
import { useNavigation } from "../context/NavigationContext";
import { Mail, FileText, ArrowUpRight } from "lucide-react";
import { LinkedIn as Linkedin, GitHub as Github } from "./Icons";

const Footer = () => {
  const { navigateTo } = useNavigation();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-primary)",
        backgroundColor: "var(--bg-secondary)",
        padding: "var(--space-8) 0 var(--space-6) 0",
        marginTop: "auto"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "var(--space-6)",
            marginBottom: "var(--space-8)"
          }}
          className="footer-grid-mobile"
        >
          {/* Personal Thesis */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: "800",
                fontSize: "1.1rem",
                letterSpacing: "0.08em",
                color: "var(--text-primary)",
                marginBottom: "var(--space-3)"
              }}
            >
              [ANSHUL ESKEY]
            </div>
            <p style={{ maxWidth: "340px", fontSize: "var(--fs-small)" }}>
              Personal portfolio of Anshul Eskey, exploring product strategy, growth systems, behavioral design, and business intelligence.
            </p>
          </div>

          {/* Navigation Directory */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--fs-small)",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "var(--space-3)",
                letterSpacing: "0.05em"
              }}
            >
              Directory
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-2)", fontSize: "var(--fs-small)" }}>
              <li>
                <a href="#/projects" onClick={(e) => { e.preventDefault(); navigateTo("#/projects"); }} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  Selected Projects <ArrowUpRight size={10} />
                </a>
              </li>
              <li>
                <a href="#/research" onClick={(e) => { e.preventDefault(); navigateTo("#/research"); }} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  Research Interests <ArrowUpRight size={10} />
                </a>
              </li>
              <li>
                <a href="#/notes" onClick={(e) => { e.preventDefault(); navigateTo("#/notes"); }} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  Notes <ArrowUpRight size={10} />
                </a>
              </li>
              <li>
                <a href="#/reflections" onClick={(e) => { e.preventDefault(); navigateTo("#/reflections"); }} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  Reflections <ArrowUpRight size={10} />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Details */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--fs-small)",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "var(--space-3)",
                letterSpacing: "0.05em"
              }}
            >
              Connect
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", fontSize: "var(--fs-small)" }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Linkedin size={12} /> LinkedIn
              </a>
              <a href="mailto:anshuleskey999@gmail.com" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Mail size={12} /> anshuleskey999@gmail.com
              </a>
              <a href="#/resume" onClick={(e) => { e.preventDefault(); navigateTo("#/resume"); }} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <FileText size={12} /> Resume
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Status Bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-secondary)",
            paddingTop: "var(--space-4)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "var(--fs-xs)",
            fontFamily: "var(--font-mono)",
            color: "var(--text-muted)"
          }}
          className="footer-bottom-mobile"
        >
          <div>
            © {new Date().getFullYear()} Anshul Eskey. All rights reserved.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "var(--terminal-green)",
                borderRadius: "50%",
                display: "inline-block"
              }}
              className="pulse-status"
            />
            PORTFOLIO ACTIVE
          </div>
        </div>
      </div>

      <style>{`
        .pulse-status {
          animation: statusPulse 1.8s infinite ease-in-out;
        }
        @keyframes statusPulse {
          0%, 100% { opacity: 0.35; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @media (max-width: 768px) {
          .footer-grid-mobile {
            grid-template-columns: 1fr !important;
            gap: var(--space-5) !important;
          }
          .footer-bottom-mobile {
            flex-direction: column !important;
            gap: var(--space-3) !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
