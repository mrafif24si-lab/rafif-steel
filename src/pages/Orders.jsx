// import React, { useState } from 'react';
// import PageHeader from "../components/PageHeader";
// import { FaSearch, FaFilter, FaFileDownload, FaEllipsisV, FaShoppingBag, FaCut } from 'react-icons/fa';

// // Generate 30 Data JSON Order untuk Barbershop
// const ordersData = Array.from({ length: 30 }, (_, index) => {
//   const statuses = ['Completed', 'Pending', 'Cancelled'];
//   const services = [
//     { name: 'HairCut Signature', price: 75000 },
//     { name: 'Classic Shave', price: 35000 },
//     { name: 'Hair Coloring', price: 150000 },
//     { name: 'Gentleman Facial', price: 50000 },
//     { name: 'Beard Trim', price: 30000 }
//   ];
  
//   const randomService = services[Math.floor(Math.random() * services.length)];
  
//   return {
//     id: `ORD-${(index + 1).toString().padStart(4, '0')}`,
//     customerName: `Pelanggan ${index + 1}`,
//     service: randomService.name,
//     status: statuses[index % 3],
//     totalPrice: randomService.price,
//     orderDate: `2026-04-${(index % 28 + 1).toString().padStart(2, '0')}`,
//   };
// });

// export default function Orders() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const formatIDR = (amount) => {
//     return new Intl.NumberFormat('id-ID', {
//       style: 'currency',
//       currency: 'IDR',
//       minimumFractionDigits: 0,
//     }).format(amount);
//   };

//   return (
//     <div id="orders-page" className="flex-1 w-full pb-10 bg-gray-50 min-h-screen p-4 md:p-8">
      
//       <PageHeader title="Orders Management" breadcrumb={["Dashboard", "Orders List"]}>
//         <div className="flex gap-3">
//           <button className="hidden md:flex items-center gap-2 bg-white text-slate-600 px-4 py-2.5 rounded-xl border border-gray-200 font-bold text-sm hover:bg-gray-50 transition-all">
//             <FaFileDownload /> Export Data
//           </button>
//           <button 
//             onClick={() => setIsModalOpen(true)}
//             className="bg-slate-800 text-white px-6 py-2.5 rounded-xl shadow-lg shadow-slate-200 hover:bg-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-bold flex items-center gap-2 text-sm"
//           >
//             <span className="text-xl">+</span> Create Order
//           </button>
//         </div>
//       </PageHeader>

//       <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 mt-6">
        
