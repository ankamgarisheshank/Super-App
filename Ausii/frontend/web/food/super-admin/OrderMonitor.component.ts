import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-food-super-admin-ordermonitor',
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-[#f8fafc] text-[#0f172a] flex flex-col font-sans overflow-x-hidden">
      <nav class="bg-white/80 backdrop-blur-3xl sticky top-0 z-50 px-8 py-5 border-b border-indigo-100 flex justify-between items-center transition-all duration-300">
        <div class="flex items-center gap-4">
           <div class="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center rotate-3 shadow-xl transition-transform hover:rotate-0">
              <span class="text-white font-black text-xl italic select-none">S</span>
           </div>
           <div>
              <h2 class="text-xs font-black tracking-widest text-indigo-400 uppercase select-none leading-none mb-1">FOOD WEB</h2>
              <p class="text-[10px] font-bold text-slate-400 opacity-60 tracking-wider font-mono">CORE_STACK_2742</p>
           </div>
        </div>
        <div class="flex items-center gap-6">
           <div class="hidden lg:flex flex-col items-end">
              <span class="text-[9px] font-black tracking-[0.3em] text-slate-400 uppercase leading-none mb-1">Live Integration</span>
              <div class="flex items-center gap-2">
                 <div class="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                 <p class="text-[10px] font-black text-slate-600 uppercase">MISSION_CONTROL_ACTIVE</p>
              </div>
           </div>
           <div class="h-10 w-[1px] bg-slate-100 mx-2"></div>
           <div class="w-10 h-10 bg-slate-50 rounded-full border border-slate-100 flex items-center justify-center">
              <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
           </div>
        </div>
      </nav>

      <div class="flex flex-1 overflow-hidden relative">
         <aside class="hidden xl:flex w-72 flex-col gap-8 p-10 border-r border-slate-50 bg-white/40 backdrop-blur-xl">
            <div class="space-y-4">
               <h3 class="text-[10px] font-black tracking-[0.4em] text-stone-300 uppercase italic mb-8">Navigation Layer</h3>
               <div class="h-12 w-full bg-indigo-50/50 rounded-2xl border border-indigo-100 flex items-center px-4 gap-3 cursor-pointer group transition-all">
                  <div class="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span class="text-xs font-black text-indigo-600 tracking-widest uppercase">Overview</span>
               </div>
               <div class="h-12 w-full bg-white/50 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-all cursor-pointer"></div>
<div class="h-12 w-full bg-white/50 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-all cursor-pointer"></div>
<div class="h-12 w-full bg-white/50 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-all cursor-pointer"></div>
<div class="h-12 w-full bg-white/50 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-all cursor-pointer"></div>
<div class="h-12 w-full bg-white/50 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-all cursor-pointer"></div>
            </div>
            <div class="mt-auto p-6 bg-slate-900 rounded-[2rem] shadow-2xl relative overflow-hidden group">
               <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-50"></div>
               <p class="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase mb-2 relative z-10">Data Accuracy</p>
               <h4 class="text-lg font-black text-white italic tracking-tighter mb-4 relative z-10">99.98% <span class="text-emerald-400 ml-1 mt-0.5 inline-block scale-75 text-xs">▲</span></h4>
               <div class="h-1 w-full bg-slate-800 rounded-full overflow-hidden relative z-10">
                  <div class="h-full bg-indigo-500 w-[94%]" style="box-shadow: 0 0 10px rgba(99, 102, 241, 0.4)"></div>
               </div>
            </div>
         </aside>

         <main class="flex-1 overflow-y-auto px-8 py-10 lg:px-16 lg:py-20 relative">
            <div class="max-w-7xl mx-auto space-y-16">
               <header>
                  <span class="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-600 rounded-xl text-[10px] font-black tracking-widest uppercase mb-6 shadow-sm border border-indigo-200">
                     #MODULE_2742 / INTERNAL_USE_ONLY
                  </span>
                  <h1 class="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
                     Order Monitor <span class="text-indigo-600">Vision.</span>
                  </h1>
                  <p class="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl opacity-80 border-l-[6px] border-indigo-200 pl-8 ml-1">
                     Enterprise-grade visualization for the Food Super-Admin ecosystem. 
                     Engineered for high-availability management and hyper-scaling operations.
                  </p>
               </header>

               <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <section class="lg:col-span-8 flex flex-col gap-10">
                     <div class="bg-white rounded-[3.5rem] p-12 md:p-20 shadow-2xl shadow-slate-200/40 border border-slate-50 min-h-[600px] relative overflow-hidden group">
                        <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 blur-[200px] -mr-64 -mt-64 rounded-full opacity-0 group-hover:opacity-60 transition-opacity"></div>
                        <div class="relative z-10 text-center space-y-12">
                           <div class="w-48 h-48 bg-slate-50 rounded-[3rem] mx-auto flex items-center justify-center border-2 border-dashed border-slate-100 group-hover:border-indigo-200 transition-all transform group-hover:scale-110">
                              <span class="text-slate-200 group-hover:text-indigo-600 font-black text-5xl tracking-tighter italic">V_CORE</span>
                           </div>
                           <div>
                              <p class="text-stone-300 font-black text-3xl md:text-5xl uppercase italic tracking-[0.2em] mb-4 select-none group-hover:text-slate-900 transition-colors">
                                 [ ORDER MONITOR ]
                              </p>
                           </div>
                           <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
                              <div class="h-24 bg-slate-50 rounded-3xl border border-slate-50 hover:border-indigo-100 transition-all cursor-default"></div>
<div class="h-24 bg-slate-50 rounded-3xl border border-slate-50 hover:border-indigo-100 transition-all cursor-default"></div>
<div class="h-24 bg-slate-50 rounded-3xl border border-slate-50 hover:border-indigo-100 transition-all cursor-default"></div>
<div class="h-24 bg-slate-50 rounded-3xl border border-slate-50 hover:border-indigo-100 transition-all cursor-default"></div>
                           </div>
                        </div>
                     </div>
                  </section>
                  <aside class="lg:col-span-4 flex flex-col gap-10">
                     <div class="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100">
                        <h4 class="text-stone-300 font-black mb-10 text-[10px] tracking-[0.5em] uppercase italic select-none">Live Stream Stats</h4>
                        <div class="space-y-10">
                           <div><div class="flex justify-between items-center mb-3"><span class="text-[10px] font-black text-slate-400 tracking-widest uppercase">Efficiency</span><span class="text-[10px] font-black text-indigo-600 italic">98.2%</span></div><div class="h-2.5 w-full bg-slate-50 rounded-full border border-slate-100 overflow-hidden"><div class="h-full bg-indigo-500/80 w-[98%] animate-pulse"></div></div></div>
<div><div class="flex justify-between items-center mb-3"><span class="text-[10px] font-black text-slate-400 tracking-widest uppercase">Compliance</span><span class="text-[10px] font-black text-indigo-600 italic">100%</span></div><div class="h-2.5 w-full bg-slate-50 rounded-full border border-slate-100 overflow-hidden"><div class="h-full bg-indigo-500/80 w-[100%] animate-pulse"></div></div></div>
<div><div class="flex justify-between items-center mb-3"><span class="text-[10px] font-black text-slate-400 tracking-widest uppercase">Uptime</span><span class="text-[10px] font-black text-indigo-600 italic">ACTIVE</span></div><div class="h-2.5 w-full bg-slate-50 rounded-full border border-slate-100 overflow-hidden"><div class="h-full bg-indigo-500/80 w-[100%] animate-pulse"></div></div></div>
                        </div>
                     </div>
                  </aside>
               </div>
            </div>
         </main>
      </div>

      <footer class="mt-auto px-12 py-10 border-t border-slate-50 bg-white/40 flex flex-col lg:flex-row justify-between items-center gap-8">
         <p class="text-stone-300 font-black text-[10px] tracking-[0.8em] uppercase italic leading-none">SUPER_FOOD_ARCHITECTURE | ANGULAR_v17_CORE</p>
         <div class="flex items-center gap-4 bg-slate-50 px-6 py-2.5 rounded-full border border-slate-100 opacity-60">
            <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <p class="text-[10px] font-black text-slate-600 tracking-widest uppercase">ENFORCE_HYBRID_CORE_v4.2</p>
         </div>
      </footer>
    </div>
  `,
  styles: [`
    :host { display: block; width: 100%; min-height: 100vh; }
  `]
})
export class OrderMonitorComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
