"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@/lib/lenis";

interface LenisProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
}

function SmoothScroll({ children, isInsideModal = false }: LenisProps) {
  const lenis = useLenis(({ scroll }) => {
    // Callback for every scroll event, can be used for custom behavior
  });

  useEffect(() => {
    // Start smooth scrolling after the DOM content is loaded
    document.addEventListener("DOMContentLoaded", () => {
      lenis?.stop();
      lenis?.start();
    });
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: 2, // Duration of the smooth scroll animation
        prevent: (node) => {
          // Prevent smooth scroll if inside a modal or modal is open
          if (isInsideModal) return true;
          const modalOpen = node.classList.contains("modall");
          return modalOpen;
        },
      }}
    >
      {children} {/* Render children with smooth scrolling */}
    </ReactLenis>
  );
}

export default SmoothScroll;
