import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const frameRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion or is on touch device, disable custom cursor
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || 
        "ontouchstart" in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const dot = dotRef.current;
    const frame = frameRef.current;
    if (!dot || !frame) return;

    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    gsap.set(frame, { xPercent: -50, yPercent: -50 });

    const handleMouseMove = (e) => {
      // Direct update for dot
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05,
        ease: "none"
      });

      // Trailing update for frame
      gsap.to(frame, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power3.out"
      });
    };

    const handleMouseEnterInteractive = () => {
      setHovered(true);
      gsap.to(frame, {
        scale: 1.6,
        rotate: 45,
        borderColor: "var(--terminal-green)",
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(dot, {
        scale: 2,
        backgroundColor: "var(--terminal-green)",
        duration: 0.3
      });
    };

    const handleMouseLeaveInteractive = () => {
      setHovered(false);
      gsap.to(frame, {
        scale: 1.0,
        rotate: 0,
        borderColor: "var(--accent)",
        duration: 0.35,
        ease: "power2.out"
      });
      gsap.to(dot, {
        scale: 1,
        backgroundColor: "var(--accent)",
        duration: 0.3
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Dynamic attachment to hover items
    const updateInteractions = () => {
      const interactives = document.querySelectorAll(
        "a, button, [role='button'], .project-card, .research-card, .essay-row, .timeline-dot, [data-magnetic]"
      );
      
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnterInteractive);
        el.addEventListener("mouseleave", handleMouseLeaveInteractive);
      });

      return () => {
        interactives.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnterInteractive);
          el.removeEventListener("mouseleave", handleMouseLeaveInteractive);
        });
      };
    };

    // Wait short delay to let react elements mount, then bind hover listeners
    const timeoutId = setTimeout(updateInteractions, 300);

    // Re-check periodically for new dynamic elements (e.g. category filters changing)
    const intervalId = setInterval(updateInteractions, 1500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          backgroundColor: "var(--accent)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: "var(--z-cursor)",
          transition: "transform 0.1s ease, background-color 0.3s ease"
        }}
      />
      <div
        ref={frameRef}
        className="cursor-frame"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "28px",
          height: "28px",
          border: "1px solid var(--accent)",
          pointerEvents: "none",
          zIndex: "var(--z-cursor)",
          borderRadius: "var(--radius-sm)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* Render clean, tiny strategic corners inside the bounding box */}
        <div style={{ position: "absolute", top: "-1px", left: "-1px", width: "4px", height: "4px", borderLeft: "1.5px solid var(--accent)", borderTop: "1.5px solid var(--accent)" }} />
        <div style={{ position: "absolute", top: "-1px", right: "-1px", width: "4px", height: "4px", borderRight: "1.5px solid var(--accent)", borderTop: "1.5px solid var(--accent)" }} />
        <div style={{ position: "absolute", bottom: "-1px", left: "-1px", width: "4px", height: "4px", borderLeft: "1.5px solid var(--accent)", borderBottom: "1.5px solid var(--accent)" }} />
        <div style={{ position: "absolute", bottom: "-1px", right: "-1px", width: "4px", height: "4px", borderRight: "1.5px solid var(--accent)", borderBottom: "1.5px solid var(--accent)" }} />
      </div>
    </>
  );
};

export default CustomCursor;
