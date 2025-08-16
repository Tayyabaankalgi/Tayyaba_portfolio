"use client";
import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Extracurricular", href: "#extracurricular" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const goTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    // components/Navbar.tsx

// ... (your existing imports and component structure)

<header className="fixed top-0 inset-x-0 z-50 bg-white text-gray-900 shadow-soft">
  <nav className="container flex items-center justify-between py-3">
    {/* Left: Logo badge */}
    <a
      href="#home"
      aria-label="Home"
      className="logo-tight inline-flex items-center justify-center px-5 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition" // Updated border colors
    >
      <span className="font-calligraphy font-bold text-[36px] tracking-tight text-gray-900"> {/* Updated text color */}
        Tayyaba
      </span>
    </a>

    {/* Right: Hamburger */}
    <div className="relative">
      <button
        aria-label="Open menu"
        onClick={() => setOpen(v => !v)}
        className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-300 text-gray-600 hover:border-gray-400 transition" // Updated border and text colors
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-gray-200 bg-white text-gray-800 shadow-soft overflow-hidden">
          {/* Your existing dropdown content */}
          {SECTIONS.map(s => (
            <button
              key={s.href}
              onClick={() => goTo(s.href)}
              className="w-full text-left px-4 py-2.5 hover:bg-gray-50"
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </div>
  </nav>
</header>

  );
}
