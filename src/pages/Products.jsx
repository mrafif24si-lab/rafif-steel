import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from "../components/PageHeader";
import { FaSearch, FaFilter, FaFileDownload, FaEllipsisV, FaBoxOpen, FaTags } from 'react-icons/fa';

// Generate 30 Data JSON Produk Barbershop
const productsData = Array.from({ length: 30 }, (_, index) => {
  const categories = ['Hair Care', 'Shaving', 'Styling', 'Tools', 'Body Care'];
  const brands = ['Smith Pomade', 'Wahl Professional', 'Andis', 'The Shave Factory', 'Chief'];
  
  const products = [
    { title: 'Matte Clay Pomade', cat: 'Styling', brand: 'Smith Pomade', price: 120000 },
    { title: 'Wahl Cordless Senior', cat: 'Tools', brand: 'Wahl Professional', price: 2500000 },
    { title: 'Aftershave Cologne', cat: 'Shaving', brand: 'The Shave Factory', price: 85000 },
    { title: 'Hair Tonic Anti-Dandruff', cat: 'Hair Care', brand: 'Chief', price: 65000 },
    { title: 'Profoil Lithium Shaver', cat: 'Tools', brand: 'Andis', price: 1850000 },
  ];

  const baseProduct = products[index % products.length];

  return {
    id: (index + 1), // ID numerik untuk API dummyjson atau internal
    code: `PRD-${(index + 1).toString().padStart(4, '0')}`,
    title: `${baseProduct.title} Vol. ${Math.floor(index / 5) + 1}`,
    category: baseProduct.cat,
    brand: baseProduct.brand,
    price: baseProduct.price,
    stock: Math.floor(Math.random() * 50) + 5,
  };
});

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const formatIDR = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div id="products-page" className="flex-1 w-full pb-10 bg-gray-50 min-h-screen p-4 md:p-8 font-sans">
      
      <PageHeader title="Product Inventory" breadcrumb={["Dashboard", "Products List"]}>
        <div className="flex gap-3">
          <button className="hidden md:flex items-center gap-2 bg-white text-slate-600 px-4 py-2.5 rounded-xl border border-gray-200 font-bold text-sm hover:bg-gray-50 transition-all">
            <FaFileDownload /> Export CSV
          </button>
          <button className="bg-slate-800 text-white px-6 py-2.5 rounded-xl shadow-lg shadow-slate-200 hover:bg-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-bold flex items-center gap-2 text-sm">
            <span className="text-xl">+</span> Add Product
          </button>
        </div>
      </PageHeader>

      <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 mt-6">
        
        {/* Search and Filter */}
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
              <FaSearch />
            </span>
            <input 
              type="text" 
              placeholder="Cari Produk atau Kode..." 
              className="block w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-slate-800 transition-all outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 text-slate-500 bg-gray-100 px-4 py-2 rounded-xl text-xs font-bold hover:bg-gray-200 transition-all">
            <FaFilter /> Filter Category
          </button>
        </div>

        {/* Product Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 uppercase text-[11px] tracking-widest border-b border-gray-50">
                <th className="px-6 py-4 font-bold">Product</th>
                <th className="px-6 py-4 font-bold text-center">Category</th>
                <th className="px-6 py-4 font-bold">Brand</th>
                <th className="px-6 py-4 font-bold">Price</th>
                <th className="px-6 py-4 font-bold text-center">Stock</th>
                <th className="px-6 py-4 font-bold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {productsData.map((product) => (
                <tr key={product.id} className="group hover:bg-gray-50/50 transition-all duration-200">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center text-lg">
                        <FaBoxOpen />
                      </div>
                      <div className="flex flex-col">
                        {/* LINK KE DETAIL SESUAI INSTRUKSI DOSEN */}
                        <Link 
                          to={`/products/${product.id}`} 
                          className="text-sm font-black text-slate-800 hover:text-blue-600 transition-all"
                        >
                          {product.title}
                        </Link>
                        <span className="text-[10px] text-gray-400 font-bold tracking-wider">{product.code}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100">
                      <FaTags className="text-[9px]" /> {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-600">{product.brand}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-black text-slate-800">{formatIDR(product.price)}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-sm font-bold ${product.stock < 10 ? 'text-red-500' : 'text-slate-700'}`}>
                      {product.stock} <small className="text-gray-400 font-medium">pcs</small>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-gray-300 hover:text-slate-600 p-2 rounded-lg transition-all">
                      <FaEllipsisV />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}