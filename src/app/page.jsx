import PortfolioPage from "../components/PortfolioPage";

export const metadata = {
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      de: "/de",
    },
  },
};

export default function HomePage() {
  return <PortfolioPage lang="en" />;
}
