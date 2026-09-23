import React from 'react';
import { daycareData, Language } from '../data/content.ts';
import { Calendar, Phone, ShieldCheck, Sparkles, Heart, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenTourModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenTourModal }) => {
  const t = daycareData[lang].hero;
  const business = daycareData.business;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Subtle organic background ambient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#FFE8F0]/40 via-[#E8F6FF]/30 to-transparent blur-3xl opacity-70" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-[#3AB0FF]/5 blur-3xl" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-[#FF6B9D]/5 blur-3xl" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Clean unboxed kicker with metadata separator */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#665D52] mb-4">
              <span className="inline-flex items-center gap-1.5 text-[#3AB0FF] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#3AB0FF]" />
                EEC Licensed MA #9144837
              </span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>Dorchester, Boston MA</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span className="text-[#E07A5F] font-semibold">Infants to 5 Years</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#2D2A26] leading-[1.12] tracking-tight font-display text-balance mb-5">
              {t.titleStart}{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B9D] via-[#E07A5F] to-[#3AB0FF]">
                {t.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5A524A] font-normal leading-relaxed max-w-2xl mb-8">
              {t.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                type="button"
                onClick={onOpenTourModal}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-white bg-gradient-to-r from-[#FF6B9D] to-[#F0558A] hover:from-[#F0558A] hover:to-[#FF6B9D] rounded-2xl shadow-glow-pink hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <Calendar className="w-5 h-5" />
                <span>{t.ctaTour}</span>
              </button>

              <a
                href={`tel:${business.phoneClean}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-[#2D2A26] bg-white hover:bg-[#F9F5EE] border border-[#E2D5C3] rounded-2xl shadow-soft hover:shadow-md transition-all text-center"
              >
                <Phone className="w-5 h-5 text-[#3AB0FF]" />
                <span>{business.phone}</span>
              </a>
            </div>

            {/* Key trust bullets (Clean, zero-pill text) */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#4E473F] font-medium pt-2 border-t border-[#EDE1D1] w-full">
              <div className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dual English & Spanish Immersion</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Child Care Vouchers / Subsidies Accepted</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Private Driveway Drop-off</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero High-Fidelity Montessori Image with Natural Frame */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient backing card */}
            <div className="relative rounded-[28px] p-2 sm:p-3 bg-white/80 border border-[#E8DEC8] shadow-card">
              
              {/* Primary Visual Container */}
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-[#F2EDE4]">
                <img
                  src="/assets/images/hero_daycare_montessori_1790173657765.jpg"
                  alt="Happy diverse children playing with wooden Montessori blocks in warm home daycare setting"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 sm:p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#FFE8F0] flex items-center justify-center text-[#FF6B9D] shrink-0">
                      <Heart className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#2D2A26] leading-tight">
                        {lang === 'en' ? 'Montessori Learning & Care' : 'Cuidado y Pedagogía Montessori'}
                      </p>
                      <p className="text-[11px] text-[#71675B] leading-tight">
                        {lang === 'en' ? 'Small groups · 4 Norfolk Terrace' : 'Grupos reducidos · 4 Norfolk Terrace'}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#3AB0FF] bg-[#E8F6FF] px-2.5 py-1 rounded-lg shrink-0">
                    Ages 0–5
                  </span>
                </div>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -top-3 right-2 sm:-right-4 px-3 py-1.5 rounded-xl bg-white shadow-soft border border-[#E5D9C7] flex items-center gap-1.5 sm:gap-2">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F4B841]" />
                <span className="text-[11px] sm:text-xs font-bold text-[#2D2A26]">
                  {lang === 'en' ? 'Accepts EEC Subsidies' : 'Aceptamos Vouchers EEC'}
                </span>
              </div>

            </div>

            {/* Quick stats ribbon beneath photo */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 text-center">
              {t.stats.map((stat, idx) => (
                <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-white/70 border border-[#EFE5D6]">
                  <p className="text-base sm:text-lg font-extrabold text-[#2D2A26] font-display tabular-nums leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-[#7A7065] leading-tight mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
