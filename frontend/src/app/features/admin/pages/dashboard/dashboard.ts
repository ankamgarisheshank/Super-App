import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-dashboard bg-gray-50 flex min-h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-slate-900 text-white min-h-screen p-6 hidden lg:block">
         <div class="text-2xl font-bold mb-10 flex items-center gap-2">
           <span class="text-primary">Super</span>Admin
         </div>
         <nav class="space-y-6">
            <div class="nav-group">
               <p class="text-[10px] text-slate-500 font-black uppercase mb-3">Main</p>
               <ul class="space-y-2 list-none p-0 text-sm font-bold text-slate-400">
                  <li class="text-white bg-slate-800 p-2 rounded-lg cursor-pointer">📊 Dashboard</li>
                  <li class="p-2 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">📦 All Orders</li>
                  <li class="p-2 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">🥘 Food Partners</li>
                  <li class="p-2 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">🛒 Store Partners</li>
                  <li class="p-2 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">🛠️ Service Partners</li>
               </ul>
            </div>
            <div class="nav-group">
               <p class="text-[10px] text-slate-500 font-black uppercase mb-3">User Management</p>
               <ul class="space-y-2 list-none p-0 text-sm font-bold text-slate-400">
                  <li class="p-2 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">👥 Customers</li>
                  <li class="p-2 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">🚴 Delivery Fleet</li>
               </ul>
            </div>
         </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-8">
        <header class="flex justify-between items-center mb-10">
           <h1 class="text-3xl font-extrabold tracking-tight">Platform Overview</h1>
           <div class="flex items-center gap-4">
              <span class="text-xs font-bold text-slate-400">Mar 13, 2026</span>
              <div class="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" class="w-full h-full object-cover">
              </div>
           </div>
        </header>

        <!-- KPI Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
           <div class="kpi-card bg-white p-6 rounded-3xl border border-gray-100 shadow-sm" *ngFor="let k of kpis">
              <div class="flex justify-between items-start mb-4">
                 <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl" [style.background-color]="k.color + '10'" [style.color]="k.color">
                   {{k.icon}}
                 </div>
                 <span class="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">+{{k.trend}}%</span>
              </div>
              <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{{k.title}}</p>
              <h3 class="text-2xl font-black">{{k.value}}</h3>
           </div>
        </div>

        <!-- Charts Row -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
           <div class="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h4 class="font-bold mb-6">Revenue Growth (7 Days)</h4>
              <div class="h-48 w-full bg-gray-50 rounded-2xl flex items-end justify-between p-4 gap-2">
                 <div class="w-full bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style="height: 40%"></div>
                 <div class="w-full bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style="height: 60%"></div>
                 <div class="w-full bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style="height: 45%"></div>
                 <div class="w-full bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style="height: 80%"></div>
                 <div class="w-full bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style="height: 55%"></div>
                 <div class="w-full bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style="height: 70%"></div>
                 <div class="w-full bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style="height: 90%"></div>
              </div>
           </div>
           <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h4 class="font-bold mb-6">Order Distribution</h4>
              <div class="space-y-4">
                 <div *ngFor="let m of modules" class="space-y-1">
                   <div class="flex justify-between text-xs font-bold uppercase">
                     <span>{{m.name}}</span>
                     <span>{{m.value}}%</span>
                   </div>
                   <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                     <div class="h-full" [style.width]="m.value + '%'" [style.background-color]="m.color"></div>
                   </div>
                 </div>
              </div>
           </div>
        </div>

        <!-- Recent Orders Table -->
        <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
           <div class="p-8 border-b border-gray-50 flex justify-between items-center">
              <h4 class="font-bold">Recent Orders Across Platform</h4>
              <button class="text-xs font-bold text-gray-400 hover:text-primary transition-colors">View All Orders</button>
           </div>
           <div class="overflow-x-auto">
             <table class="w-full text-left">
               <thead>
                 <tr class="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                   <th class="px-8 py-4">ID</th>
                   <th class="px-8 py-4">Customer</th>
                   <th class="px-8 py-4">Module</th>
                   <th class="px-8 py-4">Status</th>
                   <th class="px-8 py-4 text-right">Amount</th>
                 </tr>
               </thead>
               <tbody class="text-sm font-semibold">
                 <tr class="border-t border-gray-50 hover:bg-gray-50 transition-colors" *ngFor="let o of orders">
                   <td class="px-8 py-5 text-gray-400">#{{o.id}}</td>
                   <td class="px-8 py-5">{{o.customer}}</td>
                   <td class="px-8 py-5 flex items-center gap-2">
                     <span class="w-2 h-2 rounded-full" [style.background-color]="o.mColor"></span>
                     {{o.module}}
                   </td>
                   <td class="px-8 py-5">
                     <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px]">{{o.status}}</span>
                   </td>
                   <td class="px-8 py-5 text-right font-black">₹{{o.amount}}</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .nav-group ul li {
      transition: all 0.2s;
    }
  `]
})
export class DashboardComponent {
  kpis = [
    { title: 'Gross Revenue', value: '₹12.4M', icon: '💰', trend: 12.4, color: '#FF5200' },
    { title: 'Total Orders', value: '45,821', icon: '📦', trend: 8.2, color: '#2962FF' },
    { title: 'Active Riders', value: '1,240', icon: '🚴', trend: 15.3, color: '#00BFA5' },
    { title: 'Total Partners', value: '892', icon: '🏪', trend: 4.1, color: '#7C3AED' },
  ];

  modules = [
    { name: 'Food Delivery', value: 45, color: '#FF5200' },
    { name: 'Quick Commerce', value: 30, color: '#2962FF' },
    { name: 'E-commerce', value: 15, color: '#00BFA5' },
    { name: 'Services', value: 10, color: '#7C3AED' },
  ];

  orders = [
    { id: '9841', customer: 'Nivas MK', module: 'Food Delivery', mColor: '#FF5200', status: 'ON THE WAY', amount: '840' },
    { id: '9840', customer: 'Rahul Sharma', module: 'Quick Commerce', mColor: '#2962FF', status: 'PICKING', amount: '1,250' },
    { id: '9839', customer: 'Priya Patel', module: 'E-commerce', mColor: '#00BFA5', status: 'SHIPPED', amount: '24,990' },
    { id: '9838', customer: 'Amit Singh', module: 'Services', mColor: '#7C3AED', status: 'ASSIGNED', amount: '499' },
  ]
}
