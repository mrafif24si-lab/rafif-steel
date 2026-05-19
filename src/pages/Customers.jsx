// // import React, { useState } from 'react';
// // import PageHeader from "../components/PageHeader";
// // import { FaSearch, FaEllipsisV, FaUserAlt, FaIdBadge } from 'react-icons/fa';

// // // Generate 30 Data JSON Customer Barbershop
// // const customersData = Array.from({ length: 30 }, (_, index) => ({
// //   id: `CUST-${(index + 1).toString().padStart(3, '0')}`,
// //   name: `Client HairCut ${index + 1}`,
// //   email: `client${index + 1}@email.com`,
// //   phone: `0812-3456-78${(index % 10).toString().padStart(2, '0')}`,
// //   loyalty: index % 3 === 0 ? 'Gold' : index % 2 === 0 ? 'Silver' : 'Bronze',
// // }));

// // export default function Customers() {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");

// //   // Palette warna avatar yang lebih "Masculine/Professional" untuk Barbershop
// //   const getAvatarColor = (name) => {
// //     const colors = ['bg-slate-700', 'bg-blue-800', 'bg-zinc-800', 'bg-slate-500', 'bg-indigo-900'];
// //     const charCode = name.charCodeAt(name.length - 1);
// //     return colors[charCode % colors.length];
// //   };

// //   return (
// //     <div id="customers-page" className="flex-1 w-full pb-10 bg-gray-50 min-h-screen p-4 md:p-8 font-sans">
      
// //       <PageHeader title="Customers Database" breadcrumb={["Dashboard", "Client List"]}>
// //         <button 
// //           onClick={() => setIsModalOpen(true)}
// //           className="bg-slate-800 text-white px-6 py-2.5 rounded-xl shadow-lg shadow-slate-200 hover:bg-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-bold flex items-center gap-2 text-sm"
// //         >
// //           <span className="text-xl">+</span> Add New Client
// //         </button>
// //       </PageHeader>

// //       <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 mt-6">
        
// //         {/* Toolbar Atas */}
// //         <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
// //           <div className="relative w-full md:w-96">
// //             <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
// //               <FaSearch />
// //             </span>
// //             <input 
// //               type="text" 
// //               placeholder="Search by name or email..." 
// //               className="block w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-slate-800 transition-all outline-none font-medium"
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //             />
// //           </div>
// //           <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">
// //             Total Database: <span className="text-slate-800">30 Clients</span>
// //           </div>
// //         </div>

