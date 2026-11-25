import "../index.css";

export const metadata = {
  metadataBase: new URL("https://milosmirkovic.dev"),
  title: "Milos Mirkovic | Data Analyst & Analytics Engineer",
  description:
    "Portfolio of Milos Mirkovic — Data Analyst & Analytics Engineer (Power BI, SQL, Python, Microsoft Fabric) with a Frontend background in React & Next.js. Certified DP-600 & PL-300. Based in Ketsch, Germany — open to Remote / Hybrid roles.",
  authors: [{ name: "Milos Mirkovic" }],
  icons: {
    icon: "/MLogo2.png",
  },
  openGraph: {
    type: "website",
    url: "https://milosmirkovic.dev/",
    title: "Milos Mirkovic | Data Analyst & Analytics Engineer",
    description:
      "End-to-end data analytics projects, Power BI dashboards, SQL data modeling, Microsoft Fabric solutions, and React/Next.js web development.",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 505,
        alt: "Milos Mirkovic Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milos Mirkovic | Data Analyst & Analytics Engineer",
    description:
      "End-to-end data analytics projects, Power BI dashboards, SQL data modeling, Microsoft Fabric solutions, and React/Next.js web development.",
    images: ["/og-image.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Milos Mirkovic",
  alternateName: "Miloš Mirković",
  url: "https://milosmirkovic.dev",
  jobTitle: "Data Analyst & Analytics Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ketsch",
    addressRegion: "Baden-Württemberg",
    addressCountry: "DE",
  },
  knowsAbout: [
    "Power BI",
    "SQL",
    "Python",
    "Microsoft Fabric",
    "Data Modeling",
    "Frontend Development",
    "React",
    "Next.js",
  ],
  sameAs: [
    "https://www.linkedin.com/in/milos-mirkovic-7976726b/",
    "https://github.com/Milos191405",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
