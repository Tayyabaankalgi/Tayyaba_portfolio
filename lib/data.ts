export const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const SERVICES = [
  {
    title: "Web Development",
    desc:
      "Responsive, accessible UIs with Next.js, React, Tailwind. Clean code, smooth UX.",
    icon: "Code",
  },
  {
    title: "Machine Learning",
    desc:
      "Prototypes with TensorFlow/Keras—LSTM recommenders, Siamese models, OpenCV pipelines.",
    icon: "Brain",
  },
  {
    title: "Problem Solving",
    desc:
      "From idea to MVP—REST APIs, Git/GitHub workflows, performance and polish.",
    icon: "Wrench",
  },
];

export const PROJECTS = [
  {
    title: "LSTM-Based Movie Recommendation System",
    desc:
      "Personalized movie recommender using LSTM neural networks. Trained on user-movie interactions with TensorFlow, Keras, Pandas, NumPy; improved preference prediction.",
    tags: ["TensorFlow", "Keras", "Pandas", "NumPy", "LSTM"],
    href: "#",
    image: "/movie-recommender.jpg",
  },
  {
    title: "SafeSign — Signature Verification",
    desc:
      "Real-time signature verification using Siamese Neural Networks and OpenCV. Distinguishes genuine vs forged signatures via pairwise image comparison.",
    tags: ["Siamese NN", "OpenCV", "Python"],
    href: "#",
    image: "/safesign.jpg",
  },
  {
    title: "ShopEase — E-commerce Website",
    desc:
      "Responsive multi-page store: product listings, cart logic, smooth navigation. Built with HTML, CSS, Bootstrap, and JavaScript.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    href: "#",
    image: "/shopease.jpg",
  },
];
