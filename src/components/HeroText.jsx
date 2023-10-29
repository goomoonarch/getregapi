import React, { useRef, useEffect } from "react";
import Logo from "../assets/moonarch_logo_black.svg";

function HeroText() {
  const actionAreaRef = useRef(null);

  useEffect(() => {
    const actionArea = actionAreaRef.current;
    const letters = Array.from(actionArea.querySelectorAll(".magnetic-letter"));
    let animationFrameId = null;

    function calculateFontWeight(distance, maxDistance) {
      if (distance > maxDistance) return 400;
      return 1000 - Math.pow(distance / maxDistance, 2) * 600;
    }

    const handleMouseMove = (e) => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = window.requestAnimationFrame(() => {
        const cursorX = e.clientX;
        const cursorY = e.clientY;
        const maxEffectDistance = 100;

        letters.forEach((letter) => {
          const rect = letter.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const distance = Math.sqrt(
            Math.pow(cursorX - centerX, 2) + Math.pow(cursorY - centerY, 2)
          );

          if (distance < maxEffectDistance) {
            letter.style.fontWeight = Math.round(
              calculateFontWeight(distance, maxEffectDistance)
            ).toString();
          } else {
            letter.style.fontWeight = "400";
          }
        });
      });
    };

    const handleMouseLeave = () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
      letters.forEach((letter) => {
        letter.style.fontWeight = "400";
      });
    };

    actionArea.addEventListener("mousemove", handleMouseMove);
    actionArea.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
      actionArea.removeEventListener("mousemove", handleMouseMove);
      actionArea.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="flex p-10 items-center justify-center font-Inter bg-gradient-to-r from-[#fe8676] to-[#4F6EFB] text-transparent bg-clip-text"
      ref={actionAreaRef}
    >
      <img src={Logo} className="w-[36px]" />
      <div className="cursor-pointer text-[45px] space-x-[1px] m-2">
        <span className="magnetic-letter">M</span>
        <span className="magnetic-letter">o</span>
        <span className="magnetic-letter">o</span>
        <span className="magnetic-letter">n</span>
        <span className="magnetic-letter">S</span>
        <span className="magnetic-letter">e</span>
        <span className="magnetic-letter">a</span>
        <span className="magnetic-letter">r</span>
        <span className="magnetic-letter">c</span>
        <span className="magnetic-letter">h</span>
      </div>
    </div>
  );
}

export default HeroText;
