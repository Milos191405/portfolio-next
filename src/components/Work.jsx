import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaImages } from "react-icons/fa";
import FadeIn from "./FadeIn";
import ProjectModal from "./ProjectModal";
import { translations } from "../data/translations";

import Bundesliga from "../assets/Work/Bundesliga.png";
import Properties from "../assets/Work/Properties.png";

// Map project IDs to an array of images for the modal gallery
const PROJECT_GALLERIES = {
  wct: [Properties], // Replace with /projects/wct/... when ready
  atp: [Bundesliga], // Replace with /projects/atp/... when ready
  bundesliga: [
    "/projects/bundesliga/01-league-overview.png",
    "/projects/bundesliga/02-offensive-performance.png",
    "/projects/bundesliga/03-home-vs-away.png",
    "/projects/bundesliga/04-leverkusen-case-study.png",
    "/projects/bundesliga/05-python-zscore.png",
    "/projects/bundesliga/06-python-correlation.png",
  ],
  traffic: [Properties],
};

const Work = ({ isNavOpen, lang = "en" }) => {
  const [activeProject, setActiveProject] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const t = (translations[lang] || translations.en).work;

  const openProjectModal = (project) => {
    setActiveProject(project);
    setSlideIndex(0);
  };

  const currentImages =
    activeProject ? PROJECT_GALLERIES[activeProject.id] || [Bundesliga] : [];

  return (
    <section
      id="work"
      className={`w-full ${
        isNavOpen ? "min-h-[calc(100vh-80px)]" : "min-h-screen"
      } bg-[#0a192f] text-gray-300 px-4 sm:px-6 py-20`}
    >
      <div className="md:max-w-[700px] xl:max-w-[1200px] mx-auto flex flex-col">
        <FadeIn>
          <header className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold inline border-b-2 border-blue-500 pb-1 text-white">
              {t.heading}
            </h2>
            <p className="pt-4 text-sm md:text-base xl:text-lg text-gray-300 max-w-2xl">
              {t.subtitle}
            </p>
          </header>
        </FadeIn>

        {/* FEATURED PROJECTS GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 w-full">
          {t.featuredProjects.map((project, index) => {
            const gallery = PROJECT_GALLERIES[project.id] || [Bundesliga];
            const thumb = gallery[0];

            return (
              <FadeIn key={index} delay={index * 0.15}>
                <div
                  onClick={() => openProjectModal(project)}
                  className="group rounded-2xl bg-[#112240]/75 border border-slate-800 hover:border-blue-500/50 shadow-xl overflow-hidden h-full flex flex-col transition-all cursor-pointer hover:-translate-y-1"
                >
                  <div className="overflow-hidden h-[200px] border-b border-slate-800 relative bg-[#0a192f]">
                    <img
                      src={thumb}
                      alt={project.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a192f]/50 via-transparent to-transparent"
                    />

                    {/* Status Badge for In-Progress Projects (e.g. Warehouse Control Tower) */}
                    {project.statusBadge && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-500/95 text-[#0a192f] text-[10px] font-extrabold tracking-wider uppercase shadow-lg">
                        {project.statusBadge}
                      </span>
                    )}

                    {/* Slide Counter Pill */}
                    {gallery.length > 1 && (
                      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0a192f]/90 border border-slate-700/80 text-[11px] font-semibold text-blue-300 backdrop-blur-sm">
                        <FaImages className="text-[11px]" />
                        <span>{gallery.length}</span>
                      </span>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-300 mt-2 leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded bg-[#0a192f] border border-slate-800 text-[11px] font-medium text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div
                        className="flex items-center gap-3 shrink-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.link && project.link !== "#" && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-blue-400 transition"
                            aria-label="Live Demo"
                          >
                            <FaExternalLinkAlt size={15} />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-blue-400 transition"
                            aria-label="GitHub Repository"
                          >
                            <FaGithub size={17} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* OTHER PROJECTS GRID */}
        <div className="mt-14">
          <FadeIn>
            <h3 className="text-lg md:text-xl font-bold text-white mb-6">
              {t.otherHeading}
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {t.otherProjects.map((proj, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="h-full rounded-xl bg-[#112240]/50 border border-slate-800 hover:border-blue-500/40 p-5 flex flex-col justify-between transition-colors">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-base text-white">
                        {proj.name}
                      </h4>
                      <div className="flex items-center gap-2.5 shrink-0 text-gray-400">
                        {proj.link && proj.link !== "#" && (
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition"
                            aria-label="Live Project"
                          >
                            <FaExternalLinkAlt size={13} />
                          </a>
                        )}
                        {proj.github && (
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition"
                            aria-label="GitHub Repository"
                          >
                            <FaGithub size={15} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                      {proj.shortDescription}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-800/70">
                    {proj.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-[#0a192f] text-[10px] font-medium text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* FULL-SCREEN PROJECT MODAL */}
      <ProjectModal
        activeProject={activeProject}
        onClose={() => setActiveProject(null)}
        currentImages={currentImages}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
    </section>
  );
};

export default Work;
