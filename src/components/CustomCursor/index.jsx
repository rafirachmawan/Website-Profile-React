import React, { useEffect, useState, useRef } from "react";
import "./style.css";

const CustomCursor = () => {
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // References for requestAnimationFrame positions
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      const mobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) return;

    // Mouse events
    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Hover detection for interactive items
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("clickable") ||
        target.getAttribute("role") === "button" ||
        window.getComputedStyle(target).cursor === "pointer";

      if (isInteractive) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    // Animation Loop (High Performance)
    let animationFrameId;

    const updatePosition = () => {
      // Smooth interpolation (lerp)
      // Dot moves almost instantly
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.3;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.3;

      // Ring moves with elegant delay
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={cursorDotRef}
        className={`custom-cursor-dot ${hidden ? "hidden-cursor" : ""} ${
          clicked ? "clicked-cursor" : ""
        } ${hovered ? "hovered-cursor" : ""}`}
      />
      {/* Outer Glow Ring */}
      <div
        ref={cursorRingRef}
        className={`custom-cursor-ring ${hidden ? "hidden-cursor" : ""} ${
          clicked ? "clicked-cursor" : ""
        } ${hovered ? "hovered-cursor" : ""}`}
      />
    </>
  );
};

export default CustomCursor;
