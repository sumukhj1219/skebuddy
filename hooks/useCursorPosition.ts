"use client";

import { useEffect, useState } from "react";

export function useCursorPosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function mouseMove(ev: MouseEvent) {
      setPos({
        x: ev.clientX,
        y: ev.clientY,
      });
    }

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return pos;
}
