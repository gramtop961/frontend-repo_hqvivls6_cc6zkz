import React from 'react';
import Spline from '@splinetool/react-spline';
import IdeaForm from './IdeaForm';
import SignalOverlay from './SignalOverlay';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#08070a]">
      {/* 3D Globe */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays to improve contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#08070a]/40 via-[#08070a]/20 to-[#08070a]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-rose-700/10 via-red-500/5 to-transparent" />

      {/* Decorative signal overlay */}
      <SignalOverlay />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,45,85,0.35)]">
          An idea social network
        </h1>
        <p className="mt-4 max-w-2xl text-white/80 text-base sm:text-lg">
          Share sparks that connect the world. Post your ideas and let AI help you refine them.
        </p>

        <div className="mt-8 w-full">
          <IdeaForm />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-white/60">
          <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10">Interactive 3D globe</span>
          <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10">AI-assisted posting</span>
          <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10">Signal network visual</span>
        </div>
      </div>
    </section>
  );
}
