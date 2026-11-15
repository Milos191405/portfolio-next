import { useState, useRef, useEffect } from "react";
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
  const leaveTimerRef = useRef(null);
  const dropdownWrapperRef = useRef(null);
  const navT = (translations[lang] || translations.en).nav;

  const openDropdown = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
    }
    setIsDropdownOpen(true);
  };

  const scheduleCloseDropdown = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
    }
    leaveTimerRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 180);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        dropdownWrapperRef.current &&
        !dropdownWrapperRef.current.contains(e.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current);
      }
    };
  }, []);

  const links = [
    {
      href: "https://www.linkedin.com/in/milos-mirkovic-7976726b/",
      label: "LinkedIn",
      icon: <FiLinkedin size={20} strokeWidth={1.75} />,
    },
    {
      href: "https://github.com/Milos191405",
      label: "GitHub",
      icon: <FiGithub size={20} strokeWidth={1.75} />,
    },
    {
      href: "mailto:milos.mirkovic7@gmail.com",
      label: "Email",
      icon: <FiMail size={20} strokeWidth={1.75} />,
    },
  ];

  return (
    <>
      <div className="hidden lg:flex fixed top-1/2 -translate-y-1/2 left-6 md:left-[54px] z-30 flex-col items-center">
        <ul className="flex flex-col items-center gap-5">
          {links.map(({ href, label, icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 block p-1"
              >
                {icon}
              </a>
            </li>
          ))}

          {/* Certificates Trigger */}
          <li
            ref={dropdownWrapperRef}
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleCloseDropdown}
          >
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              aria-expanded={isDropdownOpen}
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 block p-1 cursor-pointer"
              aria-label={navT.certLabel}
              title={navT.certLabel}
            >
              <FiAward size={20} strokeWidth={1.75} />
            </button>

            {isDropdownOpen && (
              <div
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleCloseDropdown}
                className="absolute bottom-0 left-9 flex flex-col gap-1.5 bg-[#112240] border border-slate-700 text-white p-2.5 rounded-xl shadow-2xl z-50 w-60 text-xs"
              >
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
            )}
          </li>
        </ul>

        {/* Vertical line below icons */}
        <div className="w-[1px] h-20 bg-slate-700/80 mt-5" />
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
