import React from 'react';
import { daycareData, Language } from '../data/content.ts';
import { 
  Languages, 
  Home, 
  BookOpen, 
  Car, 
  TreePine, 
  HeartHandshake, 
  Sparkles 
} from 'lucide-react';

interface FeaturesSectionProps {
  lang: Language;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ lang }) => {
  const t = daycareData[lang].features;

  const iconMap: Record<string, { icon: React.ElementType; color: string }> = {
    'bilingual': { icon: Languages, color: 'text-[#3AB0FF] bg-[#E8F6FF]' },
    'home-like': { icon: Home, color: 'text-[#FF6B9D] bg-[#FFE8F0]' },
    'reading-nook': { icon: BookOpen, color: 'text-[#E07A5F] bg-[#FBECE8]' },
    'parking-gate': { icon: Car, color: 'text-amber-700 bg-amber-50' },
    'parks-school': { icon: TreePine, color: 'text-emerald-700 bg-emerald-50' },
    'subsidy': { icon: HeartHandshake, color: 'text-purple-700 bg-purple-50' },
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-[#FFFBF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6B9D] mb-2">
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

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {t.items.map((feature) => {
            const config = iconMap[feature.id] || { icon: Sparkles, color: 'text-[#3AB0FF] bg-[#E8F6FF]' };
            const Icon = config.icon;

            return (
              <div
                key={feature.id}
                className="rounded-[24px] bg-white border border-[#EADBCA] p-7 shadow-soft hover:shadow-card hover:border-[#DFCFBA] transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${config.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-[#71675B] tracking-wide uppercase">
                    {feature.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#2D2A26] font-display mb-2 group-hover:text-[#FF6B9D] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-[#5C5349] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Location & Safety Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-[24px] bg-gradient-to-r from-[#FFF0F5] via-[#FFFBF5] to-[#F0F8FF] border border-[#EADCC9] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center text-[#3AB0FF] shrink-0">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#2D2A26]">
                {lang === 'en' ? 'Private Driveway on 4 Norfolk Terrace' : 'Driveway Privado en 4 Norfolk Terrace'}
              </h4>
              <p className="text-xs sm:text-sm text-[#665D52]">
                {lang === 'en'
                  ? 'Safe, easy drive-in drop-off and pickup. No circling for street parking or double parking.'
                  : 'Parqueo privado para dejar y recoger a tus pequeños sin estrés ni riesgo en la calle.'}
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <a
              href="#location"
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white text-[#2D2A26] border border-[#D9CCB8] hover:bg-[#F9F5EE] transition-colors shadow-2xs inline-block"
            >
              {lang === 'en' ? 'View Map & Directions' : 'Ver Mapa y Dirección'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
export default FeaturesSection;