//         <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
//           <div className="relative w-full md:w-96">
//             <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
//               <FaSearch />
//             </span>
//             <input 
//               type="text" 
//               placeholder="Cari ID Pesanan atau Pelanggan..." 
//               className="block w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-slate-800 transition-all outline-none"
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <button className="flex items-center gap-2 text-slate-500 bg-gray-100 px-4 py-2 rounded-xl text-xs font-bold hover:bg-gray-200 transition-all">
//             <FaFilter /> Filter Status
//           </button>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="text-gray-400 uppercase text-[11px] tracking-widest border-b border-gray-50">
//                 <th className="px-6 py-4 font-bold">Order ID</th>
//                 <th className="px-6 py-4 font-bold">Customer</th>
//                 <th className="px-6 py-4 font-bold">Service Type</th>
//                 <th className="px-6 py-4 font-bold">Price</th>
//                 <th className="px-6 py-4 font-bold text-center">Status</th>
//                 <th className="px-6 py-4 font-bold text-center">Action</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-50">
//               {ordersData.map((order) => (
//                 <tr key={order.id} className="group hover:bg-gray-50/50 transition-all duration-200">
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center text-xs">
//                         <FaShoppingBag />
//                       </div>
//                       <span className="text-sm font-black text-slate-800 tracking-tight">{order.id}</span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <span className="text-sm font-medium text-gray-600">{order.customerName}</span>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-2">
//                         <FaCut className="text-xs text-slate-400" />
//                         <span className="text-xs text-slate-500 font-bold uppercase tracking-wide">{order.service}</span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <span className="text-sm font-black text-slate-800">{formatIDR(order.totalPrice)}</span>
//                   </td>
//                   <td className="px-6 py-4 text-center">
//                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
//                       order.status === 'Completed' ? 'bg-green-100 text-green-600 border border-green-200' :
//                       order.status === 'Pending' ? 'bg-amber-100 text-amber-600 border border-amber-200' :
//                       'bg-red-100 text-red-600 border border-red-200'
//                     }`}>
//                       {order.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-center">
//                     <button className="text-gray-300 hover:text-slate-600 p-2 rounded-lg transition-all">
//                       <FaEllipsisV />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { FaSearch, FaFilter, FaFileDownload, FaEllipsisV, FaEye, FaEdit, FaTrash } from 'react-icons/fa';

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
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Completed': return '✅';
      case 'Pending': return '⏳';
      case 'Cancelled': return '❌';
      default: return '📋';
    }
  };

  return (
    <div className="flex-1 w-full pb-10 bg-gradient-to-br from-gray-50 to-slate-100 min-h-screen p-4 md:p-8">
      <PageHeader title="Orders Management" breadcrumb={["Dashboard", "Orders List"]}>
        <div className="flex gap-3">
          <Button type="secondary" className="flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow duration-300">
            <FaFileDownload /> Export Data
          </Button>
          <Button type="dark" className="shadow-lg shadow-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
            + Create Order
          </Button>
        </div>
      </PageHeader>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden mt-6 border border-white/50 transition-all duration-300 hover:shadow-2xl">
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="relative w-full sm:w-96 group">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-slate-600 transition-colors" />
            <input
              placeholder="Cari ID atau Pelanggan..."
              className="pl-12 pr-4 py-3 bg-gray-50 rounded-2xl w-full outline-none focus:ring-2 focus:ring-slate-200 transition-all duration-300 placeholder:text-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Button type="secondary" className="flex gap-2 items-center shadow-sm hover:bg-gray-100 transition-colors">
              <FaFilter className="text-gray-500" /> Filter
            </Button>
            <div className="flex items-center text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-2xl">
              <span className="font-medium">30</span> orders
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-slate-50">
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {ordersData.map((order) => (
                <tr 
                  key={order.id} 
                  className="border-b border-gray-50 hover:bg-slate-50 transition-all duration-200 group relative"
                >
                  <td className="px-6 py-4 font-mono text-sm font-semibold text-slate-700">
                    {order.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                        {order.customerName.charAt(0)}
                      </div>
                      <span className="font-medium text-slate-700">{order.customerName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{order.service}</td>
                  <td className="px-6 py-4 text-slate-500 text-sm">{order.orderDate}</td>
                  <td className="px-6 py-4 font-bold text-slate-800">
                    Rp {order.totalPrice.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <Badge 
                      type={
                        order.status === 'Completed' ? 'success' : 
                        order.status === 'Pending' ? 'warning' : 'danger'
                      }
                    >
                      <span className="flex items-center gap-1.5">
                        <span>{getStatusIcon(order.status)}</span>
                        {order.status}
                      </span>
                    </Badge>
                  </td>
                  <td className="px-6 py-4 relative">
                    <div className="flex justify-end">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors group/btn">
                        <FaEllipsisV className="text-gray-400 group-hover/btn:text-slate-600 transition-colors" />
                      </button>
                      {/* Dropdown aksi */}
                      <div className="absolute right-0 top-12 mt-1 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-50 flex items-center gap-2">
                          <FaEye className="text-gray-400" /> View Details
                        </button>
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-50 flex items-center gap-2">
                          <FaEdit className="text-gray-400" /> Edit Order
                        </button>
                        <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2">
                          <FaTrash className="text-red-400" /> Cancel Order
                        </button>
                      </div>
                    </div>
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