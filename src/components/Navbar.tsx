import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { daycareData, Language } from '../data/content.ts';
import { Phone, Calendar, Menu, X, Globe, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenTourModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenTourModal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = daycareData[lang].nav;
  const business = daycareData.business;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isEs = lang === 'es';

  const navLinks = [
    { href: "#about", label: isEs ? "Sobre Nosotras" : "About" },
    { href: "#team", label: isEs ? "Educadoras" : "Educators" },
    { href: "#curriculum", label: isEs ? "Plan Curricular" : "Curriculum" },
    { href: "#programs", label: isEs ? "Programas" : "Programs" },
    { href: "#nutrition", label: isEs ? "Comidas y Nutrición" : "Meals & Nutrition" },
    { href: "#safety", label: isEs ? "Salud y Seguridad" : "Health & Safety" },
    { href: "#schedule", label: isEs ? "Horario" : "Schedule" },
    { href: "#enrollment-steps", label: isEs ? "Inscripción" : "Enrollment" },
    { href: "#tuition", label: isEs ? "Vouchers y Matrícula" : "Tuition & Vouchers" },
    { href: "#gallery", label: isEs ? "Fotos" : "Gallery" },
    { href: "#reviews", label: isEs ? "Testimonios" : "Reviews" },
    { href: "#faq", label: isEs ? "Preguntas" : "FAQ" },
    { href: "#location", label: isEs ? "Ubicación" : "Location" },
  ];

  // Primary links visible on desktop header
  const desktopNavLinks = [
    { href: "#about", label: isEs ? "Nosotras" : "About" },
    { href: "#team", label: isEs ? "Educadoras" : "Educators" },
    { href: "#curriculum", label: isEs ? "Currículo" : "Curriculum" },
    { href: "#programs", label: isEs ? "Programas" : "Programs" },
    { href: "#nutrition", label: isEs ? "Nutrición" : "Nutrition" },
    { href: "#safety", label: isEs ? "Seguridad" : "Safety" },
    { href: "#tuition", label: isEs ? "Vouchers" : "Vouchers" },
    { href: "#reviews", label: isEs ? "Opiniones" : "Reviews" },
    { href: "#faq", label: isEs ? "FAQ" : "FAQ" },
    { href: "#location", label: isEs ? "Ubicación" : "Location" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full overflow-hidden ${
          scrolled
            ? 'glass-nav border-b border-[#E8DCC9]/80 shadow-sm py-2 sm:py-2.5'
            : 'bg-[#FFFBF5]/95 border-b border-[#EFE5D6]/60 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Zone 1: Brand Wordmark / Exact Logo */}
            <a
              href="#"
              className="flex items-center gap-1.5 sm:gap-2 group transition-opacity hover:opacity-95 min-w-0 shrink"
              aria-label="Pasitos de Aprendizaje Home"
            >
              <Logo variant="horizontal" size="sm" className="sm:hidden" />
              <Logo variant="horizontal" size="md" className="hidden sm:inline-flex" />
            </a>

            {/* Zone 2: Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-6 text-xs 2xl:text-sm font-semibold text-[#4A453E]">
              {desktopNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#FF6B9D] transition-colors py-1 relative whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B9D] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Actions (Language toggle, Phone, Tour CTA, Hamburger) */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              
              {/* Language Switcher */}
              <button
                type="button"
                onClick={onToggleLang}
                className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-bold rounded-full border border-[#DFD3C3] bg-white text-[#4A453E] hover:border-[#3AB0FF] hover:text-[#3AB0FF] transition-all cursor-pointer shadow-2xs"
                title={lang === 'en' ? "Cambiar a Español" : "Switch to English"}
                aria-label="Toggle language"
              >
                <Globe className="w-3.5 h-3.5 text-[#3AB0FF]" />
                <span>{lang === 'en' ? 'ES' : 'EN'}</span>
                <span className="hidden sm:inline text-[10px] text-neutral-400 font-normal">
                  ({lang === 'en' ? 'Español' : 'English'})
                </span>
              </button>

              {/* Direct Phone Call */}
              <a
                href={`tel:${business.phoneClean}`}
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#2D2A26] rounded-xl hover:bg-[#F3ECE0] transition-colors"
                title="Call Elvira directly"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF6B9D]" />
                <span className="whitespace-nowrap font-display tracking-tight">{business.phone}</span>
              </a>

              {/* Schedule Tour Button - Compact on small tablet, hidden on small phone */}
              <button
                type="button"
                onClick={onOpenTourModal}
                className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF6B9D] to-[#F0558A] hover:from-[#F0558A] hover:to-[#FF6B9D] rounded-xl shadow-glow-pink hover:shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.scheduleTour}</span>
              </button>

              {/* Mobile menu hamburger button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl text-[#4A453E] hover:bg-[#F3ECE0] transition-colors cursor-pointer"
                aria-label="Open mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden bg-black/40 backdrop-blur-xs flex justify-end">
          <div className="w-4/5 max-w-sm bg-[#FFFBF5] h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E8DCC9]">
                <Logo variant="horizontal" size="sm" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-neutral-500 hover:bg-[#F3ECE0]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between p-2.5 rounded-xl bg-[#F7F0E4]">
                <span className="text-xs font-semibold text-[#5A524A]">
                  {lang === 'en' ? 'Language / Idioma' : 'Idioma / Language'}
                </span>
                <button
                  type="button"
                  onClick={onToggleLang}
                  className="px-3 py-1 text-xs font-bold rounded-lg bg-white shadow-2xs text-[#3AB0FF] border border-[#E0D5C5]"
                >
                  {lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-base font-semibold text-[#2D2A26] hover:bg-[#F3ECE0] hover:text-[#FF6B9D] rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E8DCC9] space-y-3">
              <a
                href={`tel:${business.phoneClean}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#3AB0FF] text-[#2299EC] font-bold text-sm bg-white"
              >
                <Phone className="w-4 h-4 text-[#3AB0FF]" />
                <span>(857) 308-9764</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTourModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-[#FF6B9D] to-[#F0558A] shadow-glow-pink"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.scheduleTour}</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#7A7065] pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>MA EEC License #9144837</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
