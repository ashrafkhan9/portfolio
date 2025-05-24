import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current!;
    const follower = followerRef.current!;
    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };

    const moveCursor = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      cursor.style.left = `${mouse.x}px`;
      cursor.style.top = `${mouse.y}px`;
    };

    const animateFollower = () => {
      pos.x += (mouse.x - pos.x) * 0.1;
      pos.y += (mouse.y - pos.y) * 0.1;
      follower.style.left = `${pos.x}px`;
      follower.style.top = `${pos.y}px`;
      requestAnimationFrame(animateFollower);
    };

    const addHoverEffects = () => {
      const elements = document.querySelectorAll("a, button");
      elements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cursor.classList.add("cursor-hover");
          follower.classList.add("follower-hover");
        });
        el.addEventListener("mouseleave", () => {
          cursor.classList.remove("cursor-hover");
          follower.classList.remove("follower-hover");
        });
      });
    };

    window.addEventListener("mousemove", moveCursor);
    animateFollower();
    addHoverEffects();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-follower" ref={followerRef}></div>
    </>
  );
};

export default Cursor;
