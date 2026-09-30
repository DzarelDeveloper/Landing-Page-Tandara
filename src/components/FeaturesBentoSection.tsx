import React from 'react';
import {
  Scan,
  Clock,
  LogIn,
  Bell,
  FileCheck,
  FileSpreadsheet,
  ShieldAlert,
  HardDrive
} from 'lucide-react';

export const FeaturesBentoSection: React.FC = () => {
  const features = [
    {
      title: 'Face Recognition',
      desc: 'Pemindaian biometrik wajah siswa secara higienis, akurat, dan tanpa risiko titip absen.',
      icon: Scan,
      span: 'md:col-span-2 lg:col-span-2',
      highlight: true,
      tag: 'Kamera Cerdas',
    },
    {
      title: 'Real-time Attendance',
      desc: 'Pencatatan langsung ke server detik itu juga tanpa perlu sinkronisasi manual.',
      icon: Clock,
      span: 'md:col-span-1 lg:col-span-1',
      tag: 'Live Sync',
    },
    {
      title: 'Check-in & Check-out',
      desc: 'Pencatatan jam kedatangan pagi dan jam kepulangan siswa secara terpisah.',
      icon: LogIn,
      span: 'md:col-span-1 lg:col-span-1',
      tag: 'Dua Sesi',
    },
    {
      title: 'Parent Monitoring',
      desc: 'Notifikasi otomatis di ponsel orang tua saat siswa tiba atau meninggalkan sekolah.',
      icon: Bell,
      span: 'md:col-span-2 lg:col-span-2',
      highlight: true,
      tag: 'Portal Ortu',
    },
    {
      title: 'Permission Management',
      desc: 'Alur persetujuan izin sakit atau dispensasi siswa dengan bukti surat terlampir.',
      icon: FileCheck,
      span: 'md:col-span-1 lg:col-span-1',
      tag: 'Pengajuan Digital',
    },
    {
      title: 'Attendance Reports',
      desc: 'Laporan kehadiran berkala per rombel siap cetak atau ekspor format Excel & PDF.',
      icon: FileSpreadsheet,
      span: 'md:col-span-1 lg:col-span-1',
      tag: 'Ekspor Data',
    },
    {
      title: 'Audit Log',
      desc: 'Riwayat lengkap setiap aktivitas presensi dan perubahan data untuk akuntabilitas sekolah.',
      icon: ShieldAlert,
      span: 'md:col-span-1 lg:col-span-1',
      tag: 'Keamanan Data',
    },
    {
      title: 'Local Deployment',
      desc: 'Dapat dijalankan penuh di server jaringan lokal (intranet) tanpa ketergantungan internet publik.',
      icon: HardDrive,
      span: 'md:col-span-1 lg:col-span-1',
      tag: 'On-Premise Ready',
    },
  ];

  return (
    <section id="fitur" className="py-20 md:py-28 bg-white/65 backdrop-blur-[1px] border-b border-slate-200/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            FITUR LENGKAP
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Kemampuan Utama Sistem Tandara
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Setiap fitur dirancang khusus untuk memecahkan kendala presensi nyata di lingkungan sekolah.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group ${
                  feat.span
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100/80 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
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
