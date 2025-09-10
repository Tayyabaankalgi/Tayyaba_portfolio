// components/About.tsx
// Make sure to add "use client" if you plan to use client-side features like animations or interactions in the future
// "use client";

import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F5FAFF]"> {/* Frosted Glacier background */}
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image/Avatar (Optional) */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/profile.jpg" // Use your profile image, make sure it's in the public folder
              alt="Tayyaba Ankalgi Profile"
              className="rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover shadow-lg border-4 border-white transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Column: Text Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              Hello! I'm Tayyaba.
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I’m an Electronics & Communication Engineering undergrad with a strong foundation in problem-solving and critical thinking. My journey led me to the world of web development, where I love creating intuitive and engaging user experiences with clean, efficient code.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Beyond web, I’m exploring Machine Learning to build intelligent, user-driven features. I’m curious, collaborative, and excited about opportunities to combine my analytical background with my creative passion for technology.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I believe in continuous learning, open collaboration, and delivering solutions that are not just functional but also delightful to use. I'm excited about opportunities that allow me to blend my analytical background with my creative passion for technology.
            </p>

            {/* Call to action (optional) */}
            <div className="mt-8">
              <a
                href="/Tayyaba_Ankalgi.Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-600 text-white font-semibold shadow-md hover:bg-brand-700 transition"
              >
                View My Resume
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
