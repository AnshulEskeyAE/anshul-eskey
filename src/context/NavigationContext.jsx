import React, { createContext, useState, useEffect, useContext } from "react";
import gsap from "gsap";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || "#/");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || "#/");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (path) => {
    if (path === currentPath || isTransitioning) return;

    setIsTransitioning(true);

    // Create standard page transition overlay
    const transitionOverlay = document.querySelector(".page-transition-overlay");
    
    if (transitionOverlay) {
      const tl = gsap.timeline({
        onComplete: () => {
          // Set new path via hash
          window.location.hash = path;
          setCurrentPath(path);
          window.scrollTo(0, 0);

          // Entrance animation
          gsap.fromTo(
            transitionOverlay,
            { transformOrigin: "bottom", scaleY: 1 },
            {
              scaleY: 0,
              duration: 0.6,
              ease: "power3.inOut",
              onComplete: () => {
                setIsTransitioning(false);
              }
            }
          );
        }
      });

      tl.fromTo(
        transitionOverlay,
        { transformOrigin: "top", scaleY: 0 },
        { scaleY: 1, duration: 0.6, ease: "power3.inOut" }
      );
    } else {
      // Fallback if overlay element is missing
      window.location.hash = path;
      setCurrentPath(path);
      window.scrollTo(0, 0);
      setIsTransitioning(false);
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigateTo, isTransitioning }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
