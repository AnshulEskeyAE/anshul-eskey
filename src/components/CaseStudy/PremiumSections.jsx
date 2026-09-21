import React from "react";

// Premium Case Study Section Components for Urban Company PM Case Study
// Reusable components that extend the existing design system
/* eslint-disable no-unused-vars */

// Journey Step Component
export const JourneyStep = ({ step, isLast }) => {
  const statusColors = {
    known: "var(--terminal-green)",
    transition: "var(--terminal-blue)",
    "unknown-before": "var(--terminal-orange)",
    critical: "var(--error)"
  };
  
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center",
      flex: 1,
      position: "relative"
    }}>
      <div style={{
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: `2px solid ${statusColors[step.status] || "var(--border-primary)"}`,
        backgroundColor: `${statusColors[step.status] || "var(--border-primary)"}15`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        fontWeight: "bold",
        color: statusColors[step.status] || "var(--text-secondary)",
        marginBottom: "var(--space-3)"
      }}>
        {step.name.charAt(0)}
      </div>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        color: "var(--text-primary)",
        textAlign: "center",
        marginBottom: "4px"
      }}>{step.name}</div>
      <div style={{
        fontSize: "10px",
        color: "var(--text-muted)",
        textAlign: "center",
        maxWidth: "100px"
      }}>{step.label}</div>
      
      {!isLast && (
        <div style={{
          position: "absolute",
          top: "24px",
          left: "60%",
          width: "80%",
          height: "2px",
          backgroundColor: "var(--border-secondary)",
          zIndex: -1
        }} />
      )}
    </div>
  );
};

// Evidence Card Component
export const EvidenceCard = ({ evidence }) => {
  return (
    <div style={{
      border: "1px solid var(--border-primary)",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-4)",
      backgroundColor: "var(--bg-secondary)",
      transition: "all 0.3s var(--ease-primary)"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "var(--terminal-green)";
      e.currentTarget.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "var(--border-primary)";
      e.currentTarget.style.transform = "translateY(0)";
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "var(--space-2)"
      }}>
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--terminal-blue)",
          fontWeight: "bold"
        }}>{evidence.code}</span>
        {evidence.count && (
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "18px",
            fontWeight: "bold",
            color: "var(--text-primary)"
          }}>{evidence.count}</span>
        )}
      </div>
      <div style={{
        fontSize: "var(--fs-small)",
        color: "var(--text-secondary)",
        marginBottom: "var(--space-2)",
        lineHeight: "1.5"
      }}>{evidence.label}</div>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: "9px",
        color: "var(--terminal-orange)",
        padding: "4px 8px",
        backgroundColor: "rgba(255, 159, 10, 0.1)",
        borderRadius: "var(--radius-sm)",
        display: "inline-block"
      }}>{evidence.classification}</div>
    </div>
  );
};

// Segment Card Component
export const SegmentCard = ({ segment }) => {
  const borderColor = segment.type === "PRIMARY" ? "var(--terminal-green)" : "var(--terminal-blue)";
  
  return (
    <div style={{
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      padding: "var(--space-5)",
      backgroundColor: "var(--bg-secondary)",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        fontFamily: "var(--font-mono)",
        fontSize: "9px",
        fontWeight: "bold",
        color: borderColor,
        padding: "4px 8px",
        backgroundColor: `${borderColor}15`,
        borderBottomRightRadius: "var(--radius-sm)"
      }}>{segment.type}</div>
      
      <h3 style={{
        fontSize: "var(--fs-h3)",
        marginTop: "var(--space-4)",
        marginBottom: "var(--space-3)"
      }}>{segment.name}</h3>
      
      <p style={{
        fontSize: "var(--fs-small)",
        color: "var(--text-secondary)",
        marginBottom: "var(--space-4)",
        lineHeight: "1.6"
      }}>{segment.rationale}</p>
      
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px"
      }}>
        {segment.characteristics.map((char, idx) => (
          <span key={idx} style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--text-muted)",
            padding: "4px 10px",
            border: "1px solid var(--border-secondary)",
            borderRadius: "var(--radius-sm)"
          }}>{char}</span>
        ))}
      </div>
    </div>
  );
};

