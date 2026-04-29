// import React, { useState } from 'react';

// export default function PageHeader(props) {
//     // State untuk mengontrol Modal Pop-up
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     return (
//         <>
//             <div id="pageheader-container" className="flex items-center justify-between p-4 mb-2">
//                 <div id="pageheader-left" className="flex flex-col">
//                     <span id="page-title" className="text-2xl font-bold text-gray-800">
//                         {props.title}
//                     </span>
//                     <div id="breadcrumb-links" className="flex items-center font-medi{um space-x-1 mt-1 text-xs text-gray-400">
//                         <span className="cursor-pointer hover:text-hijau transition">{props.title}</span>
//                         <span className="text-gray-600 font-bold">/ {props.title}Very Detail</span>
//                     </div>
//                 </div>

//                 {/* Tombol yang akan membuka Modal */}
//                 <div id="action-button">
//                     <button 
//                         onClick={() => setIsModalOpen(true)}
//                         className="bg-hijau text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-emerald-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 font-bold"
//                     >
//                         + Add Button
//                     </button>
//                 </div>
//             </div>

//             {/* IMPROVISASI: Modal Pop-up Overlay */}
//             {isModalOpen && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm transition-opacity">
//                     <div className="bg-white rounded-2xl shadow-2xl w-96 p-6 transform transition-all scale-100 animate-fade-in-up">
//                         <div className="flex justify-between items-center border-b pb-3 mb-4">
//                             <h2 className="text-xl font-bold text-gray-800">Add New Order</h2>
//                             <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500 font-bold text-lg">&times;</button>
//                         </div>
                        
//                         <div className="space-y-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
//                                 <input type="text" placeholder="e.g. John Doe" className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-hijau transition" />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Menu Category</label>
//                                 <select className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-hijau">
//                                     <option>Food</option>
//                                     <option>Beverage</option>
//                                     <option>Dessert</option>
//                                 </select>
//                             </div>
//                         </div>

//                         <div className="flex justify-end space-x-3 mt-6">
//                             <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition">Cancel</button>
//                             <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-hijau text-white font-bold rounded-lg shadow-md hover:bg-emerald-600 transition">Save Data</button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

import React from 'react';

export default function PageHeader({ title, breadcrumb, children }) {
    // Mengecek apakah breadcrumb array atau string
    const displayBreadcrumb = Array.isArray(breadcrumb) 
        ? breadcrumb.join(' / ') 
        : breadcrumb;

    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4 mb-2">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-2xl font-bold text-gray-800">
                    {title}
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-1 mt-1 text-xs text-gray-400">
                    <span className="cursor-pointer hover:text-hijau transition">Dashboard</span>
                    <span className="text-gray-600 font-bold">/ {displayBreadcrumb}</span>
                </div>
            </div>

            {/* Tempat untuk merender Tombol "Add Orders" / "Add Customer" */}
            <div id="action-button">
                {children}
            </div>
        </div>
    );
}