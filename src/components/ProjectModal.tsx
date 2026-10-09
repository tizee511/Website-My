import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Wrench, BarChart3, Layers, UserCheck } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { lang, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const title = isRTL ? project.title.ar : project.title.en;
  const fullDesc = isRTL ? project.fullDescription.ar : project.fullDescription.en;
  const problem = isRTL ? project.problem.ar : project.problem.en;
  const solution = isRTL ? project.solution.ar : project.solution.en;
  const role = isRTL ? project.role.ar : project.role.en;
  const challenges = isRTL ? project.technicalChallenges.ar : project.technicalChallenges.en;
  const results = isRTL ? project.results.ar : project.results.en;
  const features = isRTL ? project.keyFeatures.ar : project.keyFeatures.en;
  const categoryLabel = isRTL ? project.categoryLabel.ar : project.categoryLabel.en;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium text-sky-600 dark:text-sky-400">
              {categoryLabel}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label={t.projects.closeModal}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Hero Visual Preview */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
            <img
              src={project.image}
              alt={title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 id="project-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight">
                {title}
              </h3>
            </div>
          </div>

          {/* Action Links & Role Summary */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
              <UserCheck className="w-4 h-4 text-sky-500 shrink-0" />
              <span className="font-semibold">{t.projects.modalRole}:</span>
              <span>{role}</span>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{t.projects.viewCode}</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{t.projects.livePreview}</span>
                </a>
              )}
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-500" />
              <span>{t.projects.modalOverview}</span>
            </h4>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {fullDesc}
            </p>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Problem */}
            <div className="p-5 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 space-y-2">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 text-sm font-bold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{t.projects.modalProblem}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {problem}
              </p>
            </div>

            {/* Solution */}
            <div className="p-5 rounded-xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-200/60 dark:border-sky-900/40 space-y-2">
              <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400 text-sm font-bold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{t.projects.modalSolution}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {t.projects.modalFeatures}
            </h4>
            <ul className="space-y-2.5">
              {features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Challenges & Mitigations */}
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white text-sm font-bold">
              <Wrench className="w-4 h-4 text-sky-500 shrink-0" />
              <span>{t.projects.modalChallenges}</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {challenges}
            </p>
          </div>

          {/* Measurable Results */}
          <div className="p-5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-sm font-bold">
              <BarChart3 className="w-4 h-4 shrink-0" />
              <span>{t.projects.modalResults}</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
              {results}
            </p>
          </div>

          {/* Technologies Used (Clean tags) */}
          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {t.projects.techUsed}
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white transition-colors cursor-pointer"
          >
            {t.projects.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};
