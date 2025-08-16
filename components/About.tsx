// components/About.tsx
// Make sure to import SectionHeader from the correct path relative to this file.
import SectionHeader from "./SectionHeader"; // Adjust path if necessary
import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F5FAFF]">
      <div className="container">
        {/* Your SectionHeader component */}
        <SectionHeader eyebrow="About" title="A bit about me" subtitle="Quick intro on the homepage." />

        {/* The content below the header: only the single impressive paragraph */}
        <div className="mt-10"> {/* Adjusted margin-top for spacing below the header */}
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            I'm an Electronics & Communication Engineering student passionate about building beautiful, user-friendly web apps and exploring machine learning. Constantly eager to learn and grow, I enjoy turning complex problems into elegant, impactful solutions that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
}
