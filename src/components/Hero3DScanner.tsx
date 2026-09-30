import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  RefreshCw,
  Send,
  Wifi,
  Clock,
  Scan,
  User,
  Activity
} from 'lucide-react';

interface StudentProfile {
  id: string;
  name: string;
  nisn: string;
  classRoom: string;
  time: string;
  status: 'Tepat Waktu' | 'Hadir';
  parentName: string;
  parentPhone: string;
  confidence: string;
  speed: string;
  initials: string;
  avatarBg: string;
}

const SAMPLE_STUDENTS: StudentProfile[] = [
  {
    id: '1',
    name: 'M. Rayhan Pratama',
    nisn: '0072918231',
    classRoom: 'XII MIPA 2',
    time: '06:48:12 WIB',
    status: 'Tepat Waktu',
    parentName: 'Bpk. Hendra Pratama (Ayah)',
    parentPhone: '+62 812-8821-xxxx',
    confidence: '99.8%',
    speed: '0.34s',
    initials: 'RP',
    avatarBg: 'bg-indigo-600',
  },
  {
    id: '2',
    name: 'Alya Nabila Putri',
    nisn: '0073841920',
    classRoom: 'XI IPS 1',
    time: '06:49:05 WIB',
    status: 'Tepat Waktu',
    parentName: 'Ibu Dewi Sartika (Ibu)',
    parentPhone: '+62 813-9012-xxxx',
    confidence: '99.6%',
    speed: '0.31s',
    initials: 'AN',
    avatarBg: 'bg-emerald-600',
  },
  {
    id: '3',
    name: 'Fathir Ramadhan',
    nisn: '0071940283',
    classRoom: 'X-3 Unggulan',
    time: '06:50:24 WIB',
    status: 'Tepat Waktu',
    parentName: 'Bpk. Bambang Sutrisno',
    parentPhone: '+62 821-4450-xxxx',
    confidence: '99.9%',
    speed: '0.29s',
    initials: 'FR',
    avatarBg: 'bg-blue-600',
  },
];

