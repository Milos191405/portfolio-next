export const translations = {
  en: {
    nav: {
      links: [
        { to: "home", label: "Home" },
        { to: "about", label: "About" },
        { to: "skills", label: "Skills" },
        { to: "work", label: "Work" },
        { to: "contact", label: "Contact" },
      ],
      cvLabel: "Download CV",
      cvFile: "/Milos_Mirkovic_CV_EN.pdf",
      certLabel: "Certificates",
    },
    home: {
      greeting: "Hi, my name is",
      name: "Milos Mirkovic",
      headline: "Data Analyst | Power BI • SQL • Python • Microsoft Fabric",
      tagline: "📊 Data Analyst | 🧠 Critical Thinker | 🎾 Ex-Athlete",
      intro:
        "I turn raw, complex data into validated models, relational Star Schemas, and actionable insights. Combining 2+ years of remote software engineering experience with analytical rigor and structured problem-solving.",
      skills: [
        "Python",
        "SQL",
        "PostgreSQL",
        "Power BI",
        "DAX",
        "Microsoft Fabric",
        "React",
        "TypeScript",
      ],
      prompt: "Curious to see what I’ve been working on?",
      highlights: [
        {
          title: "Certified Data & Analytics Engineer",
          description:
            "Microsoft Certified in Fabric Analytics (DP-600) & Power BI (PL-300), plus DataCamp SQL Associate — currently preparing DP-700.",
        },
        {
          title: "Software Developer at Kontera Soft (Remote)",
          description:
            "Worked remotely for 2+ years integrating PostgreSQL/MongoDB databases, REST/GraphQL APIs, and building responsive data-driven apps.",
        },
        {
          title: "End-to-End Analytics & Quality Focus",
          description:
            "Combining engineering discipline with analytical storytelling to build clean ETL pipelines and intuitive executive dashboards.",
        },
      ],
      ctaProjects: "View My Work",
      ctaCv: "Download CV",
      snapshotTitle: "ATP 2024 • Analytics Snapshot",
      certificationsTitle: "Verified Certifications",
      certifications: [
        {
          code: "DP-600",
          name: "Fabric Analytics Engineer Associate",
          status: "Passed",
          inProgress: false,
        },
        {
          code: "PL-300",
          name: "Power BI Data Analyst Associate",
          status: "Passed",
          inProgress: false,
        },
        {
          code: "SQL",
          name: "DataCamp SQL Data Analyst Associate",
          status: "Certified",
          inProgress: false,
        },
        {
          code: "DP-700",
          name: "Fabric Data Engineer Associate",
          status: "In Progress",
          inProgress: true,
        },
      ],
    },
    about: {
      heading: "About Me",
      paragraphs: [
        "I’m a Data Analyst and Analytics Engineer with a software development background, focused on turning raw, unstructured data into validated insights through SQL, Python, Power BI, and Microsoft Fabric.",
        "Before specializing in data analytics, I worked remotely for over two years as a Frontend Developer, giving me a practical understanding of databases, REST/GraphQL APIs, and how data-driven applications operate end-to-end.",
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
          period: "2022 – 2024 • Kontera SOFT",
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
          name: "Bundesliga 2023/24 Analysis",
          shortDescription:
            "SQL-based team performance analysis with Z-scores, correlations, and Power BI reporting.",
          description: [
            "Analyzed Bundesliga 2023/24 performance using PostgreSQL and Python",
            "Correlated key metrics: shots, goals, possession, passing accuracy & physical output",
            "Benchmarked Bayer Leverkusen's unbeaten season against league averages via Z-scores",
            "Built interactive Power BI dashboards with DAX measures and scatter plots",
          ],
          technologies: ["SQL", "PostgreSQL", "Python", "Power BI"],
          link: "#",
          github:
            "https://github.com/Milos191405/Bundesliga-2023-2024/blob/master/README.md",
        },
        {
          id: "traffic",
          name: "Traffic Accident Analysis (Germany)",
          shortDescription:
            "Exploratory data analysis and Prophet time-series forecasting on German transport datasets.",
          description: [
            "Analyzed national accident datasets (Destatis) across severity, locations, and seasons",
            "Compared urban, rural, and motorway patterns alongside weather impacts",
            "Built a Prophet time-series forecasting model validated with MAE/RMSE metrics",
            "Exported structured forecasts and visual insights for risk assessment",
          ],
          technologies: ["Python", "Pandas", "Prophet ML", "EDA"],
          link: "#",
          github: "https://github.com/Milos191405",
        },
      ],
      otherProjects: [
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
          link: "https://psiholog-smilja-igic.vercel.app/",
          github: "https://github.com/Milos191405/psiholog_smilja_igic",
        },
        {
          name: "YourMentorMate",
          shortDescription:
            "Mentoring platform with role-based auth, booking, and payment integration.",
          technologies: ["React", "TypeScript", "Tailwind CSS"],
          link: "https://mentor-mate-frontend.onrender.com/",
          github: "https://github.com/Milos191405/mentor-mate",
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
        { to: "about", label: "Über mich" },
        { to: "skills", label: "Skills" },
        { to: "work", label: "Projekte" },
        { to: "contact", label: "Kontakt" },
      ],
      cvLabel: "Lebenslauf",
      cvFile: "/Milos_Mirkovic_CV_DE.pdf",
      certLabel: "Zertifikate",
    },
    home: {
      greeting: "Hallo, mein Name ist",
      name: "Milos Mirkovic",
      headline: "Data Analyst | Power BI • SQL • Python • Microsoft Fabric",
      tagline:
        "📊 Data Analyst | 🧠 Analytischer Denker | 🎾 Ex-Leistungssportler",
      intro:
        "Ich verwandle komplexe Rohdaten in validierte Datenmodelle, relationale Star-Schemas und aussagekräftige Erkenntnisse. Über 2 Jahre Remote-Erfahrung in der Softwareentwicklung kombiniert mit analytischer Präzision.",
      skills: [
        "Python",
        "SQL",
        "PostgreSQL",
        "Power BI",
        "DAX",
        "Microsoft Fabric",
        "React",
        "TypeScript",
      ],
      prompt: "Neugierig, woran ich zuletzt gearbeitet habe?",
      highlights: [
        {
          title: "Zertifizierter Data & Analytics Engineer",
          description:
            "Microsoft-zertifiziert in Fabric Analytics (DP-600) & Power BI (PL-300) sowie DataCamp SQL Associate — aktuell in Vorbereitung auf DP-700.",
        },
        {
          title: "Softwareentwickler bei Kontera Soft (Remote)",
          description:
            "Über 2 Jahre Remote-Erfahrung in der Anbindung von PostgreSQL/MongoDB-Datenbanken, REST/GraphQL-APIs und datengetriebenen Web-Apps.",
        },
        {
          title: "End-to-End-Analytik & Datenqualität",
          description:
            "Kombination aus technischer Präzision und Data Storytelling für saubere ETL-Pipelines und interaktive Management-Dashboards.",
        },
      ],
      ctaProjects: "Projekte ansehen",
      ctaCv: "Lebenslauf (PDF)",
      snapshotTitle: "ATP 2024 • Analytics Snapshot",
      certificationsTitle: "Zertifizierungen",
      certifications: [
        {
          code: "DP-600",
          name: "Fabric Analytics Engineer Associate",
          status: "Bestanden",
          inProgress: false,
        },
        {
          code: "PL-300",
          name: "Power BI Data Analyst Associate",
          status: "Bestanden",
          inProgress: false,
        },
        {
          code: "SQL",
          name: "DataCamp SQL Data Analyst Associate",
          status: "Zertifiziert",
          inProgress: false,
        },
        {
          code: "DP-700",
          name: "Fabric Data Engineer Associate",
          status: "In Vorbereitung",
          inProgress: true,
        },
      ],
    },
    about: {
      heading: "Über mich",
      paragraphs: [
        "Ich bin Data Analyst und Analytics Engineer mit einem Hintergrund in der Softwareentwicklung und konzentriere mich darauf, unstrukturierte Rohdaten mithilfe von SQL, Python, Power BI und Microsoft Fabric in fundierte Erkenntnisse zu übersetzen.",
        "Vor meiner Spezialisierung auf Datenanalyse arbeitete ich über zwei Jahre remote als Frontend-Entwickler. Dadurch besitze ich ein tiefes Verständnis für Datenbanken, REST/GraphQL-APIs und durchgängige datengetriebene Anwendungen.",
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
          period: "2022 – 2024 • Kontera SOFT",
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
          name: "Bundesliga 2023/24 Analyse",
          shortDescription:
            "SQL-basierte Team-Leistungsanalyse mit Z-Scores, Korrelationen und Power BI.",
          description: [
            "Analyse der Bundesliga-Saison 2023/24 mit PostgreSQL und Python",
            "Korrelationsanalyse von Torschüssen, Toren, Ballbesitz und Laufleistung",
            "Benchmarking von Bayer Leverkusen gegen den Ligadurchschnitt mittels Z-Scores",
            "Interaktive Power BI Dashboards mit DAX-Kennzahlen und Streudiagrammen",
          ],
          technologies: ["SQL", "PostgreSQL", "Python", "Power BI"],
          link: "#",
          github:
            "https://github.com/Milos191405/Bundesliga-2023-2024/blob/master/README.md",
        },
        {
          id: "traffic",
          name: "Verkehrsunfallanalyse Deutschland",
          shortDescription:
            "Explorative Datenanalyse und Prophet-Zeitreihenprognose auf Basis von Destatis-Daten.",
          description: [
            "Analyse nationaler Unfalldaten nach Unfallart, Ortslage und Saisonalität",
            "Vergleich von innerörtlichen, außerörtlichen und Autobahn-Unfallmustern",
            "Zeitreihenprognose mit Prophet inkl. Validierung durch MAE/RMSE-Metriken",
            "Strukturierte Aufbereitung und Visualisierung der Prognoseergebnisse",
          ],
          technologies: ["Python", "Pandas", "Prophet ML", "EDA"],
          link: "#",
          github: "https://github.com/Milos191405",
        },
      ],
      otherProjects: [
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
          link: "https://psiholog-smilja-igic.vercel.app/",
          github: "https://github.com/Milos191405/psiholog_smilja_igic",
        },
        {
          name: "YourMentorMate",
          shortDescription:
            "Mentoring-Plattform mit Authentifizierung, Buchungssystem und Zahlungen.",
          technologies: ["React", "TypeScript", "Tailwind CSS"],
          link: "https://mentor-mate-frontend.onrender.com/",
          github: "https://github.com/Milos191405/mentor-mate",
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
