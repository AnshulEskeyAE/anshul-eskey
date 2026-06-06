import React, { useEffect, useState } from "react";
import { useNavigation } from "../context/NavigationContext";
import { Sun, Moon, ArrowUpRight } from "lucide-react";
import { initMagneticElements } from "../animations";

const Navbar = () => {
  const { currentPath, navigateTo } = useNavigation();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    
    // Bind magnetic hover effects on links
    initMagneticElements();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navLinks = [
    { label: "Projects", path: "#/projects" },
    { label: "Research Interests", path: "#/research" },
    { label: "Notes", path: "#/notes" },
    { label: "Reflections", path: "#/reflections" },
    { label: "About", path: "#/about" },
    { label: "Resume", path: "#/resume" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: "var(--z-nav)",
        backgroundColor: scrolled ? "rgba(9, 9, 9, 0.65)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-primary)" : "1px solid transparent",
        transition: "background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        height: "80px",
        display: "flex",
        alignItems: "center"
      }}
      className={theme === "light" && scrolled ? "light-navbar-glass" : ""}
    >
      <style>{`
        /* Handle light theme glass container override */
        [data-theme="light"] nav {
          background-color: ${scrolled ? "rgba(248, 249, 250, 0.65)" : "transparent"} !important;
        }
        .nav-link {
          font-family: var(--font-mono);
          font-size: var(--fs-small);
          color: var(--text-secondary);
          position: relative;
          padding: var(--space-2) 0;
          transition: color 0.3s ease;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--text-primary);
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1px;
          background-color: var(--accent);
          transition: width 0.35s var(--ease-primary);
        }
        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }
      `}</style>

      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Brand Logo with dynamic custom bracket styling */}
        <div
          data-magnetic
          data-magnetic-strength="0.4"
          onClick={() => navigateTo("#/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "var(--font-display)",
            fontWeight: "800",
            fontSize: "1.2rem",
            letterSpacing: "0.08em",
            cursor: "pointer",
            color: "var(--text-primary)"
          }}
        >
          <span style={{ color: "var(--terminal-green)" }}>[</span>
          ANSHUL ESKEY
          <span style={{ color: "var(--terminal-green)" }}>]</span>
        </div>

        {/* Links & Actions container */}
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-6)" }}>
          {/* Navigation Links Grid */}
          <div style={{ display: "flex", gap: "var(--space-5)" }} className="nav-links-grid">
            {navLinks.map((link) => {
              const isActive = currentPath.startsWith(link.path);
              return (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(link.path);
                  }}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div style={{ width: "1px", height: "18px", backgroundColor: "var(--border-primary)" }} />

          {/* Theme Toggle & CTA Contact Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
            <button
              onClick={toggleTheme}
              data-magnetic
              data-magnetic-strength="0.5"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--text-primary)",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background-color 0.3s"
              }}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => navigateTo("#/contact")}
              className="mono-btn"
              data-magnetic
              data-magnetic-strength="0.2"
              style={{
                padding: "8px 16px",
                fontSize: "11px",
                borderRadius: "var(--radius-md)"
              }}
            >
              Let's Talk <ArrowUpRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
