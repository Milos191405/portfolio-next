import { useEffect } from "react";
import { FiAward, FiExternalLink, FiCheckCircle, FiX } from "react-icons/fi";

const CertificateModal = ({ activeCert, onClose, lang = "en" }) => {
  // Close modal on ESC key and lock background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (activeCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCert, onClose]);

  if (!activeCert) return null;

  // Automatically detect if the file is an image (.png, .jpg, .jpeg, .webp) or a PDF
  const isImage = /\.(png|jpe?g|webp|gif|svg)$/i.test(activeCert.href || "");

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl h-[85vh] rounded-2xl bg-[#112240] border border-slate-700 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-slate-800 bg-[#0a192f]">
          <div className="flex items-center gap-2.5 min-w-0">
            <FiAward className="text-blue-400 text-lg shrink-0" />
            <h3 className="font-bold text-white text-sm sm:text-base truncate">
              {activeCert.label || activeCert.name}
            </h3>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Official Verification Link Button */}
            {activeCert.verifyUrl && (
              <a
                href={activeCert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition"
              >
                <FiCheckCircle size={13} className="text-emerald-400" />
                <span>
                  {lang === "de" ?
                    "Zertifikat prüfen"
                  : "Verify on Microsoft / Web"}
                </span>
              </a>
            )}

            {/* Open Full File in New Tab */}
            {activeCert.href && (
              <a
                href={activeCert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition"
              >
                <FiExternalLink size={13} />
                <span>
                  {lang === "de" ? "Vollbild öffnen" : "Open Full View"}
                </span>
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#112240] hover:bg-slate-800 text-gray-300 hover:text-white border border-slate-700 cursor-pointer transition"
              aria-label="Close modal"
            >
              <FiX size={16} />
            </button>
          </div>
        </div>

        {/* Certificate Preview Area (Image or PDF) */}
        <div className="flex-1 bg-[#0a192f] w-full h-full overflow-auto flex items-center justify-center p-4">
          {isImage ?
            <img
              src={activeCert.href}
              alt={activeCert.label || activeCert.name}
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
            />
          : <iframe
              src={activeCert.href}
              title={activeCert.label || activeCert.name}
              className="w-full h-full border-0 rounded-lg"
            />
          }
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
