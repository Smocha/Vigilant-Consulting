import Link from 'next/link';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center pt-12 md:pt-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Secure Your Future with Vigilant Tech</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
          We provide cutting-edge cybersecurity and AI solutions to protect and empower your business.
        </p>
        <Link
          href="#contact"
          className="inline-block px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold"
        >
          Get in Touch
        </Link>
      </section>

      {/* Services Section */}
      <section className="max-w-5xl mx-auto grid gap-12 md:grid-cols-3">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Cybersecurity Consulting</h3>
          <p className="text-gray-400">
            Comprehensive assessments, strategy design and threat mitigation to secure your organization’s digital
            assets.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">AI &amp; Machine Learning</h3>
          <p className="text-gray-400">
            Harness the power of AI to transform data into actionable insights and automation for your business.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Security Training</h3>
          <p className="text-gray-400">
            Empower your team with tailored training programs to build a security-first culture.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto bg-brand-dark rounded-lg p-8 border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-400 mb-6">
          Ready to take the next step? Fill out the form below and our team will get back to you soon.
        </p>
        <ContactForm />
      </section>
    </div>
  );
}