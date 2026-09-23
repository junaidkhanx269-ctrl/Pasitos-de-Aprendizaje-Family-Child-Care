import React from 'react';
import { daycareData, Language, TestimonialItem } from '../data/content.ts';
import { Star, MessageSquareQuote, ShieldCheck, Heart } from 'lucide-react';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  const t = daycareData[lang].testimonials;

  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#FBF7F0] border-t border-[#EFE5D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E07A5F] mb-2">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D2A26] font-display tracking-tight text-balance mb-4">
            {t.title}
          </h2>
          <p className="text-base text-[#5E554B] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Real Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((item: TestimonialItem, idx: number) => (
            <div
              key={idx}
              className="rounded-[24px] bg-white border border-[#E8DEC8] p-7 shadow-card flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-[#FF6B9D]/40" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-[#4E463D] leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Context */}
              <div className="pt-4 border-t border-[#F2EAE0]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#2D2A26] font-display">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#3AB0FF] font-semibold">
                      {item.child}
                    </p>
                    <p className="text-[11px] text-[#7A7065] mt-0.5">
                      {item.neighborhood}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Verified Parent' : 'Padre Verificado'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google & Community Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-[#E0D5C5] shadow-soft">
            <div className="flex items-center gap-1 text-[#F59E0B]">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#2D2A26]">
              5.0 / 5.0 Rating
            </span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span className="text-xs sm:text-sm text-[#665D52]">
              {lang === 'en' ? 'Serving Dorchester & Boston Since 2018' : 'Sirviendo a Dorchester y Boston'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
export default TestimonialsSection;
