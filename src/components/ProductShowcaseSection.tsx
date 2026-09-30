import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, Bell, CheckCircle2, Shield, Users, Layers } from 'lucide-react';

export const ProductShowcaseSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'all' | 'admin' | 'guru' | 'ortu'>('all');

  return (
    <section className="py-20 md:py-32 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">
            SHOWCASE PERANGKAT MULTI-PLATFORM
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Satu Ekosistem di Tiga Layar Utama
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Setiap pemangku kepentingan memiliki antarmuka yang dirancang presisi untuk tugasnya masing-masing.
          </p>

          {/* Interactive Perspective Controls */}
          <div className="pt-4 flex items-center justify-center gap-2">
            <button
              onClick={() => setViewMode('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              Komposisi 3D Penuh
            </button>
            <button
              onClick={() => setViewMode('admin')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'admin'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              Fokus Admin IT
            </button>
            <button
              onClick={() => setViewMode('guru')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'guru'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              Fokus Guru
            </button>
            <button
              onClick={() => setViewMode('ortu')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'ortu'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              Fokus Orang Tua
            </button>
          </div>
        </div>

        {/* 3D Multi-Device Layered Stage */}
        <div className="relative min-h-[520px] sm:min-h-[580px] flex items-center justify-center py-6">
          
          {/* DEVICE 1: DESKTOP ADMIN IT (CENTER / BACK) */}
          <div
            className={`w-full max-w-2xl bg-white rounded-xl border border-slate-300 shadow-xl overflow-hidden transition-all duration-500 ${
              viewMode === 'all'
                ? 'scale-100 z-10'
                : viewMode === 'admin'
                ? 'scale-105 z-30 shadow-2xl ring-2 ring-indigo-600'
                : 'opacity-40 scale-95 blur-[1px]'
            }`}
          >
            <div className="bg-slate-800 text-white px-4 py-2 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Monitor className="w-3.5 h-3.5 text-indigo-400" />
                <span className="font-bold">DESKTOP ADMIN IT · PUSAT KENDALI SEKOLAH</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">SERVER ONLINE</span>
            </div>

            <div className="p-4 bg-slate-50 space-y-3 text-xs">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-white rounded border border-slate-200">
                  <div className="text-[10px] text-slate-400">Total Siswa</div>
                  <div className="font-bold text-slate-800">1.240 Orang</div>
                </div>
                <div className="p-2 bg-white rounded border border-slate-200">
                  <div className="text-[10px] text-slate-400">Tingkat Hadir Hari Ini</div>
                  <div className="font-bold text-emerald-600">98.2%</div>
                </div>
                <div className="p-2 bg-white rounded border border-slate-200">
                  <div className="text-[10px] text-slate-400">Kamera Gerbang</div>
                  <div className="font-bold text-indigo-600">4 Terminal Aktif</div>
                </div>
              </div>

              <div className="bg-white p-3 rounded border border-slate-200">
                <div className="flex items-center justify-between text-slate-500 text-[11px] mb-2">
                  <span>Log Rekapitulasi Rombel Otomatis</span>
                  <span className="text-indigo-600 font-mono font-medium">Terverifikasi</span>
                </div>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="font-medium text-slate-800">Kelas XII TKJ 1</span>
                    <span className="text-emerald-600 font-mono">35/36 Hadir (1 Izin)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="font-medium text-slate-800">Kelas XII TKJ 2</span>
                    <span className="text-emerald-600 font-mono">34/34 Hadir (100%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DEVICE 2: LAPTOP / TABLET GURU (OFFSET LEFT) */}
          <div
            className={`w-72 sm:w-80 bg-white rounded-xl border border-slate-300 shadow-xl overflow-hidden transition-all duration-500 ${
              viewMode === 'all'
                ? 'absolute -left-2 sm:left-4 bottom-2 sm:bottom-4 z-20 hover:scale-105'
                : viewMode === 'guru'
                ? 'relative z-30 scale-110 shadow-2xl ring-2 ring-indigo-600'
                : 'hidden'
            }`}
          >
            <div className="bg-indigo-900 text-white px-3 py-1.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5">
                <Tablet className="w-3.5 h-3.5 text-indigo-300" />
                <span className="font-bold text-[11px]">TABLET GURU PIKET</span>
              </div>
              <span className="text-[9px] font-mono bg-indigo-800 px-1.5 py-0.5 rounded">LIVE</span>
            </div>
            <div className="p-3 bg-white space-y-2 text-xs">
              <div className="text-[11px] font-bold text-slate-800">Absensi Gerbang Masuk</div>
              <div className="p-2 bg-emerald-50 rounded border border-emerald-200 text-[10px] space-y-1">
                <div className="font-semibold text-emerald-900">Dzarel (XII TKJ 1)</div>
                <div className="text-slate-500">Tiba: 07:14 WIB · Gerbang 1</div>
                <div className="text-emerald-700 font-bold">Hadir Tepat Waktu</div>
              </div>
              <div className="p-2 bg-emerald-50 rounded border border-emerald-200 text-[10px] space-y-1">
                <div className="font-semibold text-emerald-900">Azzam (XII TKJ 2)</div>
                <div className="text-slate-500">Tiba: 07:15 WIB · Gerbang 1</div>
                <div className="text-emerald-700 font-bold">Hadir Tepat Waktu</div>
              </div>
            </div>
          </div>

          {/* DEVICE 3: SMARTPHONE ORANG TUA (OFFSET RIGHT FRONT) */}
          <div
            className={`w-64 sm:w-72 bg-slate-900 rounded-[32px] p-2.5 shadow-2xl border-2 border-slate-700 transition-all duration-500 ${
              viewMode === 'all'
                ? 'absolute -right-2 sm:right-4 top-2 sm:top-6 z-25 hover:scale-105'
                : viewMode === 'ortu'
                ? 'relative z-30 scale-110 shadow-2xl ring-2 ring-indigo-600'
                : 'hidden'
            }`}
          >
            <div className="w-20 h-3 bg-slate-800 rounded-b-lg mx-auto mb-2" />
            <div className="bg-slate-50 rounded-[22px] p-3 text-slate-900 space-y-2 text-xs">
              {/* Push notification banner */}
              <div className="p-2 bg-white rounded-lg border border-indigo-200 shadow-2xs space-y-0.5">
                <div className="flex items-center justify-between text-[9px] text-indigo-600 font-bold">
                  <span className="flex items-center gap-1"><Bell className="w-2.5 h-2.5" /> TANDARA</span>
                  <span className="text-slate-400">07:14</span>
                </div>
                <div className="font-bold text-[11px] text-slate-900">Dzarel telah tiba di sekolah.</div>
                <div className="text-[9px] text-slate-500">Pukul 07:14 WIB · SMK Negeri 1</div>
              </div>

              {/* Status summary */}
              <div className="p-2 bg-indigo-600 text-white rounded-lg space-y-0.5">
                <div className="text-[9px] text-indigo-200">Status Kehadiran Hari Ini</div>
                <div className="font-bold text-xs">Dzarel · XII TKJ 1</div>
                <div className="text-[10px] text-emerald-300 font-semibold">✓ Hadir (07:14 WIB)</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
