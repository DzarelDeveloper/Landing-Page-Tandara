import React, { useState } from 'react';
import { Mail, CheckCircle2, Phone, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    message: '',
  });

  const contactEmail = 'kontak@tandara.id';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="kontak" className="py-20 md:py-24 bg-white/75 backdrop-blur-[1px] border-b border-slate-200/70">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-2">
            KONTAK
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Hubungi Tim TANDARA
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Punya pertanyaan mengenai implementasi, penyiapan terminal, atau presentasi teknis? Kami siap membantu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Kolom Kiri: Info Kontak Ringkas */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-xl border border-slate-200 bg-[#FAFAFC] space-y-4">
              <h3 className="text-sm font-bold text-slate-900">
                Informasi Kontak
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <a
                  href={`mailto:${contactEmail}?subject=Konsultasi%20TANDARA%20Absensi%20Wajah`}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-slate-200/80 hover:border-slate-300 transition-colors"
                >
                  <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400">Email Resmi</div>
                    <div className="font-semibold text-slate-800">{contactEmail}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-slate-200/80">
                  <Phone className="w-4 h-4 text-indigo-600 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400">Layanan WhatsApp</div>
                    <div className="font-semibold text-slate-800">+62 812-3456-7890</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-slate-200/80">
                  <Clock className="w-4 h-4 text-indigo-600 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400">Jam Operasional</div>
                    <div className="font-semibold text-slate-800">Senin – Jumat, 08:00 – 17:00 WIB</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed px-1">
              *TANDARA dapat disesuaikan untuk kebutuhan pilot project di laboratorium komputer sekolah atau kantor.
            </p>

          </div>

          {/* Kolom Kanan: Form Pesan Sederhana */}
          <div className="lg:col-span-7 bg-[#FAFAFC] rounded-xl p-6 sm:p-7 border border-slate-200">
            {formSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Pesan Berhasil Terkirim
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Terima kasih telah menghubungi kami. Tim kami akan segera menanggapi pertanyaan Anda melalui email.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', institution: '', message: '' });
                  }}
                  className="mt-2 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nama Lengkap <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Labib"
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Aktif <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@institusi.id"
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-indigo-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Institusi / Organisasi
                  </label>
                  <input
                    type="text"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="Contoh: SMA Negeri 1 / PT Sukses Bersama"
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Pesan / Pertanyaan <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan pertanyaan seputar fitur atau kebutuhan sistem..."
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-indigo-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg transition-colors cursor-pointer"
                >
                  Kirim Pesan
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