// //         {/* Tabel */}
// //         <div className="overflow-x-auto">
// //           <table className="w-full text-left border-collapse">
// //             <thead>
// //               <tr className="text-gray-400 uppercase text-[10px] font-black tracking-[0.15em] border-b border-gray-50">
// //                 <th className="px-6 py-5">Full Name</th>
// //                 <th className="px-6 py-5">Contact Details</th>
// //                 <th className="px-6 py-5">Client ID</th>
// //                 <th className="px-6 py-5 text-center">Membership</th>
// //                 <th className="px-6 py-5 text-center">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-gray-50">
// //               {customersData.map((cust) => (
// //                 <tr key={cust.id} className="group hover:bg-slate-50/50 transition-all duration-200">
// //                   <td className="px-6 py-4">
// //                     <div className="flex items-center gap-3">
// //                       <div className={`w-10 h-10 rounded-full ${getAvatarColor(cust.name)} flex items-center justify-center text-white font-bold shadow-inner text-sm`}>
// //                         {cust.name.charAt(cust.name.length - 1).toUpperCase()}
// //                       </div>
// //                       <div className="flex flex-col">
// //                         <span className="text-sm font-black text-slate-800 group-hover:text-blue-600 transition-colors">{cust.name}</span>
// //                         <span className="text-[10px] font-bold text-gray-400 uppercase">Loyal Customer</span>
// //                       </div>
// //                     </div>
// //                   </td>
// //                   <td className="px-6 py-4">
// //                     <div className="flex flex-col">
// //                       <span className="text-sm font-medium text-slate-600">{cust.email}</span>
// //                       <span className="text-xs text-gray-400">{cust.phone}</span>
// //                     </div>
// //                   </td>
// //                   <td className="px-6 py-4">
// //                     <div className="flex items-center gap-2">
// //                         <FaIdBadge className="text-slate-300 text-xs" />
// //                         <code className="text-[10px] font-black text-slate-400 tracking-tighter uppercase">{cust.id}</code>
// //                     </div>
// //                   </td>
// //                   <td className="px-6 py-4 text-center">
// //                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider border ${
// //                       cust.loyalty === 'Gold' ? 'bg-amber-50 text-amber-600 border-amber-200' :
// //                       cust.loyalty === 'Silver' ? 'bg-slate-50 text-slate-500 border-slate-200' :
// //                       'bg-orange-50 text-orange-600 border-orange-200'
// //                     }`}>
// //                       <span className={`w-1 h-1 rounded-full mr-1.5 ${
// //                          cust.loyalty === 'Gold' ? 'bg-amber-500' :
// //                          cust.loyalty === 'Silver' ? 'bg-slate-400' :
// //                          'bg-orange-500'
// //                       }`}></span>
// //                       {cust.loyalty} Member
// //                     </span>
// //                   </td>
// //                   <td className="px-6 py-4 text-center">
// //                     <button className="text-gray-300 hover:text-slate-800 transition-all p-2 rounded-xl">
// //                       <FaEllipsisV />
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Pagination */}
// //         <div className="p-6 bg-gray-50/20 border-t border-gray-50 flex justify-between items-center">
// //           <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Page 01 of 03</span>
// //           <div className="flex gap-2">
// //             <button className="px-4 py-1.5 bg-white border border-gray-200 rounded-lg text-[10px] font-black uppercase text-gray-300 cursor-not-allowed transition-all">Prev</button>
// //             <button className="px-4 py-1.5 bg-white border border-gray-200 rounded-lg text-[10px] font-black uppercase text-slate-800 hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all">Next</button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Modal Add Client */}
// //       {isModalOpen && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
// //             <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md p-8 transform transition-all animate-fade-in-up">
// //                 <div className="flex justify-between items-center border-b border-gray-50 pb-5 mb-6">
// //                     <h2 className="text-2xl font-black text-slate-800 tracking-tight">Register New Client</h2>
// //                     <button onClick={() => setIsModalOpen(false)} className="text-gray-300 hover:text-red-500 transition-colors text-2xl font-bold">&times;</button>
// //                 </div>
                
// //                 <div className="space-y-5">
// //                     <div className="group">
// //                         <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-slate-800 transition-colors">Client Full Name</label>
// //                         <input type="text" placeholder="e.g. Rafif Zidane" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium outline-none focus:ring-2 focus:ring-slate-800 transition-all" />
// //                     </div>
// //                     <div className="group">
// //                         <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-slate-800 transition-colors">Email Address</label>
// //                         <input type="email" placeholder="client@email.com" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium outline-none focus:ring-2 focus:ring-slate-800 transition-all" />
// //                     </div>
// //                     <div className="group">
// //                         <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-slate-800 transition-colors">Phone Number</label>
// //                         <input type="text" placeholder="0812-xxxx-xxxx" className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-medium outline-none focus:ring-2 focus:ring-slate-800 transition-all" />
// //                     </div>
// //                 </div>

// //                 <div className="flex flex-col gap-3 mt-10">
// //                     <button onClick={() => setIsModalOpen(false)} className="w-full py-4 bg-slate-800 text-white font-black rounded-2xl shadow-lg shadow-slate-100 hover:bg-slate-700 transition-all active:scale-95">Save Client Database</button>
// //                     <button onClick={() => setIsModalOpen(false)} className="w-full py-3 text-gray-400 font-bold hover:text-red-500 text-xs uppercase tracking-widest transition-all">Cancel & Discard</button>
// //                 </div>
// //             </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// import React, { useState } from 'react';
// import PageHeader from "../components/PageHeader";
// import Button from "../components/Button";
// import Badge from "../components/Badge";
// import Modal from "../components/Modal";
// import InputField from "../components/InputField";
// import { FaSearch, FaEllipsisV, FaIdBadge } from 'react-icons/fa';

