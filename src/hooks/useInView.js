"use client";

import { useEffect, useRef, useState } from "react";

export function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
        ...(options || {}),
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}
