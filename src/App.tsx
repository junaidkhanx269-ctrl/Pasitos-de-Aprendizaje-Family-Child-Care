/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './data/content.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustBar } from './components/TrustBar.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { CurriculumSection } from './components/CurriculumSection.tsx';
import { ProgramsSection } from './components/ProgramsSection.tsx';
import { NutritionSection } from './components/NutritionSection.tsx';
import { FeaturesSection } from './components/FeaturesSection.tsx';
import { SafetySection } from './components/SafetySection.tsx';
import { ScheduleSection } from './components/ScheduleSection.tsx';
import { EnrollmentStepsSection } from './components/EnrollmentStepsSection.tsx';
import { TuitionSection } from './components/TuitionSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { EnrollmentSection } from './components/EnrollmentSection.tsx';
import { TourModal } from './components/TourModal.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [preselectedProgram, setPreselectedProgram] = useState('infants');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === 'en'
        ? 'Pasitos de Aprendizaje | Bilingual Daycare Dorchester Boston MA'
        : 'Pasitos de Aprendizaje | Guardería Bilingüe Dorchester Boston MA';
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'es' : 'en'));
  };

  const handleOpenTourModal = (programId?: string) => {
    if (programId) {
      setPreselectedProgram(programId);
    }
    setTourModalOpen(true);
  };

  const handleCloseTourModal = () => {
    setTourModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBF5] text-[#2D2A26] font-sans selection:bg-[#FF6B9D]/20 selection:text-[#2D2A26] overflow-x-hidden max-w-full">
      {/* Sticky Header with Exact Logo, EN/ES toggle, and CTAs */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenTourModal={() => handleOpenTourModal()}
      />

      {/* Main Content Sections */}
      <main className="flex-1 overflow-x-hidden">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenTourModal={() => handleOpenTourModal()}
        />

        {/* Verified Trust Bar */}
        <TrustBar lang={lang} />

        {/* About Elvira Castillo & Philosophy */}
        <AboutSection
          lang={lang}
          onOpenTourModal={() => handleOpenTourModal()}
        />

        {/* Our Certified Team: Elvira (Lead CDA Teacher) & Certified Assistant */}
        <TeamSection
          lang={lang}
          onOpenTourModal={() => handleOpenTourModal()}
        />

        {/* Plan Curricular Mensual: Official Classroom Monthly Curriculum Binder */}
        <CurriculumSection
          lang={lang}
          onOpenTourModal={() => handleOpenTourModal()}
        />

        {/* Programs (Infants, Toddlers, Preschool) */}
        <ProgramsSection
          lang={lang}
          onSelectProgram={(programId) => handleOpenTourModal(programId)}
        />

        {/* Healthy Nutrition & CACFP Standards Meals */}
        <NutritionSection
          lang={lang}
          onOpenTourModal={() => handleOpenTourModal()}
        />

        {/* Environment & 6 Key Features */}
        <FeaturesSection lang={lang} />

        {/* Health, Safety & Licensing Compliance Protocols */}
        <SafetySection
          lang={lang}
          onOpenTourModal={() => handleOpenTourModal()}
        />

        {/* Daily Schedule Timeline (8am – 5pm) */}
        <ScheduleSection lang={lang} />

        {/* Simple 4-Step Enrollment Process */}
        <EnrollmentStepsSection
          lang={lang}
          onOpenTourModal={() => handleOpenTourModal()}
        />

        {/* Tuition, Pricing & Massachusetts State Vouchers */}
        <TuitionSection
          lang={lang}
          onOpenTourModal={() => handleOpenTourModal()}
        />

        {/* 8-Photo Gallery (Crafts, Painting, Thanksgiving, Christmas, Montessori) */}
        <GallerySection lang={lang} />

        {/* Verified Parent Reviews */}
        <TestimonialsSection lang={lang} />

        {/* Frequently Asked Questions (FAQ) Accordion */}
        <FaqSection
          lang={lang}
          onOpenTourModal={() => handleOpenTourModal()}
        />

        {/* Location, Driveway Parking & Interactive Map */}
        <LocationSection lang={lang} />

        {/* Tour & Enrollment Inquiry Section */}
        <EnrollmentSection
          lang={lang}
          onOpenTourModal={() => handleOpenTourModal()}
        />
      </main>

      {/* Official Footer with Logo, Address, Phone, Hours, License */}
      <Footer
        lang={lang}
        onOpenTourModal={() => handleOpenTourModal()}
      />

      {/* Interactive Tour & Enrollment Modal */}
      <TourModal
        isOpen={tourModalOpen}
        onClose={handleCloseTourModal}
        lang={lang}
        preselectedProgram={preselectedProgram}
      />

      {/* Floating WhatsApp Quick-Chat Action */}
      <FloatingWhatsApp lang={lang} />
    </div>
  );
}
