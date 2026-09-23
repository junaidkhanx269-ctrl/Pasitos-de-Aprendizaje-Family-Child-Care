import React from 'react';
import { daycareData, Language, ProgramItem } from '../data/content.ts';
import { Sparkles, Check, Baby, Footprints, GraduationCap, ArrowRight } from 'lucide-react';

interface ProgramsSectionProps {
  lang: Language;
  onSelectProgram: (programId: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  lang,
  onSelectProgram
}) => {
  const t = daycareData[lang].programs;

  const getProgramIcon = (id: string) => {
    switch (id) {
      case 'infants':
        return Baby;
      case 'toddlers':
        return Footprints;
      case 'preschool':
      default:
        return GraduationCap;
    }
  };

  const getProgramTheme = (id: string) => {
    switch (id) {
      case 'infants':
        return {
          headerBg: 'bg-[#FFE8F0]',
          accentText: 'text-[#FF6B9D]',
          borderColor: 'border-[#FFD5E5]',
          buttonBg: 'bg-[#FF6B9D] hover:bg-[#F0558A]'
        };
      case 'toddlers':
        return {
          headerBg: 'bg-[#E8F6FF]',
          accentText: 'text-[#3AB0FF]',
          borderColor: 'border-[#CCE9FF]',
          buttonBg: 'bg-[#3AB0FF] hover:bg-[#2299EC]'
        };
      case 'preschool':
      default:
        return {
          headerBg: 'bg-[#FBECE8]',
          accentText: 'text-[#E07A5F]',
          borderColor: 'border-[#F6D5CC]',
          buttonBg: 'bg-[#E07A5F] hover:bg-[#D0694E]'
        };
    }
  };

  return (
    <section id="programs" className="py-16 md:py-24 bg-[#FBF7F0] border-t border-[#EFE5D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3AB0FF] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D2A26] font-display tracking-tight text-balance mb-4">
            {t.title}
          </h2>
          <p className="text-base text-[#5E554B] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {t.items.map((program: ProgramItem) => {
            const Icon = getProgramIcon(program.id);
            const theme = getProgramTheme(program.id);

            return (
              <div
                key={program.id}
                className="flex flex-col justify-between rounded-[24px] bg-white border border-[#E8DEC8] p-7 shadow-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${theme.headerBg} ${theme.accentText}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full border bg-white border-[#E2D5C3] text-[#5A5147]">
                      {program.ageRange}
                    </span>
                  </div>

                  {/* Title & Ratio */}
                  <h3 className="text-xl font-bold text-[#2D2A26] font-display mb-1">
                    {program.title}
                  </h3>
                  <p className={`text-xs font-bold tracking-wide uppercase ${theme.accentText} mb-4`}>
                    {program.ratio}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#554C42] leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2.5 pt-4 border-t border-[#F2EAE0] mb-6">
                    {program.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-medium text-[#3D3730]">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectProgram(program.id)}
                    className={`w-full py-3 px-4 rounded-xl text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-soft ${theme.buttonBg}`}
                  >
                    <span>
                      {lang === 'en' ? `Inquire for ${program.ageRange}` : `Consultar para ${program.ageRange}`}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small note about Subsidies */}
        <div className="mt-10 text-center text-xs text-[#786E63] font-medium">
          {lang === 'en'
            ? '★ All programs accept EEC State Child Care Subsidies & Vouchers. Nutritious home-prepared meals included.'
            : '★ Todos los programas aceptan Vouchers y Subsidios de Cuidado Infantil del Estado (EEC). Incluye comidas caseras saludables.'}
        </div>

      </div>
    </section>
  );
};
export default ProgramsSection;
