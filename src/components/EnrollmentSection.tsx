import React, { useState } from 'react';
import { daycareData, Language } from '../data/content.ts';
import { Calendar, Phone, MessageSquare, CheckCircle2, ShieldCheck, Heart, Send } from 'lucide-react';

interface EnrollmentSectionProps {
  lang: Language;
  onOpenTourModal: () => void;
}

export const EnrollmentSection: React.FC<EnrollmentSectionProps> = ({
  lang,
  onOpenTourModal
}) => {
  const t = daycareData[lang].form;
  const business = daycareData.business;

  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    phone: '',
    email: '',
    program: 'infants',
    subsidy: 'yes',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappLink = lang === 'en' ? business.whatsappLink : business.whatsappLinkEs;

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FBF7F0] border-t border-[#EFE5D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Trust Info & Direct Contact */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6B9D] mb-3">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>{lang === 'en' ? 'Begin Your Journey' : 'Comienza el Camino'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D2A26] font-display tracking-tight text-balance mb-4">
              {t.title}
            </h2>

            <p className="text-base text-[#5E554B] leading-relaxed mb-6">
              {t.subtitle}
            </p>

            {/* Quick Contact Box */}
            <div className="p-5 rounded-2xl bg-white border border-[#E8DEC8] shadow-soft space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8F6FF] text-[#3AB0FF] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#7A7065] font-semibold">
                    {lang === 'en' ? 'Direct Telephone (Call or Text)' : 'Teléfono Directo (Llamada o Mensaje)'}
                  </p>
                  <a
                    href={`tel:${business.phoneClean}`}
                    className="text-base font-extrabold text-[#2D2A26] hover:text-[#3AB0FF] font-display"
                  >
                    {business.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#F2EAE0]">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#7A7065] font-semibold">
                    {lang === 'en' ? 'Instant WhatsApp Chat' : 'Chat Inmediato de WhatsApp'}
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-600 hover:underline"
                  >
                    {lang === 'en' ? 'Chat with Elvira on WhatsApp' : 'Chatear con Elvira por WhatsApp'}
                  </a>
                </div>
              </div>
            </div>

            {/* Licensing reassurance */}
            <div className="flex items-center gap-2 text-xs text-[#554D43] font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {lang === 'en'
                  ? 'Official Massachusetts EEC Licensed Provider #9144837'
                  : 'Guardería Familiar con Licencia Oficial EEC #9144837'}
              </span>
            </div>

          </div>

          {/* Right Column: Enrollment Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] bg-white border border-[#E8DEC8] p-6 sm:p-8 shadow-card">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#2D2A26] font-display">
                    {t.successTitle}
                  </h3>
                  <p className="text-sm text-[#554C42] max-w-md mx-auto leading-relaxed">
                    {t.successMessage}
                  </p>
                  <div className="pt-4">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20BE5A] shadow-soft"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{lang === 'en' ? 'Message on WhatsApp Now' : 'Enviar Mensaje por WhatsApp'}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F2EAE0]">
                    <h3 className="text-lg font-bold text-[#2D2A26] font-display">
                      {lang === 'en' ? 'Request Tour or Child Enrollment' : 'Solicitar Visita o Inscripción'}
                    </h3>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      {lang === 'en' ? 'Open Enrollment 2025/2026' : 'Inscripciones Abiertas'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3D3730] mb-1">
                        {t.childName} *
                      </label>
                      <input
                        type="text"
                        required
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        placeholder="e.g. Sofia Rodriguez"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED4C5] bg-[#FFFBF5] text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#FF6B9D] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#3D3730] mb-1">
                        {t.childAge} *
                      </label>
                      <input
                        type="text"
                        required
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        placeholder={t.childAgePlaceholder}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED4C5] bg-[#FFFBF5] text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#FF6B9D] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3D3730] mb-1">
                        {t.parentName} *
                      </label>
                      <input
                        type="text"
                        required
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Carlos Rodriguez"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED4C5] bg-[#FFFBF5] text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#3AB0FF] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#3D3730] mb-1">
                        {t.phone} *
                      </label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(857) 000-0000"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED4C5] bg-[#FFFBF5] text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#3AB0FF] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3D3730] mb-1">
                        {t.programInterest}
                      </label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED4C5] bg-[#FFFBF5] text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#FF6B9D] focus:bg-white transition-all"
                      >
                        <option value="infants">{t.infantOption}</option>
                        <option value="toddlers">{t.toddlerOption}</option>
                        <option value="preschool">{t.preschoolOption}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#3D3730] mb-1">
                        {t.subsidyQuestion}
                      </label>
                      <select
                        name="subsidy"
                        value={formData.subsidy}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED4C5] bg-[#FFFBF5] text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#FF6B9D] focus:bg-white transition-all"
                      >
                        <option value="yes">{t.subsidyYes}</option>
                        <option value="no">{t.subsidyNo}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3D3730] mb-1">
                      {t.notes}
                    </label>
                    <textarea
                      rows={2}
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder={t.notesPlaceholder}
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#DED4C5] bg-[#FFFBF5] text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#FF6B9D] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-4 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-[#FF6B9D] to-[#F0558A] hover:from-[#F0558A] hover:to-[#FF6B9D] shadow-glow-pink hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span>{t.submitting}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.submitBtn}</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default EnrollmentSection;
