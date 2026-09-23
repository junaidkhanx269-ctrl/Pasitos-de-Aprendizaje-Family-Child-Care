import React from 'react';
import { daycareData, Language } from '../data/content.ts';
import { ShieldCheck, Languages, Award, HeartHandshake, Car } from 'lucide-react';

interface TrustBarProps {
  lang: Language;
}

export const TrustBar: React.FC<TrustBarProps> = ({ lang }) => {
  const t = daycareData[lang].trustBar;

  const trustItems = [
    {
      icon: ShieldCheck,
      title: lang === 'en' ? 'MA EEC Licensed' : 'Licencia Oficial EEC',
      subtitle: 'MA #9144837',
      color: 'text-[#3AB0FF] bg-[#E8F6FF]'
    },
    {
      icon: Languages,
      title: lang === 'en' ? 'Bilingual Immersion' : 'Inmersión Bilingüe',
      subtitle: lang === 'en' ? 'English & Spanish' : 'Inglés y Español',
      color: 'text-[#FF6B9D] bg-[#FFE8F0]'
    },
    {
      icon: Award,
      title: lang === 'en' ? 'CDA & CPR Certified' : 'Educadora Certificada',
      subtitle: lang === 'en' ? 'Child Development Associate' : 'Credencial CDA y Primeros Auxilios',
      color: 'text-[#E07A5F] bg-[#FBECE8]'
    },
    {
      icon: HeartHandshake,
      title: lang === 'en' ? 'Vouchers Accepted' : 'Aceptamos Vouchers',
      subtitle: lang === 'en' ? 'Child Care Subsidies' : 'Subsidios de MA',
      color: 'text-emerald-700 bg-emerald-50'
    },
    {
      icon: Car,
      title: lang === 'en' ? 'Private Driveway' : 'Driveway Privado',
      subtitle: lang === 'en' ? 'Easy safe drop-off' : 'Parqueo seguro sin estrés',
      color: 'text-amber-700 bg-amber-50'
    }
  ];

  return (
    <section className="py-6 border-y border-[#EFE5D6] bg-white/70 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4 lg:gap-5">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#FFFBF5]/90 border border-[#ECE0D0]/80 hover:border-[#DFCEB8] transition-colors"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-bold text-[#2D2A26] leading-tight">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-[#786E63] font-medium leading-tight mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default TrustBar;
