import React from 'react';
import { daycareData, Language } from '../data/content.ts';
import { ShieldCheck, Lock, HeartPulse, Sparkles, Wind, Award, PhoneCall } from 'lucide-react';

interface SafetySectionProps {
  lang: Language;
  onOpenTourModal: () => void;
}

export const SafetySection: React.FC<SafetySectionProps> = ({ lang, onOpenTourModal }) => {
  const content = daycareData[lang];
  const t = content.safety;
  const business = daycareData.business;
  const isEs = lang === 'es';

  const icons = [
    Award,
    HeartPulse,
    ShieldCheck,
    Lock,
    Sparkles,
    Wind
  ];

  return (
    <section id="safety" className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-[#EFE5D6]">
      {/* Background subtle radial accents */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl -translate-y-1/2" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#2299EC] text-xs font-bold tracking-wide uppercase mb-3.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2D2A26] font-display tracking-tight text-balance mb-4">
            {t.title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#5E554B] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Core Safety Protocols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.protocols.map((protocol, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#FFFBF5] border border-[#EAE0D2] shadow-soft hover:border-[#3AB0FF]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E8DEC8] text-[#3AB0FF] flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-6 h-6 text-[#3AB0FF]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#2D2A26] mb-2 font-display">
                    {protocol.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665D52] leading-relaxed">
                    {protocol.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EFE5D6] flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span>{isEs ? 'Verificado EEC' : 'EEC Compliant'}</span>
                  <span className="text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {isEs ? 'Activo' : 'Active'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Certification Card with Emergency Call Out */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-[#1F2937] text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>{business.licenseNumber} · Massachusetts EEC</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-display">
              {isEs ? '¿Preguntas sobre protocolos de salud o visitas?' : 'Have specific questions about health protocols or tours?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {isEs 
                ? 'Elvira Castillo está siempre disponible para responder todas tus dudas con transparencia y honestidad.'
                : 'Lead educator Elvira Castillo is always happy to walk you through our safety routines and parent communication apps.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${business.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-colors border border-white/20"
            >
              <PhoneCall className="w-4 h-4 text-[#3AB0FF]" />
              <span>{business.phone}</span>
            </a>

            <button
              type="button"
              onClick={onOpenTourModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6B9D] to-[#F0558A] hover:from-[#F0558A] hover:to-[#FF6B9D] text-white font-bold text-xs sm:text-sm shadow-glow-pink transition-transform transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{isEs ? 'Ver Nuestras Instalaciones' : 'Tour Our Facility in Person'}</span>
              <span>→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
export default SafetySection;
