"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="pt-28 sm:pt-32">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm <span className="text-brand-700">Tayyaba Ankalgi</span>.
            <br />
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Electronics & Communication undergrad with hands-on web development and growing passion
            for machine learning. Focused on building engaging, accessible interfaces and real-time ML features.
          </motion.p>

          {/* Icons only: LinkedIn, GitHub, Email */}
          <motion.div
            className="mt-8 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/tayyaba-ankalgi"
              target="_blank"
              aria-label="LinkedIn"
              className="group inline-flex items-center justify-center w-11 h-11 rounded-xl border border-gray-300 text-gray-600 hover:text-blue-600 hover:border-blue-400 transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Tayyabaankalgi"
              target="_blank"
              aria-label="GitHub"
              className="group inline-flex items-center justify-center w-11 h-11 rounded-xl border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-500 transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.53-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.93.43.37.83 1.1.83 2.22v3.29c0 .32.19.7.8.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:tayyabaankalgi2005@gmail.com"
              aria-label="Email"
              className="group inline-flex items-center justify-center w-11 h-11 rounded-xl border border-gray-300 text-gray-600 hover:text-red-600 hover:border-red-400 transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 12 4 6.01V6h16zM4 18V8l8 6 8-6v10H4z"/>
              </svg>
            </a>
          </motion.div>
        </div>
<motion.div
  className="relative"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
>
  {/* Blue gradient blob background */}
  <svg
className="absolute -top-28 -right-28sm:-top-20 sm:-right-20 w-[480px] h-[480px] sm:w-[540px] sm:h-[540px] -z-10"
viewBox="0 0 600 600"
xmlns="http://www.w3.org/2000/svg"
aria-hidden="true"
focusable="false"
  >
    <defs>
      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />   {/* light blue */}
        <stop offset="100%" stopColor="#2563EB" /> {/* brand blue */}
      </linearGradient>
    </defs>
    <path
      fill="url(#blueGrad)"
      opacity="0.9"
      d="M415.4,106.6c47.8,30.5,90.3,78.2,96.5,129.6c6.2,51.3-23.9,106.3-63.5,156.2
         c-39.6,49.9-88.7,94.7-144.2,101.4c-55.5,6.7-117.4-24.6-159.9-68.6c-42.6-43.9-65.8-100.6-61.7-150.8
         c4-50.1,35.5-93.6,77.3-127.3c41.8-33.8,93.9-57.7,144.8-56.4C355.6,92,367.6,76.1,415.4,106.6z"
    />
  </svg>

  {/* Your existing circular photo block */}
  <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full shadow-soft bg-white p-3 mx-auto border border-gray-200">
    <img
      src="/profile.jpg"
      alt="Portrait of Tayyaba Ankalgi"
      className="rounded-full w-full h-full object-cover"
    />
  </div>

  {/* Availability badge (optional, keep if you have it) */}
  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-2 shadow-soft border border-gray-200">
    <span className="text-sm text-black">Available for opportunities</span>
  </div>
</motion.div>

      </div>
    </section>
  );
}
