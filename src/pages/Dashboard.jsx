import React, { useState } from 'react';
import { 
  FaArrowUp, FaArrowDown, FaCircle
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

// --- DATA DUMMY ---
const dataGrafik = [
  { name: 'Jan', thisYear: 12000, lastYear: 5000 },
  { name: 'Feb', thisYear: 14000, lastYear: 13000 },
  { name: 'Mar', thisYear: 13000, lastYear: 18000 },
  { name: 'Apr', thisYear: 24000, lastYear: 9000 },
  { name: 'May', thisYear: 28000, lastYear: 13000 },
  { name: 'Jun', thisYear: 21000, lastYear: 26000 },
  { name: 'Jul', thisYear: 23000, lastYear: 28000 },
];

const dataBar = [
  { name: 'Linux', uv: 18000, fill: '#A0BCE8' },
  { name: 'Mac', uv: 28000, fill: '#6BE6D3' },
  { name: 'iOS', uv: 22000, fill: '#0C0C0C' },
  { name: 'Windows', uv: 32000, fill: '#7DBBFF' },
  { name: 'Android', uv: 14000, fill: '#D0BDF0' },
  { name: 'Other', uv: 26000, fill: '#6BE6D3' },
];

const dataPie = [
  { name: 'Gentleman Haircut', value: 52.1, color: '#A0BCE8' },
  { name: 'Beard Trim & Line up', value: 22.8, color: '#6BE6D3' },
  { name: 'Hair Coloring', value: 13.9, color: '#0C0C0C' },
  { name: 'Kid Haircut', value: 11.2, color: '#D0BDF0' },
];

const rightPanelData = {
  notifications: [
    { id: 1, icon: '🐛', text: 'You fixed a bug.', time: 'Just now' },
    { id: 2, icon: '👤', text: 'New user registered.', time: '59 minutes ago' },
    { id: 3, icon: '🐛', text: 'You fixed a bug.', time: '12 hours ago' },
    { id: 4, icon: '📡', text: 'Andi Lane subscribed to you.', time: 'Today, 11:59 AM' },
  ],
  activities: [
    { id: 1, user: 'Anton', text: 'Changed the style.', time: 'Just now' },
    { id: 2, user: 'Bima', text: 'Released a new version.', time: '59 minutes ago' },
    { id: 3, user: 'Rizky', text: 'Submitted a bug.', time: '12 hours ago' },
    { id: 4, user: 'Tomi', text: 'Modified A data in Page X.', time: 'Today, 11:59 AM' },
  ],
  contacts: [
    { name: 'Natali Craig' },
    { name: 'Drew Cano' },
    { name: 'Andi Lane' },
    { name: 'Koray Okumus' },
    { name: 'Kate Morrison' },
  ]
};

export default function Dashboard() {
  // STATE UNTUK INTERAKTIVITAS
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Today');
  
  // STATE UNTUK TOGGLE GRAFIK
  const [showThisYear, setShowThisYear] = useState(true);
  const [showLastYear, setShowLastYear] = useState(true);

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setIsFilterOpen(false);
  };

  return (
    <div className="flex-1 w-full pb-10 px-8 pt-2 bg-[#FFFFFF] min-h-screen font-sans text-[#0C0C0C]" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* --- OVERVIEW & FILTER --- */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold text-[#0C0C0C]">Overview</h1>
        
        {/* INTERAKTIF DROPDOWN FILTER */}
        <div className="relative">
          <div 
            className="flex items-center text-sm text-[#0C0C0C] gap-1 cursor-pointer font-medium hover:bg-gray-50 px-3 py-1.5 rounded-lg transition-colors"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            {selectedFilter} <FiChevronDown className={`ml-1 text-gray-400 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
          </div>
          
          {isFilterOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 rounded-xl shadow-lg z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              {['Today', 'This Week', 'This Month', 'This Year'].map((item) => (
                <div 
                  key={item}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-[#F7F9FB] transition-colors ${selectedFilter === item ? 'font-semibold text-[#0C0C0C]' : 'text-gray-500'}`}
                  onClick={() => handleFilterSelect(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        
        {/* ================= LEFT MAIN CONTENT ================= */}
        <div className="lg:col-span-3 space-y-6">
            
          {/* --- ROW 1: STATISTIC CARDS --- */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'Total Pendapatan', value: 'Rp 13.9M', percent: '+11.01%', isUp: true, bg: 'bg-[#EDEEFC]' },
              { title: 'Jadwal (Minggu Ini)', value: '142', percent: '-0.03%', isUp: false, bg: 'bg-[#E6F1FD]' },
              { title: 'Rambut Dipotong', value: '89', percent: '+15.03%', isUp: true, bg: 'bg-[#EDEEFC]' },
              { title: 'Pelanggan Walk-in', value: '24', percent: '+6.08%', isUp: true, bg: 'bg-[#E6F1FD]' },
            ].map((card, index) => (
              <div key={index} className={`${card.bg} rounded-2xl p-5 cursor-pointer transform hover:-translate-y-1 hover:shadow-md transition-all duration-300 group`}>
                <p className="text-[#0C0C0C] font-semibold text-[13px] mb-2 group-hover:opacity-80 transition-opacity">{card.title}</p>
                <div className="flex items-end gap-3 mt-1">
                  <h3 className="text-[28px] font-bold tracking-tight leading-none group-hover:scale-105 transform origin-left transition-transform duration-300">{card.value}</h3>
                  <span className="flex items-center text-[#0C0C0C] text-[11px] mb-1">
                    {card.percent} {card.isUp ? <FaArrowUp className="ml-0.5 text-[9px] text-green-600"/> : <FaArrowDown className="ml-0.5 text-[9px] text-red-500"/>}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* --- ROW 2: LINE CHART --- */}
          <div className="bg-[#F7F9FB] p-6 rounded-2xl hover:shadow-sm transition-shadow duration-300">
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <h3 className="text-[13px] font-bold text-[#0C0C0C]">Total Pendapatan</h3>
              <span className="text-gray-400 text-[13px] cursor-pointer hover:text-[#0C0C0C] transition-colors relative group">
                Total Layanan
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0C0C0C] transition-all duration-300 group-hover:w-full"></span>
              </span>
              <span className="text-gray-400 text-[13px] cursor-pointer hover:text-[#0C0C0C] transition-colors relative group">
                Status Operasional
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0C0C0C] transition-all duration-300 group-hover:w-full"></span>
              </span>
              
              {/* LEGEND TOGGLE */}
              <div className="ml-auto flex gap-4 text-[12px] font-medium">
                <span 
                  className={`flex items-center gap-1.5 cursor-pointer select-none transition-opacity duration-300 ${!showThisYear ? 'opacity-40' : 'hover:opacity-80'}`}
                  onClick={() => setShowThisYear(!showThisYear)}
                >
                  <FaCircle className="text-[#0C0C0C] text-[6px]"/> This year
                </span>
                <span 
                  className={`flex items-center gap-1.5 cursor-pointer select-none transition-opacity duration-300 ${!showLastYear ? 'opacity-40' : 'hover:opacity-80'}`}
                  onClick={() => setShowLastYear(!showLastYear)}
                >
                  <FaCircle className="text-[#7DBBFF] text-[6px]"/> Last year
                </span>
              </div>
            </div>
            
            <div className="w-full h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dataGrafik} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} tickFormatter={(val) => val === 0 ? '0' : `${val/1000}K`} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                    cursor={{ stroke: '#E5E7EB', strokeWidth: 1, strokeDasharray: '3 3' }}
                  />
                  {showThisYear && <Line type="monotone" dataKey="thisYear" name="This Year" stroke="#0C0C0C" strokeWidth={2.5} dot={{ r: 0 }} activeDot={{ r: 5, fill: '#0C0C0C', stroke: '#fff', strokeWidth: 2 }} />}
                  {showLastYear && <Line type="monotone" dataKey="lastYear" name="Last Year" stroke="#A0BCE8" strokeWidth={2} strokeDasharray="5 5" dot={false} activeDot={{ r: 5, fill: '#A0BCE8', stroke: '#fff', strokeWidth: 2 }} />}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* --- ROW 3: BAR CHART & PIE CHART --- */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#F7F9FB] p-6 rounded-2xl hover:shadow-sm transition-shadow duration-300">
              <h3 className="text-[13px] font-bold mb-6">Traffic by Service</h3>
              <div className="w-full h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dataBar} barSize={28} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 11}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 11}} tickFormatter={(val) => val === 0 ? '0' : `${val/1000}K`} />
                    <Tooltip cursor={{fill: '#EDEEFC', opacity: 0.5}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }} />
                    <Bar dataKey="uv" radius={[6, 6, 6, 6]}>
                      {dataBar.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} className="hover:opacity-80 transition-opacity duration-200 cursor-pointer" />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#F7F9FB] p-6 rounded-2xl flex items-center hover:shadow-sm transition-shadow duration-300">
              <div className="w-1/2 relative h-[180px] flex justify-center items-center group">
                  <h3 className="text-[13px] font-bold absolute top-0 left-0">Traffic by Location</h3>
                  <ResponsiveContainer width="100%" height="100%" className="mt-6 transform group-hover:scale-105 transition-transform duration-500">
                    <PieChart>
                      <Pie data={dataPie} innerRadius={45} outerRadius={70} paddingAngle={2} dataKey="value" stroke="none">
                        {dataPie.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} className="hover:opacity-80 cursor-pointer outline-none" />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
                    </PieChart>
                  </ResponsiveContainer>
              </div>
              <div className="w-1/2 space-y-4 mt-8 pl-4">
                {dataPie.map((srv, idx) => (
                  <div key={idx} className="flex justify-between items-center text-[12px] p-1.5 -mx-1.5 rounded-md hover:bg-white cursor-pointer transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: srv.color }}></span>
                      <span className="text-[#0C0C0C]">{srv.name}</span>
                    </div>
                    <span className="font-medium text-[#0C0C0C]">{srv.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="col-span-1 space-y-8 pl-2">
            
          {/* Notifications */}
          <div>
            <h3 className="text-[13px] font-bold mb-3">Notifications</h3>
            <div className="space-y-1">
              {rightPanelData.notifications.map((item) => (
                <div key={item.id} className="flex gap-3 p-2 -mx-2 rounded-xl hover:bg-[#F7F9FB] cursor-pointer transition-colors group">
                  <div className="w-7 h-7 rounded-full bg-[#F7F9FB] group-hover:bg-white shadow-sm flex items-center justify-center text-[11px] transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-[#0C0C0C] leading-tight group-hover:text-blue-600 transition-colors">{item.text}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-[13px] font-bold mb-3">Activities</h3>
            <div className="space-y-1 relative pl-2">
              <div className="absolute left-[18px] top-4 bottom-4 w-[2px] bg-[#F3F4F6] z-0"></div>
              {rightPanelData.activities.map((item) => (
                <div key={item.id} className="flex gap-3 relative z-10 p-2 -mx-2 rounded-xl hover:bg-[#F7F9FB] cursor-pointer transition-colors group">
                  <img src={`https://ui-avatars.com/api/?name=${item.user}&background=F7F9FB&color=0C0C0C&font-size=0.4`} alt={item.user} className="w-7 h-7 rounded-full border-2 border-white shadow-sm bg-white transform group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-[13px] font-medium text-[#0C0C0C] leading-tight group-hover:text-blue-600 transition-colors">{item.text}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-[13px] font-bold mb-3">Contacts</h3>
            <div className="space-y-1">
              {rightPanelData.contacts.map((contact, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2 -mx-2 rounded-xl hover:bg-[#F7F9FB] cursor-pointer transition-colors group">
                  <img src={`https://ui-avatars.com/api/?name=${contact.name}&background=EDEEFC&color=0C0C0C&font-size=0.4`} alt={contact.name} className="w-7 h-7 rounded-full shadow-sm transform group-hover:scale-110 transition-transform" />
                  <span className="text-[13px] text-[#0C0C0C] font-medium group-hover:translate-x-1 transition-transform">{contact.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}