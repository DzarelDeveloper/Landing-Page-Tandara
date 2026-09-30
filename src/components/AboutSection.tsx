import React from 'react';
import { Check, FileSpreadsheet, Download, Filter, Search } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const benefits = [
    {
      title: 'Digital',
      subtitle: 'Tanpa pencatatan manual',
      description:
        'Menggantikan lembar presensi kertas atau tap kartu fisik dengan sistem digital yang otomatis merekam kehadiran.',
    },
    {
      title: 'Praktis',
      subtitle: 'Mudah digunakan',
      description:
        'Pengguna cukup berdiri sejenak di depan sensor pemindai untuk menyelesaikan absensi dalam hitungan detik.',
    },
    {
      title: 'Terorganisir',
      subtitle: 'Data kehadiran tersusun rapi',
      description:
        'Seluruh catatan waktu masuk, pulang, dan status keterlambatan tersimpan rapi serta siap diunduh dalam format laporan.',
    },
  ];

  return (
    <section id="tentang" className="py-20 md:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Kolom Kiri: Eyebrow, Heading, Deskripsi & 3 Manfaat Singkat */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">
              TENTANG TANDARA
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Kenali TANDARA
            </h2>

            <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                TANDARA bukan singkatan, melainkan nama brand yang dibentuk dari konsep <strong className="text-slate-900 font-semibold">‘tanda kehadiran’</strong>. Kata <em className="italic text-slate-800">‘tanda’</em> merepresentasikan bukti serta identitas kehadiran, sedangkan imbuhan <em className="italic text-slate-800">‘-ra’</em> dipakai agar terdengar singkat, modern, dan mudah diingat.
              </p>
              <p>
                Secara makna brand, TANDARA adalah sistem presensi cerdas yang memberikan tanda kehadiran seseorang secara <strong className="text-indigo-600 font-semibold">nyata, aman, dan terhubung</strong> melalui verifikasi identitas dan informasi kehadiran secara real-time untuk sekolah, perkantoran, dan organisasi.
              </p>
            </div>

            {/* 3 Manfaat Singkat */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 border border-indigo-200/60">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Nyata — <span className="font-medium text-slate-700">Bukti identitas terverifikasi</span>
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                    Pengenalan wajah memastikan kehadiran tercatat secara otentik, memvalidasi identitas pengguna tanpa risiko titip absen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 border border-indigo-200/60">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Aman — <span className="font-medium text-slate-700">Proses cepat tanpa kontak fisik</span>
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                    Cukup berdiri di depan sensor kamera, proses verifikasi selesai dalam hitungan detik secara higienis dan terenkripsi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 border border-indigo-200/60">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Terhubung — <span className="font-medium text-slate-700">Informasi kehadiran real-time</span>
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                    Data kehadiran langsung tersinkronisasi untuk memudahkan pemantauan oleh pihak pengelola, guru, maupun manajemen.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Kolom Kanan: Mockup Dashboard Tampilan Tabel Laporan Kehadiran (Berbeda dari Hero) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden">
              
              {/* Dashboard Sub-Header / Tool Bar */}
              <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Rekapitulasi Kehadiran Bulanan
                  </h3>
                  <p className="text-xs text-slate-500">
                    Periode: September 2026 · Format Tabel Ekspor
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-700">
                    <Filter className="w-3.5 h-3.5 text-slate-400" />
                    <span>Semua Unit</span>
                  </div>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 px-2.5 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-medium shadow-xs hover:bg-indigo-700 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh Excel</span>
                  </button>
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-400 text-[11px] uppercase font-semibold border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3">Pengguna</th>
                      <th className="px-4 py-3">Kategori</th>
                      <th className="px-4 py-3">Total Hadir</th>
                      <th className="px-4 py-3">Keterlambatan</th>
                      <th className="px-4 py-3 text-right">Persentase</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-900">Dzarel</td>
                      <td className="px-4 py-3 text-slate-500">Kelas XII TKJ 1</td>
                      <td className="px-4 py-3 font-mono">22 Hari</td>
                      <td className="px-4 py-3 font-mono text-emerald-600">0 Kali</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">100%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-900">Azzam</td>
                      <td className="px-4 py-3 text-slate-500">Kelas XII TKJ 2</td>
                      <td className="px-4 py-3 font-mono">22 Hari</td>
                      <td className="px-4 py-3 font-mono text-emerald-600">0 Kali</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">100%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-900">Labib</td>
                      <td className="px-4 py-3 text-slate-500">Kelas XII TKJ 1</td>
                      <td className="px-4 py-3 font-mono">21 Hari</td>
                      <td className="px-4 py-3 font-mono text-amber-600">1 Kali (Dispensasi)</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">95.4%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-900">Dra. Endang S.</td>
                      <td className="px-4 py-3 text-slate-500">Tenaga Pendidik</td>
                      <td className="px-4 py-3 font-mono">22 Hari</td>
                      <td className="px-4 py-3 font-mono text-emerald-600">0 Kali</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-emerald-600">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table Footer Summary */}
              <div className="p-3 bg-slate-50/80 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
                <span>Rata-rata kehadiran seluruh unit: <strong>96.5%</strong></span>
                <span className="font-mono text-indigo-600 font-medium">Status: Terverifikasi</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
