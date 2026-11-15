import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowUp, FaDownload, FaGlobe, FaChevronDown } from "react-icons/fa";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import Logo from "../assets/MLogo2.png";
import { translations } from "../data/translations";

function Navbar({ lang = "en", setLang }) {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [cvMenuOpen, setCvMenuOpen] = useState(false);
  const cvMenuRef = useRef(null);

  const t = (translations[lang] || translations.en).nav;
  const enCvFile = translations.en?.nav?.cvFile || t.cvFile;
  const deCvFile = translations.de?.nav?.cvFile || t.cvFile;

  const handleClick = () => setNav(!nav);
  const closeMenu = () => {
    setNav(false);
    setCvMenuOpen(false);
  };

  const toggleLanguage = () => {
    if (setLang) {
      setLang((prev) => (prev === "en" ? "de" : "en"));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(currentScrollPos > 20);
      setShowScrollToTop(currentScrollPos > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (cvMenuRef.current && !cvMenuRef.current.contains(e.target)) {
        setCvMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setCvMenuOpen(false);
        setNav(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "auto";
  }, [nav]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 flex items-center justify-between transition-all duration-300 border-b ${
          isScrolled ?
            "h-[72px] bg-[#0a192f]/90 backdrop-blur-md border-blue-500/30 shadow-xl shadow-black/40"
          : "h-[80px] bg-[#0a192f] border-slate-800/80"
        }`}
      >
        {/* LEFT: Logo + Name */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={800}
          offset={-80}
          className="flex items-center gap-3 cursor-pointer z-50"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#112240]/90 border border-slate-700/80 p-1.5 flex items-center justify-center shadow-md">
              <img
                src={Logo}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-base sm:text-lg tracking-tight text-white">
              Milos <span className="text-blue-400">Mirkovic</span>
            </span>
          </div>
        </ScrollLink>

        {/* CENTER: Navigation Links */}
        <ul className="hidden lg:flex items-center gap-8 text-sm xl:text-[15px] font-medium text-gray-300">
          {t.links.map(({ to, label }) => (
            <li key={to} className="cursor-pointer">
              <ScrollLink
                activeClass="!text-blue-400 font-semibold border-b-2 border-blue-500"
                to={to}
                smooth={true}
                duration={800}
                offset={-75}
                spy={true}
                className="pb-1.5 hover:text-blue-400 transition-colors duration-300"
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* RIGHT: Language Switch & CV Download Selector */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#112240]/80 hover:bg-slate-800 border border-slate-700/80 text-xs font-bold text-gray-200 transition-colors cursor-pointer"
            aria-label="Switch language"
          >
            <FaGlobe className="text-blue-400" />
            <span>{lang === "en" ? "DE" : "EN"}</span>
          </button>

          <div className="relative" ref={cvMenuRef}>
            <button
              type="button"
              onClick={() => setCvMenuOpen((prev) => !prev)}
              aria-expanded={cvMenuOpen}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#112240]/80 hover:bg-blue-600 border border-slate-700/80 hover:border-blue-500 text-white text-sm font-medium transition-all cursor-pointer"
            >
              <FaDownload className="text-xs text-blue-400 group-hover:text-white transition-colors" />
              <span>{t.cvLabel}</span>
              <FaChevronDown
                className={`text-[10px] text-slate-300 group-hover:text-white transition-transform duration-200 ${
                  cvMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {cvMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl bg-[#112240] border border-slate-700 shadow-2xl p-1.5 z-50">
                <a
                  href={enCvFile}
                  download
                  onClick={() => setCvMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-gray-200 hover:bg-blue-600/20 hover:text-blue-400 transition-colors"
                >
                  <span>English CV</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-blue-400">
                    EN
                  </span>
                </a>
                <a
                  href={deCvFile}
                  download
                  onClick={() => setCvMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-gray-200 hover:bg-blue-600/20 hover:text-blue-400 transition-colors"
                >
                  <span>Lebenslauf</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-blue-400">
                    DE
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-3 lg:hidden z-50">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-[#112240] border border-slate-700 text-xs font-bold text-blue-400"
          >
            <FaGlobe className="text-[11px]" />
            <span>{lang === "en" ? "DE" : "EN"}</span>
          </button>

          <div
            onClick={handleClick}
            className="w-10 h-10 flex flex-col justify-center items-center cursor-pointer"
          >
            <span
              className={`block h-0.5 w-6 bg-white transform transition duration-300 ${
                nav ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white my-1 transition-all duration-300 ${
                nav ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transform transition duration-300 ${
                nav ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </div>

        {/* MOBILE OVERLAY */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[#0a192ff5] backdrop-blur-md transition-all duration-500 flex flex-col items-center justify-center z-40 text-white ${
            nav ?
              "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-7 text-2xl font-semibold items-center">
            {t.links.map(({ to, label }) => (
              <li key={to}>
                <ScrollLink
                  activeClass="!text-blue-400 border-b-2 border-blue-500 pb-1"
                  to={to}
                  smooth={true}
                  duration={800}
                  offset={-75}
                  spy={true}
                  onClick={closeMenu}
                  className="hover:text-blue-400 transition duration-300 cursor-pointer"
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
            <li className="pt-4 flex flex-row items-center gap-3">
              <a
                href={enCvFile}
                download
                onClick={closeMenu}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium shadow-lg shadow-blue-600/25"
              >
                <FaDownload className="text-xs" />
                <span>CV (EN)</span>
              </a>
              <a
                href={deCvFile}
                download
                onClick={closeMenu}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#112240] hover:bg-slate-800 border border-slate-700 text-white text-sm font-medium"
              >
                <FaDownload className="text-xs text-blue-400" />
                <span>CV (DE)</span>
              </a>
            </li>
          </ul>

          {/* Social Icons inside Mobile Menu */}
          <div className="flex items-center gap-7 mt-10 pt-8 border-t border-slate-800/80">
            <a
              href="https://www.linkedin.com/in/milos-mirkovic-7976726b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              onClick={closeMenu}
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FiLinkedin size={24} strokeWidth={1.75} />
            </a>
            <a
              href="https://github.com/Milos191405"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              onClick={closeMenu}
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FiGithub size={24} strokeWidth={1.75} />
            </a>
            <a
              href="mailto:milos.mirkovic7@gmail.com"
              aria-label="Email"
              onClick={closeMenu}
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FiMail size={24} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </nav>

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition duration-300 z-40 cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </>
  );
}

export default Navbar;
