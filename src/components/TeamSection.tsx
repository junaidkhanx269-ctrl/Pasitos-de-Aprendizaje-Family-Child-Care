import React, { useState } from 'react';
import { daycareData, Language } from '../data/content';
import { Award, ShieldCheck, Heart, Sparkles, CheckCircle2, Calendar, Phone } from 'lucide-react';

interface TeamSectionProps {
  lang: Language;
  onOpenTourModal: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ lang, onOpenTourModal }) => {
  const content = daycareData[lang];
  const t = content.team;
  const isEs = lang === 'es';

  const [activeTab, setActiveTab] = useState<'both' | 'director' | 'assistant'>('both');

  return (
    <section id="team" className="py-20 lg:py-28 bg-[#FFFBF5] relative overflow-hidden border-t border-[#3AB0FF]/10">
      {/* Soft warm background decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-sm font-semibold tracking-wide uppercase mb-4 shadow-sm">
            <Heart className="w-4 h-4 text-pink-500 fill-pink-400" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 tracking-tight mb-5">
            {t.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>

          {/* Dual educator banner pill */}
          <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-[#3AB0FF]/30 shadow-sm text-sm text-slate-700">
            <ShieldCheck className="w-5 h-5 text-[#3AB0FF] shrink-0" />
            <span className="font-medium text-slate-800">{t.ratioNotice}</span>
          </div>
        </div>

        {/* Educator Cards Grid - Inspired directly by the "Quién soy" cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Elvira Castillo - Directora & Lead Educator */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-[0_15px_40px_rgba(255,107,157,0.08)] relative flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            {/* Paperclip graphic in top corner */}
            <div className="absolute -top-3 right-8 w-6 h-12 border-2 border-slate-400 rounded-full bg-slate-100/40 shadow-sm rotate-12 pointer-events-none flex items-center justify-center">
              <div className="w-3 h-8 border-2 border-slate-400 rounded-full" />
            </div>

            <div>
              {/* Calligraphy header style */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif italic text-3xl sm:text-4xl text-slate-700 font-bold tracking-tight">
                  {t.director.headerScript}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-pink-50 text-pink-600 border border-pink-200">
                  {isEs ? 'Educadora Principal' : 'Lead Educator & Director'}
                </span>
              </div>

              {/* Photo & Identity presentation */}
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
                <div className="relative shrink-0 group">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl p-1.5 bg-gradient-to-tr from-pink-400 via-sky-300 to-amber-300 shadow-md">
                    <img
                      src={t.director.image}
                      alt={`${t.director.name} - ${t.director.role} at Pasitos de Aprendizaje Family Child Care`}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-pink-500 text-white p-1.5 rounded-full shadow-md">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                    {t.director.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#3AB0FF] mt-0.5">
                    {t.director.role}
                  </p>
                  <p className="text-xs font-medium text-slate-500 mt-1 inline-block px-2.5 py-1 bg-slate-50 rounded-lg border border-slate-200/70">
                    {t.director.roleDetail}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5 justify-center sm:justify-start">
                    <span className="inline-flex items-center text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      EEC MA #9144837
                    </span>
                    <span className="inline-flex items-center text-[11px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                      CDA Credentialed
                    </span>
                  </div>
                </div>
              </div>

              {/* Authentic Quote block directly from the physical card */}
              <div className="bg-[#FFFBF5] rounded-2xl p-5 border border-pink-100/80 mb-6 relative">
                <div className="text-pink-400 text-3xl font-serif leading-none mb-1">“</div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium italic">
                  {t.director.quote}
                </p>
                {/* If viewing in English, also provide the authentic Spanish card quote for cultural trust */}
                {!isEs && (
                  <p className="mt-3 pt-3 border-t border-pink-100 text-xs text-slate-500 italic">
                    <span className="font-semibold text-pink-600 not-italic">Original card quote:</span> "{t.director.quoteOriginal}"
                  </p>
                )}
              </div>

              {/* Verified Credentials */}
              <div className="space-y-2 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isEs ? 'Credenciales y Especialidades' : 'Verified Credentials & Expertise'}
                </p>
                <ul className="space-y-2">
                  {t.director.credentials.map((cred, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <a
                href="tel:8573089764"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#3AB0FF] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#3AB0FF]" />
                <span>(857) 308-9764</span>
              </a>

              <button
                onClick={onOpenTourModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#FF6B9D] text-white hover:bg-pink-600 shadow-sm transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{isEs ? 'Hablar con Elvira' : 'Meet Elvira on Tour'}</span>
              </button>
            </div>
          </div>

          {/* Card 2: Certified Assistant - Asistente Certificada */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-[0_15px_40px_rgba(58,176,255,0.08)] relative flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            {/* Paperclip graphic in top corner */}
            <div className="absolute -top-3 right-8 w-6 h-12 border-2 border-slate-400 rounded-full bg-slate-100/40 shadow-sm rotate-12 pointer-events-none flex items-center justify-center">
              <div className="w-3 h-8 border-2 border-slate-400 rounded-full" />
            </div>

            <div>
              {/* Calligraphy header style */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif italic text-3xl sm:text-4xl text-slate-700 font-bold tracking-tight">
                  {t.assistant.headerScript}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-50 text-sky-600 border border-sky-200">
                  {isEs ? 'Asistente Certificada' : 'Certified Assistant'}
                </span>
              </div>

              {/* Photo & Identity presentation */}
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
                <div className="relative shrink-0 group">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl p-1.5 bg-gradient-to-tr from-sky-400 via-teal-300 to-pink-300 shadow-md">
                    <img
                      src={t.assistant.image}
                      alt={`${t.assistant.name} - ${t.assistant.role} at Pasitos de Aprendizaje Family Child Care`}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#3AB0FF] text-white p-1.5 rounded-full shadow-md">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                    {t.assistant.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#FF6B9D] mt-0.5">
                    {t.assistant.role}
                  </p>
                  <p className="text-xs font-medium text-slate-500 mt-1 inline-block px-2.5 py-1 bg-slate-50 rounded-lg border border-slate-200/70">
                    {t.assistant.roleDetail}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5 justify-center sm:justify-start">
                    <span className="inline-flex items-center text-[11px] font-bold px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200">
                      EEC Certified Assistant
                    </span>
                    <span className="inline-flex items-center text-[11px] font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
                      CPR & First Aid
                    </span>
                  </div>
                </div>
              </div>

              {/* Authentic Quote block directly from the physical card */}
              <div className="bg-[#FFFBF5] rounded-2xl p-5 border border-sky-100/80 mb-6 relative">
                <div className="text-sky-400 text-3xl font-serif leading-none mb-1">“</div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium italic">
                  {t.assistant.quote}
                </p>
                {!isEs && (
                  <p className="mt-3 pt-3 border-t border-sky-100 text-xs text-slate-500 italic">
                    <span className="font-semibold text-sky-600 not-italic">Original card quote:</span> "{t.assistant.quoteOriginal}"
                  </p>
                )}
              </div>

              {/* Verified Credentials */}
              <div className="space-y-2 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isEs ? 'Dedicación y Acompañamiento' : 'Care Strengths & Safety Qualifications'}
                </p>
                <ul className="space-y-2">
                  {t.assistant.credentials.map((cred, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#3AB0FF] shrink-0" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium">
                {isEs ? 'Atención continua y amorosa' : 'Tender, continuous classroom supervision'}
              </span>

              <button
                onClick={onOpenTourModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#3AB0FF] text-white hover:bg-sky-600 shadow-sm transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{isEs ? 'Conocer al Equipo' : 'Meet the Team on Tour'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Trust assurance footnote */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-6 py-3 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm text-xs sm:text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>{isEs ? 'Ambas educadoras certificadas en RCP Pediátrico' : 'Both educators certified in Pediatric CPR & First Aid'}</span>
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-500" />
              <span>{isEs ? 'Verificación de antecedentes CORI/DCF completa' : 'Comprehensive EEC Criminal & Background Cleared'}</span>
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-500" />
              <span>{isEs ? 'Ambiente cálido y bilingüe' : 'Warm, bilingual Spanish-English family setting'}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
