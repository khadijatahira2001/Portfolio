// src/components/AnimatedCursor.js
import React, { useEffect, useState } from "react";

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setIsVisible(true);
      setIsStopped(false);
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOut = () => {
      setIsVisible(false);
    };

    let timeoutId;
    const handleMouseStopped = () => {
      timeoutId = setTimeout(() => setIsStopped(true), 500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mousemove", handleMouseStopped);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mousemove", handleMouseStopped);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 transform ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300 ease-in-out ${
        isStopped ? "bg-purple-500" : "bg-purple-900"
      } rounded-full w-6 h-6`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        marginLeft: "-12px",
        marginTop: "-12px",
      }}
    ></div>
  );
};

export default AnimatedCursor;
