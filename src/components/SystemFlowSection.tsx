import React, { useState, useEffect } from 'react';
import { Camera, Cpu, Server, Database, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export const SystemFlowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Deteksi',
      desc: 'Kamera mendeteksi wajah siswa saat mendekati gerbang atau terminal presensi.',
      node: 'CAMERA',
      sub: 'Resolusi tinggi · 30 FPS · Auto-Exposure',
    },
    {
      num: '02',
      title: 'Verifikasi',
      desc: 'Identitas dibandingkan dengan data siswa yang telah terdaftar menggunakan mesin biometrik lokal.',
      node: 'FACE ENGINE',
      sub: 'Kecocokan fitur biometrik · Anti-Spoofing',
    },
    {
      num: '03',
      title: 'Presensi',
      desc: 'Status dan waktu kehadiran tercatat secara otomatis ke database sekolah dengan cap waktu presisi.',
      node: 'TANDARA SERVER',
      sub: 'Enkripsi data · Log absensi instan',
    },
    {
      num: '04',
      title: 'Sinkronisasi',
      desc: 'Informasi tersedia bagi pihak sekolah (Admin & Guru) dan terkirim ke ponsel orang tua.',
      node: 'ADMIN • GURU • ORANG TUA',
      sub: 'Notifikasi real-time · Rekap harian',
    },
  ];

  // Auto-advance through the system stages
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section id="cara-kerja" className="py-20 md:py-28 bg-[#FAFAFC] border-b border-slate-200/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            ALUR SISTEM PRESENSI
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Bagaimana Tandara Bekerja
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Dari sensor pemindai hingga informasi tersampaikan ke wali murid, seluruh data bergerak dalam satu pipeline yang aman dan teruji.
          </p>
        </div>

        {/* 1. VISUAL SYSTEM FLOW NODES (INTERACTIVE ARCHITECTURAL PIPELINE) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-10 overflow-hidden">
          
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-6 flex items-center justify-between">
            <span>PIPELINE DATA TANDARA</span>
            <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              SINKRONISASI AKTIF
            </span>
          </div>

          {/* Desktop Flow Line */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            {/* Node 1: CAMERA */}
            <div
              onClick={() => setActiveStep(0)}
              className={`p-4 rounded-xl border transition-all cursor-pointer text-center flex flex-col items-center justify-center ${
                activeStep === 0
                  ? 'border-indigo-600 bg-indigo-50/70 shadow-xs'
                  : 'border-slate-200 bg-slate-50/60 hover:border-slate-300'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2.5 ${
                activeStep === 0 ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-200 text-slate-600'
              }`}>
                <Camera className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-slate-900 font-mono">CAMERA</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Input Video</div>
            </div>

            {/* Node 2: FACE ENGINE */}
            <div
              onClick={() => setActiveStep(1)}
              className={`p-4 rounded-xl border transition-all cursor-pointer text-center flex flex-col items-center justify-center ${
                activeStep === 1
                  ? 'border-indigo-600 bg-indigo-50/70 shadow-xs'
                  : 'border-slate-200 bg-slate-50/60 hover:border-slate-300'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2.5 ${
                activeStep === 1 ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-200 text-slate-600'
              }`}>
                <Cpu className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-slate-900 font-mono">FACE ENGINE</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Analisis Biometrik</div>
            </div>

            {/* Node 3: TANDARA SERVER */}
            <div
              onClick={() => setActiveStep(2)}
              className={`p-4 rounded-xl border transition-all cursor-pointer text-center flex flex-col items-center justify-center ${
                activeStep === 2
                  ? 'border-indigo-600 bg-indigo-50/70 shadow-xs'
                  : 'border-slate-200 bg-slate-50/60 hover:border-slate-300'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2.5 ${
                activeStep === 2 ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-200 text-slate-600'
              }`}>
                <Server className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-slate-900 font-mono">TANDARA SERVER</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Validasi Database</div>
            </div>

            {/* Node 4: ATTENDANCE DATA */}
            <div
              onClick={() => setActiveStep(2)}
              className={`p-4 rounded-xl border transition-all cursor-pointer text-center flex flex-col items-center justify-center ${
                activeStep === 2
                  ? 'border-indigo-600 bg-indigo-50/70 shadow-xs'
                  : 'border-slate-200 bg-slate-50/60 hover:border-slate-300'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2.5 ${
                activeStep === 2 ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-200 text-slate-600'
              }`}>
                <Database className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-slate-900 font-mono">ATTENDANCE DATA</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Log Waktu Real-Time</div>
            </div>

            {/* Node 5: STAKEHOLDERS */}
            <div
              onClick={() => setActiveStep(3)}
              className={`p-4 rounded-xl border transition-all cursor-pointer text-center flex flex-col items-center justify-center ${
                activeStep === 3
                  ? 'border-indigo-600 bg-indigo-50/70 shadow-xs'
                  : 'border-slate-200 bg-slate-50/60 hover:border-slate-300'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2.5 ${
                activeStep === 3 ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-200 text-slate-600'
              }`}>
                <Users className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-slate-900 font-mono">ADMIN • GURU • ORTU</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Distribusi Notifikasi</div>
            </div>

          </div>

        </div>

        {/* 2. THE 4 STEP CARDS WITH PROGRESS ACTIVATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-white border-indigo-600 shadow-md ring-2 ring-indigo-600/10'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      TAHAP {step.num}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.num} — {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                  {step.sub}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
