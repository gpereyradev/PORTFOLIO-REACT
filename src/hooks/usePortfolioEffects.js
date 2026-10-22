import { useEffect, useRef } from "react";

export default function usePortfolioEffects() {
  const progressRef = useRef(null),
    cursorRef = useRef(null);
  useEffect(() => {
    document.documentElement.classList.add("js");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.06 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
    let scheduled = 0;
    function updateProgress() {
      cancelAnimationFrame(scheduled);
      scheduled = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (progressRef.current)
          progressRef.current.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
      });
    }
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    const sizeObserver = new ResizeObserver(updateProgress);
    sizeObserver.observe(document.body);
    updateProgress();
    const cursor = cursorRef.current;
    const fine =
      matchMedia("(pointer:fine)").matches &&
      !matchMedia("(prefers-reduced-motion:reduce)").matches;
    function move(e) {
      cursor.style.opacity = "1";
      cursor.style.transform = `translate(${e.clientX - 11}px,${e.clientY - 11}px)`;
      cursor.classList.toggle(
        "over",
        Boolean(e.target.closest("a,button,input,select,textarea")),
      );
    }
    function leave() {
      cursor.style.opacity = "0";
    }
    if (fine) {
      window.addEventListener("pointermove", move, { passive: true });
      document.addEventListener("pointerleave", leave);
    }
    return () => {
      observer.disconnect();
      sizeObserver.disconnect();
      cancelAnimationFrame(scheduled);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.documentElement.classList.remove("js");
    };
  }, []);
  return { progressRef, cursorRef };
}
