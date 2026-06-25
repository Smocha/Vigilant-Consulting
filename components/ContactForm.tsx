"use client";

import { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiryType: string;
  timeline: string;
  message: string;
  website: string;
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  inquiryType: "Security evaluation",
  timeline: "Not sure yet",
  message: "",
  website: "",
};

const inquiryOptions = [
  "Security evaluation",
  "NIST 800-171 readiness assessment",
  "CMMC preparation",
  "Vulnerability assessment",
  "Risk assessment",
  "Incident readiness",
  "AI security and governance",
  "General inquiry",
];

const timelineOptions = [
  "Not sure yet",
  "Immediately",
  "Within 30 days",
  "Within 60-90 days",
  "Planning for later",
];

const inputClassName =
  "mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-300/20";

const labelClassName = "text-sm font-medium text-slate-200";

function validateForm(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();
  const trimmedMessage = values.message.trim();

  if (trimmedName.length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.inquiryType.trim()) {
    errors.inquiryType = "Please select an inquiry type.";
  }

  if (!values.timeline.trim()) {
    errors.timeline = "Please select a timeline.";
  }

  if (trimmedMessage.length < 20) {
    errors.message =
      "Please include at least 20 characters so we can respond well.";
  }

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const isSubmitting = status === "submitting";

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const field = event.target.name as keyof FormValues;
    const value = event.target.value;

    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setServerMessage("");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (form.website.trim()) {
      return;
    }

    const nextErrors = validateForm(form);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      setServerMessage("Please correct the highlighted fields and try again.");
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          company: form.company.trim(),
          inquiryType: form.inquiryType,
          timeline: form.timeline,
          message: form.message.trim(),
          website: form.website,
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | { success?: boolean; message?: string; error?: string }
        | null;

      if (!response.ok) {
        throw new Error(data?.error || "Unable to send your inquiry right now.");
      }

      setStatus("success");
      setServerMessage(
        data?.message || "Thanks — your inquiry has been sent successfully."
      );
      setForm(initialValues);
      setErrors({});
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later.";

      setStatus("error");
      setServerMessage(message);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-32 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/85">
              Start Your Security Evaluation
            </p>

            <h2
              id="contact-title"
              className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Speak with a cybersecurity advisor.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
              Whether you&apos;re preparing for NIST 800-171 or CMMC
              compliance, strengthening your cybersecurity posture, evaluating
              AI security, or responding to evolving threats, Vigilant
              Consulting is here to help. Tell us about your organization, and
              we&apos;ll recommend the engagement that best aligns with your
              goals.
            </p>

            <div className="mt-8 space-y-3 text-sm leading-7 text-slate-300">
              <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                We help organizations evaluate risk, prepare for compliance
                requirements, improve incident readiness, and make informed
                cybersecurity decisions.
              </p>

              <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                Your initial consultation is complimentary. There is no
                obligation — just an opportunity to discuss your cybersecurity
                objectives and determine the best next step.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            aria-busy={isSubmitting}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className={labelClassName}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClassName}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder="Your full name"
                  required
                />
                {errors.name ? (
                  <p id="name-error" className="mt-2 text-sm text-rose-300">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="email" className={labelClassName}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClassName}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="you@company.com"
                  required
                />
                {errors.email ? (
                  <p id="email-error" className="mt-2 text-sm text-rose-300">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="phone" className={labelClassName}>
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="Optional"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="company" className={labelClassName}>
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="Organization name"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="inquiryType" className={labelClassName}>
                  Inquiry type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={form.inquiryType}
                  onChange={handleChange}
                  className={inputClassName}
                  aria-invalid={Boolean(errors.inquiryType)}
                  aria-describedby={
                    errors.inquiryType ? "inquiryType-error" : undefined
                  }
                  required
                >
                  {inquiryOptions.map((option) => (
                    <option key={option} value={option} className="bg-slate-950">
                      {option}
                    </option>
                  ))}
                </select>
                {errors.inquiryType ? (
                  <p
                    id="inquiryType-error"
                    className="mt-2 text-sm text-rose-300"
                  >
                    {errors.inquiryType}
                  </p>
                ) : null}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="timeline" className={labelClassName}>
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={form.timeline}
                  onChange={handleChange}
                  className={inputClassName}
                  aria-invalid={Boolean(errors.timeline)}
                  aria-describedby={
                    errors.timeline ? "timeline-error" : undefined
                  }
                  required
                >
                  {timelineOptions.map((option) => (
                    <option key={option} value={option} className="bg-slate-950">
                      {option}
                    </option>
                  ))}
                </select>
                {errors.timeline ? (
                  <p id="timeline-error" className="mt-2 text-sm text-rose-300">
                    {errors.timeline}
                  </p>
                ) : null}
              </div>

              <div className="hidden">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelClassName}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className={inputClassName}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="Tell us what you are evaluating, where you need clarity, and any timeline we should know."
                  required
                />
                {errors.message ? (
                  <p id="message-error" className="mt-2 text-sm text-rose-300">
                    {errors.message}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-6 min-h-6" aria-live="polite">
              {serverMessage ? (
                <p
                  role={status === "error" ? "alert" : "status"}
                  className={
                    status === "success"
                      ? "text-sm text-emerald-300"
                      : status === "error"
                        ? "text-sm text-rose-300"
                        : "text-sm text-slate-300"
                  }
                >
                  {serverMessage}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[rgb(var(--accent))] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px] hover:shadow-[0_0_30px_rgba(132,255,85,0.24)] disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--accent))]"
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}