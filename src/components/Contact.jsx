import { useState } from "react";
import { FaChartBar, FaCode } from "react-icons/fa";
import { FiLinkedin, FiGithub, FiMail, FiAward } from "react-icons/fi";
import FadeIn from "./FadeIn";
import CertificateModal from "./CertificateModal.jsx";
import { translations } from "../data/translations";

const certificates = [
  {
    label: "Microsoft DP-600 (Fabric)",
    href: "/DP-600.png",
    verifyUrl:
      "https://learn.microsoft.com/en-us/users/milosmirkovic-3205/credentials/certification/fabric-analytics-engineer-associate?tab=credentials-tab",
  },
  {
    label: "Microsoft PL-300 (Power BI)",
    href: "/PL-300.png",
    verifyUrl:
      "https://learn.microsoft.com/en-us/users/milosmirkovic-3205/credentials/certification/data-analyst-associate?tab=credentials-tab",
  },
  {
    label: "SQL Data Analyst Associate (DataCamp)",
    href: "/SQL Data Analyst Associate-DataCamp.pdf",
  },
  {
    label: "Web Development (DCI)",
    href: "/Zertifikat DCI.pdf",
  },
];

function Contact({ lang = "en" }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCert, setActiveCert] = useState(null);
  const currentLang = translations[lang] || translations.en;
  const t = currentLang.contact;
  const navT = currentLang.nav;

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/milos-mirkovic-7976726b/",
      label: "LinkedIn",
      icon: <FiLinkedin size={22} strokeWidth={1.75} />,
    },
    {
      href: "https://github.com/Milos191405",
      label: "GitHub",
      icon: <FiGithub size={22} strokeWidth={1.75} />,
    },
    {
      href: "mailto:milos.mirkovic7@gmail.com",
      label: "Email",
      icon: <FiMail size={22} strokeWidth={1.75} />,
    },
  ];

  return (
    <section
      id="contact"
      className="w-full bg-[#0a192f] text-gray-300 px-6 pt-20 pb-12 border-t border-slate-800/60"
    >
      <div className="max-w-[1200px] md:max-w-[700px] xl:max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold inline border-b-2 border-blue-500 pb-1 text-white">
            {t.heading}
          </h2>
          <p className="text-gray-300 max-w-[650px] mt-6 mb-10 text-sm md:text-base leading-relaxed">
            {t.subtitle}
          </p>
        </FadeIn>

        <div className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
          {t.services.map((srv, idx) => (
            <FadeIn key={idx} delay={idx * 0.15}>
              <a
                href={`mailto:milos.mirkovic7@gmail.com?subject=${encodeURIComponent(
                  srv.mailSubject,
                )}`}
                className="block h-full p-6 rounded-2xl bg-[#112240]/70 border border-slate-800 hover:border-blue-500/50 transition-all group shadow-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0a192f] border border-slate-700/80 flex items-center justify-center shrink-0">
                    {srv.icon === "chart" ?
                      <FaChartBar className="text-blue-400 text-lg" />
                    : <FaCode className="text-indigo-400 text-lg" />}
                  </div>
                  <h3 className="font-bold text-base md:text-lg text-white group-hover:text-blue-400 transition-colors">
                    {srv.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  {srv.desc}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <a
            href="mailto:milos.mirkovic7@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            {t.ctaButton}
          </a>
        </FadeIn>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
            >
              {icon}
            </a>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <button
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center"
              aria-label={navT.certLabel}
              title={navT.certLabel}
            >
              <FiAward size={22} strokeWidth={1.75} />
            </button>

            {isDropdownOpen && (
              <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col gap-1.5 bg-[#112240] border border-slate-700 text-white p-2.5 rounded-xl shadow-2xl z-50 w-56 text-left text-xs md:text-sm">
                {certificates.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => {
                      setActiveCert(item);
                      setIsDropdownOpen(false);
                    }}
                    className="text-left px-2.5 py-1.5 rounded-lg hover:bg-blue-600/20 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <p className="text-gray-500 text-xs md:text-sm mt-10">{t.footer}</p>
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

export default Contact;