export const Hero3DScanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [currentTime, setCurrentTime] = useState('06:50:18 WIB');

  const currentStudent = SAMPLE_STUDENTS[currentIndex];

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds} WIB`);
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  const handleSimulateNextScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    setShowNotification(false);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % SAMPLE_STUDENTS.length);
      setIsScanning(false);
      setShowNotification(true);
    }, 450);
  };

  return (
    <div className="w-full max-w-[420px] mx-auto select-none space-y-3">
      
      {/* 01. TERMINAL UTAMA KIOSK PRESENSI */}
      <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-2xl p-4 sm:p-5 relative overflow-hidden">
        
        {/* Header Bar Terminal Kiosk */}
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 text-[11px]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono font-semibold tracking-wide text-slate-200">
              TERMINAL 01 · GERBANG UTAMA
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-400 font-mono">
            <div className="flex items-center gap-1 text-emerald-400">
              <Wifi className="w-3 h-3" />
              <span className="text-[10px]">LAN 3ms</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span className="text-[10px] text-slate-300">{currentTime}</span>
            </div>
          </div>
        </div>

        {/* Viewport Biometrik Cerdas */}
        <div className="mt-3.5 relative bg-slate-950/80 rounded-xl border border-slate-800 p-4 overflow-hidden">
          
          {/* Grid Background Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-30 pointer-events-none" />

          {/* Scanning Beam (Active when simulating scan) */}
          {isScanning && (
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-pulse pointer-events-none z-20" />
          )}

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
            
            {/* Biometric Mesh Silhouette Avatar */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-slate-900 border-2 border-indigo-500/60 flex items-center justify-center shrink-0 overflow-hidden shadow-inner">
              
              {/* Corner Accents */}
              <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-indigo-400" />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-indigo-400" />
              <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-indigo-400" />
              <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-indigo-400" />

              {/* Technical Biometric Contour Graphic */}
              <svg className="w-16 h-16 text-indigo-400/80" viewBox="0 0 100 100" fill="none">
                {/* Facial Mesh Lines */}
                <ellipse cx="50" cy="50" rx="30" ry="38" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M50 20 V80" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                <path d="M25 45 H75" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                <path d="M30 65 H70" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                
                {/* Landmark Points */}
                <circle cx="40" cy="45" r="2.5" className="fill-emerald-400 animate-ping" />
                <circle cx="40" cy="45" r="2" className="fill-emerald-400" />
                <circle cx="60" cy="45" r="2.5" className="fill-emerald-400 animate-ping" />
                <circle cx="60" cy="45" r="2" className="fill-emerald-400" />
                <circle cx="50" cy="56" r="2" className="fill-indigo-300" />
                <circle cx="42" cy="68" r="1.5" className="fill-indigo-300" />
                <circle cx="50" cy="70" r="1.5" className="fill-indigo-300" />
                <circle cx="58" cy="68" r="1.5" className="fill-indigo-300" />
              </svg>

              {/* Verified Overlay Badge */}
              <div className="absolute bottom-1 bg-emerald-950/90 text-emerald-300 border border-emerald-700/60 px-2 py-0.5 rounded text-[9px] font-mono flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                <span>{currentStudent.speed}</span>
              </div>
            </div>

            {/* Student Info & Live Match telemetry */}
            <div className="flex-1 text-center sm:text-left space-y-1.5 w-full">
              
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-[10px] font-semibold tracking-wide">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>PRESENSI BERHASIL</span>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                  {currentStudent.name}
                </h4>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] text-slate-300 mt-0.5">
                  <span className="font-semibold text-indigo-300">{currentStudent.classRoom}</span>
                  <span className="text-slate-500">•</span>
                  <span className="font-mono text-slate-400">NISN: {currentStudent.nisn}</span>
                </div>
              </div>

              <div className="pt-1 flex items-center justify-center sm:justify-start gap-3 text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Activity className="w-3 h-3 text-emerald-400" />
                  Akurasi: {currentStudent.confidence}
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Clock className="w-3 h-3 text-indigo-400" />
                  {currentStudent.time}
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Footer Bar: Tombol Simulasi Interaktif */}
        <div className="mt-3.5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>Anti-Spoofing 3D Aktif</span>
          </div>

          <button
            onClick={handleSimulateNextScan}
            disabled={isScanning}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
            <span>Simulasi Siswa Berikutnya</span>
          </button>
        </div>

      </div>

      {/* 02. KARTU POPUP REAL-TIME: NOTIFIKASI WHATSAPP KE ORANG TUA */}
      <div className={`bg-white rounded-xl border border-slate-200/90 shadow-md p-3 transition-all duration-300 ${showNotification ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <div className="flex items-start gap-3">
          
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-xs">
            <Send className="w-4 h-4 -rotate-12 ml-0.5" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-semibold text-slate-900 truncate">
                WhatsApp Otomatis · {currentStudent.parentName}
              </span>
              <span className="text-[10px] text-slate-400 shrink-0 font-mono">
                Baru saja
              </span>
            </div>

            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed bg-slate-50 p-2 rounded-lg border border-slate-100 font-sans">
              &quot;Ananda <strong className="text-slate-900">{currentStudent.name}</strong> telah hadir di sekolah ({currentStudent.classRoom}) pukul <strong className="text-indigo-600">{currentStudent.time}</strong>. Terima kasih.&quot;
            </p>
          </div>

        </div>
      </div>

      {/* 03. MINI BADGE: STATUS KEHADIRAN KELAS GURU */}
      <div className="bg-slate-50/90 rounded-lg px-3 py-2 border border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-medium text-slate-700">Wali Kelas {currentStudent.classRoom}</span>
        </div>
        <span className="font-semibold text-indigo-600 font-mono text-[11px]">
          34 / 36 Siswa Hadir (94%)
        </span>
      </div>

    </div>
  );
};
