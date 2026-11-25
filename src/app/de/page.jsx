import PortfolioPage from "../../components/PortfolioPage";

export const metadata = {
  title: "Milos Mirkovic | Data Analyst & Analytics Engineer (DE)",
  description:
    "Portfolio von Milos Mirkovic — Data Analyst & Analytics Engineer (Power BI, SQL, Python, Microsoft Fabric) mit Frontend-Erfahrung (React, Next.js). Zertifiziert DP-600 & PL-300. Standort Ketsch (Rhein-Neckar) — offen für Remote / Hybrid in Deutschland.",
  alternates: {
    canonical: "/de",
    languages: {
      en: "/",
      de: "/de",
    },
  },
  openGraph: {
    type: "website",
    url: "https://milosmirkovic.dev/de",
    title: "Milos Mirkovic | Data Analyst & Analytics Engineer",
    description:
      "End-to-End-Datenanalyseprojekte, Power BI Dashboards, SQL-Datenmodellierung, Microsoft Fabric sowie React/Next.js Webentwicklung.",
    images: ["/og-image.png"],
  },
};

export default function GermanHomePage() {
  return <PortfolioPage lang="de" />;
}
