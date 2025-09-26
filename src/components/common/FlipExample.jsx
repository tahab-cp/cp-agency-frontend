"use client";

import { useState, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

export default function FlipExample() {
  const [grid, setGrid] = useState(true);
  const containerRef = useRef(null);

  const toggleLayout = () => {
    const state = Flip.getState(".box"); // capture before state

    setGrid(!grid); // toggle layout

    Flip.from(state, {
      duration: 0.7,
      ease: "power1.inOut",
      stagger: 0.05,
    });
  };

  return (
    <div className="p-8">
      <button
        onClick={toggleLayout}
        className="mb-4 rounded-md bg-blue-500 px-4 py-2 text-white"
      >
        Toggle Layout
      </button>

      <div
        ref={containerRef}
        className={`flex flex-wrap gap-4 transition-all ${
          grid ? "flex-row" : "flex-col"
        }`}
      >
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="box flex h-20 w-20 items-center justify-center rounded-lg bg-pink-400 text-white"
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}
