import { useEffect, useState } from "react";


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 ${isVisible ? "block" : "hidden"}`}>
      <button
        className="bg-black hover:bg-[#1A2D48] text-white font-bold py-2 px-4 rounded"
        onClick={scrollToTop}
      >
        Scroll to Top
      </button>
    </div>
  );
};

export default ScrollToTopButton;
