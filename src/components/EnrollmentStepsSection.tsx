import React from 'react';
import { daycareData, Language } from '../data/content.ts';
import { Calendar, FileCheck, CreditCard, HeartHandshake, ArrowRight, Check } from 'lucide-react';

interface EnrollmentStepsSectionProps {
  lang: Language;
  onOpenTourModal: () => void;
}

export const EnrollmentStepsSection: React.FC<EnrollmentStepsSectionProps> = ({ lang, onOpenTourModal }) => {
  const content = daycareData[lang];
  const t = content.steps;
  const isEs = lang === 'es';

  const stepIcons = [
    Calendar,
    FileCheck,
    CreditCard,
    HeartHandshake
  ];

  return (
    <section id="enrollment-steps" className="py-16 md:py-24 bg-[#FFFBF5] relative overflow-hidden border-t border-[#EFE5D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#FF6B9D] text-xs font-bold tracking-wide uppercase mb-3.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2D2A26] font-display tracking-tight text-balance mb-4">
            {t.title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#5E554B] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.items.map((item, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-white border border-[#EAE0D2] shadow-soft flex flex-col justify-between group hover:border-[#FF6B9D]/40 transition-colors"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-black text-[#FF6B9D]/30 font-display group-hover:text-[#FF6B9D] transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-[#FF6B9D] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#2D2A26] mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665D52] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#FF6B9D]">
                  <Check className="w-3.5 h-3.5" />
                  <span>{isEs ? `Paso ${item.step}` : `Phase ${item.step}`}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Banner */}
        <div className="text-center">
          <button
            type="button"
            onClick={onOpenTourModal}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#FF6B9D] to-[#F0558A] hover:from-[#F0558A] hover:to-[#FF6B9D] rounded-xl shadow-glow-pink hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{isEs ? 'Comenzar Paso 1: Agenda tu Visita' : 'Start Step 1: Book Your Tour'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-neutral-400 mt-2">
            {isEs 
              ? 'Cupos reducidos para mantener alta atención personalizada.' 
              : 'Small group capacity to maintain high individualized care.'}
          </p>
        </div>

      </div>
    </section>
  );
};
export default EnrollmentStepsSection;
