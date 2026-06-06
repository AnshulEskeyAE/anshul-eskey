import gsap from "gsap";

/**
 * Magnetic button hover effect.
 * Smoothly attracts buttons to the mouse cursor on hover.
 */
export const initMagneticElements = () => {
  const elements = document.querySelectorAll("[data-magnetic]");
  
  elements.forEach((el) => {
    const handleMouseMove = (e) => {
      const bound = el.getBoundingClientRect();
      const x = e.clientX - bound.left - bound.width / 2;
      const y = e.clientY - bound.top - bound.height / 2;
      
      const strength = el.getAttribute("data-magnetic-strength") || 0.35;
      
      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    
    // Clean up function ref if needed in React cleanup
    el._cleanupMagnetic = () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  });
};

/**
 * Terminal Counter Animation.
 * Animates counting numbers with JetBrains Mono theme aesthetics.
 */
export const animateCounter = (element, targetValue, duration = 2) => {
  if (!element) return;
  
  const obj = { val: 0 };
  gsap.to(obj, {
    val: targetValue,
    duration: duration,
    ease: "power2.out",
    onUpdate: () => {
      element.innerText = Math.floor(obj.val).toString().padStart(2, '0');
    }
  });
};

/**
 * Editorial Stagger Reveal Animation.
 * Fades and translates up child elements when scrolled into view.
 */
export const initScrollStagger = (containerSelector, childSelector, startTrigger = "top 85%") => {
  const containers = document.querySelectorAll(containerSelector);
  
  containers.forEach((container) => {
    const children = container.querySelectorAll(childSelector);
    if (!children.length) return;

    // Use IntersectionObserver as a lightweight default, and GSAP for fluid transitions
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              children,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.08,
                duration: 0.8,
                ease: "power3.out",
                overwrite: "auto"
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    
    observer.observe(container);
  });
};

/**
 * Strategic Text Split Line Reveal.
 * Mimics Söhne/Geist editorial text fade-ins.
 */
export const revealHeadingText = (selector) => {
  const headings = document.querySelectorAll(selector);
  headings.forEach((heading) => {
    gsap.fromTo(
      heading,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power4.out", delay: 0.1 }
    );
  });
};
