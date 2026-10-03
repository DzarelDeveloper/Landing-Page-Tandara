/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ProductStatementSection } from './components/ProductStatementSection.tsx';
import { BrandMeaningSection } from './components/BrandMeaningSection.tsx';
import { EcosystemSection } from './components/EcosystemSection.tsx';
import { FeaturesBentoSection } from './components/FeaturesBentoSection.tsx';
import { WhyTandaraSection } from './components/WhyTandaraSection.tsx';
import { SecuritySection } from './components/SecuritySection.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { FinalCtaSection } from './components/FinalCtaSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import white3dTexture from './assets/images/white_3d_texture_1790733121081.jpg';

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white antialiased relative">
      
      {/* 3D Geometric Architectural Diamond Relief Texture Layer (Fixed across entire site) */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-30 bg-repeat"
        style={{
          backgroundImage: `url(${white3dTexture})`,
          backgroundSize: '920px auto',
          backgroundPosition: 'center top',
        }}
      />

      {/* 00 — Compact Sticky Navbar */}
      <Navbar />

      {/* Main Page Flow — Clean, Minimal, Professional SaaS with 3D Textured Background */}
      <main className="flex-1 relative z-10">
        {/* 01 — HERO with Minimalist SaaS Smartphone Face Verification Mockup */}
        <Hero />

        {/* 02 — PRODUCT STATEMENT: Satu wajah. Satu proses. Seluruh sistem terhubung. */}
        <ProductStatementSection />

        {/* 03 — FILOSOFI NAMA TANDARA */}
        <BrandMeaningSection />

        {/* 04 — EKOSISTEM TIGA PILAR: Admin IT (Desktop), Guru Piket (Desktop), Orang Tua (Mobile) */}
        <EcosystemSection />

        {/* 05 — FITUR UTAMA: Clean Bento Grid Layout */}
        <FeaturesBentoSection />

        {/* 06 — PERBANDINGAN ALUR KERJA: Presensi Manual vs Ekosistem Tandara */}
        <WhyTandaraSection />

        {/* 07 — KEAMANAN & PRIVASI: Kontrol data untuk sekolah */}
        <SecuritySection />

        {/* 08 — TIM: Orang di balik TANDARA */}
        <TeamSection />

        {/* 09 — FINAL CTA: Action Call to Request Consultation */}
        <FinalCtaSection />

        {/* 10 — KONTAK: Form Konsultasi & Kemitraan Sekolah */}
        <ContactSection />
      </main>

      {/* FOOTER: Minimalist Brand & Navigation */}
      <Footer />
    </div>
  );
}
