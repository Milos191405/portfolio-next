import { useState } from "react";
import {
  FaAward,
  FaChartBar,
  FaCheckCircle,
  FaClock,
  FaChevronRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import FadeIn from "./FadeIn.jsx";
import CertificateModal from "./CertificateModal.jsx";
import { translations } from "../data/translations";

// Map certificate codes to files in public/ and official verification URLs
const CERT_DATA = {
  "DP-600": {
    href: "/DP-600.png",
    verifyUrl:
      "https://learn.microsoft.com/en-us/users/milosmirkovic-3205/credentials/certification/fabric-analytics-engineer-associate?tab=credentials-tab",
  },
  "PL-300": {
    href: "/PL-300.png",
    verifyUrl:
      "https://learn.microsoft.com/en-us/users/milosmirkovic-3205/credentials/certification/data-analyst-associate?tab=credentials-tab",
  },
  SQL: {
    href: "/SQL Data Analyst Associate-DataCamp.pdf",
    verifyUrl: "",
  },
};

function Home({ isNavOpen, lang = "en" }) {
  const [activeCert, setActiveCert] = useState(null);
  const currentLang = translations[lang] || translations.en;
  const t = currentLang.home;

  return (
    <section
      id="home"
      className={`w-full flex items-center justify-center bg-[#0a192f] px-4 sm:px-6 pt-28 pb-16 md:px-10 ${
        isNavOpen ? "min-h-[calc(100vh-80px)] pt-40" : "min-h-screen"
      }`}
      aria-labelledby="home-heading"
    >
      <div className="w-full md:max-w-[700px] xl:max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-12 xl:items-center">
          {/* LEFT COLUMN: Intro, Certifications, CTA Buttons & Location */}
          <div className="flex flex-col items-start justify-center xl:col-span-7 min-w-0">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold tracking-wider text-blue-400 uppercase mb-5">
                <span>✦</span>
                <span>{t.badge}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1
                id="home-heading"
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl xl:text-6xl mb-3"
              >
                {t.firstName}{" "}
                <span className="text-blue-400">{t.lastName}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h2 className="text-base font-semibold text-gray-200 sm:text-xl xl:text-2xl mb-5">
                {t.headline}
              </h2>
            </FadeIn>

            <FadeIn delay={0.45}>
              <p className="text-sm sm:text-base xl:text-[17px] leading-relaxed text-gray-300 max-w-2xl mb-7">
                {t.intro}
              </p>
            </FadeIn>

            {/* VERIFIED CERTIFICATIONS */}
            <FadeIn delay={0.6} className="w-full">
              <div className="w-full max-w-xl mb-8">
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-gray-400 uppercase mb-3">
                  <FaAward className="text-blue-400 text-sm shrink-0" />
                  <span>{t.certificationsTitle}</span>
                </div>

                <div className="flex flex-col gap-2.5">
                  {t.certifications.map((cert, idx) => {
                    const isSql = cert.code === "SQL";
                    const certInfo = CERT_DATA[cert.code];
                    const isClickable =
                      !cert.inProgress && Boolean(certInfo?.href);

                    const cardStyle =
                      cert.inProgress ? "border-amber-500/30 bg-amber-500/5"
                      : isSql ?
                        "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-400/70 cursor-pointer"
                      : "border-blue-500/30 bg-[#112240]/80 hover:border-blue-400/70 cursor-pointer";

                    const badgeStyle =
                      cert.inProgress ?
                        "bg-amber-500/15 text-amber-300 border-amber-500/30"
                      : isSql ?
                        "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                      : "bg-blue-500/15 text-blue-300 border-blue-500/30";

                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          if (isClickable) {
                            setActiveCert({
                              label: cert.name,
                              href: certInfo.href,
                              verifyUrl: certInfo.verifyUrl,
                            });
                          }
                        }}
                        className={`flex items-center justify-between gap-2.5 rounded-lg border px-3 py-2.5 transition-all ${cardStyle}`}
                      >
                        <div className="flex items-start sm:items-center gap-2.5 min-w-0 flex-1">
                          {cert.inProgress ?
                            <FaClock className="text-amber-400 shrink-0 text-xs mt-1 sm:mt-0" />
                          : <FaCheckCircle
                              className={`shrink-0 text-xs mt-1 sm:mt-0 ${
                                isSql ? "text-emerald-400" : "text-blue-400"
                              }`}
                            />
                          }
                          <span className="text-xs sm:text-sm font-medium text-gray-200 leading-snug break-words">
                            {cert.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span
                            className={`rounded border px-2 py-0.5 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase ${badgeStyle}`}
                          >
                            {cert.status}
                          </span>

                          {/* Direct Verify Link Icon */}
                          {certInfo?.verifyUrl && (
                            <a
                              href={certInfo.verifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              title={
                                lang === "de" ?
                                  "Auf Microsoft Learn prüfen"
                                : "Verify on Microsoft Learn"
                              }
                              aria-label="Verify credential online"
                              className="p-1.5 rounded-md text-gray-400 hover:text-blue-400 hover:bg-[#0a192f] transition-colors"
                            >
                              <FaExternalLinkAlt className="text-[11px]" />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>

            {/* CTA BUTTONS */}
            <FadeIn delay={0.75}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-7">
                <ScrollLink
                  to="work"
                  smooth={true}
                  duration={800}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-5 sm:px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 hover:-translate-y-0.5 sm:text-base"
                >
                  <span>{t.ctaProjects}</span>
                  <FaChevronRight className="text-xs" />
                </ScrollLink>

                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={800}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700 bg-[#112240]/70 px-5 sm:px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-blue-400 hover:text-white sm:text-base"
                >
                  <FaEnvelope className="text-xs text-blue-400" />
                  <span>{t.ctaContact}</span>
                </ScrollLink>
              </div>
            </FadeIn>

            {/* LOCATION & AVAILABILITY */}
            <FadeIn delay={0.9}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-400">
                <span className="inline-flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-blue-400 shrink-0" />
                  <span>{t.location}</span>
                </span>
                <span className="hidden sm:inline text-gray-600">•</span>
                <span className="inline-flex items-center gap-2 text-emerald-400 font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span>{t.availability}</span>
                </span>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: Analytics & Lakehouse Snapshot Card */}
          {/* RIGHT COLUMN: Warehouse Control Tower Snapshot Card */}
          <div className="xl:col-span-5 min-w-0">
            <FadeIn delay={0.5}>
              <div className="rounded-2xl border border-slate-800 bg-[#112240]/70 p-5 sm:p-6 shadow-2xl backdrop-blur-sm">
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-base sm:text-lg font-bold italic text-white">
                      {t.quote}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{t.quoteSub}</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <FaChartBar className="text-blue-400 text-lg" />
                  </div>
                </div>

                {/* Inner Analytics Mockup Window */}
                {/* Inner Analytics Mockup Window */}
                <div className="rounded-xl border border-slate-800 bg-[#0a192f]/95 p-3.5 sm:p-4">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-3 mb-4">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shrink-0" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shrink-0" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shrink-0" />
                      <span className="ml-1.5 text-[10px] sm:text-[11px] font-mono text-gray-300 truncate">
                        Warehouse Control Tower • Heidelberg DC
                      </span>
                    </div>
                    <span className="shrink-0 rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-emerald-400 uppercase">
                      VALIDATED
                    </span>
                  </div>

                  {/* 3 KPI Cards */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-4">
                    <div className="rounded-lg border border-slate-800 bg-[#112240]/60 p-2.5 sm:p-3">
                      <p className="text-[10px] sm:text-[11px] text-gray-400 truncate">
                        Data Volume
                      </p>
                      <p className="mt-1 text-sm sm:text-base font-extrabold text-white">
                        800K+ Rows
                      </p>
                      <p className="text-[10px] text-emerald-400 mt-0.5 truncate">
                        200K Shipments/yr
                      </p>
                    </div>
                    <div className="rounded-lg border border-slate-800 bg-[#112240]/60 p-2.5 sm:p-3">
                      <p className="text-[10px] sm:text-[11px] text-gray-400 truncate">
                        Storage Locations
                      </p>
                      <p className="mt-1 text-sm sm:text-base font-extrabold text-blue-400">
                        24,180
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5 truncate">
                        3 Halls • 37.5K SKUs
                      </p>
                    </div>
                    <div className="rounded-lg border border-slate-800 bg-[#112240]/60 p-2.5 sm:p-3">
                      <p className="text-[10px] sm:text-[11px] text-gray-400 truncate">
                        On-Time Delivery
                      </p>
                      <p className="mt-1 text-sm sm:text-base font-extrabold text-emerald-400">
                        98.5%
                      </p>
                      <p className="text-[10px] text-blue-400 mt-0.5 truncate">
                        Order → Shipping
                      </p>
                    </div>
                  </div>

                  {/* Model & Pipeline Coverage Bar Chart */}
                  <div className="rounded-lg border border-slate-800 bg-[#112240]/40 p-3.5">
                    <div className="flex items-center justify-between gap-2 text-[11px] mb-3">
                      <span className="font-semibold text-gray-300">
                        Data Pipeline (Bronze → Silver → Gold)
                      </span>
                      <span className="font-mono text-[10px] text-blue-400 shrink-0">
                        Python • SQL • Power BI
                      </span>
                    </div>

                    <div className="grid grid-cols-7 items-end gap-2 h-24 pt-2">
                      {[45, 60, 52, 75, 68, 88, 98].map((val, i) => (
                        <div
                          key={i}
                          className={`w-full rounded-t transition-all ${
                            i >= 5 ?
                              "bg-gradient-to-t from-blue-600 to-blue-400"
                            : "bg-blue-500/35"
                          }`}
                          style={{ height: `${val}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* FULL-SCREEN CERTIFICATE MODAL */}
      <CertificateModal
        activeCert={activeCert}
        onClose={() => setActiveCert(null)}
        lang={lang}
      />
    </section>
  );
}

export default Home;
