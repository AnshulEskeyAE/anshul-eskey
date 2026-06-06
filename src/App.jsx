import React from "react";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";
import CustomCursor from "./components/CustomCursor";
import NoiseTexture from "./components/NoiseTexture";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page imports
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import ResearchArchive from "./pages/ResearchArchive";
import Essays from "./pages/Essays";
import Journal from "./pages/Journal";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

const RouteRenderer = () => {
  const { currentPath } = useNavigation();

  // Custom regex splitting for dynamic detailed projects routing
  if (currentPath === "#/" || currentPath === "#" || currentPath === "") {
    return <Home />;
  } else if (currentPath.startsWith("#/projects/")) {
    return <ProjectDetail />;
  } else if (currentPath.startsWith("#/projects")) {
    return <Projects />;
  } else if (currentPath.startsWith("#/research")) {
    return <ResearchArchive />;
  } else if (currentPath.startsWith("#/notes")) {
    return <Essays />;
  } else if (currentPath.startsWith("#/reflections")) {
    return <Journal />;
  } else if (currentPath.startsWith("#/about")) {
    return <About />;
  } else if (currentPath.startsWith("#/resume")) {
    return <Resume />;
  } else if (currentPath.startsWith("#/contact")) {
    return <Contact />;
  }

  // Fallback default
  return <Home />;
};

function AppContent() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative"
      }}
    >
      {/* Dynamic persistent page transition canvas block */}
      <div
        className="page-transition-overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "var(--accent)",
          zIndex: "var(--z-overlay)",
          transform: "scaleY(0)",
          pointerEvents: "none"
        }}
      />

      {/* Premium visual enhancements */}
      <NoiseTexture />
      <CustomCursor />

      {/* Sticky navigation header */}
      <Navbar />

      {/* Dynamic route outlet */}
      <main style={{ flexGrow: 1, position: "relative", zIndex: "var(--z-content)" }}>
        <RouteRenderer />
      </main>

      {/* Corporate Strategy minimal footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;