// const customersData = Array.from({ length: 30 }, (_, index) => ({
//   id: `CUST-${(index + 1).toString().padStart(3, '0')}`,
//   name: `Client HairCut ${index + 1}`,
//   email: `client${index + 1}@email.com`,
//   phone: `0812-3456-78${(index % 10).toString().padStart(2, '0')}`,
//   loyalty: index % 3 === 0 ? 'Gold' : index % 2 === 0 ? 'Silver' : 'Bronze',
// }));

// export default function Customers() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const getBadgeType = (loyalty) => {
//     if (loyalty === 'Gold') return 'success';
//     if (loyalty === 'Silver') return 'secondary';
//     return 'warning';
//   };

//   return (
//     <div className="flex-1 w-full pb-10 bg-gray-50 min-h-screen p-4 md:p-8">
//       <PageHeader title="Customers Database" breadcrumb={["Dashboard", "Client List"]}>
//         <Button type="dark" onClick={() => setIsModalOpen(true)} className="shadow-lg shadow-slate-200">
//           + Add New Client
//         </Button>
//       </PageHeader>

//       <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mt-6">
//         <div className="p-6 border-b flex justify-between items-center">
//           <div className="relative w-96">
//             <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input type="text" placeholder="Search..." className="pl-11 pr-4 py-3 bg-gray-50 rounded-2xl w-full" onChange={(e) => setSearchTerm(e.target.value)} />
//           </div>
//           <span className="text-xs text-gray-400">Total: 30 Clients</span>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50">
//               <tr><th className="px-6 py-4 text-left">Name</th><th>Contact</th><th>ID</th><th>Membership</th><th></th></tr>
//             </thead>
//             <tbody>
//               {customersData.map(cust => (
//                 <tr key={cust.id} className="border-b">
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white">{cust.name.charAt(cust.name.length-1)}</div>
//                       <span className="font-semibold">{cust.name}</span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">{cust.email}<br/><span className="text-xs">{cust.phone}</span></td>
//                   <td className="px-6 py-4"><code>{cust.id}</code></td>
//                   <td className="px-6 py-4"><Badge type={getBadgeType(cust.loyalty)}>{cust.loyalty} Member</Badge></td>
//                   <td className="px-6 py-4"><button className="text-gray-400"><FaEllipsisV /></button></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Register New Client">
//         <InputField label="Full Name" name="name" placeholder="Rafif Zidane" />
//         <InputField label="Email" type="email" name="email" placeholder="client@email.com" />
//         <InputField label="Phone" name="phone" placeholder="0812-xxxx-xxxx" />
//         <div className="flex gap-3 mt-4">
//           <Button type="primary" onClick={() => setIsModalOpen(false)}>Save</Button>
//           <Button type="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
//         </div>
//       </Modal>
//     </div>
//   );
// }

import React, { useState } from 'react';
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Modal from "../components/Modal";
import InputField from "../components/InputField";
import { FaSearch, FaEllipsisV, FaIdBadge, FaCrown, FaStar, FaMedal } from 'react-icons/fa';

const customersData = Array.from({ length: 30 }, (_, index) => ({
  id: `CUST-${(index + 1).toString().padStart(3, '0')}`,
  name: `Client HairCut ${index + 1}`,
  email: `client${index + 1}@email.com`,
  phone: `0812-3456-78${(index % 10).toString().padStart(2, '0')}`,
  loyalty: index % 3 === 0 ? 'Gold' : index % 2 === 0 ? 'Silver' : 'Bronze',
  visits: Math.floor(Math.random() * 30) + 1,
}));

