"use client";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add and clean up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top on click
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isScrolled && (
      <div className="fixed bottom-12 right-12 z-50">
        <div
          onClick={scrollToTop}
          className="p-4 bg-gray-400 rounded-full font-semibold animate-bounce hover:cursor-pointer shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-300"
        >
          UP
        </div>
      </div>
    )
  );
}
