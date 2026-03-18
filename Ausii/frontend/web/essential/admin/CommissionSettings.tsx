import React from 'react';

/**
 * Service Page ID: 193
 * Name: Commission Settings
 * Module: ADMIN (User/Provider/Admin)
 */
const CommissionSettingsPage: React.FC = () => {
  return (
    <div className="p-8 bg-zinc-50 min-h-screen font-['Outfit']">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-extrabold text-teal-900 tracking-tight">Commission Settings</h1>
            <p className="text-teal-600/60 font-medium mt-1">Local Services Pro System | Page ID: #193</p>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-teal-100 flex items-center gap-3">
             <div className="w-3 h-3 bg-teal-500 rounded-full shadow-[0_0_10px_#14b8a6]"></div>
             <span className="text-teal-900 font-bold text-sm tracking-wide uppercase">ADMIN MODULE</span>
          </div>
        </header>

        <main className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          <section className="xl:col-span-3 space-y-8">
            <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-teal-900/5 border border-teal-50 flex flex-col min-h-[400px]">
               <div className="border-b border-teal-50 pb-6 mb-8">
                  <h2 className="text-2xl font-bold text-teal-800">Interface Mockup</h2>
               </div>
               <div className="flex-1 bg-teal-50/30 rounded-3xl border-2 border-dashed border-teal-200 flex items-center justify-center">
                  <p className="text-teal-300 font-black text-2xl italic tracking-widest uppercase text-center px-10">
                    [ Interactive UI for Commission Settings Will Be Injected Here ]
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="bg-white p-6 rounded-3xl border border-teal-50 shadow-sm hover:translate-y--1 transition-transform cursor-pointer group">
                    <div className="w-12 h-12 bg-teal-50 rounded-2xl mb-4 group-hover:bg-teal-500 transition-colors flex items-center justify-center">
                       <div className="w-4 h-4 rounded-full border-2 border-teal-500 group-hover:border-white"></div>
                    </div>
                    <p className="font-bold text-teal-900">Feature Segment {i}</p>
                    <p className="text-teal-600/60 text-sm mt-1">Optimized for Commission Settings flow.</p>
                 </div>
               ))}
            </div>
          </section>

          <aside className="space-y-6">
             <div className="bg-gradient-to-br from-teal-600 to-indigo-800 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-900/20">
                <h3 className="text-xl font-black mb-4">Operations Center</h3>
                <p className="text-teal-50 text-sm leading-relaxed font-medium">Manage all aspects of the Commission Settings page here. This module is connected to our real-time dispatch engine.</p>
                <button className="w-full mt-8 py-4 bg-white text-teal-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-[1.03] transition-transform">ACTION PROCEED</button>
             </div>
             
             <div className="bg-white p-6 rounded-[2rem] border border-teal-100 shadow-sm">
                <h4 className="text-teal-900 font-bold mb-3 uppercase text-xs tracking-widest">Analytics Insights</h4>
                <div className="h-24 bg-teal-50/50 rounded-2xl border border-teal-100 animate-pulse"></div>
             </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default CommissionSettingsPage;
