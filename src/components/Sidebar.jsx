import React from 'react';
import { FaCut, FaCalendarCheck, FaUsers, FaThLarge } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    // Styling NavLink bergaya ByeWind/Figma referensi
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-lg px-4 py-3 text-[14px] font-medium transition-all
        ${isActive ? 
            "text-[#0C0C0C] bg-[#EDEEFC] font-semibold" : 
            "text-gray-500 hover:text-[#0C0C0C] hover:bg-gray-50"
        }`;

    return (
        <div id="sidebar" className="flex min-h-screen w-[260px] flex-col bg-white p-6 border-r border-gray-100 font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
            
            {/* Logo User / Barbershop (Gaya ByeWind Profile Top) */}
          <div className="mb-8 px-6 pt-6">
  {/* Judul Utama: HairCut. */}
  <h1 className="text-[32px] font-black tracking-tight flex items-baseline">
    <span className="text-[#101623]">Hair</span>
    <span className="text-[#495B70]">Cut.</span>
  </h1>
  
  {/* Sub-judul: Barbershop Admin */}
  <p className="text-[#8E9AAC] text-[13px] font-medium mt-1 ml-0.5">
    Barbershop Admin
  </p>
</div>

            {/* List Menu */}
            <div id="sidebar-menu" className="flex-1">
                <div className="text-xs font-medium text-gray-400 mb-4 px-4">Dashboards</div>
                <ul id="menu-list" className="space-y-1 mb-8">
                    <li>
                        <NavLink to="/" className={menuClass}>
                            <FaThLarge className="mr-3 text-lg" /> Dashboard
                        </NavLink>
                    </li>
                </ul>

                <div className="text-xs font-medium text-gray-400 mb-4 px-4">Pages</div>
                <ul id="menu-list" className="space-y-1">
                    <li>
                        <NavLink to="/orders" className={menuClass}>
                            <FaCalendarCheck className="mr-3 text-lg" /> Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/customers" className={menuClass}>
                            <FaUsers className="mr-3 text-lg" /> Customers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className={menuClass}>
                            <FaCut className="mr-3 text-lg" /> Services
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Footer Sidebar (Brand Bawah) */}
            <div className="mt-auto px-4 flex items-center justify-center pb-4">
                 <span className="font-semibold text-[#7DBBFF] text-sm flex items-center gap-2">
                     <FaCut /> HairCut UI
                 </span>
            </div>
        </div>
    );
}