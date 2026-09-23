import React, { useState } from 'react';
import { daycareData, Language } from '../data/content.ts';
import { ShieldCheck, CheckCircle2, Calculator, ArrowRight, HeartHandshake, Phone, HelpCircle } from 'lucide-react';

interface TuitionSectionProps {
  lang: Language;
  onOpenTourModal: () => void;
}

export const TuitionSection: React.FC<TuitionSectionProps> = ({ lang, onOpenTourModal }) => {
  const content = daycareData[lang];
  const t = content.tuition;
  const business = daycareData.business;
  const isEs = lang === 'es';

  // Interactive tuition estimator
  const [selectedProgram, setSelectedProgram] = useState<'infant' | 'toddler' | 'preschool'>('toddler');
  const [hasVoucher, setHasVoucher] = useState<boolean>(true);

  return (
    <section id="tuition" className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-[#EFE5D6]">
      {/* Background ambient accents */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-50/40 via-transparent to-transparent blur-2xl" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-wide uppercase mb-3.5">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2D2A26] font-display tracking-tight text-balance mb-4">
            {t.title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#5E554B] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* State Voucher Highlight Banner */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#F0FAF5] border-2 border-emerald-300 shadow-sm mb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{isEs ? 'Convenio Oficial del Estado de MA' : 'Official Massachusetts EEC Provider'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-emerald-950 font-display">
                {t.voucherHeadline}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800/90 max-w-3xl leading-relaxed">
                {t.voucherBody}
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <a
                href={`tel:${business.phoneClean}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{isEs ? 'Asesoría de Voucher Gratis' : 'Free Voucher Guidance'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Program Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {t.pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-[#FFFBF5] border border-[#E8DEC8] shadow-soft hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-white text-[#3AB0FF] border border-[#CCE9FF] mb-3">
                  {tier.schedule}
                </div>
                <h3 className="text-lg font-black text-[#2D2A26] mb-2 font-display">
                  {tier.category}
                </h3>
                <p className="text-xs sm:text-sm text-[#665D52] leading-relaxed mb-4">
                  {tier.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFE5D6] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{tier.voucherEligible}</span>
                </div>
                <p className="text-[11px] text-neutral-500">
                  {isEs ? 'Tarifas transparentes quincenales / mensuales' : 'Transparent bi-weekly or monthly payment options'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* What is Included (All-Inclusive Guarantee) */}
        <div className="bg-[#FAF6EF] rounded-3xl p-6 sm:p-8 border border-[#EAE0D2] mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2A26] font-display mb-4">
            {t.allInclusiveTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {t.inclusions.map((item, index) => (
              <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4E473F]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Estimator Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DEC8] shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#3AB0FF] flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-[#2D2A26] font-display">
                {isEs ? 'Calculadora Rápida de Plan de Cuidado' : 'Quick Childcare Cost Estimator'}
              </h3>
              <p className="text-xs text-[#71675B]">
                {isEs ? 'Selecciona la edad de tu niño(a) y tu método de cobertura' : 'Select your child’s age and state voucher status'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Options */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#4A453E] uppercase mb-2">
                  {isEs ? '1. Grupo de Edad' : '1. Age Group'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['infant', 'toddler', 'preschool'] as const).map((prog) => (
                    <button
                      key={prog}
                      type="button"
                      onClick={() => setSelectedProgram(prog)}
                      className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        selectedProgram === prog
                          ? 'bg-[#3AB0FF] text-white border-[#3AB0FF] shadow-xs'
                          : 'bg-white text-[#4A453E] border-[#DFD3C3] hover:border-[#3AB0FF]'
                      }`}
                    >
                      {prog === 'infant' ? (isEs ? 'Bebés' : 'Infants') : prog === 'toddler' ? (isEs ? 'Toddlers' : 'Toddlers') : (isEs ? 'Preescolar' : 'Preschool')}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4A453E] uppercase mb-2">
                  {isEs ? '2. ¿Cuentas con Voucher del Estado (EEC / CCCB)?' : '2. Do you have a state child care voucher (EEC / CCCB)?'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setHasVoucher(true)}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      hasVoucher
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-white text-[#4A453E] border-[#DFD3C3] hover:border-emerald-600'
                    }`}
                  >
                    {isEs ? 'Sí, tengo o solicitaré Voucher' : 'Yes, have/applying for voucher'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasVoucher(false)}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      !hasVoucher
                        ? 'bg-slate-800 text-white border-slate-800 shadow-xs'
                        : 'bg-white text-[#4A453E] border-[#DFD3C3] hover:border-slate-800'
                    }`}
                  >
                    {isEs ? 'No, Pago Privado' : 'No, Private Pay'}
                  </button>
                </div>
              </div>
            </div>

            {/* Estimated Output */}
            <div className="bg-[#FFFBF5] rounded-2xl p-5 border border-[#EAE0D2]">
              {hasVoucher ? (
                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-800">
                    {isEs ? 'Subsidio Completo o Copago Mínimo' : 'Full Subsidy or Nominal Parent Fee'}
                  </span>
                  <h4 className="text-xl font-black text-emerald-900 font-display">
                    $0 – Bajo Copago Estatal
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isEs
                      ? 'Con un voucher de Massachusetts EEC o Child Care Choices of Boston, el costo está subsidiado en su totalidad o sujeto a un copago mínimo regulado por tus ingresos familiares.'
                      : 'With an active Massachusetts EEC or CCCB voucher, your tuition is subsidized by the Commonwealth of Massachusetts. Your copay is set by state scale.'}
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold bg-sky-100 text-sky-800">
                    {isEs ? 'Tarifa Privada Competitiva y Todo Incluido' : 'All-Inclusive Private Tuition'}
                  </span>
                  <h4 className="text-xl font-black text-[#2D2A26] font-display">
                    {isEs ? 'Tarifa Familiar Accesible' : 'Accessible Community Rates'}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isEs
                      ? 'Incluye almuerzo caliente diario, 2 meriendas, materiales de arte, cunas higienizadas y estacionamiento privado en driveway.'
                      : 'Includes full-time care 8am–5pm, hot cooked lunch, 2 snacks, Montessori materials, and driveway parking.'}
                  </p>
                </div>
              )}

              <div className="mt-4 pt-3 border-t border-[#EFE5D6]">
                <button
                  type="button"
                  onClick={onOpenTourModal}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#FF6B9D] to-[#F0558A] text-white font-bold text-xs sm:text-sm shadow-glow-pink cursor-pointer"
                >
                  <span>{isEs ? 'Consultar Cupo y Tarifa Exacta' : 'Verify Availability & Exact Rate'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default TuitionSection;