export default function Customers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getBadgeType = (loyalty) => {
    if (loyalty === 'Gold') return 'success';
    if (loyalty === 'Silver') return 'secondary';
    return 'warning';
  };

  const getLoyaltyIcon = (loyalty) => {
    switch(loyalty) {
      case 'Gold': return <FaCrown className="text-yellow-500" />;
      case 'Silver': return <FaStar className="text-gray-400" />;
      default: return <FaMedal className="text-amber-700" />;
    }
  };

  return (
    <div className="flex-1 w-full pb-10 bg-gradient-to-br from-gray-50 to-slate-100 min-h-screen p-4 md:p-8">
      <PageHeader title="Customers Database" breadcrumb={["Dashboard", "Client List"]}>
        <Button 
          type="dark" 
          onClick={() => setIsModalOpen(true)} 
          className="shadow-lg shadow-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
        >
          + Add New Client
        </Button>
      </PageHeader>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/50 mt-6 transition-all duration-300 hover:shadow-2xl">
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="relative w-full sm:w-96 group">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-slate-600 transition-colors" />
            <input
              type="text"
              placeholder="Cari nama atau email..."
              className="pl-12 pr-4 py-3 bg-gray-50 rounded-2xl w-full outline-none focus:ring-2 focus:ring-slate-200 transition-all duration-300 placeholder:text-gray-400"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm bg-gray-50 px-4 py-2 rounded-2xl">
              <FaIdBadge className="text-slate-500" />
              <span className="font-medium">30</span> clients
            </div>
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-yellow-400" title="Gold"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300" title="Silver"></span>
              <span className="w-3 h-3 rounded-full bg-amber-700" title="Bronze"></span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-slate-50">
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Membership</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Visits</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {customersData.map(cust => (
                <tr 
                  key={cust.id} 
                  className="border-b border-gray-50 hover:bg-slate-50 transition-all duration-200 group relative"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-white font-bold shadow-md">
                          {cust.name.charAt(0)}
                        </div>
                        {cust.loyalty === 'Gold' && (
                          <span className="absolute -bottom-0.5 -right-0.5 bg-yellow-400 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                            <FaCrown className="text-[8px] text-white" />
                          </span>
                        )}
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700 block">{cust.name}</span>
                        <span className="text-xs text-gray-400">Member since 2024</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-slate-600">{cust.email}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{cust.phone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <code className="bg-gray-100 px-2 py-1 rounded-md text-xs font-mono text-slate-600">
                      {cust.id}
                    </code>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Badge type={getBadgeType(cust.loyalty)}>
                        <span className="flex items-center gap-1.5">
                          {getLoyaltyIcon(cust.loyalty)}
                          {cust.loyalty} Member
                        </span>
                      </Badge>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          cust.loyalty === 'Gold' ? 'bg-yellow-400 w-full' :
                          cust.loyalty === 'Silver' ? 'bg-gray-400 w-2/3' :
                          'bg-amber-600 w-1/3'
                        }`} 
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-slate-700">{cust.visits}</span>
                    <span className="text-xs text-gray-400 ml-1">visits</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors group/btn">
                        <FaEllipsisV className="text-gray-400 group-hover/btn:text-slate-600 transition-colors" />
                      </button>
                      {/* Quick edit dropdown */}
                      <div className="absolute right-0 mt-8 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-50">View Profile</button>
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-50">Edit</button>
                        <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">Delete</button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Register New Client">
        <div className="space-y-4">
          <InputField label="Full Name" name="name" placeholder="Rafif Zidane" />
          <InputField label="Email" type="email" name="email" placeholder="client@email.com" />
          <InputField label="Phone" name="phone" placeholder="0812-xxxx-xxxx" />
          <div className="flex gap-3 mt-6 pt-4 border-t">
            <Button type="primary" onClick={() => setIsModalOpen(false)} className="flex-1">Save Client</Button>
            <Button type="secondary" onClick={() => setIsModalOpen(false)} className="flex-1">Cancel</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}