import React, { useState } from 'react';
import { daycareData, Language } from '../data/content';
import { BookOpen, Palette, Sparkles, Compass, Heart, Calendar, Check, ArrowRight } from 'lucide-react';

interface CurriculumSectionProps {
  lang: Language;
  onOpenTourModal: () => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ lang, onOpenTourModal }) => {
  const content = daycareData[lang];
  const t = content.curriculum;
  const isEs = lang === 'es';

  const [selectedPillarIndex, setSelectedPillarIndex] = useState<number>(0);

  const pillarIcons = [
    BookOpen,
    Palette,
    Sparkles,
    Compass,
    Heart,
  ];

  return (
    <section id="curriculum" className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Decorative gradient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -ml-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3AB0FF]/10 border border-[#3AB0FF]/30 text-[#3AB0FF] text-sm font-semibold tracking-wide uppercase mb-4 shadow-sm">
            <BookOpen className="w-4 h-4" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 tracking-tight mb-3">
            {t.title}
          </h2>

          <p className="text-lg sm:text-xl font-medium text-[#FF6B9D] italic mb-5">
            “{t.subtitleTag}”
          </p>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Showcase Grid: Physical Binder on Left + Interactive Pillars on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          {/* Left Column: Official Curriculum Binder Presentation (matching IMG_6158.jpeg) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Binder frame with luxury drop shadow */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-pink-50 group">
                <img
                  src={t.binderImage}
                  alt={isEs ? "Plan Curricular Mensual y Guía de Actividades Montessori de Pasitos de Aprendizaje" : "Monthly Classroom Curriculum Binder and Montessori Lesson Plans at Pasitos de Aprendizaje"}
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Glassmorphic overlay badge */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent p-6 text-white">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FF6B9D] text-white mb-2 shadow-sm">
                    {isEs ? 'Carpeta Física de Trabajo' : 'Classroom Curriculum Binder'}
                  </span>
                  <p className="text-sm font-semibold leading-snug text-white/95">
                    {t.binderCaption}
                  </p>
                  <p className="text-xs text-white/80 mt-1">
                    {isEs
                      ? 'Planificaciones mensuales con proyectos de arte, motricidad, lectura y valores.'
                      : 'Structured monthly themes with hands-on art, literacy, motor skills, and values.'}
                  </p>
                </div>
              </div>

              {/* Decorative floating badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3 shadow-lg border border-pink-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center font-black text-sm">
                  CDA
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">
                    {isEs ? 'Currículo Aprobado EEC' : 'EEC-Aligned Curriculum'}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {isEs ? 'Enfoque Montessori Bilingüe' : 'Bilingual Montessori Approach'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Developmental Pillars */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-slate-800">
                {isEs ? '5 Pilares de Nuestro Plan Mensual' : '5 Core Pillars of Our Monthly Plan'}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                {isEs
                  ? 'Cada semana se planifica con actividades prácticas diseñadas para despertar la curiosidad natural del niño.'
                  : 'Every week is programmed with hands-on projects designed to awaken your child’s natural curiosity.'}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {t.curriculumPoints.map((point, index) => {
                const Icon = pillarIcons[index % pillarIcons.length];
                const isSelected = selectedPillarIndex === index;

                return (
                  <div
                    key={index}
                    onClick={() => setSelectedPillarIndex(index)}
                    className={`cursor-pointer rounded-2xl p-4 sm:p-5 border transition-all duration-200 flex items-start gap-4 ${
                      isSelected
                        ? 'bg-amber-50/40 border-amber-300 shadow-md ring-2 ring-amber-400/20'
                        : 'bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        index === 0
                          ? 'bg-sky-100 text-[#3AB0FF]'
                          : index === 1
                          ? 'bg-pink-100 text-[#FF6B9D]'
                          : index === 2
                          ? 'bg-amber-100 text-amber-600'
                          : index === 3
                          ? 'bg-emerald-100 text-emerald-600'
                          : 'bg-rose-100 text-rose-600'
                      }`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-base sm:text-lg font-bold text-slate-800">
                          {point.title}
                        </h4>
                        {isSelected && (
                          <span className="shrink-0 flex items-center text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                            <Check className="w-3 h-3 mr-1" />
                            {isEs ? 'Enfoque' : 'Focus'}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Monthly Themes Preview Card */}
        <div className="bg-[#FFFBF5] rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B9D]">
                {isEs ? 'Progresión Anual Temática' : 'Year-Round Thematic Progression'}
              </span>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight mt-1">
                {isEs ? 'Ejemplos de Temas Mensuales' : 'Sample Monthly Curriculum Themes'}
              </h3>
            </div>

            <button
              onClick={onOpenTourModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs sm:text-sm font-bold shadow-sm transition-all"
            >
              <Calendar className="w-4 h-4 text-pink-400" />
              <span>{isEs ? 'Ver Carpeta Completa en Visita' : 'View Full Binder During Tour'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.monthsOverview.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-block px-2.5 py-1 rounded-lg text-xs font-bold bg-pink-50 text-pink-700 mb-2.5">
                  {item.month}
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-1.5">
                  {item.theme}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-700">{isEs ? 'Actividades: ' : 'Key Activities: '}</span>
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
