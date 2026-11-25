import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";
import { useScrollLock } from "../hooks/useScrollLock";

const ProjectModal = ({
  activeProject,
  onClose,
  currentImages = [],
  slideIndex,
  setSlideIndex,
}) => {
  useScrollLock(Boolean(activeProject));

  // Keyboard navigation (ESC to close, Left/Right arrows for gallery)
  useEffect(() => {
    if (!activeProject) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && currentImages.length > 1) {
        setSlideIndex((prev) => (prev + 1) % currentImages.length);
      }
      if (e.key === "ArrowLeft" && currentImages.length > 1) {
        setSlideIndex((prev) =>
          prev === 0 ? currentImages.length - 1 : prev - 1,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject, currentImages.length, onClose, setSlideIndex]);

  const nextSlide = (e) => {
    e.stopPropagation();
    setSlideIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setSlideIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  return (
    <AnimatePresence>
      {activeProject && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#112240] border border-slate-700 shadow-2xl p-5 sm:p-8"
            initial={{ scale: 0.93, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.93, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 text-gray-300 hover:text-white bg-[#0a192f] hover:bg-blue-600 p-2.5 rounded-full border border-slate-700 cursor-pointer transition"
              aria-label="Close modal"
            >
              <FaTimes size={18} />
            </button>

            {/* TOP: Image Gallery / Slideshow */}
            <div className="relative rounded-xl overflow-hidden border border-slate-700/80 bg-[#0a192f] mb-6">
              <img
                src={currentImages[slideIndex]}
                alt={`${activeProject.name} - Slide ${slideIndex + 1}`}
                className="w-full max-h-[440px] object-contain mx-auto"
              />

              {currentImages.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0a192f]/90 hover:bg-blue-600 text-white border border-slate-700 cursor-pointer transition"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0a192f]/90 hover:bg-blue-600 text-white border border-slate-700 cursor-pointer transition"
                    aria-label="Next image"
                  >
                    <FaChevronRight size={16} />
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-[#0a192f]/80 px-3 py-1.5 rounded-full">
                    {currentImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSlideIndex(i);
                        }}
                        className={`h-2 rounded-full cursor-pointer transition-all ${
                          i === slideIndex ? "bg-blue-400 w-4" : (
                            "bg-gray-500 w-2"
                          )
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* BOTTOM: Project Details & Links */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {activeProject.name}
              </h3>
              <p className="text-sm sm:text-base text-blue-300 mt-1.5 mb-5">
                {activeProject.shortDescription}
              </p>

              <ul className="space-y-2.5 text-sm sm:text-base text-gray-200 mb-6">
                {activeProject.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <FaCheckCircle className="text-blue-400 mt-1 shrink-0 text-sm" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-[#0a192f] border border-slate-700 text-xs font-semibold text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {activeProject.link && activeProject.link !== "#" && (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition"
                    >
                      <FaExternalLinkAlt size={13} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0a192f] hover:bg-slate-800 border border-slate-700 text-white text-sm font-medium transition"
                    >
                      <FaGithub size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
