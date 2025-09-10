"use client";
import React from "react";

// Pretty names for exact Devicon classes
const NAME_MAP: Record<string, string> = {
"devicon-cplusplus-plain": "C++",
"devicon-mysql-plain colored": "SQL",
"devicon-python-plain colored": "Python",
"devicon-html5-plain colored": "HTML5",
"devicon-css3-plain colored": "CSS3",
"devicon-javascript-plain colored": "JavaScript",
"devicon-react-original colored": "React",
"devicon-bootstrap-plain colored": "Bootstrap",
"devicon-git-plain colored": "Git",
"devicon-github-original": "GitHub",
"devicon-tensorflow-original colored": "TensorFlow",
// Keras is handled via SVG, but keep a name here for tooltips
"devicon-keras-plain colored": "Keras",
"devicon-opencv-plain colored": "OpenCV",
"devicon-numpy-original colored": "NumPy",
"devicon-pandas-original colored": "Pandas",
"devicon-vscode-plain colored": "VS Code",
};

// Fallback title-case derivation
function deriveName(cls: string) {
return cls
.replace(/^devicon-/, "")
.replace(/-plain|-original|-wordmark|-line| colored/g, "")
.replace(/-+/g, " ")
.replace(/\b\w/g, (m) => m.toUpperCase());
}

type Group = { title: string; items: string[] };

const GROUPS: Group[] = [
{
title: "Programming Languages",
items: ["devicon-cplusplus-plain", "devicon-python-plain colored", "devicon-mysql-plain colored"],
},
{
title: "Web Development",
items: [
"devicon-html5-plain colored",
"devicon-css3-plain colored",
"devicon-javascript-plain colored",
"devicon-react-original colored",
"devicon-nextjs-original",
"devicon-nodejs-plain colored",
"devicon-express-original",
"devicon-bootstrap-plain colored",
"devicon-git-plain colored",
"devicon-github-original",
],
},
{
title: "Machine Learning / DL",
items: [
"devicon-tensorflow-original colored",
// Keras will be rendered as SVG tile for visibility
"devicon-keras-plain colored",
"devicon-opencv-plain colored",
"devicon-numpy-original colored",
"devicon-pandas-original colored",
// Add "devicon-pytorch-original colored" if needed
],
},
{
title: "Tools",
items: [
"devicon-vscode-plain colored",
],
},
];

export default function Skills() {
return (
<section id="skills" className="py-16 sm:py-24 bg-[#F5FAFF]">
<div className="container">
<h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
<p className="mt-2 text-gray-600">Icons represent the tools and technologies.</p>

text
    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {GROUPS.map((group) => (
        <div
          key={group.title}
          className="rounded-2xl border border-gray-200 p-6 bg-white hover:shadow-soft transition"
        >
          <h3 className="text-lg font-semibold">{group.title}</h3>

          <div className="mt-4 grid grid-cols-5 sm:grid-cols-6 gap-4">
            {group.items.map((cls) => {
              const pretty = NAME_MAP[cls] || deriveName(cls);
              const isKeras = cls.includes("keras");

              return (
                <div key={cls} className="relative flex items-center justify-center">
                  {isKeras ? (
                    // Keras special-case: red tile SVG for strong contrast
                    <button
                      type="button"
                      title="Keras"
                      aria-label="Keras"
                      className="group flex items-center justify-center rounded-lg p-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-600 transition"
                    >
                      <span className="inline-flex items-center justify-center rounded-lg w-12 h-12">
                        <svg
                          viewBox="0 0 256 256"
                          className="w-12 h-12"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <rect width="256" height="256" rx="24" fill="#D00000"></rect>
                          <path
                            fill="#FFFFFF"
                            d="M84 196V60h28v54l40-54h32l-46 61 49 75h-32l-35-56-8 10v46H84z"
                          />
                        </svg>
                      </span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      title={pretty}
                      aria-label={pretty}
                      className="group flex items-center justify-center rounded-lg p-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-600 transition"
                    >
                      <span className="inline-flex items-center justify-center rounded-full w-12 h-12 bg-gray-50">
                        <i className={`${cls} text-[26px] sm:text-[30px]`} />
                      </span>
                    </button>
                  )}

                  {/* Styled tooltip bubble on hover/focus */}
                  <span className="pointer-events-none absolute -bottom-8 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                    {isKeras ? "Keras" : pretty}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
);
}
