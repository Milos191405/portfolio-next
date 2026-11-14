import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowUp, FaDownload, FaGlobe } from "react-icons/fa";
import Logo from "../assets/MLogo2.png";
import { translations } from "../data/translations";

function Navbar({ lang = "en", setLang }) {
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [navHeight, setNavHeight] = useState(80);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const t = (translations[lang] || translations.en).nav;

  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  const toggleLanguage = () => {
    if (setLang) {
      setLang((prev) => (prev === "en" ? "de" : "en"));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setShowScrollToTop(currentScrollPos > 300);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) setNavHeight(navbar.offsetHeight);

    const handleResize = () => {
      const navbar = document.querySelector("nav");
      if (navbar) setNavHeight(navbar.offsetHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        className={`fixed w-full z-50 top-0 px-6 md:px-12 flex items-center justify-between transition-all ease-in-out duration-500 border-b border-slate-800/40
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${
          prevScrollPos > 20 ?
            "h-[72px] bg-[#0a192f]/90 backdrop-blur-md shadow-lg"
          : "h-[80px] bg-[#0a192f]"
        }
      `}
      >
        {/* LEVO: Logo + Ime */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={800}
          offset={-navHeight}
          className="flex items-center gap-3 cursor-pointer z-50"
        >
          {/* Option 2: Modern SaaS Gradient "MM" Badge */}
          {/* Option 3: Framed Original Logo */}
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

        {/* CENTER */}
        <ul className="hidden lg:flex items-center gap-8 text-sm xl:text-[15px] font-medium text-gray-300">
          {t.links.map(({ to, label }) => (
            <li key={to} className="cursor-pointer">
              <ScrollLink
                activeClass="text-white font-semibold"
                to={to}
                smooth={true}
                duration={800}
                spy={true}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Right: language and CV download */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#112240]/80 hover:bg-slate-800 border border-slate-700/80 text-xs font-bold text-gray-200 transition-colors cursor-pointer"
            aria-label="Switch language"
          >
            <FaGlobe className="text-blue-400" />
            <span>{lang === "en" ? "DE" : "EN"}</span>
          </button>

          <a
            href={t.cvFile}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#112240]/80 hover:bg-blue-600 border border-slate-700/80 hover:border-blue-500 text-white text-sm font-medium transition-all"
          >
            <FaDownload className="text-xs text-blue-400 group-hover:text-white" />
            <span>{t.cvLabel}</span>
          </a>
        </div>

        {/* mobile menu */}
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

        {/* mobile overlay */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[#0a192ff5] backdrop-blur-md transition-all duration-500 flex flex-col items-center justify-center z-40 text-white 
          ${
            nav ?
              "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
        >
          <ul className="flex flex-col gap-7 text-2xl font-semibold items-center">
            {t.links.map(({ to, label }) => (
              <li key={to}>
                <ScrollLink
                  to={to}
                  smooth={true}
                  duration={800}
                  spy={true}
                  onClick={closeMenu}
                  className="hover:text-blue-400 transition duration-300 cursor-pointer"
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={t.cvFile}
                download
                onClick={closeMenu}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-base font-medium"
              >
                <FaDownload className="text-sm" />
                <span>{t.cvLabel}</span>
              </a>
            </li>
          </ul>
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
