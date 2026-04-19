'use client';

import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Cloud,
  Building2,
  Landmark,
  HeartPulse,
  Briefcase,
  BookOpen,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const metrics = [
    { value: '27%', label: 'Vulnerability Backlog Reduction', description: 'CVSS-based prioritization across enterprise systems' },
    { value: '99%', label: 'System Uptime', description: 'Proactive monitoring and maintenance' },
    { value: 'RMF', label: 'Compliance Support', description: 'Support for NIST 800-53 alignment and STIG reduction' },
    { value: '60+', label: 'Minutes Saved Daily', description: 'Workflow optimization and operational efficiency' },
  ];

  const services = [
    {
      icon: Shield,
      title: 'RMF/NIST Compliance',
      description: 'Support for RMF execution, NIST 800-53 alignment, STIG implementation, and continuous monitoring strategies.',
      details: 'Ideal for organizations that need audit readiness, stronger documentation, and practical help navigating regulated security environments.',
    },
    {
      icon: Lock,
      title: 'Vulnerability Management',
      description: 'Identify, prioritize, and remediate vulnerabilities using risk-based workflows that reduce exposure faster.',
      details: 'We help teams focus on what matters most through structured scanning, triage, remediation planning, and repeatable reporting.',
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'Strengthen cloud and hybrid environments with practical controls for identity, visibility, governance, and resilience.',
      details: 'Best suited for organizations modernizing infrastructure without losing control of security, compliance, or operational continuity.',
    },
  ];

  const markets = [
    {
      icon: Briefcase,
      title: 'DoD Contractors',
      description: 'For defense-aligned organizations that need RMF support, STIG hardening, vulnerability remediation, and disciplined cybersecurity execution.',
    },
    {
      icon: Landmark,
      title: 'Government & Public Sector Teams',
      description: 'For mission-driven teams that need structured security operations, documentation, and a reliable compliance-focused partner.',
    },
    {
      icon: HeartPulse,
      title: 'Healthcare Organizations',
      description: 'For healthcare environments balancing operational continuity, sensitive data protection, and growing security expectations.',
    },
    {
      icon: Building2,
      title: 'Mid-Size Businesses with Sensitive Data',
      description: 'For growing organizations that need stronger security foundations without the overhead of a large internal security team.',
    },
  ];

  const publications = [
    { title: 'Cybersecurity Best Practice Guides', type: 'Guide' },
    { title: 'RMF and NIST Compliance Handbooks', type: 'Handbook' },
    { title: 'Threat Briefs and Analysis Reports', type: 'Report' },
    { title: 'Customized Training Modules', type: 'Training' },
  ];

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatusMessage('Thank you for reaching out. We will contact you shortly.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatusMessage('Unable to send your message right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold text-white">VIGILANT</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-green-400 transition">Services</a>
            <a href="#markets" className="hover:text-green-400 transition">Who We Serve</a>
            <a href="#impact" className="hover:text-green-400 transition">Impact</a>
            <a href="#mission" className="hover:text-green-400 transition">Mission</a>
            <a href="#contact" className="hover:text-green-400 transition">Contact</a>
          </div>
          <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition">
            Schedule Consultation
          </button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.25em] text-green-400 mb-4">
              Veteran Operated Cybersecurity Consulting
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Cybersecurity for <span className="text-green-400">regulated, mission-critical</span> organizations
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl">
              Specializing in RMF and NIST compliance, vulnerability management, and cloud security for environments where resilience matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <a href="#markets" className="px-8 py-3 border-2 border-green-500 hover:bg-green-500/10 rounded-lg font-semibold transition text-center">
                See Who We Serve
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="markets" className="py-20 px-6 bg-slate-800/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Who We Serve</h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            We are built for organizations operating in regulated or high-trust environments where downtime, compliance gaps, and vulnerability exposure carry real consequences.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {markets.map((market, index) => {
              const Icon = market.icon;
              return (
                <div key={index} className="bg-slate-800/50 border border-slate-700 hover:border-green-500/50 rounded-lg p-8 transition">
                  <Icon className="w-10 h-10 text-green-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{market.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{market.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="impact" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Proven Results</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Our commitment to excellence is reflected in measurable improvements to security posture and operations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-lg border border-green-500/30 hover:border-green-400/60 transition">
                <div className="text-4xl font-bold text-green-400 mb-2">{metric.value}</div>
                <h3 className="text-lg font-semibold mb-2">{metric.label}</h3>
                <p className="text-sm text-gray-400">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Services</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Comprehensive cybersecurity support designed for organizations that need practical execution, not generic advice.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`p-8 rounded-lg border-2 cursor-pointer transition transform hover:scale-105 ${
                    activeService === index
                      ? 'bg-green-500/10 border-green-500'
                      : 'bg-slate-800/50 border-slate-700 hover:border-green-500/50'
                  }`}
                >
                  <Icon className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  {activeService === index && (
                    <div className="mt-4 pt-4 border-t border-green-500/30 text-sm text-gray-300">
                      {service.details}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="mission" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Mission Focus</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Our foundation is built on discipline, rigor, and mission success. We understand the demands of protecting sensitive systems and supporting operations where accountability matters.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded by veterans with hands-on SOC experience, VIGILANT Consulting is designed for clients who need a trusted cybersecurity partner capable of reducing risk without slowing the mission.
              </p>
              <div className="space-y-3">
                {['Veteran operated expertise', 'Hands-on SOC experience', 'Compliance-driven execution', 'Built for regulated environments'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-slate-800 p-8 rounded-lg border border-green-500/30">
              <BookOpen className="w-16 h-16 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Training Publications</h3>
              <p className="text-gray-300 mb-6">
                We help strengthen internal capability through practical training resources that support awareness, compliance, and better security decision-making.
              </p>
              <div className="space-y-2">
                {publications.map((pub, i) => (
                  <div key={i} className="flex items-start gap-3 pb-3 border-b border-slate-700/50 last:border-0">
                    <span className="text-xs font-semibold text-green-400 mt-1">{pub.type}</span>
                    <span className="text-sm text-gray-300">{pub.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
          <p className="text-center text-gray-400 mb-12">
            Ready to strengthen your security posture? Reach out to our team today.
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-green-500 focus:outline-none transition text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-green-500 focus:outline-none transition text-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-green-500 focus:outline-none transition text-white resize-none"
                placeholder="Tell us about your security needs..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {statusMessage ? (
              <p className="text-sm text-center text-gray-300">{statusMessage}</p>
            ) : null}
          </form>
        </div>
      </section>

      <footer className="py-8 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2026 VIGILANT Consulting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}