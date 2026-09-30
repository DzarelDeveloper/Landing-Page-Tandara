import React from 'react';
import {
  Scan,
  Clock,
  BarChart3,
  LayoutDashboard,
  Users
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Pengenalan Wajah',
      description:
        'Verifikasi identitas pengguna menggunakan pemindaian biometrik wajah secara akurat dan higienis.',
      icon: Scan,
    },
    {
      title: 'Pencatatan Kehadiran',
      description:
        'Mencatat waktu kehadiran secara otomatis langsung ke sistem tanpa pengisian form manual.',
      icon: Clock,
    },
    {
      title: 'Rekap Kehadiran',
      description:
        'Ringkasan data kehadiran harian hingga bulanan yang tersaji rapi dan siap diekspor.',
      icon: BarChart3,
    },
    {
      title: 'Dashboard Informatif',
      description:
        'Tampilan data dan metrik kehadiran yang mudah dipahami untuk monitoring harian pengelola.',
      icon: LayoutDashboard,
    },
    {
      title: 'Pengelolaan Pengguna',
      description:
        'Manajemen data pengguna terdaftar beserta pembagian unit, kelas, atau divisi kerja.',
      icon: Users,
    },
  ];

  return (
    <section id="fitur" className="py-20 md:py-24 bg-[#FAFAFC] border-b border-slate-200/70">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            FITUR UTAMA
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Semua Kebutuhan Absensi dalam Satu Sistem
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Fitur esensial yang dirancang untuk menyederhanakan pengelolaan kehadiran tanpa kompleksitas yang tidak perlu.
          </p>
        </div>

        {/* 5 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100/80 text-indigo-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