// Opportunity Map Item
export const OpportunityItem = ({ opportunity }) => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "var(--space-3)",
      border: `1px solid ${opportunity.selected ? "var(--terminal-green)" : "var(--border-primary)"}`,
      borderRadius: "var(--radius-sm)",
      backgroundColor: opportunity.selected ? "rgba(0, 255, 136, 0.05)" : "transparent",
      marginBottom: "var(--space-2)",
      transition: "all 0.2s var(--ease-primary)"
    }}>
      <div style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        border: `2px solid ${opportunity.selected ? "var(--terminal-green)" : "var(--border-secondary)"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        fontWeight: "bold",
        color: opportunity.selected ? "var(--terminal-green)" : "var(--text-muted)",
        flexShrink: 0
      }}>
        {opportunity.code.replace("O", "")}
      </div>
      <span style={{
        fontSize: "var(--fs-small)",
        color: opportunity.selected ? "var(--text-primary)" : "var(--text-secondary)",
        flex: 1
      }}>{opportunity.name}</span>
      {opportunity.primary && (
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "8px",
          color: "var(--terminal-green)",
          padding: "2px 6px",
          border: "1px solid var(--terminal-green)",
          borderRadius: "var(--radius-sm)"
        }}>PRIMARY</span>
      )}
    </div>
  );
};

// Metric Hierarchy Block
export const MetricBlock = ({ metric, variant = "default" }) => {
  const variants = {
    primary: { border: "var(--terminal-green)", bg: "rgba(0, 255, 136, 0.05)" },
    secondary: { border: "var(--terminal-blue)", bg: "rgba(90, 200, 250, 0.05)" },
    behavioral: { border: "var(--terminal-orange)", bg: "rgba(255, 159, 10, 0.05)" },
    guardrail: { border: "var(--error)", bg: "rgba(255, 69, 58, 0.05)" },
    default: { border: "var(--border-primary)", bg: "var(--bg-secondary)" }
  };
  
  const style = variants[variant] || variants.default;
  
  return (
    <div style={{
      border: `1px solid ${style.border}`,
      borderRadius: "var(--radius-md)",
      padding: "var(--space-4)",
      backgroundColor: style.bg,
      marginBottom: "var(--space-3)"
    }}>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: "9px",
        color: style.border,
        fontWeight: "bold",
        marginBottom: "var(--space-2)"
      }}>{metric.title}</div>
      <div style={{
        fontSize: "var(--fs-body)",
        color: "var(--text-primary)",
        fontWeight: "bold",
        marginBottom: metric.questions || metric.note ? "var(--space-2)" : 0
      }}>{metric.metric}</div>
      {metric.questions && (
        <ul style={{
          margin: 0,
          paddingLeft: "var(--space-3)",
          fontSize: "var(--fs-small)",
          color: "var(--text-secondary)",
          lineHeight: "1.8"
        }}>
          {metric.questions.map((q, idx) => (
            <li key={idx}>{q}</li>
          ))}
        </ul>
      )}
      {metric.note && (
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          color: "var(--text-muted)",
          marginTop: "var(--space-2)",
          paddingTop: "var(--space-2)",
          borderTop: "1px dashed var(--border-secondary)"
        }}>{metric.note}</div>
      )}
      {metric.outcomes && (
        <div style={{
          display: "flex",
          gap: "8px",
          marginTop: "var(--space-2)",
          flexWrap: "wrap"
        }}>
          {metric.outcomes.map((outcome, idx) => (
            <span key={idx} style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--text-secondary)",
              padding: "4px 10px",
              border: "1px solid var(--border-secondary)",
              borderRadius: "var(--radius-sm)"
            }}>{outcome}</span>
          ))}
        </div>
      )}
      {metric.items && (
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginTop: "var(--space-2)"
        }}>
          {metric.items.map((item, idx) => (
            <span key={idx} style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--text-muted)",
              padding: "4px 10px",
              border: "1px solid var(--border-secondary)",
              borderRadius: "var(--radius-sm)"
            }}>{item}</span>
          ))}
        </div>
      )}
    </div>
  );
};

// Before/After Comparison Row
export const BeforeAfterRow = ({ change }) => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)",
      padding: "var(--space-3) 0",
      borderBottom: "1px solid var(--border-secondary)"
    }}>
      <div style={{
        padding: "var(--space-3)",
        backgroundColor: "rgba(255, 69, 58, 0.05)",
        borderRadius: "var(--radius-sm)",
        border: "1px solid rgba(255, 69, 58, 0.2)"
      }}>
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "8px",
          color: "var(--error)",
          marginBottom: "4px"
        }}>BEFORE</div>
        <div style={{
          fontSize: "var(--fs-small)",
          color: "var(--text-secondary)"
        }}>{change.before}</div>
      </div>
      <div style={{
        padding: "var(--space-3)",
        backgroundColor: "rgba(0, 255, 136, 0.05)",
        borderRadius: "var(--radius-sm)",
        border: "1px solid rgba(0, 255, 136, 0.2)"
      }}>
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "8px",
          color: "var(--terminal-green)",
          marginBottom: "4px"
        }}>AFTER</div>
        <div style={{
          fontSize: "var(--fs-small)",
          color: "var(--text-primary)",
          fontWeight: "500"
        }}>{change.after}</div>
      </div>
    </div>
  );
};

// AI Workflow Stage
export const AIWorkflowStage = ({ stage, index, isLast }) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: 1,
      position: "relative",
      textAlign: "center",
      padding: "var(--space-3)"
    }}>
      <div style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "2px solid var(--terminal-blue)",
        backgroundColor: "rgba(90, 200, 250, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        fontWeight: "bold",
        color: "var(--terminal-blue)",
        marginBottom: "var(--space-2)"
      }}>
        {index + 1}
      </div>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        color: "var(--text-primary)",
        fontWeight: "bold",
        marginBottom: "4px"
      }}>{stage.stage}</div>
      <div style={{
        fontSize: "9px",
        color: "var(--text-muted)",
        lineHeight: "1.4",
        maxWidth: "120px"
      }}>{stage.role}</div>
      
      {!isLast && (
        <div style={{
          position: "absolute",
          top: "20px",
          right: "-50%",
          width: "100%",
          height: "2px",
          backgroundColor: "var(--border-secondary)",
          zIndex: -1
        }} />
      )}
    </div>
  );
};

// UX Concept Screen Component
export const UXConceptScreen = ({ screen }) => {
  return (
    <div style={{
      border: "1px solid var(--border-primary)",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-4)",
      backgroundColor: "var(--bg-secondary)",
      marginBottom: "var(--space-4)"
    }}>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        color: "var(--terminal-blue)",
        fontWeight: "bold",
        marginBottom: "var(--space-3)",
        paddingBottom: "var(--space-2)",
        borderBottom: "1px solid var(--border-secondary)"
      }}>{screen.name}</div>
      
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-2)"
      }}>
        {screen.elements.map((el, idx) => (
          <div key={idx} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "var(--space-2)",
            backgroundColor: "var(--bg-tertiary)",
            borderRadius: "var(--radius-sm)"
          }}>
            <span style={{
              fontSize: "var(--fs-small)",
              color: "var(--text-secondary)"
            }}>{el.label}</span>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: el.type === "total" || el.type === "button" ? "var(--terminal-green)" : "var(--text-primary)"
            }}>{el.value}</span>
          </div>
        ))}
      </div>
      
      {screen.note && (
        <div style={{
          marginTop: "var(--space-3)",
          padding: "var(--space-2)",
          backgroundColor: "rgba(255, 159, 10, 0.1)",
          borderRadius: "var(--radius-sm)",
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          color: "var(--terminal-orange)"
        }}>{screen.note}</div>
      )}
    </div>
  );
};

// Principle Card
export const PrincipleCard = ({ principle }) => {
  return (
    <div style={{
      display: "flex",
      gap: "var(--space-3)",
      padding: "var(--space-3)",
      border: "1px solid var(--border-primary)",
      borderRadius: "var(--radius-sm)",
      marginBottom: "var(--space-2)"
    }}>
      <div style={{
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        border: "2px solid var(--terminal-green)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        fontWeight: "bold",
        color: "var(--terminal-green)",
        flexShrink: 0
      }}>{principle.number}</div>
      <div>
        <div style={{
          fontSize: "var(--fs-small)",
          fontWeight: "bold",
          color: "var(--text-primary)",
          marginBottom: "4px"
        }}>{principle.title}</div>
        <div style={{
          fontSize: "var(--fs-xs)",
          color: "var(--text-secondary)",
          lineHeight: "1.5"
        }}>{principle.desc}</div>
      </div>
    </div>
  );
};

// Limitation Point
export const LimitationPoint = ({ point }) => {
  return (
    <div style={{
      padding: "var(--space-3)",
      borderLeft: "2px solid var(--terminal-orange)",
      paddingLeft: "var(--space-3)",
      marginBottom: "var(--space-2)"
    }}>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        color: "var(--terminal-orange)",
        fontWeight: "bold",
        marginBottom: "4px"
      }}>{point.title}</div>
      <div style={{
        fontSize: "var(--fs-small)",
        color: "var(--text-secondary)",
        lineHeight: "1.5"
      }}>{point.limitation}</div>
    </div>
  );
};

// Final Takeaway Block
export const TakeawayBlock = ({ block }) => {
  return (
    <div style={{
      flex: 1,
      minWidth: "280px",
      padding: "var(--space-4)",
      border: "1px solid var(--border-primary)",
      borderRadius: "var(--radius-md)",
      backgroundColor: "var(--bg-secondary)"
    }}>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: "9px",
        color: "var(--terminal-blue)",
        fontWeight: "bold",
        marginBottom: "var(--space-2)",
        letterSpacing: "1px"
      }}>{block.title}</div>
      <div style={{
        fontSize: "var(--fs-small)",
        color: "var(--text-secondary)",
        lineHeight: "1.6"
      }}>{block.content}</div>
    </div>
  );
};
