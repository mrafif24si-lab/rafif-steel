import React, { useState } from 'react';
import PageHeader from "../components/PageHeader";
import { FaSearch, FaEllipsisV, FaUserAlt, FaIdBadge } from 'react-icons/fa';

// Generate 30 Data JSON Customer Barbershop
const customersData = Array.from({ length: 30 }, (_, index) => ({
  id: `CUST-${(index + 1).toString().padStart(3, '0')}`,
  name: `Client HairCut ${index + 1}`,
  email: `client${index + 1}@email.com`,
  phone: `0812-3456-78${(index % 10).toString().padStart(2, '0')}`,
  loyalty: index % 3 === 0 ? 'Gold' : index % 2 === 0 ? 'Silver' : 'Bronze',
}));

export default function Customers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Palette warna avatar yang lebih "Masculine/Professional" untuk Barbershop
  const getAvatarColor = (name) => {
    const colors = ['bg-slate-700', 'bg-blue-800', 'bg-zinc-800', 'bg-slate-500', 'bg-indigo-900'];
    const charCode = name.charCodeAt(name.length - 1);
    return colors[charCode % colors.length];
  };

  return (
    <div id="customers-page" className="flex-1 w-full pb-10 bg-gray-50 min-h-screen p-4 md:p-8 font-sans">
      
      <PageHeader title="Customers Database" breadcrumb={["Dashboard", "Client List"]}>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-slate-800 text-white px-6 py-2.5 rounded-xl shadow-lg shadow-slate-200 hover:bg-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-bold flex items-center gap-2 text-sm"
        >
          <span className="text-xl">+</span> Add New Client
        </button>
      </PageHeader>

      <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 mt-6">
        
        {/* Toolbar Atas */}
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
              <FaSearch />
            </span>
            <input 
              type="text" 
              placeholder="Search by name or email..." 
              className="block w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-slate-800 transition-all outline-none font-medium"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">
            Total Database: <span className="text-slate-800">30 Clients</span>
          </div>
        </div>

        {/* Tabel */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 uppercase text-[10px] font-black tracking-[0.15em] border-b border-gray-50">
                <th className="px-6 py-5">Full Name</th>
                <th className="px-6 py-5">Contact Details</th>
                <th className="px-6 py-5">Client ID</th>
                <th className="px-6 py-5 text-center">Membership</th>
                <th className="px-6 py-5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {customersData.map((cust) => (
                <tr key={cust.id} className="group hover:bg-slate-50/50 transition-all duration-200">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${getAvatarColor(cust.name)} flex items-center justify-center text-white font-bold shadow-inner text-sm`}>
                        {cust.name.charAt(cust.name.length - 1).toUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-slate-800 group-hover:text-blue-600 transition-colors">{cust.name}</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase">Loyal Customer</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-600">{cust.email}</span>
                      <span className="text-xs text-gray-400">{cust.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                        <FaIdBadge className="text-slate-300 text-xs" />
                        <code className="text-[10px] font-black text-slate-400 tracking-tighter uppercase">{cust.id}</code>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider border ${
                      cust.loyalty === 'Gold' ? 'bg-amber-50 text-amber-600 border-amber-200' :
                      cust.loyalty === 'Silver' ? 'bg-slate-50 text-slate-500 border-slate-200' :
                      'bg-orange-50 text-orange-600 border-orange-200'
                    }`}>
                      <span className={`w-1 h-1 rounded-full mr-1.5 ${
                         cust.loyalty === 'Gold' ? 'bg-amber-500' :
                         cust.loyalty === 'Silver' ? 'bg-slate-400' :
                         'bg-orange-500'
                      }`}></span>
                      {cust.loyalty} Member
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-gray-300 hover:text-slate-800 transition-all p-2 rounded-xl">
                      <FaEllipsisV />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 bg-gray-50/20 border-t border-gray-50 flex justify-between items-center">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Page 01 of 03</span>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 bg-white border border-gray-200 rounded-lg text-[10px] font-black uppercase text-gray-300 cursor-not-allowed transition-all">Prev</button>
            <button className="px-4 py-1.5 bg-white border border-gray-200 rounded-lg text-[10px] font-black uppercase text-slate-800 hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all">Next</button>
          </div>
        </div>
      </div>

      {/* Modal Add Client */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md p-8 transform transition-all animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-gray-50 pb-5 mb-6">
                    <h2 className="text-2xl font-black text-slate-800 tracking-tight">Register New Client</h2>
                    <button onClick={() => setIsModalOpen(false)} className="text-gray-300 hover:text-red-500 transition-colors text-2xl font-bold">&times;</button>
                </div>
                
                <div className="space-y-5">
                    <div className="group">
                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-slate-800 transition-colors">Client Full Name</label>
                        <input type="text" placeholder="e.g. Rafif Zidane" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium outline-none focus:ring-2 focus:ring-slate-800 transition-all" />
                    </div>
                    <div className="group">
                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-slate-800 transition-colors">Email Address</label>
                        <input type="email" placeholder="client@email.com" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium outline-none focus:ring-2 focus:ring-slate-800 transition-all" />
                    </div>
                    <div className="group">
                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-slate-800 transition-colors">Phone Number</label>
                        <input type="text" placeholder="0812-xxxx-xxxx" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium outline-none focus:ring-2 focus:ring-slate-800 transition-all" />
                    </div>
                </div>

                <div className="flex flex-col gap-3 mt-10">
                    <button onClick={() => setIsModalOpen(false)} className="w-full py-4 bg-slate-800 text-white font-black rounded-2xl shadow-lg shadow-slate-100 hover:bg-slate-700 transition-all active:scale-95">Save Client Database</button>
                    <button onClick={() => setIsModalOpen(false)} className="w-full py-3 text-gray-400 font-bold hover:text-red-500 text-xs uppercase tracking-widest transition-all">Cancel & Discard</button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}