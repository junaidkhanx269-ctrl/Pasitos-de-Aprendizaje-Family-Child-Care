import React, { useState } from 'react';
import { daycareData, Language, ScheduleItem } from '../data/content.ts';
import { Clock, Sun, BookOpen, Utensils, Moon, Compass, Sparkles } from 'lucide-react';

interface ScheduleSectionProps {
  lang: Language;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'learning' | 'meal' | 'outdoor' | 'rest'>('all');
  const t = daycareData[lang].schedule;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'learning':
        return BookOpen;
      case 'meal':
        return Utensils;
      case 'outdoor':
        return Sun;
      case 'rest':
        return Moon;
      default:
        return Compass;
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'learning':
        return { label: lang === 'en' ? 'Bilingual & Montessori' : 'Bilingüe y Montessori', color: 'text-[#3AB0FF] bg-[#E8F6FF] border-[#CCE9FF]' };
      case 'meal':
        return { label: lang === 'en' ? 'Nutritious Dining' : 'Comida Nutritiva', color: 'text-[#E07A5F] bg-[#FBECE8] border-[#F6D5CC]' };
      case 'outdoor':
        return { label: lang === 'en' ? 'Nature & Movement' : 'Naturaleza y Movimiento', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
      case 'rest':
        return { label: lang === 'en' ? 'Rest & Recharge' : 'Descanso y Siesta', color: 'text-indigo-700 bg-indigo-50 border-indigo-200' };
      default:
        return { label: lang === 'en' ? 'Routine & Care' : 'Rutina y Cuidado', color: 'text-[#FF6B9D] bg-[#FFE8F0] border-[#FFD5E5]' };
    }
  };

  const items = t.items as ScheduleItem[];

  const filteredItems = filter === 'all'
    ? items
    : items.filter((item: ScheduleItem) => item.category === filter);

  return (
    <section id="schedule" className="py-16 md:py-24 bg-[#FBF7F0] border-t border-[#EFE5D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3AB0FF] mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D2A26] font-display tracking-tight text-balance mb-4">
            {t.title}
          </h2>
          <p className="text-base text-[#5E554B] leading-relaxed mb-4">
            {t.subtitle}
          </p>
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#E07A5F] px-4 py-1.5 rounded-full bg-[#FBECE8] border border-[#F6D5CC]">
            <Clock className="w-4 h-4" />
            <span>{t.hoursNotice}</span>
          </p>
        </div>

        {/* Interactive Filter Tabs (functional buttons conforming to frontend skill) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { key: 'all', label: lang === 'en' ? 'Full Day (8am–5pm)' : 'Día Completo (8am–5pm)' },
            { key: 'learning', label: lang === 'en' ? 'Learning & Arts' : 'Aprendizaje y Arte' },
            { key: 'meal', label: lang === 'en' ? 'Meals & Snacks' : 'Comidas y Meriendas' },
            { key: 'outdoor', label: lang === 'en' ? 'Outdoor & Play' : 'Al Aire Libre' },
            { key: 'rest', label: lang === 'en' ? 'Rest Time' : 'Siesta y Descanso' },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setFilter(tab.key as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                filter === tab.key
                  ? 'bg-[#2D2A26] text-white shadow-soft'
                  : 'bg-white text-[#5E554B] border border-[#E2D5C3] hover:border-[#3AB0FF] hover:text-[#3AB0FF]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-[#E5D7C5] ml-4 sm:ml-36 pl-6 sm:pl-8 space-y-8">
            {filteredItems.map((item: ScheduleItem, index: number) => {
              const Icon = getCategoryIcon(item.category);
              const badge = getCategoryBadge(item.category);

              return (
                <div key={index} className="relative group">
                  {/* Timeline Dot Indicator */}
                  <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[#FFFBF5] border-2 border-[#3AB0FF] flex items-center justify-center shadow-xs">
                    <div className="w-2 h-2 rounded-full bg-[#FF6B9D]" />
                  </div>

                  {/* Left Desktop Time Badge */}
                  <div className="hidden sm:block absolute -left-36 top-1 w-28 text-right pr-4">
                    <span className="text-xs font-bold text-[#2D2A26] font-display tabular-nums block leading-tight">
                      {item.time.split('–')[0].trim()}
                    </span>
                    <span className="text-[11px] text-[#786E63] font-medium leading-tight">
                      to {item.time.split('–')[1]?.trim() || ''}
                    </span>
                  </div>

                  {/* Mobile Time label */}
                  <div className="sm:hidden text-xs font-bold text-[#3AB0FF] font-display mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.time}</span>
                  </div>

                  {/* Content Box */}
                  <div className="p-5 rounded-2xl bg-white border border-[#EADBCA] shadow-soft group-hover:shadow-card transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-[#F5EFE6] text-[#554C42]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-base font-bold text-[#2D2A26] font-display">
                          {item.title}
                        </h3>
                      </div>
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5C5349] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
export default ScheduleSection;
