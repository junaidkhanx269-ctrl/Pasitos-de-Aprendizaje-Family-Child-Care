import React from 'react';
import { Logo } from './Logo.tsx';
import { daycareData, Language } from '../data/content.ts';
import { MapPin, Phone, Clock, ShieldCheck, Mail, Heart } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenTourModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenTourModal }) => {
  const t = daycareData[lang].footer;
  const business = daycareData.business;

  return (
    <footer className="bg-[#26221E] text-[#D8D1C7] pt-16 pb-12 border-t border-[#3D3730]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#3D3730]">
          
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block bg-white/95 p-3 rounded-2xl shadow-soft">
              <Logo variant="horizontal" size="md" />
            </div>

            <p className="text-xs sm:text-sm text-[#B3AAA0] leading-relaxed max-w-sm">
              {t.aboutText}
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs text-[#9E948A]">
              <span className="text-[#FF6B9D] font-bold">
                {business.owner} · {business.title}
              </span>
              <span className="inline-flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                {business.licenseNumber} · {business.licensingAgency}
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              {t.quickLinks}
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
              <li>
                <a href="#about" className="hover:text-[#FF6B9D] transition-colors">
                  {lang === 'en' ? 'About Elvira' : 'Sobre Elvira'}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#FF6B9D] transition-colors">
                  {lang === 'en' ? 'Educators' : 'Educadoras'}
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-[#FF6B9D] transition-colors">
                  {lang === 'en' ? 'Curriculum' : 'Currículo'}
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-[#FF6B9D] transition-colors">
                  {lang === 'en' ? 'Programs' : 'Programas'}
                </a>
              </li>
              <li>
                <a href="#nutrition" className="hover:text-[#FF6B9D] transition-colors">
                  {lang === 'en' ? 'Nutrition & Meals' : 'Nutrición'}
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-[#FF6B9D] transition-colors">
                  {lang === 'en' ? 'Health & Safety' : 'Seguridad'}
                </a>
              </li>
              <li>
                <a href="#enrollment-steps" className="hover:text-[#FF6B9D] transition-colors">
                  {lang === 'en' ? 'Enrollment Steps' : 'Inscripción'}
                </a>
              </li>
              <li>
                <a href="#tuition" className="hover:text-[#FF6B9D] transition-colors">
                  {lang === 'en' ? 'Tuition & Vouchers' : 'Vouchers EEC'}
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-[#FF6B9D] transition-colors">
                  {lang === 'en' ? 'Daily Schedule' : 'Horario'}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FF6B9D] transition-colors">
                  {lang === 'en' ? 'Photo Journal' : 'Galería'}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FF6B9D] transition-colors">
                  {lang === 'en' ? 'Parent Reviews' : 'Testimonios'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FF6B9D] transition-colors">
                  {lang === 'en' ? 'FAQ' : 'Preguntas'}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#FF6B9D] transition-colors">
                  {lang === 'en' ? 'Location & Map' : 'Ubicación'}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTourModal}
                  className="text-[#3AB0FF] hover:underline font-bold cursor-pointer text-left"
                >
                  {lang === 'en' ? 'Book a Tour' : 'Agendar Visita'}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              {t.contactInfo}
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6B9D] shrink-0 mt-0.5" />
                <span>{business.fullAddress}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#3AB0FF] shrink-0" />
                <a href={`tel:${business.phoneClean}`} className="hover:text-[#3AB0FF] font-semibold">
                  {business.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F4B841] shrink-0" />
                <span>{business.hours} ({business.days})</span>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{business.licenseNumber} (EEC Licensed) · Subsidies Accepted</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={onOpenTourModal}
                className="px-4 py-2 text-xs font-bold text-white bg-[#FF6B9D] hover:bg-[#F0558A] rounded-xl transition-all cursor-pointer shadow-glow-pink"
              >
                {lang === 'en' ? 'Schedule Tour & Enroll' : 'Inscribir o Agendar Visita'}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8177]">
          <p>© {new Date().getFullYear()} {business.name}. {t.rights}</p>
          <div className="flex items-center gap-2">
            <span>{t.bilingualNote}</span>
            <span aria-hidden="true" className="text-[#554D43]">·</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-[#FF6B9D] fill-current" /> in Dorchester, MA
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
