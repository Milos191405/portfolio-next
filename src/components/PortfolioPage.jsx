"use client";

import { useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import SocialSidebar from "./SocialSidebar";

export default function PortfolioPage({ lang = "en" }) {
  // Keep <html lang> in sync with the active route (/ or /de)
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="bg-[#0a192f] min-h-screen w-full overflow-x-hidden text-gray-200 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar lang={lang} />
      <SocialSidebar lang={lang} />
      <main>
        <Home lang={lang} />
        <Work lang={lang} />
        <Skills lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
    </div>
  );
}
