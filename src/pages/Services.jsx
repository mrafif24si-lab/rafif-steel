import React from 'react';
import PageHeader from "../components/PageHeader";
import { FaCut, FaSprayCan, FaUserTie, FaHotTub, FaEdit, FaTrash, FaClock } from 'react-icons/fa';

// Data Dummy Layanan HairCut Barbershop
const servicesData = [
    {
        id: "SRV-001",
        name: "HairCut Signature",
        description: "Potongan rambut presisi dengan pencucian, pijat kepala ringan, dan styling premium.",
        duration: "45 Min",
        price: 75000,
        icon: <FaCut className="text-2xl text-slate-700" />,
        bgIcon: "bg-slate-100"
    },
    {
        id: "SRV-002",
        name: "Classic Shave",
        description: "Cukur kumis dan jenggot tradisional menggunakan handuk hangat dan krim khusus.",
        duration: "20 Min",
        price: 35000,
        icon: <FaUserTie className="text-2xl text-amber-600" />,
        bgIcon: "bg-amber-50"
    },
    {
        id: "SRV-003",
        name: "Hair Coloring",
        description: "Pewarnaan rambut profesional. Pilihan warna natural hingga warna fashion kekinian.",
        duration: "60 Min",
        price: 150000,
        icon: <FaSprayCan className="text-2xl text-indigo-600" />,
        bgIcon: "bg-indigo-50"
    },
    {
        id: "SRV-004",
        name: "Gentleman Facial",
        description: "Perawatan kulit wajah khusus pria untuk membersihkan komedo dan menyegarkan kulit.",
        duration: "30 Min",
        price: 50000,
        icon: <FaHotTub className="text-2xl text-emerald-600" />,
        bgIcon: "bg-emerald-50"
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
        <div className="flex-1 w-full pb-10 bg-gray-50 min-h-screen p-4 md:p-8 font-sans">
            
            <PageHeader title="Barbershop Services" breadcrumb={["Dashboard", "Services Catalog"]}>
                <button className="bg-slate-800 text-white px-6 py-2.5 rounded-xl shadow-lg shadow-slate-200 hover:bg-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-bold flex items-center gap-2 text-sm">
                    <span className="text-xl">+</span> Add Service
                </button>
            </PageHeader>

            {/* Grid Layout untuk Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
                {servicesData.map((service) => (
                    <div key={service.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                        
                        {/* Card Header: Icon & Action Buttons */}
                        <div className="flex justify-between items-start mb-4">
                            <div className={`w-14 h-14 rounded-2xl ${service.bgIcon} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                                {service.icon}
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="p-2 text-gray-400 hover:text-blue-500 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors">
                                    <FaEdit />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 rounded-lg transition-colors">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>

                        {/* Card Body: Title & Description */}
                        <div className="flex-grow">
                            <div className="text-[10px] font-black text-gray-400 tracking-widest uppercase mb-1">{service.id}</div>
                            <h3 className="text-xl font-black text-slate-800 mb-2 group-hover:text-slate-600 transition-colors">{service.name}</h3>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
                                {service.description}
                            </p>
                        </div>

                        {/* Card Footer: Duration & Price */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                            <div className="flex items-center gap-2 text-gray-400">
                                <FaClock className="text-sm" />
                                <span className="text-sm font-bold">{service.duration}</span>
                            </div>
                            <div className="text-lg font-black text-slate-800">
                                {formatIDR(service.price)}
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}