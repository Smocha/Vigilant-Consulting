"use client";

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For this template we just flag as submitted. Integrate with your API or email service here.
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto py-20 px-4 md:px-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Get In Touch
      </h2>
      {submitted ? (
        <p className="text-center text-green-400">
          Thank you for reaching out! We will get back to you shortly.
        </p>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full bg-primary-light border border-primary-dark rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full bg-primary-light border border-primary-dark rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full bg-primary-light border border-primary-dark rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent/80 transition-colors"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;