import React from 'react';
import { Camera, Cpu, Server, Monitor, Tablet, Smartphone, ArrowDown, Network, ShieldCheck } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAFC] border-b border-slate-200/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">
            ARSITEKTUR SISTEM
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Bagaimana Seluruh Sistem Terhubung
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Struktur alur data yang sederhana, aman, dan dirancang khusus untuk keandalan di lingkungan jaringan sekolah.
          </p>
        </div>

        {/* Visual Architecture Tree Diagram */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs relative">
          
          <div className="flex flex-col items-center space-y-4">
            
            {/* Level 1: CAMERA */}
            <div className="w-full max-w-xs p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-3 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 font-mono">01 · CAMERA SENSOR</div>
                <div className="text-[11px] text-slate-500">Terminal Gerbang Masuk & Pulang</div>
              </div>
            </div>

            {/* Connecting Arrow */}
            <ArrowDown className="w-5 h-5 text-indigo-500 animate-pulse" />

            {/* Level 2: FACE RECOGNITION */}
            <div className="w-full max-w-xs p-4 rounded-xl border border-indigo-200 bg-indigo-50/60 flex items-center gap-3 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-indigo-950 font-mono">02 · FACE RECOGNITION ENGINE</div>
                <div className="text-[11px] text-indigo-700">Analisis Biometrik & Validasi Identitas</div>
              </div>
            </div>

            {/* Connecting Arrow */}
            <ArrowDown className="w-5 h-5 text-indigo-500 animate-pulse" />

            {/* Level 3: TANDARA SERVER (HUB) */}
            <div className="w-full max-w-md p-5 rounded-2xl border-2 border-indigo-600 bg-white shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 font-mono">03 · TANDARA SERVER</div>
                  <div className="text-xs text-slate-500">Pusat Data Presensi & Basis Data Sekolah</div>
                </div>
              </div>
              <div className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                ON-PREMISE READY
              </div>
            </div>

            {/* Distribution Tree Branch */}
            <div className="w-full pt-4">
              <div className="text-center text-[11px] font-mono text-slate-400 mb-4 uppercase tracking-wider">
                DISTRIBUSI DATA REAL-TIME KE TIGA PILAR SEKOLAH
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Branch 1: ADMIN IT */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-indigo-600 flex items-center justify-center mb-2">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 font-mono">ADMIN IT</div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Pengelolaan Siswa, Rombel, & Keamanan Audit Log
                  </div>
                </div>

                {/* Branch 2: GURU / PIKET */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-indigo-600 flex items-center justify-center mb-2">
                    <Tablet className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 font-mono">GURU / PIKET</div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Monitoring Presensi Kelas & Persetujuan Izin Siswa
                  </div>
                </div>

                {/* Branch 3: ORANG TUA */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-indigo-600 flex items-center justify-center mb-2">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 font-mono">ORANG TUA</div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Notifikasi Kedatangan & Riwayat Kehadiran Anak
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
