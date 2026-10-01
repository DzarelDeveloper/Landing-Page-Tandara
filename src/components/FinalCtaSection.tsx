import React from 'react';

export const FinalCtaSection: React.FC = () => {
  const scrollToHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('cara-kerja');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('kontak');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="max-w-2xl mx-auto space-y-6">

          {/* Reveal Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Siap melihat presensi sekolah<br />
            <span className="text-indigo-400">bekerja lebih tenang?</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
            Ceritakan kebutuhan sekolah Anda. Tim Tandara akan membantu memetakan alur, perangkat, dan skenario pilot project yang paling sesuai.
          </p>

          {/* CTAs: Hubungi Kami & Pelajari Alur */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#kontak"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              Minta Demo untuk Sekolah
            </a>

            <a
              href="#cara-kerja"
              onClick={scrollToHowItWorks}
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              Konsultasikan Kebutuhan
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
