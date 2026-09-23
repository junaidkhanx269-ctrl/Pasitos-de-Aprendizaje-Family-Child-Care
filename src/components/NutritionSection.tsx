import React, { useState } from 'react';
import { daycareData, Language } from '../data/content.ts';
import { Apple, Utensils, CheckCircle2, ShieldAlert, Sparkles, Heart, Clock } from 'lucide-react';

interface NutritionSectionProps {
  lang: Language;
  onOpenTourModal: () => void;
}

export const NutritionSection: React.FC<NutritionSectionProps> = ({ lang, onOpenTourModal }) => {
  const content = daycareData[lang];
  const t = content.nutrition;
  const isEs = lang === 'es';

  const [activeDayIndex, setActiveDayIndex] = useState<number>(0);

  return (
    <section id="nutrition" className="py-16 md:py-24 bg-[#FFFBF5] relative overflow-hidden border-t border-[#EFE5D6]">
      {/* Ambient background blur */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-16 -right-16 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-rose-100/40 blur-3xl" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-wide uppercase mb-3.5">
            <Utensils className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2D2A26] font-display tracking-tight text-balance mb-4">
            {t.title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#5E554B] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Nutrition Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {t.highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EAE0D2] shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center font-bold mb-4">
                  {idx === 0 && <Utensils className="w-5 h-5" />}
                  {idx === 1 && <Apple className="w-5 h-5" />}
                  {idx === 2 && <ShieldAlert className="w-5 h-5" />}
                  {idx === 3 && <Heart className="w-5 h-5" />}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#2D2A26] mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#665D52] leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{isEs ? '100% Garantizado' : 'Standard Routine'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Sample Weekly Menu Card */}
        <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-[#E8DEC8] shadow-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#EFE5D6]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B9D]">
                {isEs ? 'Menú Semanal Típico' : 'Sample Weekly Meal Rotation'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#2D2A26] mt-1 font-display">
                {isEs ? 'Variedad Nutritiva para Cada Día' : 'Fresh Daily Cooking Schedule'}
              </h3>
            </div>
            
            {/* Quick Allergy note */}
            <div className="flex items-center gap-2 text-xs text-[#71675B] bg-[#FFFBF5] px-3.5 py-2 rounded-xl border border-[#E8DEC8]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{isEs ? 'Instalación 100% libre de cacahuates y nueces' : '100% Peanut-Free & Nut-Free Environment'}</span>
            </div>
          </div>

          {/* Day Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
            {t.sampleMenu.map((dayItem, index) => {
              const isSelected = activeDayIndex === index;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveDayIndex(index)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-[#3AB0FF] text-white shadow-sm'
                      : 'bg-[#FFFBF5] text-[#554D44] hover:bg-[#F4ECE0]'
                  }`}
                >
                  {dayItem.day}
                </button>
              );
            })}
          </div>

          {/* Active Day Detail Display */}
          {t.sampleMenu[activeDayIndex] && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 bg-[#FFFBF5] p-5 sm:p-6 rounded-2xl border border-[#EAE0D2]">
              
              {/* Morning Breakfast/Snack */}
              <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#EFE5D6]">
                <div className="flex items-center gap-2 text-[#3AB0FF] text-xs font-bold uppercase mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{isEs ? '8:30 AM · Merienda Matutina' : '8:30 AM · Morning Snack'}</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-[#2D2A26]">
                  {t.sampleMenu[activeDayIndex].morning}
                </p>
                <p className="text-xs text-[#786E63] mt-2">
                  {isEs ? 'Energía limpia para iniciar la jornada Montessori' : 'Gentle morning whole grains and vitamins'}
                </p>
              </div>

              {/* Hot Lunch */}
              <div className="bg-white p-4 sm:p-5 rounded-xl border-2 border-emerald-200/80 shadow-xs relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">
                  {isEs ? 'Almuerzo Caliente' : 'Hot Lunch'}
                </div>
                <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase mb-2">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>{isEs ? '12:15 PM · Almuerzo Casero' : '12:15 PM · Warm Home-Cooked Meal'}</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-[#2D2A26]">
                  {t.sampleMenu[activeDayIndex].lunch}
                </p>
                <p className="text-xs text-[#786E63] mt-2">
                  {isEs ? 'Cuidado en porciones, verduras frescas y proteínas' : 'Nutrient-rich balanced meal served family-style'}
                </p>
              </div>

              {/* Afternoon Snack */}
              <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#EFE5D6]">
                <div className="flex items-center gap-2 text-[#FF6B9D] text-xs font-bold uppercase mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{isEs ? '3:15 PM · Merienda de la Tarde' : '3:15 PM · Afternoon Snack'}</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-[#2D2A26]">
                  {t.sampleMenu[activeDayIndex].snack}
                </p>
                <p className="text-xs text-[#786E63] mt-2">
                  {isEs ? 'Fruta fresca de temporada y proteínas ligeras' : 'Re-energizing snack post naptime with fresh fruit'}
                </p>
              </div>

            </div>
          )}

          {/* Bottom Trust Action */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#665D52]">
            <p>
              {isEs 
                ? '¿Tu niño tiene requerimientos alimenticios específicos o intolerancias? Lo adaptamos con amor.' 
                : 'Does your child have specific food intolerances or dietary requirements? We gladly accommodate.'}
            </p>
            <button
              type="button"
              onClick={onOpenTourModal}
              className="text-[#3AB0FF] hover:text-[#2299EC] font-bold inline-flex items-center gap-1 cursor-pointer shrink-0"
            >
              <span>{isEs ? 'Consultar con Elvira' : 'Ask Elvira about dietary accommodations'}</span>
              <span>→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
export default NutritionSection;
