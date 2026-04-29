// src/components/Sidebar.jsx
import React from 'react';
// Mengubah ikon agar sesuai dengan Barbershop
import { FaCut, FaCalendarCheck, FaUsers, FaPlus, FaExclamationCircle, FaThLarge } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4 space-x-2 transition-all
        ${isActive ? 
            "text-slate-800 bg-slate-200 font-extrabold" : 
            "text-gray-500 hover:text-slate-800 hover:bg-slate-100 hover:font-bold"
        }`;

    return (
        <div id="sidebar" className="flex min-h-screen w-[320px] flex-col bg-white p-8 shadow-lg z-10 border-r border-gray-100">
            
            {/* Logo Barbershop */}
            <div id="sidebar-logo" className="flex flex-col mb-8">
                <span id="logo-title" className="font-poppins text-[42px] text-gray-900 font-[1000] tracking-tight">
                    Hair<b className="text-slate-600">Cut.</b>
                </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400 text-sm tracking-wide">
                    Barbershop Admin
                </span>
            </div>

            {/* List Menu */}
            <div id="sidebar-menu">
                <ul id="menu-list" className="space-y-2">
                    <li>
                        <NavLink to="/" className={menuClass}>
                            <FaThLarge className="mr-4 text-lg" /> Dashboard
                        </NavLink>
                    </li>
                    <li>
                        {/* Mengganti Orders menjadi Appointments/Jadwal */}
                        <NavLink to="/orders" className={menuClass}>
                            <FaCalendarCheck className="mr-4 text-lg" /> Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/customers" className={menuClass}>
                            <FaUsers className="mr-4 text-lg" /> Customers
                        </NavLink>
                    </li>
                    <li>
                        {/* Tambahan menu Services untuk Barbershop */}
                        <NavLink to="/services" className={menuClass}>
                            <FaCut className="mr-4 text-lg" /> Services
                        </NavLink>
                    </li>
                    
                    {/* Menu Error Pages */}
                    <li className="pt-6 pb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        System Pages
                    </li>
                    <li>
                        <NavLink to="/error/400" className={menuClass}>
                            <FaExclamationCircle className="mr-4 text-lg" /> Error 400
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/error/401" className={menuClass}>
                            <FaExclamationCircle className="mr-4 text-lg" /> Error 401
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/error/403" className={menuClass}>
                            <FaExclamationCircle className="mr-4 text-lg" /> Error 403
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/error/404" className={menuClass}>
                            <FaExclamationCircle className="mr-4 text-lg" /> Error 404
                        </NavLink>
                    </li> */}
                </ul>
            </div>

            {/* Footer Sidebar */}
            <div id="sidebar-footer" className="mt-auto">
                <div id="footer-card" className="bg-slate-800 p-4 rounded-xl shadow-lg mb-6 flex items-center justify-between">
                    <div id="footer-text" className="text-white text-[11px] leading-relaxed w-[60%]">
                        <p className="mb-2">Manage your barbershop services easily!</p>
                        <div className="inline-flex justify-center items-center px-3 py-1.5 bg-white rounded-md cursor-pointer text-slate-800 font-bold hover:bg-gray-100 transition">
                            <FaPlus className="mr-2 text-[10px]" /> Add Service
                        </div>
                    </div>
                    <div className="w-[35%] flex justify-end">
                        {/* Sesuaikan path gambar profilmu */}
                        <img src="/img/profil.jpg" alt="Admin" className="w-16 h-16 rounded-full border-2 border-slate-400 object-cover" />
                    </div>
                </div>
                
                <div className="flex flex-col">
                    <span className="font-bold text-gray-500 text-sm">Haircut Barbershop</span>
                    <p className="font-light text-gray-400 text-xs mt-1">&copy; 2026 All Right Reserved</p>
                </div>
            </div>
        </div>
    );
}