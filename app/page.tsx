"use client";

import Link from 'next/link';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
  return (
    <div className="space-y-24">

      {/* Hero Section */}
      <section className="text-center pt-12 md:pt-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Secure Your Future with Vigilant Tech
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
          We provide cutting-edge cybersecurity and AI solutions to protect and
          empower your business.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="inline-block px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            Get in Touch
          </Link>

          <button
            onClick={async () => {
              const response = await fetch("/api/checkout", {
                method: "POST",
              });

              const data = await response.json();

              if (data.url) {
                window.location.href = data.url;
              }
            }}
            className="inline-block px-6 py-3 rounded-md bg-white text-black font-semibold hover:opacity-80 transition"
          >
            Book Consultation — $149
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-5xl mx-auto grid gap-12 md:grid-cols-3">

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">
            Cybersecurity Consulting
          </h3>

          <p className="text-gray-400">
            Comprehensive assessments, strategy design and threat mitigation to
            secure your organization’s digital assets.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">
            AI &amp; Machine Learning
          </h3>

          <p className="text-gray-400">
            Harness the power of AI to transform data into actionable insights
            and automation for your business.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">
            Security Training
          </h3>

          <p className="text-gray-400">
            Empower your team with tailored training programs to build a
            security-first culture.
          </p>
        </div>

      </section>

      {/* Pricing Section */}
      <section className="max-w-6xl mx-auto text-center space-y-10">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Consulting Packages
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Flexible cybersecurity and AI consulting packages designed for
            startups, enterprises and growing organizations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="bg-brand-dark border border-gray-700 rounded-2xl p-8 space-y-4">
            <h3 className="text-2xl font-semibold">
              Starter Consultation
            </h3>

            <p className="text-4xl font-bold">
              $149
            </p>

            <p className="text-gray-400">
              Initial cybersecurity strategy consultation and risk discussion.
            </p>
          </div>

          <div className="bg-brand-dark border border-blue-600 rounded-2xl p-8 space-y-4 shadow-lg shadow-blue-500/10">
            <h3 className="text-2xl font-semibold">
              Security Assessment
            </h3>

            <p className="text-4xl font-bold">
              $499
            </p>

            <p className="text-gray-400">
              Comprehensive security assessment with actionable recommendations.
            </p>
          </div>

          <div className="bg-brand-dark border border-gray-700 rounded-2xl p-8 space-y-4">
            <h3 className="text-2xl font-semibold">
              Cloud Security Review
            </h3>

            <p className="text-4xl font-bold">
              $999
            </p>

            <p className="text-gray-400">
              In-depth cloud infrastructure analysis and security optimization.
            </p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-3xl mx-auto bg-brand-dark rounded-lg p-8 border border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-4">
          Contact Us
        </h2>

        <p className="text-gray-400 mb-6">
          Ready to take the next step? Fill out the form below and our team
          will get back to you soon.
        </p>

        <ContactForm />
      </section>

    </div>
  );
}
