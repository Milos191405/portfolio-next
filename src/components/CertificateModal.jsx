"use client";

import { useEffect } from "react";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaAward,
} from "react-icons/fa";
import { useScrollLock } from "../hooks/useScrollLock";

const CertificateModal = ({ activeCert, onClose, lang = "en" }) => {
  const isOpen = Boolean(activeCert);
  useScrollLock(isOpen);

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!activeCert) return null;

  const isPdf = activeCert.href?.toLowerCase().endsWith(".pdf");

  const labels = {
    en: {
      verify: "Verify on Microsoft",
      openTab: "Open Full View",
      close: "Close",
    },
    de: {
      verify: "Bei Microsoft verifizieren",
      openTab: "Vollbild öffnen",
      close: "Schließen",
    },
  }[lang] || {
    verify: "Verify on Microsoft",
    openTab: "Open Full View",
    close: "Close",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-[#112240] border border-slate-700 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-[#0a192f]">
          {/* Top row on mobile: Title + Close (X) button */}
          <div className="flex items-center justify-between gap-3 min-w-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <FaAward className="text-blue-400 text-lg shrink-0" />
              <h3 className="text-white font-bold text-sm sm:text-base truncate">
                {activeCert.label || activeCert.name}
              </h3>
            </div>

            {/* Close button on mobile (pinned top-right) */}
            <button
              onClick={onClose}
              className="sm:hidden p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-gray-300 hover:text-white transition cursor-pointer shrink-0"
              aria-label={labels.close}
            >
              <FaTimes size={15} />
            </button>
          </div>

          {/* Action Buttons + Desktop Close button */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 shrink-0">
            {activeCert.verifyUrl && (
              <a
                href={activeCert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/25 text-xs font-semibold transition"
              >
                <FaCheckCircle className="text-emerald-400 shrink-0" />
                <span className="truncate">{labels.verify}</span>
              </a>
            )}

            <a
              href={activeCert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition"
            >
              <FaExternalLinkAlt size={11} className="shrink-0" />
              <span className="truncate">{labels.openTab}</span>
            </a>

            {/* Close button on desktop */}
            <button
              onClick={onClose}
              className="hidden sm:inline-flex p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-gray-300 hover:text-white transition cursor-pointer shrink-0"
              aria-label={labels.close}
            >
              <FaTimes size={16} />
            </button>
          </div>
        </div>

        {/* Certificate Viewer Body */}
        <div className="w-full bg-[#0a192f]/90 flex items-center justify-center p-3 sm:p-6 overflow-auto">
          {isPdf ?
            <iframe
              src={`${activeCert.href}#toolbar=0&navpanes=0&view=FitH`}
              title={activeCert.label || activeCert.name}
              className="w-full h-[65vh] sm:h-[75vh] rounded-lg border border-slate-800 bg-white"
            />
          : <img
              src={activeCert.href}
              alt={activeCert.label || activeCert.name}
              className="max-w-full max-h-[70vh] sm:max-h-[75vh] w-auto h-auto object-contain rounded-lg shadow-xl border border-slate-800"
            />
          }
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
