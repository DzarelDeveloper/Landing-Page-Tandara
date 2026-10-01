import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Smartphone } from 'lucide-react';

export const ProductStatementSection: React.FC = () => {
  return (
    <section id="cara-kerja" className="py-14 md:py-24 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-5">
          
          <div className="section-kicker section-kicker-light">
            DARI GERBANG KE ORANG TUA
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.2]">
            Satu kejadian presensi.<br />
            <span className="text-indigo-400">Tiga pihak langsung tahu.</span>
          </h2>

          <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Begitu wajah terverifikasi di gerbang, data langsung mengalir ke dashboard sekolah dan notifikasi orang tua tanpa rekap tambahan.
          </p>

          {/* Alur Horizontal Kompak di Mobile & Desktop - Pas di Layar Tanpa Perlu Digeser */}
          <div className="pt-2 sm:pt-4 w-full max-w-[340px] sm:max-w-xl mx-auto flex items-center justify-between sm:justify-center gap-1 sm:gap-3 text-slate-300">
            
            <div className="flex-1 sm:flex-initial flex items-center justify-center gap-1 sm:gap-2 bg-slate-800/90 px-1.5 sm:px-3.5 py-1.5 sm:py-2 rounded-md sm:rounded-lg border border-slate-700/80">
              <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium whitespace-nowrap">Gerbang</span>
            </div>

            <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-slate-500 shrink-0" />

            <div className="flex-1 sm:flex-initial flex items-center justify-center gap-1 sm:gap-2 bg-slate-800/90 px-1.5 sm:px-3.5 py-1.5 sm:py-2 rounded-md sm:rounded-lg border border-slate-700/80">
              <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-400 shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium whitespace-nowrap">Guru Piket</span>
            </div>

            <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-slate-500 shrink-0" />

            <div className="flex-1 sm:flex-initial flex items-center justify-center gap-1 sm:gap-2 bg-slate-800/90 px-1.5 sm:px-3.5 py-1.5 sm:py-2 rounded-md sm:rounded-lg border border-slate-700/80">
              <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-400 shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium whitespace-nowrap">Orang Tua</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
