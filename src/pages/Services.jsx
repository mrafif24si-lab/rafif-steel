import React from 'react';
import PageHeader from "../components/PageHeader";
import { FaCut, FaSprayCan, FaUserTie, FaHotTub, FaEdit, FaTrash, FaClock, FaShoppingCart } from 'react-icons/fa';

const servicesData = [
    {
        id: "SRV-001",
        name: "HairCut Signature",
        description: "Potongan rambut presisi dengan pencucian, pijat kepala ringan, dan styling premium.",
        duration: "45 Min",
        price: 75000,
        icon: <FaCut className="text-2xl text-slate-700" />,
        bgIcon: "bg-gradient-to-br from-slate-100 to-slate-200"
    },
    {
        id: "SRV-002",
        name: "Classic Shave",
        description: "Cukur kumis dan jenggot tradisional menggunakan handuk hangat dan krim khusus.",
        duration: "20 Min",
        price: 35000,
        icon: <FaUserTie className="text-2xl text-amber-600" />,
        bgIcon: "bg-gradient-to-br from-amber-50 to-amber-100"
    },
    {
        id: "SRV-003",
        name: "Hair Coloring",
        description: "Pewarnaan rambut profesional. Pilihan warna natural hingga warna fashion kekinian.",
        duration: "60 Min",
        price: 150000,
        icon: <FaSprayCan className="text-2xl text-indigo-600" />,
        bgIcon: "bg-gradient-to-br from-indigo-50 to-indigo-100"
    },
    {
        id: "SRV-004",
        name: "Gentleman Facial",
        description: "Perawatan kulit wajah khusus pria untuk membersihkan komedo dan menyegarkan kulit.",
        duration: "30 Min",
        price: 50000,
        icon: <FaHotTub className="text-2xl text-emerald-600" />,
        bgIcon: "bg-gradient-to-br from-emerald-50 to-emerald-100"
    }
];

export default function Services() {
    const formatIDR = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="flex-1 w-full pb-10 bg-gradient-to-br from-gray-50 to-slate-100 min-h-screen p-4 md:p-8 font-sans">
            
            <PageHeader title="Barbershop Services" breadcrumb={["Dashboard", "Services Catalog"]}>
                <button className="bg-slate-800 text-white px-6 py-2.5 rounded-xl shadow-lg shadow-slate-200 hover:bg-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-bold flex items-center gap-2 text-sm">
                    <span className="text-xl">+</span> Add Service
                </button>
            </PageHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
                {servicesData.map((service) => (
                    <div 
                        key={service.id} 
                        className="bg-white/80 backdrop-blur-sm p-6 rounded-[2rem] shadow-sm border border-white/50 hover:shadow-2xl transition-all duration-500 group flex flex-col relative overflow-hidden"
                    >
                        {/* Shimmer effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <div className={`w-14 h-14 rounded-2xl ${service.bgIcon} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                                {service.icon}
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <button className="p-2 text-gray-400 hover:text-blue-500 bg-white/90 hover:bg-blue-50 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
                                    <FaEdit />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-red-500 bg-white/90 hover:bg-red-50 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>

                        <div className="flex-grow relative z-10">
                            <div className="text-[10px] font-black text-gray-400 tracking-widest uppercase mb-1">{service.id}</div>
                            <h3 className="text-xl font-black text-slate-800 mb-2 group-hover:text-slate-600 transition-colors">{service.name}</h3>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
                                {service.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 relative z-10">
                            <div className="flex items-center gap-2 text-gray-400">
                                <FaClock className="text-sm" />
                                <span className="text-sm font-bold">{service.duration}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-lg font-black text-slate-800">
                                    {formatIDR(service.price)}
                                </div>
                                <button className="p-2 bg-slate-100 hover:bg-slate-800 hover:text-white rounded-xl transition-all duration-300 text-slate-600">
                                    <FaShoppingCart className="text-sm" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}