import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="services-search bg-gray-50 min-h-screen">
      <!-- Filter Top Bar -->
      <div class="bg-white border-b border-gray-200 sticky top-[64px] z-30">
        <div class="container mx-auto px-4 py-4 flex items-center gap-4 overflow-x-auto no-scrollbar">
           <button class="bg-primary text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
             <span>⚒️</span> All Services
           </button>
           <button class="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap">Electrician</button>
           <button class="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap">Plumber</button>
           <button class="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap">AC Service</button>
           <button class="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap">Home Cleaning</button>
        </div>
      </div>

      <div class="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <!-- Providers List -->
        <div class="flex-1">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold font-heading">Top Rated Electricians</h2>
            <div class="flex gap-2">
               <button class="bg-white border border-gray-200 p-2 rounded-lg text-sm font-bold">SortBy</button>
               <button class="bg-white border border-gray-200 p-2 rounded-lg text-sm font-bold">Filters</button>
            </div>
          </div>

          <div class="space-y-4">
            <div class="service-card bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-4" *ngFor="let s of providers">
               <div class="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                  <img [src]="s.img" class="w-full h-full object-cover">
               </div>
               <div class="flex-1">
                  <div class="flex justify-between items-start mb-1">
                    <h3 class="font-bold text-gray-900">{{s.name}}</h3>
                    <div class="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter" *ngIf="s.verified">
                      VERIFIED
                    </div>
                  </div>
                  <div class="flex items-center gap-2 mb-3">
                    <span class="text-yellow-400 text-xs">★★★★★</span>
                    <span class="text-xs font-bold text-gray-400">{{s.rating}} ({{s.reviews}} Reviews)</span>
                  </div>
                  <div class="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-4">
                    <span>{{s.distance}} km away</span>
                    <span>•</span>
                    <span>Starts at ₹{{s.basePrice}}</span>
                  </div>
                  <div class="flex gap-2">
                    <button class="bg-primary text-white px-6 py-2 rounded-lg text-xs font-bold uppercase">Book Now</button>
                    <button class="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg text-xs font-bold uppercase">Call</button>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <!-- Map Sidebar (Desktop) -->
        <div class="hidden lg:block w-96 sticky top-[148px] h-[calc(100vh-180px)] rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
           <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1" class="w-full h-full object-cover grayscale opacity-50">
           <div class="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-sm">
              <div class="bg-white p-6 rounded-2xl shadow-2xl text-center">
                 <p class="font-bold text-sm mb-2">Interactive Map Preview</p>
                 <p class="text-[10px] text-gray-500 mb-4">Click to view all providers nearby</p>
                 <button class="btn-premium py-2 px-6 text-xs uppercase tracking-widest font-bold">Open Map</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .service-card {
      cursor: pointer;
    }
  `]
})
export class SearchResultsComponent {
  providers = [
    { name: 'Apex Multi-Service (Arun K)', rating: 4.8, reviews: 156, distance: 1.2, basePrice: 249, verified: true, img: 'https://images.unsplash.com/photo-1621905231727-0b013c72b535' },
    { name: 'Electric Pros Indiranagar', rating: 4.5, reviews: 89, distance: 2.5, basePrice: 199, verified: false, img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12' },
    { name: 'Modern Home Solutions', rating: 4.9, reviews: 210, distance: 0.8, basePrice: 299, verified: true, img: 'https://images.unsplash.com/photo-1558223108-637ef2401ad7' },
  ]
}
