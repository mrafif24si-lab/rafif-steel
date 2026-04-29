import React from 'react';
import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    return (
        {/* Mengganti bg-white menjadi bg-transparent agar menyatu dengan dashboard */},
        <div id="header-container" className="flex justify-between items-center p-6 bg-transparent">
            
            {/* Search Bar */}
            <div id="search-bar" className="relative w-full max-w-lg">
                <input
                    id="search-input"
                    type="text"
                    placeholder="Search Here..."
                    className="border-none py-3 pl-4 pr-10 bg-white w-full rounded-lg outline-none focus:ring-2 focus:ring-hijau shadow-sm text-sm"
                />
                <FaSearch id="search-icon" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
            </div>

            {/* Icon & Profile Section */}
            <div id="icons-container" className="flex items-center space-x-6">
                
                {/* Icons Group */}
                <div className="flex items-center space-x-3">
                    <div id="notification-icon" className="relative p-3 bg-blue-100 rounded-full text-blue-500 cursor-pointer">
                        <FaBell />
                        <span id="notification-badge" className="absolute -top-1 -right-1 bg-blue-400 text-white rounded-full px-1.5 py-0.5 text-[10px] font-bold">
                            50
                        </span>
                    </div>
                    
                    <div id="chart-icon" className="p-3 bg-blue-100 rounded-full cursor-pointer">
                        <FcAreaChart />
                    </div>
                    
                    <div id="settings-icon" className="p-3 bg-red-100 rounded-full text-red-500 cursor-pointer">
                        <SlSettings />
                    </div>
                </div>

                {/* Profile Section */}
                <div id="profile-container" className="flex items-center space-x-4 border-l-2 pl-6 border-gray-200">
                    <span id="profile-text" className="text-gray-600 text-sm">
                        Hello, <b className="text-gray-800">Rafif</b>
                    </span>
            
                    <img
                        id="profile-avatar"
                        src="public/img/profil.jpg"
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>

            </div>
        </div>
    );
}