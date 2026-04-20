"use client";

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-primary to-primary-dark">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
        Secure Your Future
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8">
        VIGILANT Consulting provides cutting-edge cybersecurity services to protect your
        organization from evolving threats.
      </p>
      <a
        href="#contact"
        className="inline-block px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-primary rounded-full transition-colors"
      >
        Schedule a Consultation
      </a>
    </section>
  );
};

export default Hero;