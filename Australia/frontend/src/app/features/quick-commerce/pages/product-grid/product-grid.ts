import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="quick-commerce pb-24">
      <header class="bg-primary p-4 text-white">
        <div class="container mx-auto">
          <div class="flex items-center gap-2 mb-4">
             <span class="text-2xl">⚡</span>
             <div>
               <h2 class="text-sm font-bold leading-none">10 MINS DELIVERY</h2>
               <p class="text-[10px] opacity-80 uppercase tracking-widest">Delivering to Indiranagar</p>
             </div>
          </div>
          <div class="bg-white rounded-xl p-3 flex items-center gap-2 text-gray-400">
             <span>🔍</span>
             <input type="text" placeholder="Search for 'milk'" class="bg-transparent border-none outline-none text-sm w-full text-gray-800">
          </div>
        </div>
      </header>

      <div class="container mx-auto px-4 mt-6">
        <div class="flex gap-4">
          <!-- Sidebar Categories (Desktop) -->
          <aside class="hidden md:block w-48 shrink-0">
            <h3 class="font-bold mb-4">Categories</h3>
            <ul class="space-y-4 list-none p-0 text-sm font-medium text-gray-600">
              <li class="text-primary font-bold">Dairy, Bread & Eggs</li>
              <li>Fruits & Vegetables</li>
              <li>Snacks & Munchies</li>
              <li>Cold Drinks & Juices</li>
              <li>Instant & Frozen Food</li>
            </ul>
          </aside>

          <!-- Main Content -->
          <main class="flex-1">
            <div class="flex justify-between items-center mb-6">
               <h3 class="text-xl font-bold">Dairy, Bread & Eggs</h3>
               <span class="text-xs font-bold text-primary cursor-pointer">View All</span>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              <div class="product-card bg-white p-3 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow" *ngFor="let p of products">
                <div class="relative bg-gray-50 rounded-xl p-4 mb-3 flex items-center justify-center">
                   <img [src]="p.img" class="h-28 object-contain">
                   <div class="absolute top-2 left-2 bg-accent text-white text-[8px] font-bold px-1.5 py-0.5 rounded" *ngIf="p.discount">
                     {{p.discount}}% OFF
                   </div>
                </div>
                <div class="flex flex-col h-full">
                  <h4 class="text-sm font-semibold text-gray-800 line-clamp-2 mb-1">{{p.name}}</h4>
                  <p class="text-[10px] text-gray-400 font-bold mb-3 uppercase">{{p.unit}}</p>
                  <div class="mt-auto flex justify-between items-center">
                    <div>
                      <p class="text-xs line-through text-gray-400" *ngIf="p.mrp">₹{{p.mrp}}</p>
                      <p class="font-bold text-gray-900">₹{{p.price}}</p>
                    </div>
                    <button class="bg-primary/10 text-primary border border-primary/20 px-4 py-1 rounded-lg text-xs font-bold uppercase hover:bg-primary hover:text-white transition-colors">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-card {
      cursor: pointer;
    }
  `]
})
export class ProductGridComponent {
  products = [
    { name: 'Nandini GoodLife Toned Milk', price: 54, mrp: 60, unit: '1 L', discount: 10, img: 'https://images.unsplash.com/photo-1563636619-e9107da5a165' },
    { name: 'Amul Butter - Pasteurized', price: 52, mrp: 55, unit: '100 g', discount: 5, img: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d' },
    { name: 'Britannia White Bread', price: 40, unit: '400 g', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff' },
    { name: 'Farm Fresh Brown Eggs', price: 95, mrp: 110, unit: '6 pcs', discount: 13, img: 'https://images.unsplash.com/photo-1582722872445-44c5ec1f2c8a' },
  ]
}
