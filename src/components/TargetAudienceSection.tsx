import React from 'react';
import { GraduationCap, Building2, Users2, Check } from 'lucide-react';

export const TargetAudienceSection: React.FC = () => {
  const targets = [
    {
      title: 'Sekolah & Institusi',
      role: 'Pencatatan kehadiran siswa dan tenaga pengajar',
      description:
        'Membantu sekolah mencatat ketertiban siswa per kelas dan kehadiran guru setiap pagi secara tertib tanpa antrean.',
      icon: GraduationCap,
      highlights: [
        'Absensi siswa dan wali kelas terstruktur',
        'Pencatatan waktu datang tepat waktu',
        'Laporan rekap bulanan untuk sekolah',
      ],
    },
    {
      title: 'Perkantoran & Bisnis',
      role: 'Membantu pengelolaan kehadiran karyawan',
      description:
        'Solusi absensi praktis di pintu masuk kantor untuk mencatat jam kerja staf tanpa perlu kartu atau sidik jari bergantian.',
      icon: Building2,
      highlights: [
        'Pencatatan jam masuk & pulang kerja',
        'Mendukung rekapitulasi tim HR',
        'Higienis tanpa sentuhan perangkat fisik',
      ],
    },
    {
      title: 'Organisasi & Komunitas',
      role: 'Mendukung pencatatan kehadiran anggota',
      description:
        'Mempermudah pendataan peserta rapat, kegiatan operasional, hingga kehadiran relawan komunitas.',
      icon: Users2,
      highlights: [
        'Daftar hadir rapat pleno & pertemuan',
        'Verifikasi keabsahan peserta acara',
        'Ekspor berkas daftar hadir siap cetak',
      ],
    },
  ];

  return (
    <section id="target" className="py-20 md:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            TARGET PENGGUNA
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Satu Solusi untuk Berbagai Kebutuhan
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Dirancang secara fleksibel untuk mendukung berbagai skala institusi dan lingkungan operasional.
          </p>
        </div>

        {/* 3 Identical Balanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {targets.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100/80 text-indigo-600 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-indigo-600 mb-3">
                    {item.role}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100 space-y-2.5">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                      <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
