import { useState } from "react";
import { FiLinkedin, FiGithub, FiMail, FiAward } from "react-icons/fi";
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

function SocialSidebar({ lang = "en" }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCert, setActiveCert] = useState(null);
  const navT = (translations[lang] || translations.en).nav;

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/milos-mirkovic-7976726b/",
      label: "LinkedIn",
      icon: <FiLinkedin size={19} strokeWidth={1.75} />,
    },
    {
      href: "https://github.com/Milos191405",
      label: "GitHub",
      icon: <FiGithub size={19} strokeWidth={1.75} />,
    },
    {
      href: "mailto:milos.mirkovic7@gmail.com",
      label: "Email",
      icon: <FiMail size={19} strokeWidth={1.75} />,
    },
  ];

  return (
    <>
      <div className="hidden lg:flex fixed flex-col top-[38%] left-6 z-[80] items-center">
        <div className="flex flex-col gap-5">
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

          {/* Certificates Dropdown Trigger */}
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
              <FiAward size={19} strokeWidth={1.75} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-0 left-7 flex flex-col gap-1.5 bg-[#112240] border border-slate-700 text-white p-2.5 rounded-xl shadow-2xl z-50 pointer-events-auto w-56 text-xs md:text-sm">
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

        <div className="w-[1px] h-28 bg-slate-700/80 mt-5" />
      </div>

      {/* FULL-SCREEN CERTIFICATE MODAL */}
      <CertificateModal
        activeCert={activeCert}
        onClose={() => setActiveCert(null)}
        lang={lang}
      />
    </>
  );
}

export default SocialSidebar;
