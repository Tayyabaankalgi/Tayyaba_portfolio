import SectionHeader from "./SectionHeader";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50">
      <div className="container">
        <SectionHeader eyebrow="Services" title="What I do" subtitle="I can help you from idea to production." />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 shadow-soft hover:shadow-md transition">
              <div className="text-brand-700 font-semibold">{s.title}</div>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
