import React from 'react';
import { Shield, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white/80 backdrop-blur-[2px] pt-12 pb-10 border-t border-slate-200/80 relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer: Left Brand Info & Right Compact Links */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 sm:gap-10 pb-10">
          
          {/* Kolom Kiri: Brand & Social */}
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-xs">
                <Shield className="w-4 h-4 stroke-[2.4]" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                TANDARA
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ekosistem presensi wajah cerdas yang menghubungkan gerbang sekolah, guru kelas, dan orang tua secara real-time.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="#beranda"
                aria-label="Facebook Tandara"
                className="w-7 h-7 rounded-full bg-slate-900 text-white hover:bg-indigo-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Facebook className="w-3.5 h-3.5 fill-current stroke-none" />
              </a>

              <a
                href="#beranda"
                aria-label="X Twitter Tandara"
                className="w-7 h-7 rounded-full bg-slate-900 text-white hover:bg-indigo-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="#beranda"
                aria-label="Instagram Tandara"
                className="w-7 h-7 rounded-full bg-slate-900 text-white hover:bg-indigo-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>

              <a
                href="#beranda"
                aria-label="LinkedIn Tandara"
                className="w-7 h-7 rounded-full bg-slate-900 text-white hover:bg-indigo-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Linkedin className="w-3.5 h-3.5 fill-current stroke-none" />
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Menu Ringkas (Hanya Menu Esensial) */}
          <div className="flex gap-12 sm:gap-16">
            
            {/* Navigasi Utama */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Navigasi
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li>
                  <a
                    href="#cara-kerja"
                    onClick={(e) => handleNavClick(e, '#cara-kerja')}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Alur Kerja
                  </a>
                </li>
                <li>
                  <a
                    href="#ekosistem"
                    onClick={(e) => handleNavClick(e, '#ekosistem')}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Ekosistem
                  </a>
                </li>
                <li>
                  <a
                    href="#fitur"
                    onClick={(e) => handleNavClick(e, '#fitur')}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Fitur Sistem
                  </a>
                </li>
              </ul>
            </div>

            {/* Bantuan & Kontak */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Bantuan
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li>
                  <a
                    href="#kontak"
                    onClick={(e) => handleNavClick(e, '#kontak')}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Hubungi Kami
                  </a>
                </li>
                <li>
                  <a
                    href="#kontak"
                    onClick={(e) => handleNavClick(e, '#kontak')}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Konsultasi Sekolah
                  </a>
                </li>
                <li>
                  <a
                    href="#keamanan"
                    onClick={(e) => handleNavClick(e, '#keamanan')}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    Privasi Data
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Line: Copyright & Simple Legal */}
        <div className="border-t border-slate-200/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 TANDARA. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a
              href="#beranda"
              onClick={(e) => handleNavClick(e, '#beranda')}
              className="hover:text-indigo-600 transition-colors"
            >
              Terms
            </a>
            <a
              href="#beranda"
              onClick={(e) => handleNavClick(e, '#beranda')}
              className="hover:text-indigo-600 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#beranda"
              onClick={(e) => handleNavClick(e, '#beranda')}
              className="hover:text-indigo-600 transition-colors"
            >
              Security
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
