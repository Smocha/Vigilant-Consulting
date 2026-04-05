"use client";

import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary-dark py-6 border-t border-primary-light">
      <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
        <p>&copy; {year} VIGILANT Consulting. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;