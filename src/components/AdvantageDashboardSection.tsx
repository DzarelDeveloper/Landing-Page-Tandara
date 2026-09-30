import React, { useState } from 'react';
import { Check, Search, Filter } from 'lucide-react';

export const AdvantageDashboardSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Semua' | 'Hadir' | 'Terlambat'>('Semua');

  const advantages = [
    {
      title: 'Alur Sederhana',
      desc: 'Pengguna tidak perlu mengetik nama atau scan kartu fisik; verifikasi berjalan otomatis di depan layar.',
    },
    {
      title: 'Data Tersusun',
      desc: 'Setiap catatan kehadiran tersimpan sistematis dengan cap waktu, divisi, dan status presisi.',
    },
    {
      title: 'Mudah Dipantau',
      desc: 'Admin dan koordinator dapat memantau pergerakan data kehadiran harian secara langsung.',
    },
    {
      title: 'Tampilan Intuitif',
      desc: 'Antarmuka bersih dan ramah pengguna, memudahkan siapa saja melihat ringkasan tanpa pelatihan khusus.',
    },
  ];

  const attendanceData = [
    {
      name: 'Dzarel',
      division: 'Kelas XII TKJ 1',
      date: '29 Sep 2026',
      time: '07:14 WIB',
      status: 'Hadir',
    },
    {
      name: 'Azzam',
      division: 'Kelas XII TKJ 2',
      date: '29 Sep 2026',
      time: '07:15 WIB',
      status: 'Hadir',
    },
    {
      name: 'Labib',
      division: 'Kelas XII TKJ 1',
      date: '29 Sep 2026',
      time: '07:16 WIB',
      status: 'Hadir',
    },
  ];

  const filteredData = attendanceData.filter((item) => {
    if (activeTab === 'Semua') return true;
    return item.status === activeTab;
  });

  return (
    <section id="keunggulan" className="py-20 md:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Sisi Kiri: Daftar Manfaat & Penjelasan */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">
              KEUNGGULAN SISTEM
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Alur yang Lebih Praktis
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              TANDARA fokus memberikan kemudahan operasional sehari-hari dengan penyusunan data kehadiran yang tertib, cepat, dan mudah dipantau.
            </p>

            {/* 4 Poin Keunggulan */}
            <div className="space-y-4 pt-2">
              {advantages.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 border border-indigo-200/60">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Sisi Kanan: Satu Mockup Dashboard Monitoring */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden">
              
              {/* Monitoring Header */}
              <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Panel Pemantauan Presensi
                  </h3>
                  <p className="text-xs text-slate-500">
                    Ringkasan pencatatan log harian
                  </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start sm:self-auto">
                  {(['Semua', 'Hadir', 'Terlambat'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                        activeTab === tab
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stat Summary Row */}
              <div className="grid grid-cols-3 border-b border-slate-100 bg-white divide-x divide-slate-100 text-center">
                <div className="p-3">
                  <div className="text-[10px] text-slate-400 font-medium">Tingkat Hadir</div>
                  <div className="text-sm font-bold text-emerald-600 font-mono mt-0.5">98.4%</div>
                </div>
                <div className="p-3">
                  <div className="text-[10px] text-slate-400 font-medium">Hadir Hari Ini</div>
                  <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">142 Orang</div>
                </div>
                <div className="p-3">
                  <div className="text-[10px] text-slate-400 font-medium">Rata-rata Waktu</div>
                  <div className="text-sm font-bold text-indigo-600 font-mono mt-0.5">07:18 WIB</div>
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-400 text-[11px] uppercase font-semibold border-b border-slate-100">
                    <tr>
                      <th className="px-4 py-3">Nama</th>
                      <th className="px-4 py-3">Divisi / Kelas</th>
                      <th className="px-4 py-3">Tanggal</th>
                      <th className="px-4 py-3">Waktu</th>
                      <th className="px-4 py-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {filteredData.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-900">{row.name}</td>
                        <td className="px-4 py-3 text-slate-500">{row.division}</td>
                        <td className="px-4 py-3 font-mono text-slate-500">{row.date}</td>
                        <td className="px-4 py-3 font-mono text-slate-700">{row.time}</td>
                        <td className="px-4 py-3 text-right">
                          <span
                            className={`inline-flex px-2 py-0.5 rounded text-[11px] font-medium ${
                              row.status === 'Hadir'
                                ? 'bg-emerald-50 text-emerald-700'
                                : 'bg-amber-50 text-amber-700'
                            }`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer Indicator */}
              <div className="p-3 bg-slate-50/60 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                <span>Sinkronisasi otomatis dengan server lokal</span>
                <span className="text-[11px] font-mono text-slate-400">Terminal Ready</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
