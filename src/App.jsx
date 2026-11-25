import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import SocialSidebar from "./components/SocialSidebar";
import "./index.css";

function App() {
  const [lang, setLang] = useState("en");

  // Keep <html lang> in sync for screen readers, SEO and hyphenation
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="bg-[#0a192f] min-h-screen w-full overflow-x-hidden text-gray-200 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar lang={lang} setLang={setLang} />
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

export default App;
