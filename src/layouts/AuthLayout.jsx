import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 font-sans p-4">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-slate-100 w-full max-w-md transition-all">
                
                {/* Header / Logo Section */}
                <div className="flex flex-col items-center justify-center mb-8">
                    <h1 className="text-4xl font-poppins font-black tracking-tighter text-slate-900">
                        Hair<span className="text-slate-400">Cut.</span>
                    </h1>
                    <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-[0.2em]">
                        Admin Portal
                    </p>
                </div>

                <Outlet/>

                {/* Footer Section */}
                <p className="text-center text-xs font-medium text-slate-400 mt-8">
                    © 2026 Rafif HairCut Barbershop.<br/>All rights reserved.
                </p>
            </div>
        </div>
    )
}