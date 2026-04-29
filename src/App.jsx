// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

// import React from 'react';
// // Import komponen BiodataDiri yang kita buat di folder biodata
// import BiodataDiri from './biodata/biodata.jsx';
// import PendaftaranForm from './tugas/PendaftaranForm';

// function App() {
//   return (
//     <>
//       <BiodataDiri />
//       <PendaftaranForm />
//     </>
//   );
// }

// export default App;

// import React from 'react';
// // Pastikan path import ini sesuai dengan folder Anda
// import BiodataDiri from './biodata/biodata.jsx';
// import PendaftaranForm from './pertemuan-3/tugas/PendaftaranForm.jsx';
// import GameCatalog from './pertemuan-4/GameCatalog.jsx';

// function App() {
//   const currentPath = window.location.pathname;

//   // Logika Routing
//   if (currentPath === '/admin') return <GameCatalog role="admin" />;
//   if (currentPath === '/guest') return <GameCatalog role="guest" />;
//   if (currentPath === '/biodata') return <BiodataDiri />;
//   if (currentPath === '/pendaftaran') return <PendaftaranForm />;

//   // TAMPILAN MENU UTAMA (Sesuai Referensi Gambar 1)
//   return (
//     <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center font-sans p-4">
//       <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-full max-w-md text-center">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6">Menu Tugas Kuliah</h1>
        
//         {/* Kontainer tombol dengan jarak (gap) yang rapi */}
//         <div className="flex flex-col gap-4">
//           <a href="/guest" className="px-4 py-3 bg-[#3B82F6] text-white font-medium rounded-xl hover:bg-blue-600 transition shadow-sm">
//             Pertemuan 4 - Game Catalog (Guest View)
//           </a>
//           <a href="/admin" className="px-4 py-3 bg-[#EF4444] text-white font-medium rounded-xl hover:bg-red-600 transition shadow-sm">
//             Pertemuan 4 - Game Catalog (Admin View)
//           </a>
//           <a href="/biodata" className="px-4 py-3 bg-[#10B981] text-white font-medium rounded-xl hover:bg-green-600 transition shadow-sm">
//             Biodata Diri
//           </a>
//           <a href="/pendaftaran" className="px-4 py-3 bg-[#A855F7] text-white font-medium rounded-xl hover:bg-purple-600 transition shadow-sm">
//             Pertemuan 3 - Form Pendaftaran
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { Suspense } from "react";
import "./App.css"; // Atau index.css sesuai penamaanmu
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

// Lazy Loading Components
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Services = React.lazy(() => import("./pages/Services"));
const Orders = React.lazy(() => import("./pages/Orders")); // Pengganti Orders
const Customers = React.lazy(() => import("./pages/Customers"));
const ErrorDisplay = React.lazy(() => import("./pages/ErrorDisplay"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forget"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Main Dashboard Routes */}
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/customers" element={<Customers/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/error/:code" element={<ErrorDisplay />} />
          <Route path="*" element={<ErrorDisplay />} />
        </Route>
        
        {/* Authentication Routes */}
        <Route element={<AuthLayout/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/forgot" element={<Forgot/>} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;