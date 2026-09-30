import React from 'react';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Dra. Hj. Ratna Juwita, M.Pd',
      role: 'Pengelola Sekolah',
      sub: 'Kepala Sekolah (Skenario Fiktif)',
      initial: 'RJ',
      quote:
        'Pencatatan kehadiran siswa dan guru di pagi hari menjadi jauh lebih tertib. Antrean di gerbang sekolah dapat diminimalkan karena proses verifikasi berjalan cepat.',
    },
    {
      name: 'Hendra Setiawan, S.Kom',
      role: 'Admin Kantor',
      sub: 'People Operations (Skenario Fiktif)',
      initial: 'HS',
      quote:
        'Rekapitulasi jam masuk karyawan menjadi lebih teratur dan objektif. Sangat membantu dalam menyusun laporan kehadiran tanpa perlu memilah data manual.',
    },
    {
      name: 'Annisa Paramita, S.Sos',
      role: 'Tim Organisasi',
      sub: 'Koordinator Sekretariat (Skenario Fiktif)',
      initial: 'AP',
      quote:
        'Sangat efisien saat menggelar rapat kerja dan musyawarah anggota. Cukup dengan satu terminal, daftar hadir langsung rapi terarsip untuk lampiran laporan.',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#FAFAFC] border-b border-slate-200/70">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            CONTOH TESTIMONI
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Apa Kata Mereka?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            *Contoh skenario konten untuk kebutuhan presentasi project TANDARA, bukan ulasan pelanggan riil.
          </p>
        </div>

        {/* 3 Simple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 text-slate-400 flex items-center justify-center mb-4">
                  <Quote className="w-4 h-4 stroke-[2]" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Initials & Details */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center shrink-0">
                  {item.initial}
                </div>
                <div className="overflow-hidden">
                  <div className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-indigo-600 font-medium">
                    {item.role}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {item.sub}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
