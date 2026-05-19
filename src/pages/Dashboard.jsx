import React, { useState, useEffect } from 'react';
import Button from "../components/Button";
import Card from "../components/Card";
import { 
  FaArrowUp, FaArrowDown, FaCircle, FaTimes, FaSearch, FaBell, FaUserPlus, FaBug, FaSatelliteDish
} from "react-icons/fa";
import { FiChevronDown, FiFilter, FiRefreshCw, FiMoreVertical, FiChevronUp } from "react-icons/fi";
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart
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
    { id: 1, type: 'bug', icon: FaBug, text: 'You fixed a bug.', time: 'Just now', read: false },
    { id: 2, type: 'user', icon: FaUserPlus, text: 'New user registered.', time: '59 minutes ago', read: false },
    { id: 3, type: 'bug', icon: FaBug, text: 'You fixed a bug.', time: '12 hours ago', read: true },
    { id: 4, type: 'subscription', icon: FaSatelliteDish, text: 'Andi Lane subscribed to you.', time: 'Today, 11:59 AM', read: true },
  ],
  activities: [
    { id: 1, user: 'Anton', text: 'Changed the style.', time: 'Just now' },
    { id: 2, user: 'Bima', text: 'Released a new version.', time: '59 minutes ago' },
    { id: 3, user: 'Rizky', text: 'Submitted a bug.', time: '12 hours ago' },
    { id: 4, user: 'Tomi', text: 'Modified A data in Page X.', time: 'Today, 11:59 AM' },
  ],
  contacts: [
    { name: 'Natali Craig', online: true },
    { name: 'Drew Cano', online: true },
    { name: 'Andi Lane', online: false },
    { name: 'Koray Okumus', online: true },
    { name: 'Kate Morrison', online: false },
  ]
};

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100">
        <p className="text-sm font-bold mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
            <span className="text-gray-600">{entry.name}:</span>
            <span className="font-bold">Rp {(entry.value / 1000).toFixed(1)}K</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Custom Bar Tooltip
const BarTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
        <p className="text-xs font-bold mb-1">{label}</p>
        <p className="text-sm">Traffic: <span className="font-bold">{(payload[0].value / 1000).toFixed(1)}K</span></p>
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  // STATE UNTUK INTERAKTIVITAS
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Today');
  const [showThisYear, setShowThisYear] = useState(true);
  const [showLastYear, setShowLastYear] = useState(true);
  const [activeChartTab, setActiveChartTab] = useState('pendapatan');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [notifications, setNotifications] = useState(rightPanelData.notifications);
  const [searchTerm, setSearchTerm] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setIsFilterOpen(false);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="flex-1 w-full pb-10 px-8 pt-2 bg-[#FFFFFF] min-h-screen font-sans text-[#0C0C0C]" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* --- OVERVIEW & FILTER --- */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold text-[#0C0C0C]">Overview</h1>
          
          {/* Filter Button Group */}
          <div className="hidden md:flex bg-[#F7F9FB] p-1 rounded-xl gap-1">
            {['Today', 'This Week', 'This Month', 'This Year'].map((item) => (
              <button
                key={item}
                onClick={() => setSelectedFilter(item)}
                className={`px-4 py-1.5 text-sm rounded-lg transition-all duration-300 ${
                  selectedFilter === item 
                    ? 'bg-white text-[#0C0C0C] shadow-md font-semibold' 
                    : 'text-gray-500 hover:text-[#0C0C0C]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Refresh Button */}
          <button 
            onClick={handleRefresh}
            className="p-2 rounded-lg hover:bg-[#F7F9FB] transition-colors"
            title="Refresh data"
          >
            <FiRefreshCw className={`text-gray-600 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>
          
          {/* Search Input */}
          <div className="relative hidden md:block">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-1.5 text-sm bg-[#F7F9FB] rounded-xl border-0 outline-none focus:ring-2 focus:ring-[#0C0C0C]/10 w-48 transition-all"
            />
          </div>
          
          {/* Mobile Filter Dropdown */}
          <div className="relative md:hidden">
            <div 
              className="flex items-center text-sm text-[#0C0C0C] gap-1 cursor-pointer font-medium hover:bg-gray-50 px-3 py-1.5 rounded-lg transition-colors"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              {selectedFilter} <FiChevronDown className={`ml-1 text-gray-400 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
            </div>
            
            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 rounded-xl shadow-lg z-50 overflow-hidden">
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
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        
        {/* ================= LEFT MAIN CONTENT ================= */}
        <div className="lg:col-span-3 space-y-6">
            
          {/* --- ROW 1: STATISTIC CARDS --- */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'Total Pendapatan', value: 'Rp 13.9M', percent: '+11.01%', isUp: true, bg: 'bg-[#EDEEFC]', detail: 'Pendapatan bulan ini meningkat signifikan' },
              { title: 'Jadwal (Minggu Ini)', value: '142', percent: '-0.03%', isUp: false, bg: 'bg-[#E6F1FD]', detail: 'Sedikit penurunan dari minggu lalu' },
              { title: 'Rambut Dipotong', value: '89', percent: '+15.03%', isUp: true, bg: 'bg-[#EDEEFC]', detail: 'Layanan potong rambut paling diminati' },
              { title: 'Pelanggan Walk-in', value: '24', percent: '+6.08%', isUp: true, bg: 'bg-[#E6F1FD]', detail: 'Pelanggan tanpa janji temu meningkat' },
            ].map((card, index) => (
              <div 
                key={index} 
                className={`${card.bg} rounded-2xl p-5 cursor-pointer transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
                onClick={() => setSelectedCard(selectedCard === index ? null : index)}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-[#0C0C0C] font-semibold text-[13px] group-hover:translate-x-1 transition-transform">
                      {card.title}
                    </p>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-white/50 rounded-lg">
                      <FiMoreVertical className="text-xs" />
                    </button>
                  </div>
                  
                  <div className="flex items-end gap-3 mt-1">
                    <h3 className="text-[28px] font-bold tracking-tight leading-none group-hover:scale-110 transform origin-left transition-transform duration-300">
                      {card.value}
                    </h3>
                    
                    <span className={`flex items-center text-[11px] mb-1 px-2 py-0.5 rounded-full ${
                      card.isUp ? 'bg-green-100/50 text-green-700' : 'bg-red-100/50 text-red-700'
                    }`}>
                      {card.percent} 
                      {card.isUp ? (
                        <FaArrowUp className="ml-1 text-[9px] animate-bounce" />
                      ) : (
                        <FaArrowDown className="ml-1 text-[9px] animate-bounce" />
                      )}
                    </span>
                  </div>
                  
                  {/* Expandable detail */}
                  <div className={`overflow-hidden transition-all duration-300 ${selectedCard === index ? 'max-h-20 mt-3' : 'max-h-0'}`}>
                    <p className="text-xs text-gray-600 bg-white/50 rounded-lg p-2">{card.detail}</p>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mt-3 w-full bg-white/50 rounded-full h-1 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${card.isUp ? 'bg-green-400' : 'bg-red-400'}`}
                      style={{ width: `${Math.min(Math.abs(parseFloat(card.percent)), 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- ROW 2: LINE CHART WITH TABS --- */}
          <div className="bg-[#F7F9FB] p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
            {/* Chart Tabs */}
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="flex gap-6">
                <button
                  onClick={() => setActiveChartTab('pendapatan')}
                  className={`text-[13px] relative pb-2 transition-all ${
                    activeChartTab === 'pendapatan' 
                      ? 'text-[#0C0C0C] font-bold' 
                      : 'text-gray-400 hover:text-[#0C0C0C]'
                  }`}
                >
                  Total Pendapatan
                  {activeChartTab === 'pendapatan' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0C0C0C] rounded-full"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveChartTab('layanan')}
                  className={`text-[13px] relative pb-2 transition-all ${
                    activeChartTab === 'layanan' 
                      ? 'text-[#0C0C0C] font-bold' 
                      : 'text-gray-400 hover:text-[#0C0C0C]'
                  }`}
                >
                  Total Layanan
                  {activeChartTab === 'layanan' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0C0C0C] rounded-full"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveChartTab('operasional')}
                  className={`text-[13px] relative pb-2 transition-all ${
                    activeChartTab === 'operasional' 
                      ? 'text-[#0C0C0C] font-bold' 
                      : 'text-gray-400 hover:text-[#0C0C0C]'
                  }`}
                >
                  Status Operasional
                  {activeChartTab === 'operasional' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0C0C0C] rounded-full"></div>
                  )}
                </button>
              </div>
              
              {/* LEGEND TOGGLE */}
              <div className="flex gap-4 text-[12px] font-medium">
                <span 
                  className={`flex items-center gap-1.5 cursor-pointer select-none transition-all duration-300 ${
                    !showThisYear ? 'opacity-40' : 'hover:opacity-80'
                  }`}
                  onClick={() => setShowThisYear(!showThisYear)}
                >
                  <FaCircle className="text-[#0C0C0C] text-[6px]"/> This year
                </span>
                <span 
                  className={`flex items-center gap-1.5 cursor-pointer select-none transition-all duration-300 ${
                    !showLastYear ? 'opacity-40' : 'hover:opacity-80'
                  }`}
                  onClick={() => setShowLastYear(!showLastYear)}
                >
                  <FaCircle className="text-[#7DBBFF] text-[6px]"/> Last year
                </span>
              </div>
            </div>
            
            <div className="w-full h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dataGrafik} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorThisYear" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0C0C0C" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#0C0C0C" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorLastYear" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#A0BCE8" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#A0BCE8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} tickFormatter={(val) => val === 0 ? '0' : `${val/1000}K`} />
                  <Tooltip content={<CustomTooltip />} />
                  {showThisYear && (
                    <>
                      <Area type="monotone" dataKey="thisYear" stroke="#0C0C0C" fill="url(#colorThisYear)" strokeWidth={2.5} dot={false} activeDot={{ r: 5, fill: '#0C0C0C', stroke: '#fff', strokeWidth: 2 }} />
                    </>
                  )}
                  {showLastYear && (
                    <>
                      <Area type="monotone" dataKey="lastYear" stroke="#A0BCE8" fill="url(#colorLastYear)" strokeWidth={2} strokeDasharray="5 5" dot={false} activeDot={{ r: 5, fill: '#A0BCE8', stroke: '#fff', strokeWidth: 2 }} />
                    </>
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* --- ROW 3: BAR CHART & PIE CHART --- */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#F7F9FB] p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[13px] font-bold">Traffic by Service</h3>
                <button className="text-gray-400 hover:text-[#0C0C0C] transition-colors">
                  <FiMoreVertical className="text-sm" />
                </button>
              </div>
              <div className="w-full h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dataBar} barSize={28} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 11}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 11}} tickFormatter={(val) => val === 0 ? '0' : `${val/1000}K`} />
                    <Tooltip content={<BarTooltip />} cursor={{fill: '#EDEEFC', opacity: 0.3}} />
                    <Bar dataKey="uv" radius={[6, 6, 6, 6]} animationDuration={1500}>
                      {dataBar.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.fill} 
                          className="hover:opacity-80 transition-all duration-200 cursor-pointer"
                          style={{ filter: 'brightness(1)' }}
                          onMouseEnter={(e) => e.target.style.filter = 'brightness(0.9)'}
                          onMouseLeave={(e) => e.target.style.filter = 'brightness(1)'}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#F7F9FB] p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[13px] font-bold">Traffic by Location</h3>
                <button className="text-gray-400 hover:text-[#0C0C0C] transition-colors">
                  <FiMoreVertical className="text-sm" />
                </button>
              </div>
              <div className="flex items-center">
                <div className="w-1/2 relative h-[180px] flex justify-center items-center group">
                  <ResponsiveContainer width="100%" height="100%" className="transform group-hover:scale-105 transition-transform duration-500">
                    <PieChart>
                      <Pie 
                        data={dataPie} 
                        innerRadius={45} 
                        outerRadius={70} 
                        paddingAngle={3} 
                        dataKey="value" 
                        stroke="none"
                        animationDuration={1500}
                        animationBegin={300}
                      >
                        {dataPie.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.color} 
                            className="hover:opacity-80 cursor-pointer outline-none transition-all duration-300"
                            style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))' }}
                          />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="w-1/2 space-y-3 pl-4">
                  {dataPie.map((srv, idx) => (
                    <div 
                      key={idx} 
                      className="flex justify-between items-center text-[12px] p-1.5 -mx-1.5 rounded-md hover:bg-white cursor-pointer transition-all duration-200 hover:shadow-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: srv.color }}></span>
                        <span className="text-[#0C0C0C] text-xs">{srv.name}</span>
                      </div>
                      <span className="font-bold text-[#0C0C0C] text-xs">{srv.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="col-span-1 space-y-6 pl-2">
            
          {/* Notifications */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <h3 className="text-[13px] font-bold">Notifications</h3>
                {unreadCount > 0 && (
                  <span className="bg-[#0C0C0C] text-white text-[10px] px-1.5 py-0.5 rounded-full font-medium">
                    {unreadCount}
                  </span>
                )}
              </div>
              <button 
                onClick={markAllAsRead}
                className="text-[11px] text-gray-400 hover:text-[#0C0C0C] transition-colors"
              >
                Mark all read
              </button>
            </div>
            <div className="space-y-0.5">
              {notifications.map((item) => (
                <div 
                  key={item.id} 
                  className={`flex gap-3 p-2 -mx-2 rounded-xl transition-all duration-200 group cursor-pointer ${
                    !item.read ? 'bg-[#F7F9FB]' : 'hover:bg-[#F7F9FB]'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all ${
                    !item.read ? 'bg-white shadow-md' : 'bg-[#F7F9FB] group-hover:bg-white'
                  }`}>
                    <item.icon className={`${!item.read ? 'text-[#0C0C0C]' : 'text-gray-400'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className={`text-[13px] leading-tight transition-colors ${
                        !item.read ? 'font-semibold text-[#0C0C0C]' : 'font-medium text-gray-600 group-hover:text-[#0C0C0C]'
                      }`}>
                        {item.text}
                      </p>
                      {!item.read && (
                        <span className="w-1.5 h-1.5 bg-[#0C0C0C] rounded-full mt-1.5"></span>
                      )}
                    </div>
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
                <div 
                  key={item.id} 
                  className="flex gap-3 relative z-10 p-2 -mx-2 rounded-xl hover:bg-[#F7F9FB] cursor-pointer transition-all duration-200 group"
                >
                  <div className="relative">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${item.user}&background=F7F9FB&color=0C0C0C&font-size=0.4`} 
                      alt={item.user} 
                      className="w-7 h-7 rounded-full border-2 border-white shadow-sm transform group-hover:scale-110 transition-transform" 
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white"></span>
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-[#0C0C0C] leading-tight group-hover:text-[#0C0C0C] transition-colors">
                      <span className="font-semibold">{item.user}</span> {item.text}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-[13px] font-bold">Contacts</h3>
              <button className="text-[11px] text-gray-400 hover:text-[#0C0C0C] transition-colors">
                View all
              </button>
            </div>
            <div className="space-y-0.5">
              {rightPanelData.contacts.map((contact, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 p-2 -mx-2 rounded-xl hover:bg-[#F7F9FB] cursor-pointer transition-all duration-200 group"
                >
                  <div className="relative">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${contact.name}&background=EDEEFC&color=0C0C0C&font-size=0.4`} 
                      alt={contact.name} 
                      className="w-8 h-8 rounded-full shadow-sm transform group-hover:scale-110 transition-transform" 
                    />
                    <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${
                      contact.online ? 'bg-green-400' : 'bg-gray-300'
                    }`}></span>
                  </div>
                  <div className="flex-1">
                    <span className="text-[13px] text-[#0C0C0C] font-medium block group-hover:translate-x-1 transition-transform">
                      {contact.name}
                    </span>
                    <span className="text-[11px] text-gray-400">
                      {contact.online ? 'Online' : 'Offline'}
                    </span>
                  </div>
                  {contact.online && (
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 bg-[#EDEEFC] rounded-full hover:bg-[#0C0C0C] hover:text-white">
                      <FiChevronDown className="text-xs transform -rotate-90" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Floating Action Buttons */}
      {showScrollTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#0C0C0C] text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all flex items-center justify-center animate-bounce"
        >
          <FiChevronUp className="text-lg" />
        </button>
      )}
    </div>
  );
}