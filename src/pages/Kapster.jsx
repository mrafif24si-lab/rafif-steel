import React from 'react';
import PageHeader from "../components/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Kapster() {
    return (
        <div className="flex-1 w-full pb-12 bg-[#F8FAFC] min-h-screen p-4 md:p-8 font-sans selection:bg-slate-800 selection:text-white">
            <PageHeader title="Manajemen Kapster" breadcrumb={["Dashboard", "Kapster"]} />

            <div className="mt-8 bg-white p-2 md:p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                <Tabs defaultValue="jadwal" className="w-full">
                    {/* Pembungkus TabsList yang lebih modern */}
                    <div className="flex justify-center md:justify-start mb-8">
                        <TabsList className="bg-slate-100/80 p-1.5 rounded-2xl">
                            <TabsTrigger 
                                value="jadwal" 
                                className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm px-8 py-3 transition-all duration-300 text-sm font-bold text-slate-500 hover:text-slate-700"
                            >
                                Jadwal & Layanan
                            </TabsTrigger>
                            <TabsTrigger 
                                value="profil" 
                                className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm px-8 py-3 transition-all duration-300 text-sm font-bold text-slate-500 hover:text-slate-700"
                            >
                                Profil Kapster
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {/* TABS 1: JADWAL & LAYANAN */}
                    <TabsContent value="jadwal" className="animate-in fade-in-50 duration-500 slide-in-from-bottom-4">
                        <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                            <Table>
                                <TableHeader className="bg-slate-900">
                                    <TableRow className="hover:bg-slate-900 border-none">
                                        <TableHead className="font-bold text-slate-100 py-6 px-6 text-[12px] uppercase tracking-widest rounded-tl-3xl">Hari Shift</TableHead>
                                        <TableHead className="font-bold text-slate-100 text-[12px] uppercase tracking-widest">Jam Kerja</TableHead>
                                        <TableHead className="font-bold text-slate-100 text-[12px] uppercase tracking-widest">Kapster Bertugas</TableHead>
                                        <TableHead className="font-bold text-slate-100 text-[12px] uppercase tracking-widest">Fokus Layanan</TableHead>
                                        <TableHead className="text-right font-bold text-slate-100 px-6 text-[12px] uppercase tracking-widest rounded-tr-3xl">Estimasi Tarif</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {/* Baris 1 */}
                                    <TableRow className="hover:bg-slate-50/80 transition-all duration-300 group border-b border-slate-100">
                                        <TableCell className="py-6 px-6">
                                            <div className="font-black text-slate-800 text-base">Senin - Rabu</div>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-[11px] text-slate-600 font-bold bg-white border border-slate-200 shadow-sm px-4 py-1.5 rounded-full uppercase tracking-wider">
                                                10:00 - 20:00 WIB
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <div className="font-black text-slate-900 text-base">Bang Rian</div>
                                            <div className="text-[11px] text-emerald-600 font-black tracking-widest uppercase mt-1">Senior Barber</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-lg">Signature Cut</span>
                                                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-lg">Fade</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right px-6">
                                            <div className="font-black text-slate-900 text-lg group-hover:scale-110 transition-transform origin-right">Rp 75.000</div>
                                        </TableCell>
                                    </TableRow>
                                    
                                    {/* Baris 2 */}
                                    <TableRow className="hover:bg-slate-50/80 transition-all duration-300 group border-b border-slate-100">
                                        <TableCell className="py-6 px-6">
                                            <div className="font-black text-slate-800 text-base">Kamis - Sabtu</div>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-[11px] text-slate-600 font-bold bg-white border border-slate-200 shadow-sm px-4 py-1.5 rounded-full uppercase tracking-wider">
                                                10:00 - 21:00 WIB
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <div className="font-black text-slate-900 text-base">Dika</div>
                                            <div className="text-[11px] text-blue-600 font-black tracking-widest uppercase mt-1">Junior Barber</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-lg">Classic Shave</span>
                                                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-lg">Coloring</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right px-6">
                                            <div className="font-black text-slate-900 text-lg group-hover:scale-110 transition-transform origin-right">Rp 35.000</div>
                                            <div className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Mulai Dari</div>
                                        </TableCell>
                                    </TableRow>
                                    
                                    {/* Baris 3 */}
                                    <TableRow className="hover:bg-slate-50/80 transition-all duration-300 group">
                                        <TableCell className="py-6 px-6">
                                            <div className="font-black text-slate-800 text-base">Minggu (Weekend)</div>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-[11px] text-slate-600 font-bold bg-white border border-slate-200 shadow-sm px-4 py-1.5 rounded-full uppercase tracking-wider">
                                                09:00 - 22:00 WIB
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <div className="font-black text-slate-900 text-base">Rian & Dika</div>
                                            <div className="text-[11px] text-purple-600 font-black tracking-widest uppercase mt-1">Full Team</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-lg">All Services</span>
                                                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-lg">Hair Spa</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right px-6">
                                            <div className="font-black text-slate-900 text-lg group-hover:scale-110 transition-transform origin-right">Rp 85.000</div>
                                            <div className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Tarif Weekend</div>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </TabsContent>

                    {/* TABS 2: PROFIL KAPSTER */}
                    <TabsContent value="profil" className="animate-in fade-in-50 duration-500 slide-in-from-bottom-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
                            
                            {/* Profil 1: Rian */}
                            <div className="group relative overflow-hidden bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 hover:border-slate-800 hover:shadow-2xl transition-all duration-500">
                                {/* Elemen Geometris Dekoratif */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 group-hover:bg-slate-900 transition-colors duration-500"></div>
                                
                                <div className="flex flex-col sm:flex-row items-start gap-6">
                                    <Avatar className="h-24 w-24 border-4 border-white shadow-xl group-hover:-translate-y-2 transition-transform duration-500">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback className="bg-slate-900 text-white font-black text-2xl">BR</AvatarFallback>
                                    </Avatar>
                                    <div className="pt-2">
                                        <h4 className="text-2xl font-black text-slate-900 tracking-tight">Bang Rian</h4>
                                        <span className="inline-block mt-2 text-[10px] text-emerald-600 bg-emerald-50 px-3 py-1 rounded-md font-black uppercase tracking-widest border border-emerald-100">
                                            Senior Barber
                                        </span>
                                        <p className="text-sm text-slate-500 leading-relaxed font-medium mt-4">
                                            Spesialis potongan Fade, Crop Cut, dan HairCut Signature. Memiliki pengalaman lebih dari 5 tahun dengan sertifikasi Barber Internasional.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Profil 2: Dika */}
                            <div className="group relative overflow-hidden bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 hover:border-slate-800 hover:shadow-2xl transition-all duration-500">
                                {/* Elemen Geometris Dekoratif */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 group-hover:bg-slate-900 transition-colors duration-500"></div>
                                
                                <div className="flex flex-col sm:flex-row items-start gap-6">
                                    <Avatar className="h-24 w-24 border-4 border-white shadow-xl group-hover:-translate-y-2 transition-transform duration-500">
                                        <AvatarFallback className="bg-amber-500 text-white font-black text-2xl">DK</AvatarFallback>
                                    </Avatar>
                                    <div className="pt-2">
                                        <h4 className="text-2xl font-black text-slate-900 tracking-tight">Dika</h4>
                                        <span className="inline-block mt-2 text-[10px] text-blue-600 bg-blue-50 px-3 py-1 rounded-md font-black uppercase tracking-widest border border-blue-100">
                                            Junior Barber
                                        </span>
                                        <p className="text-sm text-slate-500 leading-relaxed font-medium mt-4">
                                            Ahli dalam pewarnaan rambut pria, Classic Shave, dan perawatan wajah. Selalu mengikuti tren terbaru untuk Hair Styling.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </TabsContent>

                </Tabs>
            </div>
        </div>
    );
}