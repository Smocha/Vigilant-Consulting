"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <main>
      <h1>VIGILANT Consulting</h1>

      <form onSubmit={handleFormSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleFormChange}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleFormChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          onChange={handleFormChange}
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}