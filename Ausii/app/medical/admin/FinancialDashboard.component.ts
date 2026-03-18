import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * SuperApp Angular Core | Component ID: #ADMIN_FINANCIALDASHBOARD
 * Module: FinancialDashboard
 */
@Component({
  standalone: true,
  selector: 'app-financial-dashboard',
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-[#f8fafc] text-[#0f172a] flex flex-col font-sans overflow-x-hidden text-[13px]">
      <!-- Admin Nav Shell -->
      <nav class="bg-slate-900/95 backdrop-blur-3xl sticky top-0 z-50 px-8 py-4 border-b border-slate-800 flex justify-between items-center transition-all duration-300 shadow-2xl">
        <div class="flex items-center gap-5">
           <div class="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center rotate-3 shadow-xl shadow-red-500/30 ring-2 ring-red-400/20">
              <span class="text-white font-black text-2xl italic select-none">A</span>
           </div>
           <div>
              <h2 class="text-sm font-black tracking-[0.2em] text-white uppercase select-none">MEDICAL SERVICES ADMIN PORTAL</h2>
              <p class="text-[10px] font-bold text-red-500/80 tracking-widest uppercase mt-0.5">SECURE CONTROL CENTER v4.0.2</p>
           </div>
        </div>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-3 bg-slate-800/80 px-6 py-2.5 rounded-full border border-slate-700/50 transform hover:scale-105 transition-all cursor-pointer group shadow-inner">
             <div class="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse group-hover:bg-red-400 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
             <span class="text-[11px] font-black tracking-[0.15em] text-slate-300 uppercase">SYSTEM ENCRYPTION ACTIVE</span>
          </div>
          <div class="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
            <span class="text-xs font-bold">JD</span>
          </div>
        </div>
      </nav>

      <main class="flex-1 w-full max-w-7xl mx-auto px-8 py-12 md:py-24">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24">
          
          <!-- Primary Admin Interaction Grid (L:8) -->
          <div class="lg:col-span-8 flex flex-col gap-12">
            <header class="max-w-4xl">
              <span class="inline-block px-4 py-1.5 bg-red-100/10 text-red-500 rounded-lg text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm border border-red-500/20 animate-pulse">#ADMIN_UNLOCKED | SECURE_ACCESS</span>
              <h1 class="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8 group cursor-default">
                FinancialDashboard
              </h1>
              <p class="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl border-l-4 border-red-600 pl-8 ml-2">
                Unified administration interface for MEDICAL SERVICES financialdashboard. Orchestrating real-time data streams and system-level configuration with military-grade precision.
              </p>
            </header>

            <!-- Admin Terminal Architecture -->
            <section class="relative bg-slate-900 rounded-[4rem] p-12 md:p-20 shadow-3xl shadow-slate-900/50 group hover:shadow-red-900/10 transition-all border border-slate-800/80 min-h-[500px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
               <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
               <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-red-600/5 to-transparent"></div>
               
               <!-- Admin Prototype UI Infrastructure -->
               <div class="relative z-10 text-center space-y-12 w-full max-w-2xl px-6">
                  <div class="w-36 h-36 md:w-56 md:h-56 bg-slate-900 rounded-[3rem] mx-auto flex items-center justify-center border-4 border-dashed border-slate-700/50 group-hover:border-red-600/40 group-hover:bg-slate-800/40 transition-all transform group-hover:scale-110 shadow-2xl relative">
                     <div class="absolute inset-0 bg-red-600/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <span class="text-slate-700 group-hover:text-red-500 font-black text-5xl md:text-6xl italic tracking-tighter transition-colors relative z-10">ADMIN</span>
                  </div>
                  <div class="space-y-4">
                    <p class="text-slate-400 group-hover:text-white transition-colors font-black text-3xl md:text-4xl lg:text-5xl italic tracking-[0.1em] uppercase leading-tight select-none">
                      FinancialDashboard CONSOLE
                    </p>
                    <div class="h-1 w-24 bg-red-600 mx-auto rounded-full group-hover:w-48 transition-all duration-700"></div>
                  </div>
                  <p class="text-slate-500/80 font-bold text-base md:text-lg group-hover:text-slate-400 transition-colors max-w-lg mx-auto leading-relaxed uppercase tracking-[0.2em] italic">
                    SYSTEM STATUS: AWAITING CORE MODULE INJECTION | ACCESS LEVEL 0
                  </p>
               </div>
            </section>
          </div>

          <!-- Ops Intelligence Grid (R:4) -->
          <aside class="lg:col-span-4 space-y-12">
             <!-- Administrative Control Panel -->
             <div class="bg-white p-12 md:p-14 rounded-[4rem] text-slate-900 shadow-2xl shadow-slate-200/50 relative overflow-hidden group hover:-translate-y-2 transition-all duration-700 cursor-pointer border border-slate-100">
                <div class="absolute top-0 right-0 w-80 h-80 bg-red-50 blur-[120px] -mr-40 -mt-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <h3 class="text-3xl font-black mb-8 tracking-tighter uppercase italic text-slate-800 select-none flex items-center gap-4">
                  <div class="w-2 h-8 bg-red-600 rounded-full"></div>
                  COMMAND CORE
                </h3>
                <p class="text-slate-500 font-bold leading-loose mb-12 text-base italic group-hover:text-slate-900 transition-colors uppercase tracking-wider">
                  Administrative kernel ready. Critical override protocols for FinancialDashboard are now active under super-user credentials.
                </p>
                <button class="w-full py-7 bg-slate-900 text-white rounded-[2.5rem] font-black text-sm uppercase tracking-[0.3em] shadow-[0_20px_40px_rgba(15,23,42,0.3)] hover:bg-red-600 hover:shadow-red-600/30 transition-all active:scale-95 border-b-4 border-slate-950 hover:border-red-700">
                  ENGAGE PROTOCOL
                </button>
             </div>

             <!-- Metric Stream Infrastructure -->
             <div class="bg-slate-900 p-12 rounded-[4rem] border border-slate-800 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] hover:shadow-red-900/20 transition-all group">
                <h4 class="text-red-500 font-black mb-10 uppercase text-[12px] tracking-[0.5em] italic select-none">SYSTEM TELEMETRY</h4>
                <div class="space-y-8">
                   <div class="flex justify-between items-center group">
                      <span class="text-xs font-black text-slate-500 tracking-[0.2em] group-hover:text-slate-300 transition-colors uppercase">KERNEL LOAD</span>
                      <span class="text-xs font-black text-red-500 bg-red-500/10 px-3 py-1 rounded">0.02%</span>
                   </div>
                   <div class="h-4 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700 p-1 shadow-inner">
                      <div class="h-full bg-gradient-to-r from-red-600 to-red-400 w-[15%] rounded-full animate-pulse-slow"></div>
                   </div>
                   
                   <div class="flex justify-between items-center group mt-10">
                      <span class="text-xs font-black text-slate-500 tracking-[0.2em] group-hover:text-slate-300 transition-colors uppercase">SECURITY LEVEL</span>
                      <span class="text-xs font-black text-red-500 bg-red-500/10 px-3 py-1 rounded">Ω OMEGA</span>
                   </div>
                   <div class="h-4 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700 p-1 shadow-inner">
                      <div class="h-full bg-red-600 w-full rounded-full"></div>
                   </div>

                   <div class="pt-8 border-t border-slate-800 mt-10">
                     <p class="text-[10px] font-bold text-slate-600 tracking-[0.3em] uppercase italic text-center">UPTIME: 99.999% SECURE</p>
                   </div>
                </div>
             </div>
          </aside>

        </div>
      </main>

      <footer class="mt-auto px-12 py-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
        <div class="flex flex-col gap-2">
          <p class="text-slate-400 font-bold text-[11px] tracking-[0.5em] uppercase italic opacity-40 select-none">SUPER LOGISTICS INFRASTRUCTURE | ADMIN KERNEL 4.0</p>
          <p class="text-[9px] font-black text-red-600/60 tracking-[0.8em] uppercase italic">ENCRYPTED | REDACTED | PROTECTED</p>
        </div>
        <div class="flex items-center gap-6">
          <div class="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
          <p class="text-slate-900 font-black text-xs tracking-[0.3em] uppercase bg-slate-100 px-6 py-3 rounded-2xl border border-slate-200 shadow-sm italic hover:bg-red-600 hover:text-white transition-all cursor-crosshair">NODE_ID: ADMIN-FINANCIALDASHBOARD</p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    :host { display: block; width: 100%; min-height: 100vh; }
    .pulse-slow { animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .7; } }
    .animate-pulse-slow { animation: pulse-slow 3s infinite ease-in-out; }
    @keyframes pulse-slow { 0%, 100% { transform: scaleX(1); opacity: 0.8; } 50% { transform: scaleX(0.95); opacity: 1; } }
    .shadow-3xl { shadow-color: rgba(0,0,0,0.4); }
  `]
})
export class FinancialDashboardComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
