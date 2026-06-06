import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SystemDiagram = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Define coordinate structures for the strategic diagram
    const nodes = [
      { id: "core", x: 200, y: 200, label: "Core Systems", type: "core" },
      { id: "market", x: 80, y: 100, label: "Market Intel", type: "system" },
      { id: "product", x: 320, y: 100, label: "Product Systems", type: "system" },
      { id: "growth", x: 340, y: 280, label: "Growth loops", type: "system" },
      { id: "behavior", x: 80, y: 290, label: "Behavioral Design", type: "system" },
    ];

    // Select the node elements in the SVG
    nodes.forEach((node) => {
      const nodeEl = container.querySelector(`#node-${node.id}`);
      if (!nodeEl) return;

      // Pulse each node
      gsap.to(nodeEl, {
        scale: node.type === "core" ? 1.05 : 1.08,
        duration: node.type === "core" ? 2 : 2.5 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        transformOrigin: "center"
      });
    });

    // Animate data flow packages along standard paths
    const flows = container.querySelectorAll(".data-package");
    flows.forEach((flow, i) => {
      gsap.to(flow, {
        strokeDashoffset: -40,
        duration: 1.5 + i * 0.5,
        repeat: -1,
        ease: "none"
      });
    });

    // Make nodes responsive to mouse movements (magnetic parallax shift)
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      nodes.forEach((node) => {
        const nodeEl = container.querySelector(`#node-${node.id}`);
        if (!nodeEl) return;

        // Calculate distance from mouse to node default position
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Parallax shift calculation: shift node away or towards depending on distance
        if (dist < 150) {
          const shiftX = (dx / dist) * 12;
          const shiftY = (dy / dist) * 12;
          gsap.to(nodeEl, {
            x: shiftX,
            y: shiftY,
            duration: 0.4,
            ease: "power2.out"
          });
        } else {
          gsap.to(nodeEl, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="system-diagram-wrapper" style={{ width: "100%", maxWidth: "450px", position: "relative" }}>
      <svg
        ref={containerRef}
        viewBox="0 0 400 400"
        style={{
          width: "100%",
          height: "auto",
          overflow: "visible"
        }}
      >
        <defs>
          <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--terminal-green)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--terminal-green)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="system-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Network connection lines */}
        <g stroke="var(--border-primary)" strokeWidth="1.5">
          <line x1="200" y1="200" x2="80" y2="100" />
          <line x1="200" y1="200" x2="320" y2="100" />
          <line x1="200" y1="200" x2="340" y2="280" />
          <line x1="200" y1="200" x2="80" y2="290" />
          <line x1="80" y1="100" x2="320" y2="100" strokeDasharray="4,4" strokeWidth="1" />
          <line x1="320" y1="100" x2="340" y2="280" strokeDasharray="4,4" strokeWidth="1" />
          <line x1="340" y1="280" x2="80" y2="290" strokeDasharray="4,4" strokeWidth="1" />
          <line x1="80" y1="290" x2="80" y2="100" strokeDasharray="4,4" strokeWidth="1" />
        </g>

        {/* Pulsing flows */}
        <g stroke="var(--terminal-green)" strokeWidth="1" fill="none" opacity="0.4">
          <line x1="200" y1="200" x2="80" y2="100" className="data-package" strokeDasharray="6,24" />
          <line x1="200" y1="200" x2="320" y2="100" className="data-package" strokeDasharray="6,24" />
          <line x1="200" y1="200" x2="340" y2="280" className="data-package" strokeDasharray="6,24" />
          <line x1="200" y1="200" x2="80" y2="290" className="data-package" strokeDasharray="6,24" />
        </g>

        {/* Node: Behavioral Design */}
        <g id="node-behavior">
          <circle cx="80" cy="290" r="28" fill="url(#system-glow)" />
          <rect x="52" y="278" width="56" height="24" fill="var(--bg-secondary)" stroke="var(--border-primary)" rx="2" />
          <text x="80" y="293" fill="var(--text-secondary)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">BEH_DESIGN</text>
        </g>

        {/* Node: Growth Loops */}
        <g id="node-growth">
          <circle cx="340" cy="280" r="28" fill="url(#system-glow)" />
          <rect x="312" y="268" width="56" height="24" fill="var(--bg-secondary)" stroke="var(--border-primary)" rx="2" />
          <text x="340" y="283" fill="var(--text-secondary)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">GTM_SYSTEM</text>
        </g>

        {/* Node: Market Intelligence */}
        <g id="node-market">
          <circle cx="80" cy="100" r="28" fill="url(#system-glow)" />
          <rect x="52" y="88" width="56" height="24" fill="var(--bg-secondary)" stroke="var(--border-primary)" rx="2" />
          <text x="80" y="103" fill="var(--text-secondary)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">MKT_INTEL</text>
        </g>

        {/* Node: Product Systems */}
        <g id="node-product">
          <circle cx="320" cy="100" r="28" fill="url(#system-glow)" />
          <rect x="292" y="88" width="56" height="24" fill="var(--bg-secondary)" stroke="var(--border-primary)" rx="2" />
          <text x="320" y="103" fill="var(--text-secondary)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">PROD_SYS</text>
        </g>

        {/* Core Node */}
        <g id="node-core">
          <circle cx="200" cy="200" r="45" fill="url(#core-glow)" />
          <circle cx="200" cy="200" r="16" fill="var(--bg-primary)" stroke="var(--terminal-green)" strokeWidth="2.5" />
          <circle cx="200" cy="200" r="5" fill="var(--terminal-green)" />
          <text x="200" y="240" fill="var(--text-primary)" fontSize="10" fontFamily="var(--font-display)" fontWeight="bold" textAnchor="middle" letterSpacing="0.05em">SYSTEMS_CORE</text>
        </g>
      </svg>
    </div>
  );
};

export default SystemDiagram;
