import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md/0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-rose-600 via-red-500 to-orange-400 shadow-inner" />
          <span className="text-white text-lg sm:text-xl font-semibold tracking-tight">Ideato</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a href="#" className="hover:text-white transition">Explore</a>
          <a href="#" className="hover:text-white transition">Trending</a>
          <a href="#" className="hover:text-white transition">About</a>
        </nav>
      </div>
    </header>
  );
}
