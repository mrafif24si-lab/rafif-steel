export default function InputField({ label, type, name, value, onChange, placeholder, error }) {
  return (
    // mb-4 memberikan jarak antar grup input yang ideal
    <div className="mb-4 flex flex-col">
      <label className="text-slate-700 font-bold text-sm mb-1.5 ml-1">{label}</label>
      
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2.5 border rounded-xl outline-none transition-all duration-200 bg-white text-slate-800
          ${error ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-100" : "border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"}`}
      />
      
      {/* Container error tanpa min-height agar tidak memakan ruang saat kosong */}
      {error && (
        <p className="text-red-500 text-[11px] mt-1 ml-1 font-medium italic leading-none">
          {error}
        </p>
      )}
    </div>
  );
}