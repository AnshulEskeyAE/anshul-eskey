import React, { useState } from "react";
import { Mail, ArrowUpRight, Send, Check } from "lucide-react";
import { LinkedIn as Linkedin } from "../components/Icons";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    brief: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Verification Error: Contact fields are missing.");
      return;
    }
    
    // Simulate submission transmission
    setFormSubmitted(true);
  };

  return (
    <div className="section-pad">
      <div className="container" style={{ maxWidth: "var(--reading-max)" }}>
        
        {/* Header Block */}
        <div style={{ marginBottom: "var(--space-8)", textAlign: "center" }}>
          <h1 style={{ fontSize: "var(--fs-display-lg)", marginBottom: "var(--space-4)" }}>Contact</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "var(--fs-body-lg)" }}>
            Open to conversations around product strategy, growth systems, research, and opportunities.
          </p>
        </div>

        {/* Quick Contact Directories */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-5)",
            marginBottom: "var(--space-8)"
          }}
          className="contact-grid-mobile"
        >
          <a href="mailto:anshuleskey999@gmail.com" className="border-grid" style={{ padding: "var(--space-5)", display: "flex", alignItems: "center", gap: "12px", transition: "all 0.3s ease" }}>
            <div style={{ color: "var(--terminal-green)" }}><Mail size={18} /></div>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)" }}>EMAIL</div>
              <strong style={{ fontSize: "var(--fs-body)" }}>anshuleskey999@gmail.com</strong>
            </div>
          </a>

          <a href="https://linkedin.com/in/anshul-eskey" target="_blank" rel="noopener noreferrer" className="border-grid" style={{ padding: "var(--space-5)", display: "flex", alignItems: "center", gap: "12px", transition: "all 0.3s ease" }}>
            <div style={{ color: "var(--terminal-blue)" }}><Linkedin size={18} /></div>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)" }}>CONNECT</div>
              <strong style={{ fontSize: "var(--fs-body)" }}>LinkedIn Profile <ArrowUpRight size={12} style={{ display: "inline" }} /></strong>
            </div>
          </a>
        </div>

        {/* Briefing Request Form */}
        <div className="border-grid" style={{ padding: "var(--space-6)", backgroundColor: "var(--bg-secondary)" }}>
          <h3 style={{ fontSize: "var(--fs-h3)", marginBottom: "var(--space-5)", borderBottom: "1px solid var(--border-primary)", paddingBottom: "var(--space-3)" }}>
            Send a Message
          </h3>

          {formSubmitted ? (
            <div style={{ textAlign: "center", padding: "var(--space-6)" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0, 255, 136, 0.1)",
                  border: "1px solid var(--terminal-green)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto var(--space-4) auto"
                }}
              >
                <Check size={24} style={{ color: "var(--terminal-green)" }} />
              </div>
              <h4 style={{ fontSize: "var(--fs-h3)", marginBottom: "8px" }}>Message Sent</h4>
              <p style={{ fontSize: "var(--fs-small)", color: "var(--text-muted)" }}>
                Thank you. Your message has been sent successfully. I will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="contact-grid-mobile">
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--text-muted)", marginBottom: "6px" }}>
                    YOUR NAME [REQUIRED]
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="premium-input"
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--text-muted)", marginBottom: "6px" }}>
                    ORGANIZATION
                  </label>
                  <input
                    type="text"
                    value={formData.org}
                    onChange={(e) => setFormData(prev => ({ ...prev, org: e.target.value }))}
                    className="premium-input"
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--text-muted)", marginBottom: "6px" }}>
                  EMAIL ADDRESS [REQUIRED]
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="premium-input"
                />
              </div>

              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--text-muted)", marginBottom: "6px" }}>
                  MESSAGE
                </label>
                <textarea
                  rows="4"
                  value={formData.brief}
                  onChange={(e) => setFormData(prev => ({ ...prev, brief: e.target.value }))}
                  className="premium-input"
                  style={{ resize: "none" }}
                  placeholder="Tell me about your product strategy challenge, project idea, or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="mono-btn active"
                style={{
                  width: "100%",
                  padding: "14px",
                  justifyContent: "center",
                  marginTop: "var(--space-2)"
                }}
              >
                Send Message <Send size={12} style={{ marginLeft: "6px" }} />
              </button>

            </form>
          )}
        </div>

      </div>

      <style>{`
        .premium-input {
          width: 100%;
          padding: 12px;
          font-family: var(--font-sans);
          font-size: 13px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-primary);
          color: var(--text-primary);
          outline: none;
          border-radius: var(--radius-sm);
          transition: all 0.3s ease;
        }
        .premium-input:focus {
          border-color: var(--accent);
          background-color: var(--bg-tertiary);
        }
        .border-grid:hover {
          border-color: rgba(255, 255, 255, 0.12) !important;
        }
        @media (max-width: 768px) {
          .contact-grid-mobile {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
