import React from 'react';
import { Database, LockKeyhole, Server, ShieldCheck } from 'lucide-react';

const safeguards = [
  {
    icon: Server,
    title: 'Siap di jaringan lokal',
    description: 'Tandara dapat berjalan di server sekolah sehingga data operasional tidak harus melewati layanan publik.',
  },
  {
    icon: LockKeyhole,
    title: 'Akses berbasis peran',
    description: 'Admin, guru, dan orang tua hanya melihat informasi yang sesuai dengan tanggung jawabnya.',
  },
  {
    icon: Database,
    title: 'Data tertata dan terkontrol',
    description: 'Profil siswa, log presensi, dan perubahan data tersimpan dalam alur yang mudah diaudit.',
  },
  {
    icon: ShieldCheck,
    title: 'Privasi sebagai dasar',
    description: 'Implementasi sistem dapat disesuaikan dengan kebijakan sekolah dan kebutuhan perlindungan data siswa.',
  },
];

export const SecuritySection: React.FC = () => {
  return (
    <section id="keamanan" className="py-20 md:py-28 bg-[#10231f] text-white border-b border-emerald-950/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-5">
            <div className="section-kicker section-kicker-light">KEAMANAN & PRIVASI</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              Teknologi cerdas yang tetap memberi sekolah kendali.
            </h2>
            <p className="text-sm sm:text-base text-emerald-50/70 leading-relaxed max-w-lg">
              Data kehadiran adalah bagian penting dari kepercayaan sekolah. Tandara dirancang agar pengelolaan akses, penyimpanan, dan riwayat aktivitas dapat dipahami sejak awal.
            </p>
            <a href="#kontak" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 hover:text-white transition-colors">
              Konsultasikan kebutuhan keamanan <span aria-hidden="true">-&gt;</span>
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-9">
            {safeguards.map(({ icon: Icon, title, description }) => (
              <div key={title} className="border-t border-emerald-200/20 pt-4">
                <Icon className="w-5 h-5 text-emerald-300 mb-4" />
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-xs sm:text-sm text-emerald-50/65 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
