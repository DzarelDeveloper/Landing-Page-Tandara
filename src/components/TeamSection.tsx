import React from 'react';
import azzamPhoto from '../../azzam.jpeg';
import dzarelPhoto from '../../dzarel.gif';
import labibPhoto from '../../labib.jpeg';

const members = [
  {
    number: '02',
    name: 'Azzam',
    role: 'Hardware & Technical Support',
    responsibility:
      'Menangani kamera/DroidCam, jaringan lokal, setup perangkat, konektivitas, dan troubleshooting teknis saat implementasi/demo.',
    initials: 'AZ',
    photo: azzamPhoto,
    featured: false,
  },
  {
    number: '01',
    name: 'Dzarel',
    role: 'Ketua Tim & Lead Developer',
    responsibility:
      'Memimpin pengembangan Tandara, arsitektur sistem, frontend, backend, database, face recognition, serta integrasi seluruh sistem.',
    initials: 'DZ',
    photo: dzarelPhoto,
    featured: true,
  },
  {
    number: '03',
    name: 'Labib',
    role: 'Testing & Documentation',
    responsibility:
      'Melakukan testing/QA sistem, membantu pengumpulan data pengujian, dokumentasi proyek, serta persiapan materi dan kebutuhan demo/presentasi.',
    initials: 'LB',
    photo: labibPhoto,
    featured: false,
  },
];

export const TeamSection: React.FC = () => (
  <section id="tim" className="border-b border-slate-200/80 bg-white py-20 md:py-24">
    <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <div className="section-kicker mb-3">TIM KENA SCAN</div>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Dari baris kode jadi solusi nyata.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
          Kami adalah tim pengembang Kena Scan di balik brand Tandara.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {members.map((member) => (
          <article
            key={member.number}
            className={`overflow-hidden rounded-lg border ${
              member.featured
                ? 'border-slate-900 bg-slate-900 text-white'
                : 'border-slate-200 bg-white text-slate-900'
            }`}
          >
            <div
              style={{ aspectRatio: '4 / 3' }}
              className={`flex aspect-[4/3] items-center justify-center ${
                member.featured ? 'bg-emerald-800' : member.number === '02' ? 'bg-amber-100' : 'bg-sky-100'
              }`}
            >
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className={`h-full w-full object-cover ${member.featured ? 'object-[center_35%]' : 'object-center'}`}
                />
              ) : (
                <span className="font-bold text-7xl leading-none text-slate-700/75" aria-hidden="true">
                  {member.initials}
                </span>
              )}
            </div>
            <div className="p-5">
              <div className="min-w-0">
                <p className={`mb-1 text-[10px] font-bold uppercase tracking-[0.16em] ${member.featured ? 'text-emerald-300' : 'text-slate-500'}`}>
                  {member.featured ? 'Ketua Tim' : 'Anggota'}
                </p>
                <h3 className="break-words text-xl font-bold leading-snug">{member.name}</h3>
              </div>
              <div className="mt-4">
                <p className={`mb-1 text-[10px] font-bold uppercase tracking-[0.16em] ${member.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                  Role
                </p>
                <p className="text-sm font-semibold leading-snug">{member.role}</p>
              </div>
              <div className={`mt-4 border-t pt-4 ${member.featured ? 'border-slate-700' : 'border-slate-200'}`}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className={`text-[10px] font-bold uppercase tracking-[0.16em] ${member.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                    Tanggung Jawab
                  </p>
                  <span className="shrink-0 font-mono text-xs text-slate-400">{member.number}</span>
                </div>
                <p className={`text-xs leading-relaxed ${member.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                  {member.responsibility}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);