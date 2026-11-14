import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { translations } from "../data/translations";

import Bundesliga from "../assets/Work/Bundesliga.png";
import Properties from "../assets/Work/Properties.png";
// Kada ubaciš slike za ATP i Traffic u src/assets/Work/, otkomentariši ove dve linije:
// import ATP from "../assets/Work/ATP.png";
// import Traffic from "../assets/Work/Traffic.png";

const PROJECT_IMAGES = {
  atp: Bundesliga, // Zameni sa ATP kada dodaš sliku
  bundesliga: Bundesliga,
  traffic: Properties, // Zameni sa Traffic kada dodaš sliku
};

const FeaturedProjectCard = ({ project, delay }) => {
  const bgImage = PROJECT_IMAGES[project.id] || Bundesliga;

  return (
    <FadeIn delay={delay}>
      <motion.div
        className="relative group rounded-2xl bg-[#112240]/90 border border-slate-700/70 hover:border-blue-500/60 shadow-xl overflow-hidden h-full flex flex-col transition-colors"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay }}
      >
        <a
          href={
            project.link && project.link !== "#" ? project.link : project.github
          }
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden relative h-[200px] border-b border-slate-800"
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 bg-[#0a192f]/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 overflow-y-auto flex flex-col justify-center">
            <ul className="text-xs md:text-sm text-gray-200 text-left list-disc list-inside space-y-1.5">
              {project.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </a>

        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <a
              href={
                project.link && project.link !== "#" ?
                  project.link
                : project.github
              }
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>
            </a>

            <p className="text-xs md:text-sm text-gray-300 mt-2 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 py-0.5 rounded bg-[#0a192f] border border-slate-700/80 text-[11px] font-medium text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition"
                  aria-label="Live Project"
                >
                  <FaExternalLinkAlt size={16} />
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
                  <FaGithub size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
};

const Work = ({ isNavOpen, lang = "en" }) => {
  const t = (translations[lang] || translations.en).work;

  return (
    <section
      id="work"
      className={`w-full ${
        isNavOpen ? "min-h-[calc(100vh-80px)]" : "min-h-screen"
      } bg-[#0a192f] text-gray-300 px-6 py-20`}
    >
      <div className="md:max-w-[700px] xl:max-w-[1200px] mx-auto flex flex-col">
        <FadeIn>
          <header className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold inline border-b-2 border-blue-600 pb-1 text-white">
              {t.heading}
            </h2>
            <p className="pt-4 text-sm md:text-base xl:text-lg text-gray-300 max-w-2xl">
              {t.subtitle}
            </p>
          </header>
        </FadeIn>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 w-full">
          {t.featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              project={project}
              key={index}
              delay={index * 0.15}
            />
          ))}
        </div>

        <div className="mt-14">
          <FadeIn>
            <h3 className="text-lg md:text-xl font-bold text-white mb-6">
              {t.otherHeading}
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {t.otherProjects.map((proj, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="h-full rounded-xl bg-[#112240]/60 border border-slate-800 hover:border-blue-500/40 p-5 flex flex-col justify-between transition-colors">
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
                            aria-label="Live link"
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
                            aria-label="GitHub"
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
    </section>
  );
};

export default Work;
