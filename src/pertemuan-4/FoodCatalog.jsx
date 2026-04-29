import React, { useState } from "react";
import foodData from "./foods.json";

export default function FoodCatalog() {
  // 1. State untuk View (Guest/Admin)
  const [isGuestView, setIsGuestView] = useState(true);

  // 2. Best Practice State untuk Search & 2 Filter (Sesuai Modul)
  const [dataForm, setDataForm] = useState({
    searchQuery: "",
    selectedCategory: "",
    selectedTag: "",
  });

  // Handler yang bisa dipakai semua input/select
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // Mengambil unique value untuk filter dropdown
  const categories = [...new Set(foodData.map((item) => item.category))];
  const allTags = [...new Set(foodData.flatMap((item) => item.tags))];

  // Logic Filtering
  const filteredFoods = foodData.filter((item) => {
    const _searchQuery = dataForm.searchQuery.toLowerCase();
    const matchSearch = item.name.toLowerCase().includes(_searchQuery);
    
    const matchCategory = dataForm.selectedCategory
      ? item.category === dataForm.selectedCategory
      : true;
      
    const matchTag = dataForm.selectedTag
      ? item.tags.includes(dataForm.selectedTag)
      : true;

    return matchSearch && matchCategory && matchTag;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header & Toggle View */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-800">
            🍔 Katalog Makanan
          </h1>
          <div className="flex bg-white rounded-lg shadow-sm border overflow-hidden">
            <button
              onClick={() => setIsGuestView(true)}
              className={`px-4 py-2 font-medium transition-colors ${
                isGuestView ? "bg-orange-500 text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Guest View
            </button>
            <button
              onClick={() => setIsGuestView(false)}
              className={`px-4 py-2 font-medium transition-colors ${
                !isGuestView ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Admin View
            </button>
          </div>
        </div>

        {/* Search & Filters Section */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="searchQuery"
            placeholder="Cari nama makanan..."
            value={dataForm.searchQuery}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <select
            name="selectedCategory"
            value={dataForm.selectedCategory}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Semua Kategori</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            name="selectedTag"
            value={dataForm.selectedTag}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Semua Tag</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>{tag}</option>
            ))}
          </select>
        </div>

        {/* Dynamic View Rendering */}
        {isGuestView ? (
          // --- GUEST VIEW (Card Grid) ---
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredFoods.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 flex flex-col">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {item.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    🔥 {item.nutrition.calories} Kalori | 🥩 Protein: {item.nutrition.protein}
                  </p>
                  
                  {/* Nested Mapping untuk Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-lg font-bold text-green-600">
                      Rp {item.price.toLocaleString("id-ID")}
                    </span>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${item.availability.status === 'Tersedia' ? 'bg-green-100 text-green-700' : item.availability.status === 'Terbatas' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                       {item.availability.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {filteredFoods.length === 0 && (
              <div className="col-span-full text-center py-12 text-gray-500">
                Data makanan tidak ditemukan.
              </div>
            )}
          </div>
        ) : (
          // --- ADMIN VIEW (Table) ---
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 border-b border-gray-200">
                    <th className="p-4 font-semibold text-sm">ID</th>
                    <th className="p-4 font-semibold text-sm">Preview</th>
                    <th className="p-4 font-semibold text-sm">Nama Menu</th>
                    <th className="p-4 font-semibold text-sm">Kategori</th>
                    <th className="p-4 font-semibold text-sm">Harga</th>
                    <th className="p-4 font-semibold text-sm">Nutrisi (Nested)</th>
                    <th className="p-4 font-semibold text-sm">Status (Nested)</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFoods.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-gray-600">{item.id}</td>
                      <td className="p-4">
                        <img src={item.imageUrl} alt={item.name} className="w-12 h-12 rounded object-cover shadow-sm"/>
                      </td>
                      <td className="p-4 font-medium text-gray-800">{item.name}</td>
                      <td className="p-4 text-gray-600">{item.category}</td>
                      <td className="p-4 text-gray-800 font-semibold">Rp {item.price.toLocaleString("id-ID")}</td>
                      <td className="p-4 text-gray-600 text-sm">
                        {item.nutrition.calories} Cal, {item.nutrition.protein}
                      </td>
                      <td className="p-4 text-gray-600 text-sm">
                        {item.availability.status} ({item.availability.prepTime})
                      </td>
                    </tr>
                  ))}
                  {filteredFoods.length === 0 && (
                    <tr>
                      <td colSpan="7" className="p-8 text-center text-gray-500">
                        Data makanan tidak ditemukan.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}