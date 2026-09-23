import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { daycareData, Language } from '../data/content.ts';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const business = daycareData.business;
  const whatsappUrl = lang === 'en' ? business.whatsappLink : business.whatsappLinkEs;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      
      {/* Tooltip / Prompt tag on desktop */}
      <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-[#E0D5C5] shadow-lg text-[11px] font-bold text-[#2D2A26] animate-bounce">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <span>{lang === 'en' ? 'Chat with Elvira on WhatsApp' : 'Pregúntale a Elvira por WhatsApp'}</span>
      </div>

      <div className="flex items-center gap-2">
        {/* Quick Call Button on mobile */}
        <a
          href={`tel:${business.phoneClean}`}
          className="sm:hidden w-12 h-12 rounded-full bg-white text-[#3AB0FF] border border-[#CCE9FF] shadow-lg flex items-center justify-center transition-transform active:scale-95"
          aria-label="Call Daycare Directly"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Primary WhatsApp Floating Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          {/* Subtle pulse radar ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
          
          <MessageSquare className="w-7 h-7 relative z-10 fill-current" />
        </a>
      </div>
    </div>
  );
};
export default FloatingWhatsApp;
