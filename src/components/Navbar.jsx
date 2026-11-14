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
        className={`fixed w-full z-50 top-0 px-4 md:px-8 flex items-center justify-between transition-all ease-in-out duration-500
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${prevScrollPos > 20 ? "h-[70px] bg-[#0a192f]/90 backdrop-blur-md shadow-lg" : "h-[80px] bg-bg-primary"}
      `}
      >
        <ScrollLink to="home" smooth={true} duration={800} offset={-navHeight}>
          <img
            src={Logo}
            alt="Logo"
            className="h-[55px] lg:h-[60px] p-2 cursor-pointer z-50"
          />
        </ScrollLink>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6 text-base xl:text-lg text-header">
            {t.links.map(({ to, label }) => (
              <li key={to} className="cursor-pointer">
                <ScrollLink
                  activeClass="text-blue-400 font-semibold"
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

          <div className="flex items-center gap-3 pl-4 border-l border-gray-700/80">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-800/90 hover:bg-gray-700 border border-gray-700 text-xs font-bold text-gray-200 transition-colors cursor-pointer"
              aria-label="Switch language"
            >
              <FaGlobe className="text-blue-400" />
              <span>{lang === "en" ? "DE" : "EN"}</span>
            </button>

            <a
              href={t.cvFile}
              download
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors shadow-md shadow-blue-600/20"
            >
              <FaDownload className="text-xs" />
              <span>{t.cvLabel}</span>
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 lg:hidden z-50">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-gray-800 border border-gray-700 text-xs font-bold text-blue-400"
          >
            <FaGlobe className="text-[11px]" />
            <span>{lang === "en" ? "DE" : "EN"}</span>
          </button>

          <div
            onClick={handleClick}
            className="w-10 h-10 flex flex-col justify-center items-center cursor-pointer group"
          >
            <span
              className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                nav ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white my-1 transition-all duration-300 ease-in-out ${
                nav ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                nav ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </div>

        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[#0a192ff2] backdrop-blur-md transition-all duration-500 ease-in-out flex flex-col items-center justify-center z-40 text-white 
          ${nav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
        >
          <div className="absolute top-4 left-4">
            <img src={Logo} alt="Logo" className="h-[50px]" />
          </div>

          <ul className="flex flex-col gap-8 text-2xl font-semibold justify-center items-center">
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
          className="fixed bottom-5 right-5 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-400 transition duration-300 z-40 cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}

export default Navbar;
