import React, { useState, useEffect } from 'react';
import { Clock, Scan, UserCheck, Database, LayoutDashboard, Bell } from 'lucide-react';

export const AttendanceJourneySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      time: '07:14:01',
      title: 'FACE DETECTED',
      label: 'Wajah Terdeteksi',
      desc: 'Sensor kamera di gerbang sekolah mendeteksi siswa yang melangkah masuk.',
      icon: Scan,
    },
    {
      time: '07:14:02',
      title: 'IDENTITY VERIFIED',
      label: 'Identitas Diverifikasi',
      desc: 'Mesin pengenal mencocokkan biometrik siswa dengan data terdaftar dalam sistem.',
      icon: UserCheck,
    },
    {
      time: '07:14:03',
      title: 'ATTENDANCE RECORDED',
      label: 'Presensi Tercatat',
      desc: 'Jam masuk resmi dan status kehadiran disimpan ke basis data server sekolah.',
      icon: Database,
    },
    {
      time: '07:14:04',
      title: 'DASHBOARD UPDATED',
      label: 'Dashboard Terbarui',
      desc: 'Daftar hadir kelas dan layar pantau guru piket langsung menunjukkan status terkini.',
      icon: LayoutDashboard,
    },
    {
      time: '07:14:05',
      title: 'PARENT INFORMED',
      label: 'Orang Tua Terinformasi',
      desc: 'Notifikasi konfirmasi kedatangan tiba di aplikasi smartphone orang tua siswa.',
      icon: Bell,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeySteps.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [journeySteps.length]);

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">
            ALUR WAKTU PERISTIWA PRESENSI
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Beberapa detik dari gerbang sekolah ke orang tua.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Visualisasi konseptual bagaimana sebuah peristiwa presensi mengalir seketika melalui seluruh lapisan sistem Tandara.
          </p>
        </div>

        {/* Compact Timeline Grid (5 Steps) */}
        <div className="relative">
          
          {/* Subtle Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-[2px] bg-slate-100 z-0">
            <div
              className="h-full bg-indigo-600 transition-all duration-500 ease-out"
              style={{ width: `${(activeStep / (journeySteps.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-indigo-50/70 border-indigo-600 shadow-sm scale-102 ring-2 ring-indigo-600/10'
                      : isPast
                      ? 'bg-white border-slate-300'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    {/* Top: Icon & Timestamp */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isCurrent
                          ? 'bg-indigo-600 text-white'
                          : isPast
                          ? 'bg-indigo-100 text-indigo-700'
                          : 'bg-slate-100 text-slate-500'
                      }`}>
                        <Icon className="w-4 h-4 stroke-[2]" />
                      </div>

                      <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                        isCurrent
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {step.time}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 mb-1">
                      {step.title}
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 mb-2">
                      {step.label}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                    Langkah 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
