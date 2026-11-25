// Single source of truth for certificates (files live in public/)
export const CERTIFICATES = [
  {
    code: "DP-600",
    label: "Microsoft DP-600 (Fabric)",
    href: "/DP-600.png",
    verifyUrl:
      "https://learn.microsoft.com/en-us/users/milosmirkovic-3205/credentials/certification/fabric-analytics-engineer-associate?tab=credentials-tab",
  },
  {
    code: "PL-300",
    label: "Microsoft PL-300 (Power BI)",
    href: "/PL-300.png",
    verifyUrl:
      "https://learn.microsoft.com/en-us/users/milosmirkovic-3205/credentials/certification/data-analyst-associate?tab=credentials-tab",
  },
  {
    code: "SQL",
    label: "SQL Data Analyst Associate (DataCamp)",
    href: "/SQL Data Analyst Associate-DataCamp.pdf",
  },
  {
    code: "DCI",
    label: "Web Development (DCI)",
    href: "/Zertifikat DCI.pdf",
  },
];

// Lookup by code, e.g. CERT_BY_CODE["PL-300"]
export const CERT_BY_CODE = Object.fromEntries(
  CERTIFICATES.map((cert) => [cert.code, cert]),
);
