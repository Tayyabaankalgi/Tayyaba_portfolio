import SectionHeader from "./SectionHeader";

const activities = [
  {
    title: "Hackathon — Innovate‑A‑Thon",
    details: [
      "Applied machine learning to solve a real‑world problem as a team.",
      "Designed, implemented, and presented the project using ML techniques.",
    ],
  },
  {
    title: "WebScout — Web Development Event by ISTE",
    details: [
      "Participated in a web development competition on Apr 16, 2025.",
      "Selected among the Top 10 performers from 100+ participants; awarded participation & recognition.",
    ],
  },
];

export default function Extracurricular() {
  return (
    <section id="ectracurricular" className="pt-20 pb-16 sm:pt-28 sm:pb-24 bg-[#F5FAFF]">
      <div className="container">
        <SectionHeader eyebrow="Extracurricular" title="Beyond the classroom" subtitle="Activities that shaped how I learn and collaborate." />
        <div className="mt-10 grid gap-6">
          {activities.map((a) => (
            <div key={a.title} className="rounded-2xl border border-gray-200 p-6 bg-white hover:shadow-soft transition">
              <h3 className="text-lg font-semibold">{a.title}</h3>
              <ul className="mt-3 text-gray-700 list-disc list-inside">
                {a.details.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
