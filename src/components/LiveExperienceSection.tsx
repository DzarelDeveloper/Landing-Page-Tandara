import React, { useState, useEffect } from 'react';
import { Camera, CheckCircle2, RotateCcw, ShieldCheck, UserCheck, Clock, Users } from 'lucide-react';

interface SimulatedStudent {
  id: string;
  name: string;
  className: string;
  nisn: string;
  time: string;
  status: 'CHECK-IN';
  avatarInitials: string;
}

export const LiveExperienceSection: React.FC = () => {
  const students: SimulatedStudent[] = [
    {
      id: 'STD-01',
      name: 'DZAREL',
      className: 'XII TKJ 1',
      nisn: '0081294102',
      time: '07:14 WIB',
      status: 'CHECK-IN',
      avatarInitials: 'DZ',
    },
    {
      id: 'STD-02',
      name: 'AZZAM',
      className: 'XII TKJ 2',
      nisn: '0082301844',
      time: '07:15 WIB',
      status: 'CHECK-IN',
      avatarInitials: 'AZ',
    },
    {
      id: 'STD-03',
      name: 'LABIB',
      className: 'XII TKJ 1',
      nisn: '0083491823',
      time: '07:16 WIB',
      status: 'CHECK-IN',
      avatarInitials: 'LB',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'entering' | 'verifying' | 'success'>('entering');
  const [recentLogs, setRecentLogs] = useState<SimulatedStudent[]>([students[0]]);

  const currentStudent = students[currentIndex];

  useEffect(() => {
    // Phase 1: entering (800ms)
    setPhase('entering');
    const t1 = setTimeout(() => {
      // Phase 2: verifying (5 seconds)
      setPhase('verifying');
    }, 800);

    const t2 = setTimeout(() => {
      // Phase 3: success
      setPhase('success');
      setRecentLogs((prev) => {
        const exists = prev.some((s) => s.id === currentStudent.id);
        if (exists) return prev;
        return [currentStudent, ...prev.slice(0, 4)];
      });
    }, 5800);

    const t3 = setTimeout(() => {
      // Advance to next student
      setCurrentIndex((prev) => (prev + 1) % students.length);
    }, 8300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [currentIndex]);

  return (
    <section id="cara-kerja" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            CARA KERJA TANDARA
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Presensi Otomatis di Gerbang Sekolah
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Siswa cukup melangkah menuju gerbang. Kamera mendeteksi wajah dan memverifikasi biometrik dalam sekitar 5 detik, lalu menyinkronkan data ke guru serta orang tua.
          </p>
        </div>

        {/* KIOSK TERMINAL DISPLAY MOCKUP */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
          
          {/* Terminal Screen Top Bar */}
          <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-slate-800 px-2.5 py-1 rounded border border-slate-700 text-white font-semibold">
                <Camera className="w-3.5 h-3.5 text-indigo-400" />
                <span>CAMERA 01 · GERBANG UTAMA</span>
              </div>
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-400">
              <span>FPS: 30</span>
              <span>1080P AI SENSOR</span>
              <span>LATENCY: 12ms</span>
            </div>
          </div>

          {/* Screen Content: Live Viewport + Real-Time Log Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            
            {/* Viewport Area */}
            <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col items-center justify-center relative bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
              
              {/* Camera Crosshair Center Guides */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
                <div className="w-64 h-64 border border-dashed border-slate-400 rounded-full" />
              </div>

              {/* Student Face Bounding Box HUD */}
              <div className="relative w-64 sm:w-72 aspect-3/4 rounded-2xl border-2 border-indigo-500/80 bg-slate-900/80 backdrop-blur-xs flex flex-col items-center justify-between p-5 shadow-2xl transition-all">
                
                {/* 4 Corner HUD Guides */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-indigo-400" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-indigo-400" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-indigo-400" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-indigo-400" />

                {/* Top Corner Meta */}
                <div className="w-full flex items-center justify-between text-[10px] font-mono text-indigo-300">
                  <span>FACIAL TRACKING</span>
                  <span>ID: {currentStudent.id}</span>
                </div>

                {/* Minimal Silhouette & Landmarks */}
                <div className="relative flex flex-col items-center justify-center my-auto">
                  <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-indigo-400/50 flex items-center justify-center text-xl font-bold text-white shadow-inner">
                    {currentStudent.avatarInitials}
                  </div>
                  <div className="w-28 h-10 rounded-t-full bg-slate-800/60 border-t border-l border-r border-indigo-400/40 mt-1" />

                  {/* Face scanning horizontal bar when verifying */}
                  {phase === 'verifying' && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-indigo-400 shadow-[0_0_12px_#818cf8] animate-bounce" />
                  )}
                </div>

                {/* Dynamic Status Tag */}
                <div className="w-full text-center space-y-1">
                  <div className="text-sm font-bold text-white tracking-wide">
                    {currentStudent.name}
                  </div>
                  <div className="text-xs text-indigo-300 font-mono">
                    {currentStudent.className} · NISN {currentStudent.nisn}
                  </div>

                  {phase === 'entering' && (
                    <div className="mt-2 py-1 px-3 rounded bg-slate-800 text-[11px] font-mono text-slate-300">
                      MENDETEKSI SISWA...
                    </div>
                  )}

                  {phase === 'verifying' && (
                    <div className="mt-2 py-1 px-3 rounded bg-indigo-900/80 border border-indigo-500/60 text-[11px] font-mono text-indigo-200 animate-pulse">
                      VERIFYING... (99.8% CONF)
                    </div>
                  )}

                  {phase === 'success' && (
                    <div className="mt-2 py-1.5 px-3 rounded-lg bg-emerald-500 text-white text-xs font-bold font-mono flex items-center justify-center gap-1.5 shadow-md">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>✓ {currentStudent.status} {currentStudent.time}</span>
                    </div>
                  )}
                </div>

              </div>

              {/* Simulation note */}
              <div className="mt-5 text-[11px] text-slate-500 font-mono text-center">
                *Simulasi presensi digital otomatis · Tanpa akses kamera perangkat keras lokal
              </div>

            </div>

            {/* Sidebar: Live Terminal Feed Log */}
            <div className="lg:col-span-4 bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800 p-5 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                  <span className="text-slate-300 font-bold">LOG PRESENSI HARI INI</span>
                  <span className="text-emerald-400">AKTIF</span>
                </div>

                {/* Recent Attendance Cards */}
                <div className="space-y-2.5">
                  {students.map((student, idx) => {
                    const isCurrent = student.id === currentStudent.id;
                    return (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border text-xs transition-all ${
                          isCurrent
                            ? 'border-indigo-500 bg-indigo-950/40 text-white'
                            : 'border-slate-800 bg-slate-950/60 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-white">{student.name}</span>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800">
                            {student.time}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                          <span>{student.className}</span>
                          <span className="text-emerald-400 font-medium">Hadir Tepat Waktu</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>TERKONEKSI SERVER SEKOLAH</span>
                <span className="text-indigo-400">SYNC: 100%</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
