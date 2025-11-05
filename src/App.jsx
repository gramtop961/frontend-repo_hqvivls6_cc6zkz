import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function Feature({ title, text }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#08070a]">
      <Navbar />
      <HeroSection />

      {/* Simple feature callouts */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Feature title="Grow ideas together" text="Follow threads, add branches, and watch simple sparks become movements." />
          <Feature title="Signal your impact" text="Each post sends a pulse across the network, connecting minds across the globe." />
          <Feature title="Privacy by default" text="Choose who can remix, view, and build on your ideas at every step." />
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-white/50 text-sm">
        Built with love for ideas. © {new Date().getFullYear()} Ideato
      </footer>
    </div>
  );
}
