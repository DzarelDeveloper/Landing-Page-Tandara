import React, { useEffect, useRef, useState } from 'react';

export const BrandMeaningSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="makna-tandara"
      ref={sectionRef}
      className="border-b border-slate-200/80 bg-white/80 py-20 md:py-24"
    >
      <div className={`mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 philosophy-reveal${isVisible ? ' is-visible' : ''}`}>
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-kicker mb-3">TENTANG TANDARA</div>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Apa Itu Tandara?
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Tandara adalah sistem presensi wajah yang mencatat kehadiran siswa secara otomatis. Sistem ini
            membantu sekolah memantau kedatangan siswa dan menyampaikan informasi kehadiran kepada orang tua.
          </p>
        </div>
      </div>
    </section>
  );
};