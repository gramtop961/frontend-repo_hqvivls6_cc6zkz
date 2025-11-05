import React, { useEffect, useMemo, useState } from 'react';

// Decorative animated network lines and signals overlay
// This intentionally does not intercept pointer events so the 3D scene stays interactive.
export default function SignalOverlay() {
  const [paths] = useState(() => generatePaths(10));

  // Trigger reflow for animation start
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setTick(1), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
          </linearGradient>
          <radialGradient id="pulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        {paths.map((p, i) => (
          <g key={i}>
            <path
              d={`M ${p.x1} ${p.y1} C ${p.cx1} ${p.cy1}, ${p.cx2} ${p.cy2}, ${p.x2} ${p.y2}`}
              stroke="url(#lineGrad)"
              strokeWidth={0.25}
              fill="none"
              opacity={0.4}
            />
            <circle r={0.9} fill="url(#pulse)">
              <animateMotion
                dur={`${p.dur}s`}
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                rotate="auto"
                path={`M ${p.x1} ${p.y1} C ${p.cx1} ${p.cy1}, ${p.cx2} ${p.cy2}, ${p.x2} ${p.y2}`}
                begin={`${(i % 5) * 0.7 + tick * 0}s`}
              />
            </circle>
          </g>
        ))}
      </svg>

      {/* Soft vignette/spotlight to add depth without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
    </div>
  );
}

function generatePaths(n) {
  const rand = (min, max) => Math.random() * (max - min) + min;
  const paths = [];
  for (let i = 0; i < n; i++) {
    const x1 = rand(5, 30);
    const y1 = rand(10, 90);
    const x2 = rand(70, 95);
    const y2 = rand(10, 90);
    const cx1 = rand(30, 45);
    const cy1 = rand(0, 100);
    const cx2 = rand(55, 70);
    const cy2 = rand(0, 100);
    const dur = rand(5, 10);
    paths.push({ x1, y1, x2, y2, cx1, cy1, cx2, cy2, dur });
  }
  return paths;
}
