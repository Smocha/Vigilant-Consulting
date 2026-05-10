'use client';
import { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md bg-brand-dark border border-gray-600 p-2 text-gray-100"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md bg-brand-dark border border-gray-600 p-2 text-gray-100"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md bg-brand-dark border border-gray-600 p-2 text-gray-100"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
      {status === 'success' && (
        <p className="text-green-500">Thank you! Your message has been sent.</p>
      )}
      {status === 'error' && (
        <p className="text-red-500">Sorry, something went wrong. Please try again later.</p>
      )}
    </form>
  );
}