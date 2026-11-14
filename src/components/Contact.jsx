import { useState } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  FaLinkedin,
  FaGithub,
  FaCertificate,
  FaChartBar,
  FaCode,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import FadeIn from "./FadeIn";
import { translations } from "../data/translations";

const certificates = [
  { label: "Microsoft DP-600 (Fabric)", href: "/DP-600.pdf" },
  { label: "Microsoft PL-300 (Power BI)", href: "/PL-300.pdf" },
  { label: "Data Analyst Certificate", href: "/Data Analyst.pdf" },
  { label: "Web Development (DCI)", href: "/Zertifikat DCI.pdf" },
];

function Contact({ lang = "en" }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentLang = translations[lang] || translations.en;
  const t = currentLang.contact;
  const navT = currentLang.nav;

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/milos-mirkovic-7976726b/",
      label: "LinkedIn",
      icon: <FaLinkedin size={28} />,
    },
    {
      href: "https://github.com/Milos191405",
      label: "GitHub",
      icon: <FaGithub size={28} />,
    },
    {
      href: "mailto:milos.mirkovic7@gmail.com",
      label: "Email",
      icon: <HiOutlineMail size={28} />,
    },
    {
      href: navT.cvFile,
      label: navT.cvLabel,
      icon: <BsFillPersonLinesFill size={28} />,
      download: true,
    },
  ];

  return (
    <section
      id="contact"
      className="w-full bg-[#0a192f] text-gray-300 px-6 pt-20 pb-12"
    >
      <div className="max-w-[1200px] md:max-w-[700px] xl:max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold inline border-b-4 border-blue-600 pb-1 text-white">
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
                className="block h-full p-6 rounded-2xl bg-[#112240]/80 border border-slate-700/70 hover:border-blue-500/60 transition-all group shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0a192f] border border-slate-700 flex items-center justify-center shrink-0">
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
            className="inline-flex cursor-pointer items-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 sm:text-base"
          >
            {t.ctaButton}
          </a>
        </FadeIn>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
          {socialLinks.map(({ href, label, icon, download }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              download={download ? true : undefined}
              className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition duration-300"
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
              className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition duration-300 cursor-pointer flex items-center"
              aria-label={navT.certLabel}
              title={navT.certLabel}
            >
              <FaCertificate size={28} />
            </button>

            {isDropdownOpen && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col gap-2 bg-[#112240] border border-slate-700 text-white p-3 rounded-xl shadow-2xl z-50 w-56 text-left text-xs md:text-sm">
                {certificates.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1.5 rounded hover:bg-blue-600/20 hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <p className="text-gray-500 text-xs md:text-sm mt-10">{t.footer}</p>
      </div>
    </section>
  );
}

export default Contact;
