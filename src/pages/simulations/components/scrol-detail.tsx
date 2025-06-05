import { useEffect, useState } from "react";

const ScrollDetail = ({ choosenSimulation, containerRef }) => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current.scrollTop > 80) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`scroll-detail ${isShrunk ? "animated" : ""}`}
    >

      <p>
        <span>simulation:</span> {choosenSimulation?.name}
      </p>
    </div>
  );
};

export default ScrollDetail;
