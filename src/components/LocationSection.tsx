import React from 'react';
import { daycareData, Language } from '../data/content.ts';
import { MapPin, Phone, Clock, ShieldCheck, Navigation, Car, Sparkles, CheckCircle2 } from 'lucide-react';

interface LocationSectionProps {
  lang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ lang }) => {
  const t = daycareData[lang].location;
  const business = daycareData.business;

  // Google Maps directions link for 4 Norfolk Terrace, Dorchester MA 02124
  const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('4 Norfolk Terrace, Dorchester, MA 02124')}`;
  
  // Safe embed for Google Maps centering on 4 Norfolk Terrace, Dorchester MA
  const mapEmbedSrc = `https://maps.google.com/maps?q=4+Norfolk+Terrace,+Dorchester,+MA+02124&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="py-16 md:py-24 bg-[#FFFBF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3AB0FF] mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D2A26] font-display tracking-tight text-balance mb-4">
            {t.title}
          </h2>
          <p className="text-base text-[#5E554B] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address Card, Hours, Parking info */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-[24px] bg-white border border-[#E8DEC8] p-7 shadow-card">
            
            <div className="space-y-6">
              
              {/* Address info item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E8F6FF] text-[#3AB0FF] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A7065]">
                    {t.addressLabel}
                  </h3>
                  <p className="text-base font-bold text-[#2D2A26] mt-0.5">
                    {business.address}
                  </p>
                  <p className="text-sm text-[#554C42]">
                    {business.city}, {business.state} {business.zip}
                  </p>
                </div>
              </div>

              {/* Hours item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FFE8F0] text-[#FF6B9D] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A7065]">
                    {t.hoursLabel}
                  </h3>
                  <p className="text-base font-bold text-[#2D2A26] mt-0.5">
                    {business.hours}
                  </p>
                  <p className="text-sm text-[#554C42]">
                    {lang === 'en' ? 'Monday – Friday' : 'Lunes a Viernes'}
                  </p>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FBECE8] text-[#E07A5F] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A7065]">
                    {t.phoneLabel}
                  </h3>
                  <a
                    href={`tel:${business.phoneClean}`}
                    className="text-base font-bold text-[#3AB0FF] hover:underline mt-0.5 block font-display"
                  >
                    {business.phone}
                  </a>
                  <p className="text-xs text-[#7A7065]">
                    {lang === 'en' ? 'Elvira Castillo, Owner & Lead Educator' : 'Elvira Castillo, Directora'}
                  </p>
                </div>
              </div>

              {/* License Details */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A7065]">
                    {t.licenseLabel}
                  </h3>
                  <p className="text-sm font-bold text-[#2D2A26] mt-0.5">
                    {business.licenseNumber}
                  </p>
                  <p className="text-xs text-[#7A7065]">
                    {business.licensingAgency}
                  </p>
                </div>
              </div>

              {/* Bullet Features */}
              <div className="pt-4 border-t border-[#F2EAE0] space-y-2">
                {t.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-medium text-[#4A433A]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Directions Button */}
            <div className="mt-8 pt-4 border-t border-[#F2EAE0]">
              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold text-sm bg-[#3AB0FF] hover:bg-[#2299EC] shadow-glow-blue transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>{lang === 'en' ? 'Get Driving Directions' : 'Obtener Indicaciones en Google Maps'}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed with custom card */}
          <div className="lg:col-span-7 rounded-[24px] overflow-hidden border border-[#E8DEC8] shadow-card bg-white flex flex-col">
            
            {/* Map Header ribbon */}
            <div className="p-4 bg-[#FBF7F0] border-b border-[#E8DEC8] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#FF6B9D]" />
                <span className="text-xs font-bold text-[#2D2A26]">
                  {lang === 'en' ? 'Driveway Parking Available' : 'Parqueo Privado en Driveway'}
                </span>
              </div>
              <span className="text-[11px] text-[#786E63] font-medium">
                Dorchester MA 02124
              </span>
            </div>

            {/* Map Frame */}
            <div className="relative w-full h-[400px] lg:h-full min-h-[380px] bg-[#E5E3DF]">
              <iframe
                title="Pasitos de Aprendizaje Daycare Map"
                src={mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Overlay location pin preview card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-[#E0D5C5]">
                <p className="text-xs font-bold text-[#2D2A26]">
                  Pasitos de Aprendizaje
                </p>
                <p className="text-[11px] text-[#6B6156]">
                  4 Norfolk Terrace, Dorchester, MA 02124
                </p>
                <div className="mt-1.5 flex items-center gap-1.5 text-[10px] font-bold text-[#FF6B9D]">
                  <Sparkles className="w-3 h-3" />
                  <span>{lang === 'en' ? 'Gated entrance & safe residential street' : 'Portón seguro y calle tranquila'}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default LocationSection;
