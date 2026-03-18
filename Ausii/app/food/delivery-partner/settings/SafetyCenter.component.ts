import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-safetycenter',
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-[#f8fafc] text-[#0f172a] flex flex-col font-sans overflow-x-hidden">
      <!-- Navbar -->
      <nav class="bg-white/90 backdrop-blur-3xl sticky top-0 z-50 px-4 md:px-8 py-4 border-b border-indigo-100 flex justify-between items-center transition-all duration-300">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center rotate-3 shadow-lg shadow-indigo-500/20 transform hover:rotate-0 transition-transform">
            <span class="text-white font-black text-lg italic select-none">DP</span>
          </div>
          <div class="hidden sm:block">
            <h2 class="text-[10px] font-black tracking-widest text-indigo-400 uppercase select-none leading-tight">DELIVERY PARTNER OPS</h2>
            <p class="text-xs font-bold text-slate-700">Safety Center</p>
          </div>
        </div>
        
        <div class="flex items-center gap-3">
          <div class="hidden md:flex flex-col items-end mr-4">
            <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Live Status</span>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span class="text-xs font-bold text-slate-600">MISSION SYNC ACTIVE</span>
            </div>
          </div>
          <button class="bg-indigo-50 p-2 rounded-lg border border-indigo-100 hover:bg-indigo-100 transition-colors">
            <div class="w-5 h-5 bg-indigo-400 rounded-md"></div>
          </button>
          <div class="w-10 h-10 bg-slate-200 rounded-full border-2 border-white shadow-sm overflow-hidden text-center flex items-center justify-center">
             <span class="text-[10px] font-black text-slate-400">USR</span>
          </div>
        </div>
      </nav>

      <div class="flex flex-1 overflow-hidden">
        <!-- Sidebar - hidden on mobile -->
        <aside class="hidden lg:flex w-64 flex-col gap-2 p-6 border-r border-slate-100 bg-white/50 backdrop-blur-sm overflow-y-auto">
          <div class="space-y-1">
            <div class="h-8 w-full bg-slate-100/50 rounded-lg animate-pulse mb-4"></div>
            <div class="h-10 w-full bg-indigo-50 text-indigo-600 rounded-xl flex items-center px-4 font-black text-xs uppercase tracking-widest mb-2 border border-indigo-100">
              Navigation
            </div>
            <div class="h-12 w-full bg-white rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer"></div>
<div class="h-12 w-full bg-white rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer"></div>
<div class="h-12 w-full bg-white rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer"></div>
<div class="h-12 w-full bg-white rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer"></div>
<div class="h-12 w-full bg-white rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer"></div>
<div class="h-12 w-full bg-white rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer"></div>
          </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 overflow-y-auto overflow-x-hidden relative">
          <header class="relative px-6 py-12 md:px-12 md:py-16 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-white -z-10"></div>
            <div class="max-w-4xl">
              <span class="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-[10px] font-black tracking-widest uppercase mb-6 border border-indigo-200">
                <span class="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-ping"></span>
                LIVE MODULE
              </span>
              <h1 class="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter mb-4">
                Safety Center <span class="text-indigo-600">Interface.</span>
              </h1>
              <p class="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl opacity-80 border-l-4 border-indigo-200 pl-4">
                Scalable and robust interface for mission-critical Delivery Partner operations. 
                Designed for high-precision real-time execution across mobile and desktop.
              </p>
            </div>
          </header>

          <section class="px-6 md:px-12 pb-20">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
              <div class="lg:col-span-8 space-y-8">
                <div class="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/40 border border-slate-100 min-h-[500px] flex flex-col items-center justify-center text-center relative overflow-hidden group">
                  <div class="absolute inset-0 bg-gradient-to-br from-indigo-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div class="relative z-10 w-full">
                    <div class="w-40 h-40 bg-slate-50 rounded-[2.5rem] mx-auto flex items-center justify-center border-2 border-dashed border-slate-200 group-hover:border-indigo-400 group-hover:bg-indigo-50/30 transition-all transform group-hover:scale-110 mb-8 overflow-hidden shadow-inner">
                       <span class="text-slate-300 group-hover:text-indigo-500 font-black text-3xl italic tracking-tighter transition-colors">UI CORE</span>
                    </div>
                    <p class="text-slate-300 group-hover:text-slate-700 transition-colors font-black text-2xl md:text-3xl lg:text-4xl italic tracking-widest uppercase leading-tight select-none mb-4">
                      [ SAFETY CENTER SCREEN ]
                    </p>
                    <p class="text-slate-400 font-medium text-sm md:text-base max-w-sm mx-auto mb-10 leading-relaxed italic opacity-70 group-hover:opacity-100 transition-opacity">
                      Awaiting live data streams and micro-service integration for the Delivery Partner dashboard framework.
                    </p>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 w-full">
                       <div class="h-16 bg-slate-50 rounded-2xl border border-slate-100 group-hover:border-indigo-100 transition-all"></div>
<div class="h-16 bg-slate-50 rounded-2xl border border-slate-100 group-hover:border-indigo-100 transition-all"></div>
<div class="h-16 bg-slate-50 rounded-2xl border border-slate-100 group-hover:border-indigo-100 transition-all"></div>
<div class="h-16 bg-slate-50 rounded-2xl border border-slate-100 group-hover:border-indigo-100 transition-all"></div>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div class="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-default"><div class="w-8 h-8 bg-indigo-50 rounded-lg mb-4"></div><div class="h-2 w-16 bg-slate-100 rounded-full mb-2"></div><div class="h-2 w-full bg-slate-100/50 rounded-full"></div></div>
<div class="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-default"><div class="w-8 h-8 bg-indigo-50 rounded-lg mb-4"></div><div class="h-2 w-16 bg-slate-100 rounded-full mb-2"></div><div class="h-2 w-full bg-slate-100/50 rounded-full"></div></div>
<div class="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-default"><div class="w-8 h-8 bg-indigo-50 rounded-lg mb-4"></div><div class="h-2 w-16 bg-slate-100 rounded-full mb-2"></div><div class="h-2 w-full bg-slate-100/50 rounded-full"></div></div>
                </div>
              </div>

              <aside class="lg:col-span-4 space-y-8">
                 <div class="bg-slate-900 p-8 md:p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                    <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent -z-0 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div class="relative z-10">
                      <h3 class="text-xl font-black mb-4 tracking-tight uppercase italic text-indigo-100">Live Mission Control</h3>
                      <button class="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-indigo-600/30 hover:bg-white hover:text-slate-900 transition-all transform active:scale-95 border border-indigo-500">
                        EXECUTE SAFETY CENTER
                      </button>
                    </div>
                 </div>
                 <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/20">
                    <h4 class="text-slate-300 font-extrabold mb-8 uppercase text-[10px] tracking-[0.4em] italic leading-tight">Mission Metrics</h4>
                    <div class="space-y-8">
                       <div><div class="flex justify-between items-center mb-2"><span class="text-[10px] font-black text-slate-400 tracking-wider uppercase">Efficiency</span><span class="text-[10px] font-black text-indigo-600 italic">98.4%</span></div><div class="h-2 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100"><div class="h-full bg-indigo-500 rounded-full animate-pulse" style="width: 98%"></div></div></div>
<div><div class="flex justify-between items-center mb-2"><span class="text-[10px] font-black text-slate-400 tracking-wider uppercase">Compliance</span><span class="text-[10px] font-black text-indigo-600 italic">100%</span></div><div class="h-2 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100"><div class="h-full bg-indigo-500 rounded-full animate-pulse" style="width: 100%"></div></div></div>
<div><div class="flex justify-between items-center mb-2"><span class="text-[10px] font-black text-slate-400 tracking-wider uppercase">Reliability</span><span class="text-[10px] font-black text-indigo-600 italic">OPTIMAL</span></div><div class="h-2 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100"><div class="h-full bg-indigo-500 rounded-full animate-pulse" style="width: 85%"></div></div></div>
                    </div>
                 </div>
                 <div class="p-8 pb-4">
                    <h4 class="text-slate-300 font-extrabold mb-6 uppercase text-[10px] tracking-[0.4em] italic">Live Feeds</h4>
                    <div class="space-y-4">
                       <div class="flex items-center gap-4"><div class="w-2 h-2 rounded-full bg-indigo-300"></div><div class="h-2 flex-1 bg-slate-100 rounded-full"></div></div>
<div class="flex items-center gap-4"><div class="w-2 h-2 rounded-full bg-indigo-300"></div><div class="h-2 flex-1 bg-slate-100 rounded-full"></div></div>
<div class="flex items-center gap-4"><div class="w-2 h-2 rounded-full bg-indigo-300"></div><div class="h-2 flex-1 bg-slate-100 rounded-full"></div></div>
<div class="flex items-center gap-4"><div class="w-2 h-2 rounded-full bg-indigo-300"></div><div class="h-2 flex-1 bg-slate-100 rounded-full"></div></div>
<div class="flex items-center gap-4"><div class="w-2 h-2 rounded-full bg-indigo-300"></div><div class="h-2 flex-1 bg-slate-100 rounded-full"></div></div>
                    </div>
                 </div>
              </aside>
            </div>
          </section>
        </main>
      </div>

      <footer class="mt-auto px-6 py-8 border-t border-slate-100/50 bg-white/50 backdrop-blur-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-400 font-bold text-[9px] tracking-[0.5em] uppercase italic opacity-60">
          SUPER DELIVERY PARTNER CORE | ARCHITECTURE v4.0.2
        </p>
        <p class="text-slate-500 font-black text-[9px] tracking-widest uppercase opacity-80 italic">
          EST. 2026 | MISSION READY
        </p>
      </footer>
    </div>
  `,
  styles: [`
    :host { display: block; width: 100%; min-height: 100vh; }
  `]
})
export class SafetyCenterComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
