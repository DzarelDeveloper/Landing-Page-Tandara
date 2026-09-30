import React, { useState } from 'react';
import {
  Monitor,
  Smartphone,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Maximize2
} from 'lucide-react';

import adminDesktopImg from '../assets/images/admin_desktop_screenshot_1790730666590.jpg';
import guruDesktopImg from '../assets/images/guru_desktop_screenshot_1790730681819.jpg';
import ortuMobileImg from '../assets/images/ortu_mobile_screenshot_1790730696195.jpg';

export const EcosystemSection: React.FC = () => {
  const [activeRole, setActiveRole] = useState<'admin' | 'guru' | 'ortu'>('admin');

  return (
    <section id="ekosistem" className="py-20 md:py-28 bg-white/60 backdrop-blur-[1px] border-b border-slate-200/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            EKOSISTEM DIGITAL LENGKAP
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Bukan Sekadar Mesin Absen.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Tiga antarmuka terintegrasi yang melayani kebutuhan seluruh pemangku kepentingan sekolah secara real-time.
          </p>
        </div>

        {/* Role Selector Tabs: Admin Desktop | Guru Desktop | Ortu Mobile */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-xl max-w-xl mb-10">
          <button
            onClick={() => setActiveRole('admin')}
            className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeRole === 'admin'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>Admin IT (Desktop)</span>
          </button>

          <button
            onClick={() => setActiveRole('guru')}
            className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeRole === 'guru'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>Guru / Piket (Desktop)</span>
          </button>

          <button
            onClick={() => setActiveRole('ortu')}
            className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeRole === 'ortu'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Orang Tua (Mobile)</span>
          </button>
        </div>

        {/* ECOSYSTEM CONTENT CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Sisi Kiri: Deskripsi & Tanggung Jawab */}
          <div className="lg:col-span-5 space-y-6">
            
            {activeRole === 'admin' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 font-mono text-xs font-semibold">
                  <Monitor className="w-3.5 h-3.5" />
                  <span>DASHBOARD ADMIN IT SEKOLAH (DESKTOP)</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Pusat Kendali & Tata Kelola Data Sekolah
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Menyediakan kendali penuh bagi tim IT sekolah untuk mengatur pendaftaran wajah siswa baru (Dzarel, Azzam, Labib di jurusan TKJ), sinkronisasi rombel, dan pemantauan terminal kamera gerbang.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Tanggung Jawab Utama:
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span><strong>Kelola siswa</strong> — input database NISN, rombel TKJ, dan profil</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span><strong>Registrasi wajah</strong> — enrolment dataset biometrik siswa</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span><strong>Kelola kelas</strong> — jadwal rombongan belajar dan wali kelas</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span><strong>Monitoring terminal</strong> — status koneksi kamera gerbang online</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span><strong>Audit log</strong> — riwayat aktivitas dan keamanan data</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeRole === 'guru' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 font-mono text-xs font-semibold">
                  <Monitor className="w-3.5 h-3.5" />
                  <span>DASHBOARD WEB GURU & PIKET (DESKTOP)</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Pemantauan Presensi Kelas di Komputer Guru
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Guru piket dan wali kelas memantau kehadiran siswa secara real-time langsung dari layar komputer desktop di ruang piket atau laptop ruang guru sebelum bel jam pertama.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Tanggung Jawab Utama:
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span><strong>Monitoring presensi</strong> — pantau status per rombel TKJ live</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span><strong>Check-in / Check-out</strong> — verifikasi kedatangan dan jam pulang</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span><strong>Koreksi presensi</strong> — penyesuaian status jika ada tugas luar/dispensasi</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span><strong>Persetujuan izin</strong> — validasi surat dokter atau izin keluarga</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span><strong>Rekap bulanan</strong> — cetak laporan kehadiran otomatis</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeRole === 'ortu' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 font-mono text-xs font-semibold">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>APLIKASI ORANG TUA / WALI (MOBILE)</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Ketenangan Pikiran untuk Orang Tua
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Orang tua menerima notifikasi langsung di smartphone begitu anak melangkah melewati gerbang sekolah, lengkap dengan rekap kehadiran dan jam pulang.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Fitur Utama Orang Tua:
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span><strong>Notifikasi instan</strong> — konfirmasi kedatangan tiba di ponsel</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span><strong>Status kehadiran</strong> — hadir tepat waktu, dispensasi, atau izin</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span><strong>Jam masuk & pulang</strong> — riwayat waktu digital yang akurat</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span><strong>Riwayat absensi</strong> — kalender kehadiran semester</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span><strong>Pengajuan izin</strong> — kirim surat izin langsung dari smartphone</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

          </div>

          {/* Sisi Kanan: Real Screenshot Photo Mockups (Desktop for Admin & Guru, Mobile for Ortu) */}
          <div className="lg:col-span-7">
            
            {/* 1. MOCKUP DESKTOP ADMIN IT (REAL SCREENSHOT) */}
            {activeRole === 'admin' && (
              <div className="bg-white rounded-2xl border border-slate-300/80 shadow-lg overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Desktop Browser Window Header */}
                <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400 border border-rose-500/20" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500/20" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-500/20" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 bg-white px-4 py-1 rounded-md border border-slate-200 shadow-2xs flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>admin.tandara.sch.id/dashboard</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">DESKTOP</span>
                </div>

                {/* Screenshot Image */}
                <div className="relative bg-slate-50 aspect-16/9 overflow-hidden">
                  <img
                    src={adminDesktopImg}
                    alt="Tandara Admin IT Desktop Dashboard Screenshot"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {/* 2. MOCKUP DESKTOP GURU / PIKET (REAL SCREENSHOT) */}
            {activeRole === 'guru' && (
              <div className="bg-white rounded-2xl border border-slate-300/80 shadow-lg overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Desktop Browser Window Header */}
                <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400 border border-rose-500/20" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500/20" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-500/20" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 bg-white px-4 py-1 rounded-md border border-slate-200 shadow-2xs flex items-center gap-2">
                    <Monitor className="w-3.5 h-3.5 text-indigo-600" />
                    <span>guru.tandara.sch.id/kelas-tkj</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">DESKTOP</span>
                </div>

                {/* Screenshot Image */}
                <div className="relative bg-slate-50 aspect-16/9 overflow-hidden">
                  <img
                    src={guruDesktopImg}
                    alt="Tandara Guru / Piket Desktop Dashboard Screenshot"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {/* 3. MOCKUP SMARTPHONE ORANG TUA (REAL MOBILE SCREENSHOT) */}
            {activeRole === 'ortu' && (
              <div className="max-w-[290px] mx-auto bg-slate-900 rounded-[44px] p-3 shadow-2xl border-4 border-slate-800 animate-in zoom-in-95 duration-200">
                {/* Phone Top Dynamic Island */}
                <div className="w-24 h-4 bg-slate-950 rounded-full mx-auto mb-2" />

                {/* Smartphone Screenshot Image */}
                <div className="rounded-[32px] overflow-hidden bg-white aspect-9/16 shadow-inner">
                  <img
                    src={ortuMobileImg}
                    alt="Tandara Mobile App Screenshot for Parents"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Bottom Home Indicator Bar */}
                <div className="w-28 h-1 bg-slate-700 rounded-full mx-auto mt-2" />
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
