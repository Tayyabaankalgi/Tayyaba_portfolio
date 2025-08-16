"use client";
import SectionHeader from "./SectionHeader";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gray-50">
      <div className="container">
        <SectionHeader eyebrow="Contact" title="Let’s work together" subtitle="Tell me about your project or just say hi." />
        <form onSubmit={submit} className="mt-10 max-w-2xl mx-auto grid grid-cols-1 gap-4">
          <input required placeholder="Name" className="w-full rounded-xl border border-gray-300 px-4 py-3" />
          <input required type="email" placeholder="Email" className="w-full rounded-xl border border-gray-300 px-4 py-3" />
          <textarea required placeholder="Your message" rows={5} className="w-full rounded-xl border border-gray-300 px-4 py-3" />
          <button className="justify-self-start inline-flex items-center rounded-2xl px-5 py-3 bg-brand-600 text-white hover:bg-brand-700 transition shadow-soft">
            Send message
          </button>
          {sent && <p className="text-green-600">Thanks! This demo doesn’t send emails yet—hook it to your favorite form backend.</p>}
        </form>
      </div>
    </section>
  );
}
