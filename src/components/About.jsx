import { FaChartBar, FaCode, FaRocket, FaTrophy } from "react-icons/fa";
import FadeIn from "./FadeIn.jsx";
import { translations } from "../data/translations";

const About = ({ isNavOpen, lang = "en" }) => {
  const t = (translations[lang] || translations.en).about;

  const renderJourneyIcon = (type) => {
    switch (type) {
      case "trophy":
        return <FaTrophy className="text-amber-400 text-base" />;
      case "code":
        return <FaCode className="text-indigo-400 text-base" />;
      case "chart":
        return <FaChartBar className="text-blue-400 text-base" />;
      case "rocket":
        return <FaRocket className="text-emerald-400 text-base" />;
      default:
        return <FaChartBar className="text-blue-400 text-base" />;
    }
  };

  return (
    <section
      id="about"
      className={`w-full ${
        isNavOpen ? "min-h-[calc(100vh-80px)]" : "min-h-screen"
      } bg-[#0a192f] text-gray-200 flex items-center justify-center py-20 `}
      aria-labelledby="about-heading"
    >
      <div className="w-full md:max-w-[700px] xl:max-w-[1200px] mx-auto px-6">
        <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="xl:col-span-6 space-y-5">
            <FadeIn>
              <div className="mb-6">
                <h2
                  id="about-heading"
                  className="text-2xl md:text-3xl font-bold inline border-b-2 border-blue-500 pb-1 text-white"
                >
                  {t.heading}
                </h2>
              </div>
            </FadeIn>

            {t.paragraphs.map((text, index) => (
              <FadeIn key={index} delay={index * 0.12}>
                <p className="text-left text-sm md:text-base xl:text-[17px] leading-relaxed text-gray-300">
                  {text}
                </p>
              </FadeIn>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="xl:col-span-6">
            <FadeIn delay={0.1}>
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold inline border-b-2 border-blue-500 pb-1 text-white">
                  {t.journeyTitle}
                </h3>
              </div>
            </FadeIn>

            <div className="space-y-4">
              {t.journey.map((step, idx) => (
                <FadeIn key={idx} delay={0.2 + idx * 0.12}>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#112240]/70 border border-slate-800 hover:border-blue-500/40 transition-colors shadow-lg">
                    <div className="w-10 h-10 rounded-lg bg-[#0a192f] border border-slate-700/80 flex items-center justify-center shrink-0 mt-0.5">
                      {renderJourneyIcon(step.icon)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base text-white">
                        {step.role}
                      </h4>
                      <p className="text-xs font-semibold text-blue-400 mt-0.5">
                        {step.period}
                      </p>
                      <p className="text-xs md:text-sm text-gray-300 mt-1.5 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
