import React from 'react';
import { ArrowRight, Bell, Database, Scan } from 'lucide-react';

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
    <section id="beranda" className="hero-section relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden xl:block">
          <div className="absolute left-0 top-[120px] inline-flex -rotate-6 items-center gap-2 rounded-md border border-slate-200 bg-white/90 px-3 py-2 text-[11px] font-semibold text-slate-600 shadow-sm">
            <Scan className="h-4 w-4 text-indigo-600" />
            Pengenalan wajah
          </div>
          <div className="absolute right-0 top-[170px] inline-flex rotate-3 items-center gap-2 rounded-md border border-slate-200 bg-white/90 px-3 py-2 text-[11px] font-semibold text-slate-600 shadow-sm">
            <Bell className="h-4 w-4 text-indigo-600" />
            Notifikasi wali
          </div>
          <div className="absolute left-5 top-[315px] inline-flex rotate-3 items-center gap-2 rounded-md border border-slate-200 bg-white/90 px-3 py-2 text-[11px] font-semibold text-slate-600 shadow-sm">
            <Database className="h-4 w-4 text-indigo-600" />
            Data sekolah
          </div>
        </div>

        <div className="relative mx-auto max-w-[920px] text-center">
          <div className="section-kicker mb-4">
            TANDARA · SISTEM KEHADIRAN SEKOLAH
          </div>

          <h1 className="mx-auto mb-5 text-[36px] font-bold leading-[1.08] text-slate-900 sm:text-[42px] lg:text-[46px] xl:text-[50px] 2xl:text-[52px]">
            Presensi sekolah otomatis,<br className="hidden xl:block" />
            <span className="text-indigo-700">tanpa antrean dan rekap manual.</span>
          </h1>

          <p className="mx-auto mb-7 max-w-[640px] text-base leading-7 text-slate-600 sm:text-lg">
            Satu sistem untuk mendeteksi kehadiran siswa, membantu guru memantau kelas, dan mengirim kepastian kepada orang tua secara real-time.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="#ekosistem"
                onClick={scrollToEcosystem}
                className="inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 active:bg-indigo-800 sm:w-auto"
              >
                <span>Jadwalkan Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#cara-kerja"
                onClick={scrollToHowItWorks}
                className="inline-flex h-[50px] w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900 sm:w-auto"
              >
                <span>Lihat Cara Kerja</span>
              </a>
          </div>

          <div className="mx-auto mt-9 grid max-w-[780px] grid-cols-3 gap-2.5 sm:gap-3">
            <div className="rounded-lg border border-slate-200 bg-white/85 px-2 py-3 shadow-sm sm:px-4 sm:py-4">
              <strong className="block text-base font-bold text-slate-900 sm:text-xl">~5 detik</strong>
              <span className="mt-1 block text-[10px] font-medium text-slate-500 sm:text-xs">Verifikasi wajah</span>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white/85 px-2 py-3 shadow-sm sm:px-4 sm:py-4">
              <strong className="block text-base font-bold text-slate-900 sm:text-xl">Real-time</strong>
              <span className="mt-1 block text-[10px] font-medium text-slate-500 sm:text-xs">Info ke orang tua</span>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white/85 px-2 py-3 shadow-sm sm:px-4 sm:py-4">
              <strong className="block text-base font-bold text-slate-900 sm:text-xl">On-premise</strong>
              <span className="mt-1 block text-[10px] font-medium text-slate-500 sm:text-xs">Data di sekolah</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
