export default function Footer() {
  return (
    <footer className="fixed bottom-0 inset-x-0 z-40 bg-white/90 backdrop-blur border-t border-gray-200">
      <div className="container flex items-center justify-between py-3">
        {/* Bottom-left: email */}
        <a
          href="mailto:tayyabaankalgi@gmail.com"
          className="text-sm text-gray-700 hover:text-brand-700 transition"
        >
          tayyabaankalgi@gmail.com
        </a>

        {/* Bottom-right: Mail Me + About Me */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:tayyabaankalgi@gmail.com"
            className="inline-flex items-center rounded-2xl px-5 py-3 bg-brand-600 text-white hover:bg-brand-700 transition">
            Mail Me
          </a>
          <a
            href="/about"
            className="inline-flex items-center rounded-2xl px-5 py-3 bg-brand-600 text-white hover:bg-brand-700 transition">
            About Me
          </a>
        </div>
      </div>
    </footer>
  );
}
