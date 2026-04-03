import { useState, useEffect } from "react";
import InputField from "../pertemuan-3/components/InputField";
import SelectField from "../pertemuan-3/components/SelectField";

export default function PendaftaranForm() {


  const [formData, setFormData] = useState({
    nama: "", nim: "", ipk: "", role: "", pengalaman: ""
  });

  const [errors, setErrors]           = useState({});
  const [touched, setTouched]         = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formData]);

  // =============================================
  // FUNGSI VALIDASI - Conditional Rendering
  // =============================================
  const validateForm = () => {
    let newErrors = {};

    if (!formData.nama)                   newErrors.nama = "Nama wajib diisi!";
    else if (/\d/.test(formData.nama))    newErrors.nama = "Nama tidak boleh mengandung angka!";
    else if (formData.nama.length < 3)    newErrors.nama = "Nama minimal 3 karakter!";

    if (!formData.nim)                    newErrors.nim = "NIM wajib diisi!";
    else if (!/^\d+$/.test(formData.nim)) newErrors.nim = "NIM hanya boleh berisi angka!";
    else if (formData.nim.length !== 10)  newErrors.nim = "NIM harus tepat 10 digit!";

    if (!formData.ipk)                    newErrors.ipk = "IPK wajib diisi!";
    else if (isNaN(formData.ipk))         newErrors.ipk = "Gunakan titik untuk desimal (Contoh: 3.85)!";
    else if (parseFloat(formData.ipk) < 0 || parseFloat(formData.ipk) > 4.00)
                                          newErrors.ipk = "IPK harus di rentang 0.00 - 4.00!";

    if (!formData.role)       newErrors.role = "Role UI/UX wajib dipilih!";
    if (!formData.pengalaman) newErrors.pengalaman = "Lama pengalaman wajib dipilih!";

    setErrors(newErrors);

    const allFilled = formData.nama && formData.nim && formData.ipk && formData.role && formData.pengalaman;
    setIsFormValid(allFilled && Object.keys(newErrors).length === 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setTouched({ ...touched, [name]: true });
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) setIsSubmitted(true);
  };

  const roleOptions = [
    { value: "UI Designer",        label: "🎨 UI Designer" },
    { value: "UX Researcher",      label: "🔍 UX Researcher" },
    { value: "Frontend Developer", label: "💻 Frontend Developer" }
  ];

  const pengalamanOptions = [
    { value: "Kurang dari 1 Tahun", label: "🌱 Kurang dari 1 Tahun" },
    { value: "1 - 2 Tahun",         label: "📘 1 - 2 Tahun" },
    { value: "Lebih dari 2 Tahun",  label: "🚀 Lebih dari 2 Tahun" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50 flex items-center justify-center p-6 font-sans overflow-hidden relative">

      <div className="absolute top-0 -left-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 -right-10 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

      <div
        className="bg-white rounded-3xl shadow-xl border border-slate-100 w-full max-w-md relative z-10"
        style={{ padding: "36px 32px" }}
      >

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-teal-500 shadow-lg mb-3">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 3L4.5 6.75v6.75L9.75 18l5.25-3.25v-6.75L9.75 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.25 12.75L19.5 9.5 14.25 6.25" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800 mb-1">Join Creative Crew</h2>
          <p className="text-slate-500 text-sm">Isi data diri untuk bergabung bersama tim UI/UX</p>
        </div>

        {/* =============================================
            FORM VIEW - selalu tampil
            ============================================= */}
        <form onSubmit={handleSubmit}>

          {/* REUSABLE COMPONENT - InputField dipakai 3x */}
          <InputField
            label="Nama Lengkap" type="text" name="nama" placeholder="cth: Aditya Pratama"
            value={formData.nama} onChange={handleChange}
            error={touched.nama ? errors.nama : null}
          />
          <InputField
            label="NIM Mahasiswa" type="text" name="nim" placeholder="Masukkan 10 digit NIM"
            value={formData.nim} onChange={handleChange}
            error={touched.nim ? errors.nim : null}
          />
          <InputField
            label="IPK Terakhir" type="text" name="ipk" placeholder="cth: 3.85"
            value={formData.ipk} onChange={handleChange}
            error={touched.ipk ? errors.ipk : null}
          />

          {/* REUSABLE COMPONENT - SelectField dipakai 2x */}
          <SelectField
            label="Role yang Diminati" name="role" options={roleOptions}
            value={formData.role} onChange={handleChange}
            error={touched.role ? errors.role : null}
          />
          <SelectField
            label="Pengalaman Tools (Figma/Adobe)" name="pengalaman" options={pengalamanOptions}
            value={formData.pengalaman} onChange={handleChange}
            error={touched.pengalaman ? errors.pengalaman : null}
          />

          {/* Tombol Submit - Conditional Rendering */}
          <button
            type="submit"
            disabled={!isFormValid}
            style={{
              width: "100%", padding: "13px", marginTop: "8px",
              border: "none", borderRadius: "12px",
              fontWeight: "700", fontSize: "15px",
              cursor: isFormValid ? "pointer" : "not-allowed",
              transition: "all 0.3s ease",
              background: isFormValid ? "linear-gradient(to right, #06b6d4, #14b8a6)" : "#e2e8f0",
              color: isFormValid ? "white" : "#94a3b8",
              boxShadow: isFormValid ? "0 4px 15px rgba(6,182,212,0.35)" : "none"
            }}
          >
            {isFormValid ? "✨ Kirim Pendaftaran" : "📝 Lengkapi Form Terlebih Dahulu"}
          </button>
        </form>

        {/* =============================================
            SUCCESS VIEW - Conditional Rendering
            Hanya muncul di bawah form setelah submit
            ============================================= */}
        {isSubmitted && (
          <div style={{
            marginTop: "28px",
            borderTop: "2px dashed #e2e8f0",
            paddingTop: "24px"
          }}>

            {/* Badge sukses - center */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: "8px", background: "#f0fdf4", border: "1px solid #bbf7d0",
              borderRadius: "999px", padding: "8px 16px", marginBottom: "20px"
            }}>
              <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="#16a34a" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
              </svg>
              <span style={{ color: "#16a34a", fontWeight: "600", fontSize: "14px" }}>
                Pendaftaran Berhasil!
              </span>
            </div>

            <h3 className="text-xl font-extrabold text-slate-800 mb-4">📋 Ringkasan Peserta</h3>

            {/* Data ringkasan dari State formData */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                { label: "Nama Lengkap", value: formData.nama },
                { label: "NIM",          value: formData.nim },
                { label: "IPK Terakhir", value: formData.ipk },
                { label: "Role",         value: formData.role },
                { label: "Pengalaman",   value: formData.pengalaman },
              ].map((item, i, arr) => (
                <div key={item.label} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "11px 0",
                  borderBottom: i < arr.length - 1 ? "1px solid #f1f5f9" : "none"
                }}>
                  <span className="text-slate-500 text-sm">{item.label}</span>
                  <span className="text-slate-800 font-bold text-sm">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Tombol Reset */}
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ nama: "", nim: "", ipk: "", role: "", pengalaman: "" });
                setTouched({});
              }}
              style={{
                width: "100%", marginTop: "20px", padding: "12px",
                borderRadius: "12px", border: "1.5px solid #e2e8f0",
                background: "white", color: "#475569",
                fontWeight: "600", fontSize: "14px", cursor: "pointer"
              }}
            >
              🔄 Reset & Isi Ulang
            </button>
          </div>
        )}

      </div>
    </div>
  );
}


