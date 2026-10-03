import React from 'react';

interface CtaSectionProps {
  onOpenDemo: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-20 md:py-24 bg-[#0F172A] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="max-w-2xl mx-auto space-y-5">
          <div className="text-xs font-semibold text-indigo-400 tracking-wider uppercase">
            TANDARA — SETIAP KEHADIRAN, TERCATAT
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Mulai langkah baru bersama TANDARA.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Platform presensi cerdas yang memberikan tanda kehadiran seseorang secara nyata, aman, dan terhubung untuk sekolah, perkantoran, dan organisasi.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              Lihat Demo
            </button>
            <a
              href="#kontak"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              Hubungi Tim Kena Scan
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
