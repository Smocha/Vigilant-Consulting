"use client";

import React from 'react';

const Services: React.FC = () => {
  const items = [
    {
      title: 'RMF/NIST Compliance',
      description:
        'Ensure adherence to Risk Management Framework and NIST standards for secure systems.',
    },
    {
      title: 'Vulnerability Management',
      description:
        'Identify, prioritize, and remediate security vulnerabilities across your infrastructure.',
    },
    {
      title: 'Cloud Security',
      description:
        'Design and implement robust security strategies for your public and hybrid cloud environments.',
    },
  ];

  return (
    <section id="services" className="max-w-6xl mx-auto py-20 px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Services
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-primary-light p-8 rounded-lg border border-primary-dark shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-12 w-12 rounded-full border-2 border-accent flex items-center justify-center mb-4">
              <span className="text-accent font-bold">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;