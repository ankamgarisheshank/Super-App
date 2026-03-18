import React from 'react';

/**
 * E-commerce Page ID: 113
 * Name: Vendor Audit Logs
 * Role: VENDOR
 */
const VendorAuditLogsPage: React.FC = () => {
  return (
    <div className="p-8 bg-[#fdfdfd] text-[#1a1a1a] min-h-screen font-['Inter']">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-12 border-b border-gray-100 pb-8">
          <div>
            <h1 className="text-5xl font-black tracking-tighter text-[#111] uppercase">Vendor Audit Logs</h1>
            <p className="text-gray-400 mt-2 font-medium tracking-widest text-xs uppercase">E-Commerce Module | Ref: #113</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-xs font-bold border border-indigo-100 uppercase">VENDOR PANEL</div>
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <section className="lg:col-span-8">
            <div className="bg-white rounded-[40px] p-12 shadow-2xl shadow-gray-200/50 border border-gray-50 flex flex-col min-h-[500px] group transition-all hover:shadow-indigo-500/5">
              <div className="mb-8">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">System Interface</h3>
              </div>
              <div className="flex-1 bg-gray-50 rounded-[32px] border-2 border-dashed border-gray-200 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <p className="text-gray-300 font-black text-3xl italic tracking-tighter uppercase text-center px-10 relative z-10 transition-all group-hover:text-indigo-300">
                  [ Vendor Audit Logs Interface ]
                </p>
              </div>
            </div>
          </section>

          <aside className="lg:col-span-4 space-y-8">
             <div className="bg-[#111] p-10 rounded-[40px] text-white shadow-2xl shadow-indigo-500/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 blur-3xl opacity-20 -mr-16 -mt-16"></div>
                <h3 className="text-xl font-black mb-6 tracking-tight">Core Strategy</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium mb-10 italic">"Vendor Audit Logs is optimized for bulk operations and comparison-heavy discovery."</p>
                <button className="w-full py-5 bg-white text-black rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all transform hover:scale-[1.02]">PROCEED SYSTEM</button>
             </div>
             
             <div className="bg-indigo-50/50 p-8 rounded-[40px] border border-indigo-100">
                <h4 className="text-indigo-900 font-bold mb-4 uppercase text-[10px] tracking-widest opacity-60 italic">Module Metadata</h4>
                <div className="space-y-3">
                   <div className="flex justify-between text-sm"><span className="text-indigo-600/60">Response</span><span className="font-bold text-indigo-900">45ms</span></div>
                   <div className="flex justify-between text-sm"><span className="text-indigo-600/60">Platform</span><span className="font-bold text-indigo-900">Web Core</span></div>
                </div>
             </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default VendorAuditLogsPage;
