import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partner-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="partner-dashboard bg-slate-50 min-h-screen p-6">
      <div class="container mx-auto">
        <header class="mb-8 flex justify-between items-center">
          <div>
            <h1 class="text-2xl font-bold font-heading">Partner Portal</h1>
            <p class="text-sm text-gray-500">Welcome back, Leon Grill Team</p>
          </div>
          <div class="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm font-bold">
             🟢 STORE ONLINE
          </div>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
           <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p class="text-xs font-bold text-gray-400 uppercase mb-1">Today's Orders</p>
              <h3 class="text-2xl font-black">24</h3>
           </div>
           <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p class="text-xs font-bold text-gray-400 uppercase mb-1">Total Earnings</p>
              <h3 class="text-2xl font-black">₹8,420</h3>
           </div>
           <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p class="text-xs font-bold text-gray-400 uppercase mb-1">Average Prep Time</p>
              <h3 class="text-2xl font-black">12m</h3>
           </div>
        </div>

        <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
           <div class="p-6 border-b border-gray-50">
              <h4 class="font-bold">Active Live Orders (3)</h4>
           </div>
           <div class="p-6 space-y-4">
              <div class="flex justify-between items-center p-4 bg-orange-50 rounded-2xl border border-orange-100" *ngFor="let i of [1,2,3]">
                 <div class="flex gap-4 items-center">
                    <span class="text-2xl">🍔</span>
                    <div>
                       <p class="font-bold">Order #882{{i}}</p>
                       <p class="text-xs text-gray-500">2 Items • Preparing</p>
                    </div>
                 </div>
                 <button class="bg-orange-600 text-white px-6 py-2 rounded-lg font-bold text-xs uppercase">Mark Ready</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  `
})
export class PartnerDashboardComponent {}
