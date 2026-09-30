import React from 'react';
import { UserPlus, Scan, CheckCircle2 } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Daftarkan Wajah',
      description: 'Simpan data wajah dan informasi identitas pengguna ke dalam sistem secara terpusat.',
      icon: UserPlus,
    },
    {
      number: '02',
      title: 'Lakukan Pemindaian',
      description: 'Pengguna berdiri di depan sensor kamera untuk pencocokan wajah dengan data terdaftar.',
      icon: Scan,
    },
    {
      number: '03',
      title: 'Kehadiran Tercatat',
      description: 'Waktu dan status kehadiran berhasil tercatat otomatis di dashboard laporan.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="cara-kerja" className="py-20 md:py-24 bg-[#FAFAFC] border-b border-slate-200/70">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            ALUR KERJA
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Mudah dalam 3 Langkah
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Proses pencatatan kehadiran yang ringkas dan tanpa prosedur manual yang berbelit-belit.
          </p>
        </div>

        {/* Steps Flow Container */}
        <div className="relative">
          
          {/* Subtle Thin Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-7 left-[15%] right-[15%] h-[1px] bg-slate-200 -z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon & Step Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100/80 text-indigo-600 flex items-center justify-center">
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {item.number}. {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
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
