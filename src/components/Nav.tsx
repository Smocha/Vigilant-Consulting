"use client";

import React, { useState } from 'react';

const Nav: React.FC = () => {
  // simple mobile menu toggle
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-primary/80 border-b border-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          className="text-xl font-bold tracking-wider text-accent hover:text-white transition-colors"
        >
          VIGILANT
        </a>
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8 text-sm">
          <a
            href="#services"
            className="hover:text-accent transition-colors"
          >
            Services
          </a>
          <a href="#about" className="hover:text-accent transition-colors">
            About
          </a>
          <a
            href="#contact"
            className="hover:text-accent transition-colors"
          >
            Contact
          </a>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary-light border-t border-primary-dark px-4 py-4 space-y-4">
          <a
            href="#services"
            className="block hover:text-accent transition-colors"
            onClick={() => setOpen(false)}
          >
            Services
          </a>
          <a
            href="#about"
            className="block hover:text-accent transition-colors"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="block hover:text-accent transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;