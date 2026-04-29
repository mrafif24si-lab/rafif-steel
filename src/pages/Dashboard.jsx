// src/pages/auth/Dashboard.jsx
import React from 'react';
import { FaCut, FaCalendarCheck, FaUserClock, FaDollarSign, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PageHeader from "../components/PageHeader";

const dataGrafik = [
  { name: 'Mon', revenue: 1200000, clients: 15 },
  { name: 'Tue', revenue: 900000, clients: 12 },
  { name: 'Wed', revenue: 1500000, clients: 20 },
  { name: 'Thu', revenue: 1100000, clients: 14 },
  { name: 'Fri', revenue: 2500000, clients: 35 },
  { name: 'Sat', revenue: 3200000, clients: 45 },
  { name: 'Sun', revenue: 3500000, clients: 50 },
];

export default function Dashboard() {
    return (
        <div className="flex-1 w-full pb-10 px-4 md:px-8 bg-gray-50 min-h-screen">
            
            <PageHeader title="Overview Dashboard" breadcrumb="Dashboard" />

            {/* Grid Statistik Barbershop */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                
                {/* Card 1: Total Appointments */}
                <div className="relative overflow-hidden flex items-center bg-white rounded-2xl shadow-sm p-6 border border-gray-100 group hover:shadow-md transition-all">
                    <div className="bg-slate-800 rounded-xl p-4 mr-5 group-hover:scale-110 transition duration-300">
                        <FaCalendarCheck className="text-3xl text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-black text-gray-800">142</span>
                        <span className="text-gray-400 font-bold text-xs uppercase tracking-wider mt-1">Appointments</span>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center text-green-500 bg-green-50 px-2 py-1 rounded-md text-xs font-bold">
                        <FaArrowUp className="mr-1 text-[10px]"/> 12%
                    </div>
                </div>

                {/* Card 2: Haircuts Done */}
                <div className="relative overflow-hidden flex items-center bg-white rounded-2xl shadow-sm p-6 border border-gray-100 group hover:shadow-md transition-all">
                    <div className="bg-blue-600 rounded-xl p-4 mr-5 group-hover:scale-110 transition duration-300">
                        <FaCut className="text-3xl text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-black text-gray-800">89</span>
                        <span className="text-gray-400 font-bold text-xs uppercase tracking-wider mt-1">Haircuts Done</span>
                    </div>
                </div>

                {/* Card 3: Pending/Waiting */}
                <div className="relative overflow-hidden flex items-center bg-white rounded-2xl shadow-sm p-6 border border-gray-100 group hover:shadow-md transition-all">
                    <div className="bg-amber-500 rounded-xl p-4 mr-5 group-hover:scale-110 transition duration-300">
                        <FaUserClock className="text-3xl text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-black text-gray-800">12</span>
                        <span className="text-gray-400 font-bold text-xs uppercase tracking-wider mt-1">In Queue</span>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center text-red-500 bg-red-50 px-2 py-1 rounded-md text-xs font-bold">
                        <FaArrowDown className="mr-1 text-[10px]"/> 4%
                    </div>
                </div>

                {/* Card 4: Revenue */}
                <div className="relative overflow-hidden flex items-center bg-white rounded-2xl shadow-sm p-6 border border-gray-100 group hover:shadow-md transition-all">
                    <div className="bg-emerald-500 rounded-xl p-4 mr-5 group-hover:scale-110 transition duration-300">
                        <FaDollarSign className="text-3xl text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-black text-gray-800">Rp 13.9M</span>
                        <span className="text-gray-400 font-bold text-xs uppercase tracking-wider mt-1">Weekly Revenue</span>
                    </div>
                </div>

            </div>

            {/* Grafik Revenue Barbershop */}
            <div className="mt-8">
                <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h3 className="text-xl font-black text-gray-800">Revenue & Clients Overview</h3>
                            <p className="text-sm text-gray-400 mt-1 font-medium">Weekly statistics of Haircut Barbershop</p>
                        </div>
                        <select className="border-none bg-gray-50 text-gray-600 rounded-xl p-3 text-sm font-bold outline-none focus:ring-2 focus:ring-slate-800 cursor-pointer">
                            <option>This Week</option>
                            <option>Last Week</option>
                        </select>
                    </div>
                    
                    <div className="w-full h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={dataGrafik} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#1e293b" stopOpacity={0.4}/>
                                        <stop offset="95%" stopColor="#1e293b" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 'bold'}} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} tickFormatter={(value) => `Rp${value/1000000}M`} />
                                <Tooltip 
                                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', fontWeight: 'bold' }}
                                    cursor={{ stroke: '#1e293b', strokeWidth: 2, strokeDasharray: '5 5' }}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="#1e293b" strokeWidth={4} fillOpacity={1} fill="url(#colorRevenue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

        </div>
    );
}