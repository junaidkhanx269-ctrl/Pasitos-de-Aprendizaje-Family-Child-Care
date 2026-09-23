import React, { useState } from 'react';
import { daycareData, Language } from '../data/content.ts';
import { galleryPhotos, GalleryPhoto } from '../data/galleryData.ts';
import { Camera, Heart, X, Sparkles, Instagram, Maximize2 } from 'lucide-react';

interface GallerySectionProps {
  lang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const t = daycareData[lang].gallery;
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { key: 'all', label: lang === 'en' ? 'All Activities' : 'Todas las Actividades' },
    { key: 'crafts', label: lang === 'en' ? 'Crafts & Painting' : 'Pintura y Manualidades' },
    { key: 'thanksgiving', label: lang === 'en' ? 'Thanksgiving' : 'Acción de Gracias' },
    { key: 'christmas', label: lang === 'en' ? 'Christmas & Holidays' : 'Navidad y Fiestas' },
    { key: 'montessori', label: lang === 'en' ? 'Montessori & Sensory' : 'Montessori y Sensorial' }
  ];

  const filteredPhotos = galleryPhotos.filter(photo => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'crafts') return photo.id === 'photo-1' || photo.id === 'photo-7';
    if (activeFilter === 'thanksgiving') return photo.id === 'photo-2';
    if (activeFilter === 'christmas') return photo.id === 'photo-3';
    if (activeFilter === 'montessori') return photo.id === 'photo-4' || photo.id === 'photo-5' || photo.id === 'photo-6' || photo.id === 'photo-8';
    return true;
  });

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#FFFBF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6B9D] mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D2A26] font-display tracking-tight text-balance mb-4">
            {t.title}
          </h2>
          <p className="text-base text-[#5E554B] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveFilter(tab.key)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                activeFilter === tab.key
                  ? 'bg-[#FF6B9D] text-white shadow-glow-pink'
                  : 'bg-white text-[#5E554B] border border-[#E2D5C3] hover:border-[#FF6B9D] hover:text-[#FF6B9D]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 8 Images Responsive Bento / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => {
            const title = lang === 'en' ? photo.titleEn : photo.titleEs;
            const category = lang === 'en' ? photo.categoryEn : photo.categoryEs;
            const caption = lang === 'en' ? photo.captionEn : photo.captionEs;

            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative rounded-[22px] overflow-hidden bg-white border border-[#E8DEC8] shadow-soft hover:shadow-card cursor-pointer transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
              >
                {/* Photo container */}
                <div className="relative aspect-square overflow-hidden bg-[#F4EFE6]">
                  <img
                    src={photo.src}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-[#2D2A26] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/55 backdrop-blur-xs text-white text-[10px] font-bold">
                    {category}
                  </div>
                </div>

                {/* Instagram style bottom info */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-sm font-bold text-[#2D2A26] font-display leading-tight mb-1 group-hover:text-[#FF6B9D] transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs text-[#6B6156] line-clamp-2 leading-relaxed">
                      {caption}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#F2EAE0] flex items-center justify-between text-[11px] text-[#7A7065]">
                    <span className="font-medium">{photo.date}</span>
                    <div className="flex items-center gap-1 font-semibold text-[#FF6B9D]">
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      <span>{photo.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Instagram Notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E2D5C3] shadow-soft text-xs sm:text-sm font-bold text-[#4A433A]">
            <Instagram className="w-4 h-4 text-[#E1306C]" />
            <span>{t.instagramNotice}</span>
            <span className="text-[#3AB0FF]">@pasitosdeaprendizaje</span>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative bg-[#FFFBF5] rounded-[24px] overflow-hidden max-w-2xl w-full border border-[#E8DEC8] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image display */}
            <div className="aspect-[4/3] bg-black">
              <img
                src={selectedPhoto.src}
                alt={lang === 'en' ? selectedPhoto.titleEn : selectedPhoto.titleEs}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Caption details */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#FF6B9D] uppercase tracking-wider">
                  {lang === 'en' ? selectedPhoto.categoryEn : selectedPhoto.categoryEs}
                </span>
                <span className="text-xs text-[#7A7065]">{selectedPhoto.date}</span>
              </div>
              <h3 className="text-xl font-bold text-[#2D2A26] font-display mb-2">
                {lang === 'en' ? selectedPhoto.titleEn : selectedPhoto.titleEs}
              </h3>
              <p className="text-sm text-[#554C42] leading-relaxed">
                {lang === 'en' ? selectedPhoto.captionEn : selectedPhoto.captionEs}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default GallerySection;
