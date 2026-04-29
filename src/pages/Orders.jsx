import React, { useState } from 'react';
import PageHeader from "../components/PageHeader";
import { FaSearch, FaFilter, FaFileDownload, FaEllipsisV, FaShoppingBag, FaCut } from 'react-icons/fa';

// Generate 30 Data JSON Order untuk Barbershop
const ordersData = Array.from({ length: 30 }, (_, index) => {
  const statuses = ['Completed', 'Pending', 'Cancelled'];
  const services = [
    { name: 'HairCut Signature', price: 75000 },
    { name: 'Classic Shave', price: 35000 },
    { name: 'Hair Coloring', price: 150000 },
    { name: 'Gentleman Facial', price: 50000 },
    { name: 'Beard Trim', price: 30000 }
  ];
  
  const randomService = services[Math.floor(Math.random() * services.length)];
  
  return {
    id: `ORD-${(index + 1).toString().padStart(4, '0')}`,
    customerName: `Pelanggan ${index + 1}`,
    service: randomService.name,
    status: statuses[index % 3],
    totalPrice: randomService.price,
    orderDate: `2026-04-${(index % 28 + 1).toString().padStart(2, '0')}`,
  };
});

export default function Orders() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const formatIDR = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div id="orders-page" className="flex-1 w-full pb-10 bg-gray-50 min-h-screen p-4 md:p-8">
      
      <PageHeader title="Orders Management" breadcrumb={["Dashboard", "Orders List"]}>
        <div className="flex gap-3">
          <button className="hidden md:flex items-center gap-2 bg-white text-slate-600 px-4 py-2.5 rounded-xl border border-gray-200 font-bold text-sm hover:bg-gray-50 transition-all">
            <FaFileDownload /> Export Data
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-slate-800 text-white px-6 py-2.5 rounded-xl shadow-lg shadow-slate-200 hover:bg-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-bold flex items-center gap-2 text-sm"
          >
            <span className="text-xl">+</span> Create Order
          </button>
        </div>
      </PageHeader>

      <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 mt-6">
        
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
              <FaSearch />
            </span>
            <input 
              type="text" 
              placeholder="Cari ID Pesanan atau Pelanggan..." 
              className="block w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-slate-800 transition-all outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 text-slate-500 bg-gray-100 px-4 py-2 rounded-xl text-xs font-bold hover:bg-gray-200 transition-all">
            <FaFilter /> Filter Status
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 uppercase text-[11px] tracking-widest border-b border-gray-50">
                <th className="px-6 py-4 font-bold">Order ID</th>
                <th className="px-6 py-4 font-bold">Customer</th>
                <th className="px-6 py-4 font-bold">Service Type</th>
                <th className="px-6 py-4 font-bold">Price</th>
                <th className="px-6 py-4 font-bold text-center">Status</th>
                <th className="px-6 py-4 font-bold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {ordersData.map((order) => (
                <tr key={order.id} className="group hover:bg-gray-50/50 transition-all duration-200">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center text-xs">
                        <FaShoppingBag />
                      </div>
                      <span className="text-sm font-black text-slate-800 tracking-tight">{order.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-600">{order.customerName}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                        <FaCut className="text-xs text-slate-400" />
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-wide">{order.service}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-black text-slate-800">{formatIDR(order.totalPrice)}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-600 border border-green-200' :
                      order.status === 'Pending' ? 'bg-amber-100 text-amber-600 border border-amber-200' :
                      'bg-red-100 text-red-600 border border-red-200'
                    }`}>
                      {order.status}
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

