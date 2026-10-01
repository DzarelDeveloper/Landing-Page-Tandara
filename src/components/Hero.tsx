import React from 'react';
import { ArrowDown, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Hero3DScanner } from './Hero3DScanner';

export const Hero: React.FC = () => {
  const scrollToHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('cara-kerja');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEcosystem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('ekosistem');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="hero-section pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Kolom Kiri: Teks & Aksi */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="section-kicker">
              TANDARA · SISTEM KEHADIRAN SEKOLAH
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-slate-900 tracking-tight leading-[1.12]">
              Presensi sekolah otomatis,<br />
              <span className="text-indigo-600">
                tanpa antrean dan rekap manual.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Satu sistem untuk mendeteksi kehadiran siswa, membantu guru memantau kelas, dan mengirim kepastian kepada orang tua secara real-time.
            </p>

            {/* Tombol CTA */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#ekosistem"
                onClick={scrollToEcosystem}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <span>Jadwalkan Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#cara-kerja"
                onClick={scrollToHowItWorks}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <span>Lihat Cara Kerja</span>
              </a>
            </div>

            {/* Value Highlights */}
            <div className="pt-5 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong className="block text-slate-900">&lt;1 detik</strong> verifikasi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong className="block text-slate-900">Real-time</strong> ke orang tua</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong className="block text-slate-900">On-premise</strong> siap sekolah</span>
              </div>
            </div>

          </div>

          {/* Kolom Kanan: Terminal Presensi Interaktif Cerdas */}
          <div className="flex lg:col-span-6 justify-center w-full mt-8 lg:mt-0">
            <Hero3DScanner />
          </div>

        </div>

      </div>

      {/* Down indicator */}
      <div className="mt-12 flex justify-center">
        <a
          href="#cara-kerja"
          className="text-slate-400 hover:text-indigo-600 transition-colors p-2"
          aria-label="Scroll ke pernyataan produk"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>

    </section>
  );
};
