import React, { useState } from 'react';
import { daycareData, Language } from '../data/content.ts';
import { X, Calendar, Send, CheckCircle2, Phone, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedProgram?: string;
}

export const TourModal: React.FC<TourModalProps> = ({
  isOpen,
  onClose,
  lang,
  preselectedProgram = 'infants'
}) => {
  const t = daycareData[lang].form;
  const business = daycareData.business;

  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    phone: '',
    email: '',
    preferredDate: '',
    program: preselectedProgram || 'infants',
    subsidy: 'yes',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate reliable submission feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappMsg = lang === 'en'
    ? encodeURIComponent(`Hello Elvira! I would like to schedule a tour for my child ${formData.childName || ''} (${formData.childAge || ''}). My phone is ${formData.phone || ''}.`)
    : encodeURIComponent(`¡Hola Elvira! Quisiera coordinar una visita para mi hijo(a) ${formData.childName || ''} (${formData.childAge || ''}). Mi teléfono es ${formData.phone || ''}.`);

  const whatsappDirectUrl = `https://wa.me/18573089764?text=${whatsappMsg}`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FFFBF5] rounded-[28px] border border-[#EADBCA] shadow-2xl w-full max-w-xl my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Ribbon */}
        <div className="bg-gradient-to-r from-[#FF6B9D] via-[#F0558A] to-[#3AB0FF] p-1" />

        {/* Modal Header */}
        <div className="px-6 pt-6 pb-4 flex items-start justify-between border-b border-[#EFE5D6]">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF6B9D] mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2A26] font-display">
              {t.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#665D52] mt-0.5">
              4 Norfolk Terrace, Dorchester, MA 02124 · EEC #9144837
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-neutral-700 hover:bg-[#F3ECE0] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-extrabold text-[#2D2A26] font-display">
                {t.successTitle}
              </h4>
              <p className="text-sm text-[#554C42] max-w-md mx-auto leading-relaxed">
                {t.successMessage}
              </p>

              {/* Direct WhatsApp follow-up action */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20BE5A] shadow-soft"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Open in WhatsApp' : 'Abrir en WhatsApp'}</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#4A433A] bg-white border border-[#D9CCB8] hover:bg-[#F5EFE6]"
                >
                  {t.closeBtn}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Child Info Fields */}
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
                    placeholder="e.g. Mateo Rodriguez"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED4C5] bg-white text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#FF6B9D] focus:border-transparent transition-all"
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
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED4C5] bg-white text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#FF6B9D] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Parent Contact Fields */}
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
                    placeholder="e.g. Maria Rodriguez"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED4C5] bg-white text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#3AB0FF] focus:border-transparent transition-all"
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
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED4C5] bg-white text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#3AB0FF] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Email & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3D3730] mb-1">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="parent@example.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED4C5] bg-white text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#3AB0FF] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#3D3730] mb-1">
                    {t.preferredDate}
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED4C5] bg-white text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#3AB0FF] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Program & Subsidy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3D3730] mb-1">
                    {t.programInterest}
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED4C5] bg-white text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#FF6B9D] focus:border-transparent transition-all"
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
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DED4C5] bg-white text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#FF6B9D] focus:border-transparent transition-all"
                  >
                    <option value="yes">{t.subsidyYes}</option>
                    <option value="no">{t.subsidyNo}</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
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
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#DED4C5] bg-white text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#FF6B9D] focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
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

              {/* Direct contact alternatives */}
              <div className="pt-2 text-center">
                <p className="text-xs text-[#7A7065] mb-2">
                  {t.directContactNotice}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={`tel:${business.phoneClean}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3AB0FF] hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>(857) 308-9764</span>
                  </a>
                  <span className="text-neutral-300">·</span>
                  <a
                    href={business.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
export default TourModal;
