import { useState } from "react";
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

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <SocialSidebar lang={lang} />
      <Home lang={lang} />
      <About lang={lang} />
      <Skills lang={lang} />
      <Work lang={lang} />
      <Contact lang={lang} />
    </>
  );
}

export default App;
