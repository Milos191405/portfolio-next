"use client";

import { FaChartBar, FaCode, FaDatabase } from "react-icons/fa";
import FadeIn from "./FadeIn";
import { translations } from "../data/translations";

const Skills = ({ lang = "en" }) => {
  const t = (translations[lang] || translations.en).skills;

  const renderIcon = (iconType) => {
    switch (iconType) {
      case "chart":
        return <FaChartBar className="text-blue-400 text-xl" />;
      case "database":
        return <FaDatabase className="text-emerald-400 text-xl" />;
      case "code":
        return <FaCode className="text-indigo-400 text-xl" />;
      default:
        return <FaChartBar className="text-blue-400 text-xl" />;
    }
  };

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex items-center justify-center px-6 py-20"
    >
      <div className="md:max-w-[700px] xl:max-w-[1200px] mx-auto flex flex-col justify-center w-full">
        <FadeIn>
          <header className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-blue-500 inline-block pb-1 text-white">
              {t.heading}
            </h2>
            <p className="pt-4 text-sm md:text-base xl:text-lg text-gray-300 max-w-2xl leading-relaxed">
              {t.subtitle}
            </p>
          </header>
        </FadeIn>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {t.categories.map((section, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div className="h-full rounded-2xl bg-[#112240]/70 border border-slate-800 p-6 hover:border-blue-500/40 transition-colors shadow-xl flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#0a192f] border border-slate-700/80 flex items-center justify-center shrink-0">
                    {renderIcon(section.icon)}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white">
                    {section.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {section.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-[#0a192f]/95 border border-slate-800 text-xs md:text-sm font-medium text-gray-200 hover:border-blue-400/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
