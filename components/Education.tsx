import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="pt-20 pb-16 sm:pt-28 sm:pb-24 bg-[#F5FAFF]">
      <div className="container">
        <SectionHeader eyebrow="Education" title="Academic background" subtitle="Degrees and schooling." />

        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-soft transition">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">PES College of Engineering, Mandya</h3>
              <span className="text-sm text-gray-500">Dec 2022 – 2026</span>
            </div>
            <p className="text-gray-600 mt-1">B.E. in Electronics and Communication — CGPA: 8.7</p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-soft transition">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">KLE’SCS Sangadi P U College, Gokak</h3>
              <span className="text-sm text-gray-500">July 2021</span>
            </div>
            <p className="text-gray-600 mt-1">Science PCMB — 85%</p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-soft transition">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">The Volkart Academy, Gokak Falls</h3>
              <span className="text-sm text-gray-500">Apr 2019</span>
            </div>
            <p className="text-gray-600 mt-1">State Board — 86%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
