import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowButton(window.scrollY > 200); // Show after scrolling 200px
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          background: '#597cff', // yellow background as highlighted
          border: 'none',
          borderRadius: '50%',
          width: '46px',
          height: '46px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.14)',
          cursor: 'pointer',
          fontSize: '25px',
        }}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
}

export default ScrollToTopButton;
