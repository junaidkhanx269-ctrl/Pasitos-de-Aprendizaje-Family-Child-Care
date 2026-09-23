import React from 'react';
import { daycareData, Language } from '../data/content.ts';
import { ShieldCheck, Award, Heart, CheckCircle2, BookOpen, Quote } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
  onOpenTourModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onOpenTourModal }) => {
  const t = daycareData[lang].about;
  const business = daycareData.business;

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FFFBF5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6B9D] mb-2">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D2A26] font-display tracking-tight text-balance">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo of Elvira in Reading Sanctuary */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[28px] p-3 bg-white border border-[#EADBCA] shadow-card">
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/3] bg-[#F2EDE4]">
                <img
                  src="/src/assets/images/about_elvira_educator_1790173674805.jpg"
                  alt="Elvira Castillo, Director & Lead Educator at Pasitos de Aprendizaje Family Child Care"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Verified Credentials Floating Tag */}
              <div className="mt-3 p-3.5 rounded-xl bg-[#FFFBF5] border border-[#E8DEC8] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FFE8F0] flex items-center justify-center text-[#FF6B9D] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2D2A26] leading-tight">
                      Elvira Castillo, CDA
                    </h4>
                    <p className="text-[11px] text-[#71675B] leading-tight">
                      {lang === 'en' ? 'Owner & Lead Educator' : 'Directora y Educadora Principal'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    <ShieldCheck className="w-3 h-3" />
                    EEC #{business.licenseNumber.replace('MA #', '')}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Experience Badge */}
            <div className="mt-4 p-4 rounded-2xl bg-white border border-[#EDE1D1] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#E8F6FF] flex items-center justify-center text-[#3AB0FF] shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <p className="text-xs text-[#5A524A] leading-relaxed">
                <strong className="text-[#2D2A26] block font-bold">
                  {lang === 'en' ? 'Montessori-Inspired Nurturing' : 'Inspiración Montessori Cálida'}
                </strong>
                {lang === 'en'
                  ? 'Fostering natural self-reliance, bilingual vocabulary, and gentle routines.'
                  : 'Fomentando autonomía natural, vocabulario bilingüe y hábitos armoniosos.'}
              </p>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="space-y-4 text-base text-[#4F473E] leading-relaxed">
              <p>{t.storyP1}</p>
              <p>{t.storyP2}</p>
              <p>{t.storyP3}</p>
            </div>

            {/* Pull Quote Box */}
            <div className="my-6 p-5 rounded-2xl bg-[#FFF5F8] border border-[#FFD9E6] relative">
              <Quote className="w-7 h-7 text-[#FF6B9D]/30 absolute top-3 right-4 pointer-events-none" />
              <p className="text-sm sm:text-base italic text-[#2D2A26] font-medium leading-relaxed mb-3">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#FF6B9D]">{t.quoteAuthor}</span>
                <span aria-hidden="true" className="text-neutral-300">·</span>
                <span className="text-xs text-[#71675B]">{t.quoteRole}</span>
              </div>
            </div>

            {/* Checkmark Highlights */}
            <div className="space-y-2.5 mb-8">
              {t.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3AB0FF] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-[#3D3730]">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA action */}
            <div>
              <button
                type="button"
                onClick={onOpenTourModal}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#3AB0FF] hover:bg-[#2299EC] rounded-xl shadow-glow-blue transition-all cursor-pointer"
              >
                <span>{lang === 'en' ? 'Meet Elvira & Tour Our Home' : 'Conoce a Elvira y Visita Nuestro Hogar'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default AboutSection;
