import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaCertificate } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
import { translations } from "../data/translations";

const certificates = [
  { label: "Microsoft DP-600 (Fabric)", href: "/DP-600.pdf" },
  { label: "Microsoft PL-300 (Power BI)", href: "/PL-300.pdf" },
  { label: "Data Analyst Certificate", href: "/Data Analyst.pdf" },
  { label: "Web Development (DCI)", href: "/Zertifikat DCI.pdf" },
];

function SocialSidebar({ lang = "en" }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navT = (translations[lang] || translations.en).nav;

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/milos-mirkovic-7976726b/",
      label: "LinkedIn",
      icon: <FaLinkedin size={24} />,
    },
    {
      href: "https://github.com/Milos191405",
      label: "GitHub",
      icon: <FaGithub size={24} />,
    },
    {
      href: "mailto:milos.mirkovic7@gmail.com",
      label: "Email",
      icon: <HiOutlineMail size={24} />,
    },
    {
      href: navT.cvFile,
      label: navT.cvLabel,
      icon: <BsFillPersonLinesFill size={24} />,
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-5 z-[80]">
      <div className="flex flex-col gap-4">
        {socialLinks.map(({ href, label, icon, download }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            download={download ? true : undefined}
            className="text-gray-400 hover:text-blue-400 transition-transform transform hover:-translate-y-1 duration-300"
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
            className="text-gray-400 hover:text-blue-400 transition-transform transform hover:-translate-y-1 duration-300 cursor-pointer flex items-center"
            aria-label={navT.certLabel}
            title={navT.certLabel}
          >
            <FaCertificate size={24} />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-0 left-7 flex flex-col gap-1.5 bg-[#112240] border border-slate-700 text-white p-2.5 rounded-xl shadow-2xl z-50 pointer-events-auto w-56 text-xs md:text-sm">
              {certificates.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg hover:bg-blue-600/20 hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="w-[1px] h-32 bg-gray-600 mt-4 mx-auto"></div>
    </div>
  );
}

export default SocialSidebar;
