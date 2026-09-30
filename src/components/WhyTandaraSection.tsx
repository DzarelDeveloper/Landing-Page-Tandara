import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const WhyTandaraSection: React.FC = () => {
  const manualSteps = [
    { title: 'Panggil Nama', desc: 'Guru memanggil nama siswa satu per satu di awal jam pelajaran.' },
    { title: 'Catat Kehadiran', desc: 'Mencentang buku absensi fisik atau kartu kertas secara manual.' },
    { title: 'Rekap Data', desc: 'Staf TU menghabiskan waktu memindahkan data kertas ke spreadsheet.' },
    { title: 'Informasi Terlambat', desc: 'Orang tua baru mengetahui ketidakhadiran anak jika ditelepon pihak sekolah.' },
  ];

  const tandaraSteps = [
    { title: 'Wajah Terdeteksi', desc: 'Siswa berjalan santai melewati kamera gerbang sekolah tanpa berhenti lama.' },
    { title: 'Identitas Diverifikasi', desc: 'Mesin mencocokkan pola biometrik dengan data siswa terdaftar.' },
    { title: 'Presensi Tercatat', desc: 'Status hadir dan cap waktu masuk tersimpan langsung di server lokal.' },
    { title: 'Informasi Tersinkronisasi', desc: 'Wali kelas memantau dashboard dan orang tua menerima notifikasi seketika.' },
  ];

  return (
    <section className="py-20 md:py-28 bg-white/60 backdrop-blur-[1px] border-b border-slate-200/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">
            PERBANDINGAN ALUR KERJA
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Presensi seharusnya tidak menghabiskan waktu belajar.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Bukan sekadar mengganti kertas dengan layar, melainkan menyederhanakan alur kerja guru dan staf agar fokus pada proses belajar mengajar.
          </p>
        </div>

        {/* Direct Workflow Comparison: Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Kolom Kiri: PRESENSI MANUAL */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-mono font-bold mb-4">
                <XCircle className="w-3.5 h-3.5" />
                <span>ALUR PRESENSI MANUAL KONVENSIONAL</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Beban Administratif Berulang
              </h3>

              <div className="space-y-4">
                {manualSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800">
                        {step.title}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-rose-700 font-medium bg-rose-50/60 p-3 rounded-xl">
              Dampak: Menyita 10–15 menit jam pelajaran pertama dan rentan salah rekap.
            </div>
          </div>

          {/* Kolom Kanan: TANDARA */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-indigo-600 shadow-sm flex flex-col justify-between relative ring-4 ring-indigo-50">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-mono font-bold mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>ALUR SISTEM TANDARA</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Otomatis & Terintegrasi Penuh
              </h3>

              <div className="space-y-4">
                {tandaraSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">
                        {step.title}
                      </div>
                      <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-indigo-700 font-medium bg-indigo-50/60 p-3 rounded-xl">
              Manfaat: Waktu belajar tetap utuh, data rekap selalu siap, dan orang tua mendapat kepastian seketika.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
