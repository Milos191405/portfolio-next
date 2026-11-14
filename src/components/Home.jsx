import { FaAward, FaCheckCircle, FaClock, FaDownload } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import FadeIn from "./FadeIn.jsx";
import { translations } from "../data/translations";

function Home({ isNavOpen, lang = "en" }) {
  const currentLang = translations[lang] || translations.en;
  const t = currentLang.home;
  const cvLink = currentLang.nav.cvFile;

  return (
    <section
      id="home"
      className={`w-full flex items-center justify-center bg-bg-primary px-4 pt-10 pb-12 md:px-8 ${
        isNavOpen ? "min-h-[calc(100vh-80px)] pt-40" : "min-h-screen"
      }`}
      aria-labelledby="home-heading"
    >
      <div className="w-full pt-[80px] text-header md:max-w-[700px] xl:max-w-[1200px]">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-12 xl:items-center">
          {/* LEVA KOLONA */}
          <div className="flex flex-col items-start justify-center xl:col-span-7">
            <FadeIn>
              <p className="mb-2 text-base text-text-secondary sm:text-lg xl:text-xl">
                {t.greeting}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1
                id="home-heading"
                className="mb-2 text-3xl font-bold sm:text-4xl xl:text-5xl"
              >
                {t.name}
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h2 className="mb-2 text-xl font-bold text-blue-400 sm:text-2xl xl:text-3xl">
                {t.headline}
              </h2>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="mt-1 text-sm text-text-secondary sm:text-base">
                {t.tagline}
              </p>
            </FadeIn>

            <div className="space-y-4 py-5">
              <FadeIn delay={0.6}>
                <p className="text-sm leading-relaxed text-text-primary sm:text-base xl:text-lg">
                  {t.intro}
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.8}>
              <div className="mt-1 flex flex-wrap gap-2 text-sm text-text-secondary">
                {t.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded border border-gray-700/80 bg-gray-800/90 px-2.5 py-1 text-xs font-medium text-gray-200 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={1}>
              <p className="mt-6 text-sm italic text-text-secondary sm:text-base">
                {t.prompt}
              </p>
            </FadeIn>

            <div className="max-w-3xl space-y-4 py-5 text-text-primary">
              {t.highlights.map(({ title, description }, index) => (
                <FadeIn key={index} delay={1.1 + index * 0.15}>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 min-w-[18px] text-blue-500" />
                    <div>
                      <p className="text-sm font-semibold sm:text-base">
                        {title}
                      </p>
                      <p className="text-xs text-text-secondary sm:text-sm">
                        {description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={1.6}>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <ScrollLink
                  to="work"
                  smooth={true}
                  duration={800}
                  aria-label="View my work portfolio"
                  className="inline-flex cursor-pointer items-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 sm:text-base"
                >
                  {t.ctaProjects}
                </ScrollLink>

                <a
                  href={cvLink}
                  download
                  className="inline-flex items-center gap-2 rounded-md border border-text-secondary px-5 py-2.5 text-sm font-medium text-text-secondary transition hover:border-blue-400 hover:text-white sm:text-base"
                >
                  <FaDownload className="text-xs" />
                  <span>{t.ctaCv}</span>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* DESNA KOLONA: Mini-Dashboard & Sertifikati */}
          <div className="xl:col-span-5">
            <FadeIn delay={0.6}>
              <div className="rounded-2xl border border-gray-800 bg-gray-900/80 p-5 shadow-2xl backdrop-blur-sm sm:p-6">
                <div className="mb-5 rounded-xl border border-gray-800 bg-bg-primary/90 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                      {t.snapshotTitle}
                    </span>
                    <span className="rounded bg-blue-500/10 px-2 py-0.5 text-[11px] font-medium text-blue-400">
                      Power BI / SQL
                    </span>
                  </div>

                  <div className="mb-3 grid grid-cols-3 gap-2">
                    <div className="rounded-lg border border-gray-800 bg-gray-800/60 p-2.5 text-center">
                      <p className="text-[11px] text-text-secondary">
                        Win Rate
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-white">
                        79.55%
                      </p>
                    </div>
                    <div className="rounded-lg border border-gray-800 bg-gray-800/60 p-2.5 text-center">
                      <p className="text-[11px] text-text-secondary">
                        1st Serve
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-blue-400">
                        64.82%
                      </p>
                    </div>
                    <div className="rounded-lg border border-gray-800 bg-gray-800/60 p-2.5 text-center">
                      <p className="text-[11px] text-text-secondary">
                        BP Saved
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-emerald-400">
                        64.53%
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="w-10 text-text-secondary">Clay</span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-800">
                        <div
                          className="h-full rounded-full bg-amber-500"
                          style={{ width: "84%" }}
                        />
                      </div>
                      <span className="font-medium text-gray-300">84.2%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-10 text-text-secondary">Grass</span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-800">
                        <div
                          className="h-full rounded-full bg-emerald-500"
                          style={{ width: "83%" }}
                        />
                      </div>
                      <span className="font-medium text-gray-300">83.3%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-10 text-text-secondary">Hard</span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-800">
                        <div
                          className="h-full rounded-full bg-blue-500"
                          style={{ width: "74%" }}
                        />
                      </div>
                      <span className="font-medium text-gray-300">73.7%</span>
                    </div>
                  </div>
                </div>

                <div className="mb-3 flex items-center gap-2">
                  <FaAward className="text-blue-400" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                    {t.certificationsTitle}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {t.certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between gap-2 rounded-lg border border-gray-800 bg-gray-800/50 p-2.5"
                    >
                      <div className="flex min-w-0 items-center gap-2">
                        <span className="shrink-0 rounded border border-blue-500/30 bg-blue-500/15 px-2 py-0.5 text-[11px] font-bold text-blue-300">
                          {cert.code}
                        </span>
                        <span className="truncate text-xs font-medium text-gray-200">
                          {cert.name}
                        </span>
                      </div>

                      <span
                        className={`inline-flex shrink-0 items-center gap-1 text-[11px] font-semibold ${
                          cert.inProgress ? "text-amber-400" : (
                            "text-emerald-400"
                          )
                        }`}
                      >
                        {cert.inProgress ?
                          <FaClock className="text-[10px]" />
                        : <FaCheckCircle className="text-[10px]" />}
                        {cert.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
