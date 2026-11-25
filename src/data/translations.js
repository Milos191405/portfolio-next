export const translations = {
  en: {
    nav: {
      links: [
        { to: "home", label: "Home" },
        { to: "work", label: "Projects" },
        { to: "skills", label: "Skills" },
        { to: "about", label: "About" },
        { to: "contact", label: "Contact" },
      ],
      cvLabel: "Download CV",
      cvFile: "/Milos_Mirkovic_CV_EN.pdf",
      certLabel: "Certificates",
    },
    home: {
      badge: "DATA ANALYST & ANALYTICS ENGINEER",
      firstName: "Milos",
      lastName: "Mirkovic",
      headline: "Power BI • SQL • Python • Microsoft Fabric",
      intro:
        "I turn raw, complex data into validated models, relational Star Schemas, and actionable insights. Combining 3 years of remote frontend & software engineering and 20+ years of international coaching leadership with modern data analytics.",
      certificationsTitle: "VERIFIED CREDENTIALS & CERTIFICATIONS",
      certifications: [
        {
          code: "DP-600",
          name: "Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)",
          status: "PASSED",
          inProgress: false,
        },
        {
          code: "PL-300",
          name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
          status: "PASSED",
          inProgress: false,
        },
        {
          code: "SQL",
          name: "SQL Data Analyst Associate (DataCamp)",
          status: "CERTIFIED",
          inProgress: false,
        },
        {
          code: "DP-700",
          name: "Microsoft Certified: Fabric Data Engineer Associate (DP-700)",
          status: "IN PROGRESS",
          inProgress: true,
        },
      ],
      ctaProjects: "View My Projects",
      ctaContact: "Contact Me",
      location: "Based in Ketsch, Germany",
      availability: "Open to Remote / Hybrid",
      quote: "“Data turns experience into insight.”",
      quoteSub: "End-to-End Analytics • Validation • BI Storytelling",
    },
    about: {
      heading: "About Me",
      paragraphs: [
        "I’m a Data Analyst and Analytics Engineer with a software development background, focused on turning raw, unstructured data into validated insights through SQL, Python, Power BI, and Microsoft Fabric.",
        "Before specializing in data analytics, I worked remotely for three years (Jan 2022 – Oct 2024) as a Frontend Developer, giving me a practical understanding of databases, REST/GraphQL APIs, and how data-driven applications operate end-to-end.",
        "My earlier 20-year career as a professional tennis player, head coach, and program director shaped my approach to problem-solving: disciplined, detail-oriented, and focused on objective performance evaluation.",
        "I’m particularly interested in the intersection of data engineering and clear visual storytelling — ensuring high data quality first, then building intuitive dashboards that drive confident decisions.",
      ],
      journeyTitle: "My Journey",
      journey: [
        {
          role: "Next Step: Data Engineering (DP-700)",
          period: "In Progress",
          desc: "Expanding enterprise data engineering capabilities within Microsoft Fabric, Spark, and automated data pipelines.",
          icon: "rocket",
        },
        {
          role: "Data Analyst & BI Developer",
          period: "2024 – Present • Certified (DP-600 & PL-300)",
          desc: "Designing Star Schemas, Python data pipelines, and interactive Power BI dashboards with a strong focus on data quality.",
          icon: "chart",
        },
        {
          role: "Frontend Developer (Remote)",
          period: "Jan 2022 – Oct 2024 • Kontera SOFT",
          desc: "Built responsive React & Next.js web applications, integrated PostgreSQL/MongoDB databases, and improved performance (+25% Lighthouse).",
          icon: "code",
        },
        {
          role: "Professional Athlete, Coach & Program Director",
          period: "2002 – 2022 • Serbia, China & Germany",
          desc: "20+ years in high-performance tennis — coached 10+ national youth champions, led teams, and managed sports academies.",
          icon: "trophy",
        },
      ],
    },
    skills: {
      heading: "Skills & Tech Stack",
      subtitle:
        "Technologies and methodologies I use to validate data, design relational models, and deliver actionable insights.",
      categories: [
        {
          title: "Data Analytics & BI",
          icon: "chart",
          items: [
            "Python",
            "Pandas",
            "NumPy",
            "SQL",
            "PostgreSQL",
            "Power BI",
            "DAX",
            "Excel",
            "Tableau",
            "Matplotlib",
            "Seaborn",
          ],
        },
        {
          title: "Microsoft Data Platform & Quality",
          icon: "database",
          items: [
            "Microsoft Fabric",
            "Lakehouse & Warehousing",
            "Star Schema Modeling",
            "ETL / Data Cleaning",
            "Anomaly Detection",
            "Data Validation & QA",
          ],
        },
        {
          title: "Software & Web Development",
          icon: "code",
          items: [
            "JavaScript (ES6+)",
            "TypeScript",
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Git / GitHub",
          ],
        },
      ],
    },
    work: {
      heading: "Featured Projects",
      subtitle:
        "End-to-end data pipelines, SQL modeling, Power BI dashboards, and web applications.",
      otherHeading: "Other Projects & Web Development",
      featuredProjects: [
        {
          id: "wct",
          name: "Warehouse Control Tower (Heidelberg DC Simulation)",
          statusBadge: "IN PROGRESS • PHASE 3 (SQL)",
          shortDescription:
            "End-to-end Medallion (Bronze/Silver/Gold) warehouse analytics simulation of a 3-hall distribution center in Heidelberg (24,180 storage locations, 37,500 ABB-referenced SKUs, and 200,000 annual shipments).",
          description: [
            "Warehouse & Process Modeling (Completed): Modeled a realistic 3-hall distribution center with 24,180 storage positions (high racks, low pallet storage, vertical lifts) covering the full Order → Picking → Packing → Shipping flow.",
            "Synthetic Data Engine in Python (Completed): Generated and validated 800K+ operational records scaled to 200,000 annual shipments (435K+ picking operations, 37,500 products based on public ABB master data dimensions & weights, 98.5% on-time delivery rate).",
            "Medallion Pipeline in PostgreSQL (In Progress — Phase 3): Injecting controlled data-quality issues into the Bronze layer and engineering SQL transformations, referential integrity checks, and Star Schema models for Silver and Gold layers.",
            "Upcoming Milestones (Phases 4–6): Building the Power BI Warehouse Control Tower (DAX KPIs & bottleneck analysis), migrating to Microsoft Fabric Lakehouse, and adding AI/ML demand forecasting & slotting optimization.",
          ],
          technologies: [
            "Python",
            "PostgreSQL",
            "SQL",
            "Power BI",
            "Microsoft Fabric",
            "Medallion Architecture",
          ],
          link: "#",
          github: "https://github.com/Milos191405",
        },
        {
          id: "atp",
          name: "ATP Tennis Season 2024",
          shortDescription:
            "End-to-end data cleaning pipeline, PostgreSQL Star Schema, and multi-page Power BI dashboard.",
          description: [
            "Cleaned & validated 2,695+ ATP 2024 matches in Python (handling RET/W/O & missing durations)",
            "Designed a relational Star Schema in PostgreSQL with custom Head-to-Head views",
            "Engineered domain KPIs: Dominance Ratio, Clutch Index & surface win rates",
            "Built a 3-page interactive Power BI dashboard (Season Overview, Player & H2H)",
          ],
          technologies: ["Python", "PostgreSQL", "Power BI", "DAX"],
          link: "#",
          github: "https://github.com/Milos191405",
        },
        {
          id: "bundesliga",
          name: "Bundesliga 2023/24 Performance Analysis",
          shortDescription:
            "End-to-end analysis of all 306 Bundesliga matches and 18 clubs combining SQL, Python (Z-scores & correlation matrices), and a 6-page Power BI report on team efficiency, home-vs-away consistency, and Bayer Leverkusen's unbeaten title run.",
          description: [
            "Analyzed all 306 matches and 18 clubs using SQL and Python (Pandas, Seaborn)",
            "Evaluated team efficiency via Z-scores and physical metrics correlation matrices",
            "Built a 6-page Power BI report covering offense, defense, and home-vs-away consistency",
            "Pinpointed the statistical drivers behind Bayer Leverkusen's unbeaten title run",
          ],
          technologies: ["SQL", "Python", "Power BI", "DAX"],
          link: "#",
          github: "https://github.com/Milos191405/Bundesliga-2023-2024",
        },
      ],
      otherProjects: [
        {
          name: "Traffic Accident Analysis (Germany)",
          shortDescription:
            "Exploratory data analysis and Prophet time-series forecasting on German transport datasets (Destatis).",
          technologies: ["Python", "Pandas", "Prophet ML", "EDA"],
          link: "#",
          github: "https://github.com/Milos191405",
        },
        {
          name: "Job Market SQL Analysis",
          shortDescription:
            "SQL analysis of 700k+ job postings to uncover salary and skill trends.",
          technologies: ["SQL", "Data Analysis"],
          link: "#",
          github:
            "https://github.com/Milos191405/SQL-Job-Analyse/blob/main/README.md",
        },
        {
          name: "House Sales Analysis",
          shortDescription:
            "EDA on King County housing data using Python, Pandas, and Seaborn.",
          technologies: ["Python", "Pandas", "Matplotlib"],
          link: "#",
          github:
            "https://github.com/Milos191405/Python-House-properties/blob/main/README.md",
        },
        {
          name: "Psiholog Smilja Igic",
          shortDescription:
            "Responsive psychologist website built with Next.js and optimized for SEO.",
          technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
          link: "https://www.smiljaigicpsiholog.net/",
          github: "https://github.com/Milos191405/psiholog_smilja_igic",
        },
      ],
    },
    contact: {
      heading: "Let's Work Together",
      subtitle:
        "Open to Data Analyst, Analytics Engineer, and remote evaluation roles — as well as select freelance consulting projects.",
      services: [
        {
          title: "Data Analytics & BI Consulting",
          desc: "End-to-end data cleaning, SQL/Fabric modeling, and interactive Power BI dashboards tailored for clear business decisions.",
          icon: "chart",
          mailSubject: "Data Analytics / BI Project Inquiry",
        },
        {
          title: "Custom Web Development",
          desc: "Modern, fast, and SEO-optimized websites or web applications built with React, Next.js, and Tailwind CSS.",
          icon: "code",
          mailSubject: "Web Development Project Inquiry",
        },
      ],
      ctaButton: "Write Me",
      footer: "Designed & built by Milos Mirkovic — 2026",
    },
  },

  de: {
    nav: {
      links: [
        { to: "home", label: "Start" },
        { to: "work", label: "Projekte" },
        { to: "skills", label: "Skills" },
        { to: "about", label: "Über mich" },
        { to: "contact", label: "Kontakt" },
      ],
      cvLabel: "Lebenslauf",
      cvFile: "/Milos_Mirkovic_CV_DE.pdf",
      certLabel: "Zertifikate",
    },
    home: {
      badge: "DATA ANALYST & ANALYTICS ENGINEER",
      firstName: "Milos",
      lastName: "Mirkovic",
      headline: "Power BI • SQL • Python • Microsoft Fabric",
      intro:
        "Ich verwandle komplexe Rohdaten in validierte Datenmodelle, relationale Star-Schemas und fundierte Erkenntnisse. Rund 3 Jahre Remote-Erfahrung in der Frontend- & Softwareentwicklung und 20+ Jahre internationale Führungserfahrung kombiniert mit moderner Datenanalyse.",
      certificationsTitle: "ZERTIFIZIERUNGEN & QUALIFIKATIONEN",
      certifications: [
        {
          code: "DP-600",
          name: "Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)",
          status: "BESTANDEN",
          inProgress: false,
        },
        {
          code: "PL-300",
          name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
          status: "BESTANDEN",
          inProgress: false,
        },
        {
          code: "SQL",
          name: "SQL Data Analyst Associate (DataCamp)",
          status: "ZERTIFIZIERT",
          inProgress: false,
        },
        {
          code: "DP-700",
          name: "Microsoft Certified: Fabric Data Engineer Associate (DP-700)",
          status: "IN VORBEREITUNG",
          inProgress: true,
        },
      ],
      ctaProjects: "Projekte ansehen",
      ctaContact: "Kontakt aufnehmen",
      location: "Standort: Ketsch, Deutschland",
      availability: "Offen für Remote / Hybrid",
      quote: "„Daten verwandeln Erfahrung in Erkenntnis.“",
      quoteSub: "End-to-End-Analytik • Datenvalidierung • BI Storytelling",
    },
    about: {
      heading: "Über mich",
      paragraphs: [
        "Ich bin Data Analyst und Analytics Engineer mit einem Hintergrund in der Softwareentwicklung und konzentriere mich darauf, unstrukturierte Rohdaten mithilfe von SQL, Python, Power BI und Microsoft Fabric in fundierte Erkenntnisse zu übersetzen.",
        "Vor meiner Spezialisierung auf Datenanalyse arbeitete ich rund drei Jahre (Jan. 2022 – Okt. 2024) remote als Frontend-Entwickler. Dadurch besitze ich ein tiefes Verständnis für Datenbanken, REST/GraphQL-APIs und durchgängige datengetriebene Anwendungen.",
        "Meine frühere 20-jährige Laufbahn als Leistungssportler, Cheftrainer und Programmdirektor hat meine Arbeitsweise geprägt: diszipliniert, detailorientiert und fokussiert auf objektive Leistungsbewertung.",
        "Besonders fasziniert mich die Verbindung aus sauberem Data Engineering und klarem Data Storytelling — höchste Datenqualität als Basis für intuitive Dashboards und fundierte Entscheidungen.",
      ],
      journeyTitle: "Mein Werdegang",
      journey: [
        {
          role: "Nächster Schritt: Data Engineering (DP-700)",
          period: "In Vorbereitung",
          desc: "Vertiefung im Bereich Enterprise Data Engineering mit Microsoft Fabric, Spark und automatisierten Datenpipelines.",
          icon: "rocket",
        },
        {
          role: "Data Analyst & BI Developer",
          period: "2024 – Heute • Zertifiziert (DP-600 & PL-300)",
          desc: "Aufbau von Star-Schemas, Python-Datenpipelines und interaktiven Power BI Dashboards mit höchstem Anspruch an Datenqualität.",
          icon: "chart",
        },
        {
          role: "Frontend-Entwickler (Remote)",
          period: "Jan. 2022 – Okt. 2024 • Kontera SOFT",
          desc: "Entwicklung responsiver React- & Next.js-Webanwendungen, Anbindung an PostgreSQL/MongoDB und Performance-Optimierung (+25 % Lighthouse).",
          icon: "code",
        },
        {
          role: "Leistungssportler, Cheftrainer & Programmdirektor",
          period: "2002 – 2022 • Serbien, China & Deutschland",
          desc: "Über 20 Jahre im Leistungstennis — über 10 nationale Jugendmeister trainiert, Teams geleitet und Tennisschulen aufgebaut.",
          icon: "trophy",
        },
      ],
    },
    skills: {
      heading: "Fähigkeiten & Tech Stack",
      subtitle:
        "Technologien und Methoden für Datenvalidierung, Datenmodellierung und Business Intelligence.",
      categories: [
        {
          title: "Datenanalyse & BI",
          icon: "chart",
          items: [
            "Python",
            "Pandas",
            "NumPy",
            "SQL",
            "PostgreSQL",
            "Power BI",
            "DAX",
            "Excel",
            "Tableau",
            "Matplotlib",
            "Seaborn",
          ],
        },
        {
          title: "Microsoft Data Platform & Datenqualität",
          icon: "database",
          items: [
            "Microsoft Fabric",
            "Lakehouse & Warehousing",
            "Star-Schema-Modellierung",
            "ETL / Datenbereinigung",
            "Anomalieerkennung",
            "Datenvalidierung & QA",
          ],
        },
        {
          title: "Software- & Webentwicklung",
          icon: "code",
          items: [
            "JavaScript (ES6+)",
            "TypeScript",
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Git / GitHub",
          ],
        },
      ],
    },
    work: {
      heading: "Ausgewählte Projekte",
      subtitle:
        "End-to-End Datenpipelines, SQL-Modellierung, Power BI Dashboards und Webanwendungen.",
      otherHeading: "Weitere Projekte & Webentwicklung",
      featuredProjects: [
        {
          id: "wct",
          name: "Warehouse Control Tower (Logistikzentrum Heidelberg)",
          statusBadge: "IN ARBEIT • PHASE 3 (SQL)",
          shortDescription:
            "End-to-End Medallion-Lageranalyse (Bronze/Silver/Gold) eines 3-Hallen-Distributionszentrums in Heidelberg (24.180 Lagerplätze, 37.500 Artikel auf ABB-Stammdatenbasis und 200.000 Sendungen pro Jahr).",
          description: [
            "Lager- & Prozessmodellierung (Abgeschlossen): Modellierung eines realistischen 3-Hallen-Logistikzentrums mit 24.180 Lagerplätzen (Hochregale, Palettenlager, Vertikallifte) entlang des gesamten Prozesses Order → Picking → Packing → Shipping.",
            "Synthetischer Datengenerator in Python (Abgeschlossen): Generierung und Validierung von über 800.000 Betriebsdatensätzen skaliert auf 200.000 jährliche Sendungen (435.000+ Kommissionierungen, 37.500 Produkte auf Basis öffentlicher ABB-Artikelstammdaten, 98,5 % Liefertreue).",
            "Medallion-Pipeline in PostgreSQL (In Arbeit — Phase 3): Simulation realer Datenqualitätsprobleme im Bronze-Layer sowie SQL-Transformationen, Datenbereinigung und Star-Schema-Modellierung für Silver- und Gold-Layer.",
            "Nächste Meilensteine (Phasen 4–6): Aufbau des Power BI Warehouse Control Towers (DAX-KPIs & Engpassanalyse), Integration in Microsoft Fabric Lakehouse sowie KI/ML-Bestandsprognosen und Slotting-Optimierung.",
          ],
          technologies: [
            "Python",
            "PostgreSQL",
            "SQL",
            "Power BI",
            "Microsoft Fabric",
            "Medallion-Architektur",
          ],
          link: "#",
          github: "https://github.com/Milos191405",
        },
        {
          id: "atp",
          name: "ATP Tennis Season 2024",
          shortDescription:
            "Datenbereinigung in Python, PostgreSQL Star-Schema und interaktives Power BI Dashboard.",
          description: [
            "Bereinigung & Validierung von 2.695+ ATP-Matches 2024 in Python (RET/W/O-Filterung)",
            "Aufbau eines relationalen Star-Schemas in PostgreSQL inkl. Head-to-Head-Views",
            "Entwicklung eigener KPIs: Dominance Ratio, Clutch Index & Belag-Siegquoten",
            "Interaktives 3-seitiges Power BI Dashboard (Saisonübersicht, Spieler & H2H)",
          ],
          technologies: ["Python", "PostgreSQL", "Power BI", "DAX"],
          link: "#",
          github: "https://github.com/Milos191405",
        },
        {
          id: "bundesliga",
          name: "Bundesliga 2023/24 Performance-Analyse",
          shortDescription:
            "End-to-End-Analyse aller 306 Bundesliga-Spiele und 18 Vereine mit SQL, Python (Z-Scores & Korrelationsmatrizen) sowie einem 6-seitigen Power-BI-Bericht zu Team-Effizienz, Heim-/Auswärtskonstanz und Bayer Leverkusens ungeschlagener Meistersaison.",
          description: [
            "Analyse aller 306 Spiele und 18 Vereine mit SQL und Python (Pandas, Seaborn)",
            "Bewertung der Team-Effizienz mittels Z-Scores und Korrelationsmatrizen",
            "Erstellung eines 6-seitigen Power-BI-Berichts zu Offensive, Defensive und Heim-/Auswärtskonstanz",
            "Identifikation der statistischen Erfolgsfaktoren von Bayer Leverkusens ungeschlagener Saison",
          ],
          technologies: ["SQL", "Python", "Power BI", "DAX"],
          link: "#",
          github: "https://github.com/Milos191405/Bundesliga-2023-2024",
        },
      ],
      otherProjects: [
        {
          name: "Verkehrsunfallanalyse Deutschland",
          shortDescription:
            "Explorative Datenanalyse und Prophet-Zeitreihenprognose auf Basis von Destatis-Daten.",
          technologies: ["Python", "Pandas", "Prophet ML", "EDA"],
          link: "#",
          github: "https://github.com/Milos191405",
        },
        {
          name: "Job Market SQL Analysis",
          shortDescription:
            "SQL-Analyse von über 700.000 Stellenanzeigen zu Gehalts- und Skill-Trends.",
          technologies: ["SQL", "Data Analysis"],
          link: "#",
          github:
            "https://github.com/Milos191405/SQL-Job-Analyse/blob/main/README.md",
        },
        {
          name: "House Sales Analysis",
          shortDescription:
            "EDA des Immobilienmarkts in King County mit Python, Pandas und Seaborn.",
          technologies: ["Python", "Pandas", "Matplotlib"],
          link: "#",
          github:
            "https://github.com/Milos191405/Python-House-properties/blob/main/README.md",
        },
        {
          name: "Psiholog Smilja Igic",
          shortDescription:
            "Responsive Website für eine Psychologin mit Next.js und SEO-Optimierung.",
          technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
          link: "https://www.smiljaigicpsiholog.net/",
          github: "https://github.com/Milos191405/psiholog_smilja_igic",
        },
      ],
    },
    contact: {
      heading: "Zusammenarbeit",
      subtitle:
        "Offen für Positionen im Bereich Data Analytics und Analytics Engineering sowie ausgewählte Freelance-Projekte.",
      services: [
        {
          title: "Datenanalyse & BI-Beratung",
          desc: "Datenbereinigung, SQL/Fabric-Modellierung und interaktive Power BI Dashboards für fundierte Unternehmensentscheidungen.",
          icon: "chart",
          mailSubject: "Anfrage: Datenanalyse / BI-Projekt",
        },
        {
          title: "Individuelle Webentwicklung",
          desc: "Moderne, schnelle und SEO-optimierte Websites oder Webanwendungen mit React, Next.js und Tailwind CSS.",
          icon: "code",
          mailSubject: "Anfrage: Webentwicklung",
        },
      ],
      ctaButton: "Nachricht senden",
      footer: "Entwickelt von Milos Mirkovic — 2026",
    },
  },
};
