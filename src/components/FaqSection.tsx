import React, { useState } from 'react';
import { daycareData, Language } from '../data/content.ts';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Phone } from 'lucide-react';

interface FaqSectionProps {
  lang: Language;
  onOpenTourModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang, onOpenTourModal }) => {
  const content = daycareData[lang];
  const t = content.faq;
  const business = daycareData.business;
  const isEs = lang === 'es';

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappLink = isEs ? business.whatsappLinkEs : business.whatsappLink;

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FFFBF5] relative overflow-hidden border-t border-[#EFE5D6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold tracking-wide uppercase mb-3.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2D2A26] font-display tracking-tight text-balance mb-4">
            {t.title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#5E554B] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-3 sm:space-y-4 mb-12">
          {t.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#3AB0FF]/40 shadow-soft'
                    : 'bg-white/80 border-[#EAE0D2] hover:border-[#DFD3C3]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#2D2A26] font-display">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#3AB0FF] text-white' : 'bg-[#F2ECE0] text-[#786E63]'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-[#5E554B] leading-relaxed border-t border-slate-100 mt-1">
                    <p className="pt-3">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="rounded-3xl p-6 sm:p-8 bg-white border border-[#E8DEC8] shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#2D2A26] font-display">
              {isEs ? '¿Tienes otra pregunta sobre tu pequeño?' : 'Have a unique question not listed here?'}
            </h3>
            <p className="text-xs sm:text-sm text-[#7A7065] mt-1">
              {isEs 
                ? 'Elvira Castillo responde personalmente tus mensajes por teléfono o WhatsApp.'
                : 'Elvira Castillo personally answers family inquiries daily.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${business.phoneClean}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#DFD3C3] text-xs font-bold text-[#2D2A26] hover:bg-[#F3ECE0] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#3AB0FF]" />
              <span>(857) 308-9764</span>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-xs hover:bg-[#20BE5C] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
export default FaqSection;
