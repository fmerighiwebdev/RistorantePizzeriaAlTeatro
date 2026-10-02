"use client";

import { useEffect, useRef } from "react";

export default function Motion({ as: Element = "div", className, children }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (
      reducedMotion.matches ||
      !element?.animate ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    let animation;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;

      observer.disconnect();
      if (reducedMotion.matches) return;

      // Keep content visible even before hydration or if enhancement fails.
      animation = element.animate(
        [{ transform: "translateY(12px)" }, { transform: "translateY(0)" }],
        { duration: 400, easing: "ease-out" }
      );
    });

    function handleMotionChange() {
      if (reducedMotion.matches) {
        observer.disconnect();
        animation?.cancel();
      }
    }

    reducedMotion.addEventListener("change", handleMotionChange);
    observer.observe(element);

    return () => {
      observer.disconnect();
      animation?.cancel();
      reducedMotion.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <Element ref={elementRef} className={className}>
      {children}
    </Element>
  );
}
