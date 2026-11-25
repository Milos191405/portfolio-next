import { useState, useRef, useEffect } from "react";
import { FaChartBar, FaCode } from "react-icons/fa";
import { FiLinkedin, FiGithub, FiMail, FiAward } from "react-icons/fi";
import FadeIn from "./FadeIn";
import CertificateModal from "./CertificateModal.jsx";
import { translations } from "../data/translations";
import { CERTIFICATES as certificates } from "../data/certificates";

function Contact({ lang = "en" }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCert, setActiveCert] = useState(null);
  const certMenuRef = useRef(null);
  const leaveTimerRef = useRef(null);

  const openDropdown = () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    setIsDropdownOpen(true);
  };

  const scheduleCloseDropdown = () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    leaveTimerRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  // Close certificate menu on outside click or ESC
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (certMenuRef.current && !certMenuRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    };
  }, []);
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
      className="w-full min-h-[calc(100vh-72px)] bg-[#0a192f] text-gray-300 px-6 pt-20 pb-8 flex flex-col justify-between"
    >
      <div className="max-w-[1200px] md:max-w-[700px] xl:max-w-[1200px] mx-auto my-auto flex flex-col items-center text-center w-full">
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

        <div className="flex flex-wrap justify-center items-center gap-2 mt-12">
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="group p-3 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-colors duration-300"
            >
              {/* Only the icon moves, the clickable area stays in place */}
              <span className="block transition-transform duration-300 group-hover:-translate-y-1">
                {icon}
              </span>
            </a>
          ))}

          <div
            className="relative"
            ref={certMenuRef}
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleCloseDropdown}
          >
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              aria-expanded={isDropdownOpen}
              className="group p-3 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-colors duration-300 cursor-pointer flex items-center"
              aria-label={navT.certLabel}
              title={navT.certLabel}
            >
              <span className="block transition-transform duration-300 group-hover:-translate-y-1">
                <FiAward size={22} strokeWidth={1.75} />
              </span>
            </button>

            {isDropdownOpen && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 pb-2 z-50">
                <div className="flex flex-col gap-1.5 bg-[#112240] border border-slate-700 text-white p-2.5 rounded-xl shadow-2xl w-56 text-left text-xs md:text-sm">
                  {certificates.map((item) => (
                    <button
                      type="button"
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
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="text-gray-500 text-xs md:text-sm text-center pt-8">
        {t.footer}
      </p>

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
