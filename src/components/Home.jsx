"use client";

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
import { CERT_BY_CODE } from "../data/certificates";

function Home({ lang = "en" }) {
  const [activeCert, setActiveCert] = useState(null);
  const [activeProject, setActiveProject] = useState(0);
  const currentLang = translations[lang] || translations.en;
  const t = currentLang.home;
  const isDe = lang === "de";

  const showcases = [
    {
      tab: "Warehouse DC",
      title: "Warehouse Control Tower • Heidelberg DC",
      badge: isDe ? "VALIDIERT" : "VALIDATED",
      badgeClass: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      bgImage: "/projects/warehouse-bg.png", // zameni tačnim imenom fajla u public/projects/
      kpis: [
        {
          label: isDe ? "Datenvolumen" : "Data Volume",
          value: isDe ? "800K+ Zeilen" : "800K+ Rows",
          valueClass: "text-white",
          sub: isDe ? "200K Sendungen/J." : "200K Shipments/yr",
          subClass: "text-emerald-400",
        },
        {
          label: isDe ? "Lagerplätze" : "Storage Locations",
          value: isDe ? "24.180" : "24,180",
          valueClass: "text-blue-400",
          sub: isDe ? "3 Hallen • 37,5K SKUs" : "3 Halls • 37.5K SKUs",
          subClass: "text-gray-400",
        },
        {
          label: isDe ? "Termintreue" : "On-Time Delivery",
          value: isDe ? "98,5 %" : "98.5%",
          valueClass: "text-emerald-400",
          sub: "Order → Shipping",
          subClass: "text-blue-400",
        },
      ],
      chartTitle: "Data Pipeline (Bronze → Silver → Gold)",
      chartStack: "Python • SQL • Power BI",
      bars: [45, 60, 52, 75, 68, 88, 98],
    },
    {
      tab: "ATP 2024",
      title: "ATP Tennis Season 2024 • Star Schema",
      badge: "POWER BI",
      badgeClass: "border-blue-500/30 bg-blue-500/10 text-blue-400",
      bgImage: "/projects/atp-bg.png", // zameni tačnim imenom fajla u public/projects/
      kpis: [
        {
          label: isDe ? "Matches" : "Matches Cleaned",
          value: isDe ? "2.695+" : "2,695+",
          valueClass: "text-white",
          sub: "Python QA Pipeline",
          subClass: "text-emerald-400",
        },
        {
          label: isDe ? "Datenmodell" : "Data Model",
          value: "PostgreSQL",
          valueClass: "text-blue-400",
          sub: "H2H & Surface Views",
          subClass: "text-gray-400",
        },
        {
          label: "Dashboard",
          value: isDe ? "3 Seiten" : "3 Pages",
          valueClass: "text-emerald-400",
          sub: "Dominance & Clutch",
          subClass: "text-blue-400",
        },
      ],
      chartTitle:
        isDe ?
          "Siegquote & Clutch-Index Modellierung"
        : "Surface Win Rate & Clutch Index",
      chartStack: "Python • PostgreSQL • DAX",
      bars: [52, 68, 58, 80, 74, 90, 96],
    },
    {
      tab: "Bundesliga",
      title: "Bundesliga 2023/24 • Team Benchmark",
      badge: "Z-SCORE",
      badgeClass: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      bgImage: "/projects/bundesliga/03-home-vs-away.png",
      kpis: [
        {
          label: isDe ? "Saisonspiele" : "Season Matches",
          value: "306",
          valueClass: "text-white",
          sub: isDe ? "18 Vereine" : "18 Clubs Analyzed",
          subClass: "text-emerald-400",
        },
        {
          label: isDe ? "Statistik" : "Statistics",
          value: "Z-Scores",
          valueClass: "text-blue-400",
          sub: "Shots, Goals & xG",
          subClass: "text-gray-400",
        },
        {
          label: "Benchmark",
          value: "+2.4 σ",
          valueClass: "text-emerald-400",
          sub: "Leverkusen Unbeaten",
          subClass: "text-blue-400",
        },
      ],
      chartTitle:
        isDe ?
          "Team-Effizienz vs. Ligadurchschnitt"
        : "Club Efficiency vs. League Average",
      chartStack: "SQL • Python • Power BI",
      bars: [42, 55, 48, 64, 70, 84, 95],
    },
  ];

  const currentShowcase = showcases[activeProject];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#0a192f] px-4 sm:px-6 pt-28 pb-16 md:px-10 overflow-hidden"
      aria-labelledby="home-heading"
    >
      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl"
      />

      <div className="relative w-full md:max-w-[700px] xl:max-w-[1200px] mx-auto">
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
                    const certInfo = CERT_BY_CODE[cert.code];
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
                            className={`rounded border px-2 py-0.5 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase whitespace-nowrap ${badgeStyle}`}
                          >
                            {cert.status}
                          </span>

                          {/* Direct Verify Link Icon or Spacer for Exact Alignment */}
                          {certInfo?.verifyUrl ?
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
                          : <span
                              className="w-[23px] shrink-0"
                              aria-hidden="true"
                            />
                          }
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

          {/* RIGHT COLUMN: Interactive Analytics Snapshot Card */}
          <div className="xl:col-span-5 min-w-0">
            <FadeIn delay={0.5}>
              <div className="rounded-2xl border border-slate-800 bg-[#112240]/70 p-5 sm:p-6 shadow-2xl backdrop-blur-sm">
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
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

                {/* Project Switcher Tabs */}
                <div className="grid grid-cols-3 gap-1.5 rounded-lg border border-slate-800 bg-[#0a192f]/80 p-1 mb-3.5">
                  {showcases.map((item, idx) => (
                    <button
                      key={item.tab}
                      type="button"
                      onClick={() => setActiveProject(idx)}
                      className={`rounded-md py-1.5 px-2 text-[11px] font-semibold transition-all cursor-pointer truncate ${
                        activeProject === idx ?
                          "bg-blue-600 text-white shadow-sm"
                        : "text-gray-400 hover:text-white hover:bg-slate-800/60"
                      }`}
                    >
                      {item.tab}
                    </button>
                  ))}
                </div>

                {/* Inner Analytics Mockup Window */}
                <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#0a192f]/95 p-3.5 sm:p-4">
                  {/* Subtle Background Image per Active Project */}
                  {currentShowcase.bgImage && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-15 transition-all duration-300"
                      style={{
                        backgroundImage: `url("${currentShowcase.bgImage}")`,
                      }}
                    />
                  )}

                  {/* Dark Overlay so KPIs and Chart Stay Easy to Read */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[#0a192f]/65"
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-3 mb-4">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shrink-0" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shrink-0" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shrink-0" />
                        <span className="ml-1.5 text-[10px] sm:text-[11px] font-mono text-gray-300 truncate">
                          {currentShowcase.title}
                        </span>
                      </div>
                      <span
                        className={`shrink-0 rounded border px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase ${currentShowcase.badgeClass}`}
                      >
                        {currentShowcase.badge}
                      </span>
                    </div>

                    {/* 3 KPI Cards */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-4">
                      {currentShowcase.kpis.map((kpi) => (
                        <div
                          key={kpi.label}
                          className="rounded-lg border border-slate-800 bg-[#112240]/75 p-2.5 sm:p-3 min-w-0"
                        >
                          <p className="text-[10px] sm:text-[11px] text-gray-400 truncate">
                            {kpi.label}
                          </p>
                          <p
                            className={`mt-1 text-xs sm:text-sm font-extrabold whitespace-nowrap ${kpi.valueClass}`}
                          >
                            {kpi.value}
                          </p>
                          <p
                            className={`text-[10px] mt-0.5 truncate ${kpi.subClass}`}
                          >
                            {kpi.sub}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Model & Pipeline Coverage Bar Chart */}
                    <div className="rounded-lg border border-slate-800 bg-[#112240]/60 p-3.5">
                      <div className="flex items-center justify-between gap-2 text-[11px] mb-3">
                        <span className="font-semibold text-gray-300 truncate">
                          {currentShowcase.chartTitle}
                        </span>
                        <span className="font-mono text-[10px] text-blue-400 shrink-0">
                          {currentShowcase.chartStack}
                        </span>
                      </div>

                      <div className="grid grid-cols-7 items-end gap-2 h-24 pt-2">
                        {currentShowcase.bars.map((val, i) => (
                          <div
                            key={i}
                            className={`w-full rounded-t transition-all duration-300 ${
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
