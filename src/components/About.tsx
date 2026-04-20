"use client";

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto py-20 px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Us</h2>
      <div className="md:flex md:items-start md:space-x-12">
        <div className="flex-1 mb-8 md:mb-0">
          <p className="text-gray-300 leading-relaxed mb-4">
            VIGILANT Consulting was founded by veterans with extensive military
            backgrounds and hands-on experience running Security Operations
            Centers (SOCs). Our team brings discipline, rigor and mission-focused
            expertise to every engagement.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We understand the criticality of protecting sensitive information and
            infrastructure. With a deep understanding of compliance frameworks
            and real-world defense strategies, we help organizations of all
            sizes build resilient security programs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;