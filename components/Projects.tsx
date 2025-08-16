import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "LSTM‑Based Movie Recommendation System",
    bullets: [
      "Built a personalized movie recommender using LSTM neural networks.",
      "Processed and trained on user‑movie interaction data using TensorFlow, Keras, Pandas, NumPy.",
      "Predicted user preferences and generated real‑time recommendations with improved accuracy.",
    ],
    tech: ["TensorFlow", "Keras", "Pandas", "NumPy", "Flask (optional)"],
    image: "/movie-recommender.jpg",
  },
  {
    title: "SafeSign — Signature Verification System",
    bullets: [
      "Developed a real‑time signature verification system using Siamese Networks and OpenCV.",
      "Trained model to distinguish genuine vs forged signatures via pairwise image comparison.",
      "Deployed model using Flask to provide an interactive web‑based validation tool.",
    ],
    tech: ["Siamese Networks", "OpenCV", "Flask"],
    image: "/safesign.jpg",
  },
  {
    title: "ShopEase — E‑commerce Website",
    bullets: [
      "Designed and developed a responsive multi‑page e‑commerce platform.",
      "Implemented product listings, shopping cart logic, and smooth navigation for a user‑friendly experience.",
      "Showcased strong frontend development and UI/UX design principles.",
    ],
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "/shopease.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pt-20 pb-16 sm:pt-28 sm:pb-24 bg-[#F5FAFF]">
      <div className="container">
        <SectionHeader eyebrow="Projects" title="Selected work" subtitle="Projects from ML and frontend tracks." />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-gray-200 overflow-hidden bg-white hover:shadow-soft transition">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
                  {p.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <ul className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t) => <li key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{t}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
