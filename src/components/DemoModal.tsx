import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Shield,
  RotateCcw,
  AlertCircle
} from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DemoProfile {
  id: string;
  name: string;
  category: 'Siswa' | 'Karyawan' | 'Anggota';
  institution: string;
  division: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const profiles: DemoProfile[] = [
    {
      id: 'TND-00812',
      name: 'Dzarel',
      category: 'Siswa',
      institution: 'SMK Negeri 1',
      division: 'Kelas XII TKJ 1',
    },
    {
      id: 'TND-00823',
      name: 'Azzam',
      category: 'Siswa',
      institution: 'SMK Negeri 1',
      division: 'Kelas XII TKJ 2',
    },
    {
      id: 'TND-00834',
      name: 'Labib',
      category: 'Siswa',
      institution: 'SMK Negeri 1',
      division: 'Kelas XII TKJ 1',
    },
  ];

  const [selectedProfile, setSelectedProfile] = useState<DemoProfile>(profiles[0]);
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'success'>('idle');
  const [scanProgress, setScanProgress] = useState(0);
  const [statusText, setStatusText] = useState('Posisikan wajah menghadap layar sensor');
  const [recordedTime, setRecordedTime] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setScanState('idle');
      setScanProgress(0);
      setStatusText('Posisikan wajah menghadap layar sensor');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStartScan = () => {
    setScanState('scanning');
    setScanProgress(10);
    setStatusText('Mendeteksi posisi wajah...');

    const now = new Date();
    const timeFormatted = `${String(now.getHours()).padStart(2, '0')}:${String(
      now.getMinutes()
    ).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')} WIB`;
    setRecordedTime(timeFormatted);

    setTimeout(() => {
      setScanProgress(45);
      setStatusText('Memvalidasi pola biometrik...');
    }, 500);

    setTimeout(() => {
      setScanProgress(85);
      setStatusText('Mencocokkan dengan data terdaftar...');
    }, 1100);

    setTimeout(() => {
      setScanProgress(100);
      setScanState('success');
      setStatusText('Verifikasi Selesai');
    }, 1600);
  };

  const handleReset = () => {
    setScanState('idle');
    setScanProgress(0);
    setStatusText('Posisikan wajah menghadap layar sensor');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-2xl shadow-xl max-w-xl w-full border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-indigo-600 flex items-center justify-center text-white">
              <Shield className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Simulasi Pemindaian Wajah TANDARA
              </h3>
              <p className="text-[11px] text-slate-500">
                Alur pengenalan wajah dan pencatatan presensi
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5">
          
          {/* Profile Choice (When Idle) */}
          {scanState === 'idle' && (
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 block">
                Pilih profil uji coba:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {profiles.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedProfile(p)}
                    className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                      selectedProfile.id === p.id
                        ? 'border-indigo-600 bg-indigo-50/60 text-indigo-950 font-semibold'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-[10px] text-indigo-600 font-mono uppercase">{p.category}</div>
                    <div className="text-xs truncate">{p.name}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Scanner View Box */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 flex flex-col items-center justify-center min-h-[220px] text-center relative">
            
            {/* Minimal Target Frame */}
            <div className="w-28 h-36 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center relative bg-white p-2">
              {/* Corner brackets */}
              <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-indigo-600" />
              <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-indigo-600" />
              <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-indigo-600" />
              <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-indigo-600" />

              {/* Neutral avatar silhouette placeholder */}
              <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 mb-1" />
              <div className="w-16 h-8 rounded-t-full bg-slate-100 border-t border-l border-r border-slate-200" />
            </div>

            {/* Scan Progress Bar & Message */}
            <div className="mt-4 space-y-1.5 w-full max-w-xs">
              {scanState === 'scanning' && (
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-indigo-600 h-full transition-all duration-200"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
              )}
              <p className="text-xs text-slate-600 font-medium">
                {statusText}
              </p>
            </div>

          </div>

          {/* SUCCESS RESULT CARD */}
          {scanState === 'success' && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 space-y-2.5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 stroke-[2.2]" />
                  <span className="text-xs font-bold text-emerald-900">
                    Demo Berhasil — Kehadiran Tercatat
                  </span>
                </div>
                <span className="text-xs font-mono font-medium text-emerald-800 bg-white px-2 py-0.5 rounded border border-emerald-200">
                  {recordedTime}
                </span>
              </div>

              <div className="bg-white rounded-lg p-3 border border-emerald-100 text-xs grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div>
                  <div className="text-[10px] text-slate-400">Nama</div>
                  <div className="font-semibold text-slate-900">{selectedProfile.name}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">ID Pengguna</div>
                  <div className="font-mono text-slate-700">{selectedProfile.id}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Unit / Divisi</div>
                  <div className="text-slate-800">{selectedProfile.division}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Status</div>
                  <div className="font-bold text-emerald-600">Hadir Tepat Waktu</div>
                </div>
              </div>
            </div>
          )}

          {/* Action Button Row */}
          <div className="pt-1">
            {scanState === 'idle' && (
              <button
                type="button"
                onClick={handleStartScan}
                className="w-full py-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg transition-colors cursor-pointer"
              >
                Mulai Pemindaian
              </button>
            )}

            {scanState === 'scanning' && (
              <button
                disabled
                className="w-full py-3 text-xs font-semibold text-slate-400 bg-slate-100 rounded-lg cursor-not-allowed"
              >
                Sedang Memproses...
              </button>
            )}

            {scanState === 'success' && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-1/2 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ulangi Simulasi</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors cursor-pointer"
                >
                  Selesai
                </button>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="flex items-start gap-2 text-[11px] text-slate-400 pt-1 border-t border-slate-100">
            <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <p>
              Simulasi interaktif frontend untuk keperluan presentasi TANDARA. Tidak mengakses webcam perangkat keras dan tidak menyimpan data biometrik riil.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
