import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="restaurant-menu pb-20">
      <!-- Breadcrumbs & Search -->
      <div class="container mx-auto px-4 py-4 flex justify-between items-center text-xs font-semibold text-gray-500">
        <div>FOOD / BANGALORE / THE BOWL COMPANY</div>
        <div class="flex gap-4">
           <span>🔍 Search</span>
           <span>❤️ Favorite</span>
        </div>
      </div>

      <!-- Restaurant Info -->
      <section class="container mx-auto px-4 py-6 border-b border-dashed border-gray-300">
        <div class="flex justify-between items-start">
          <div>
            <h1 class="text-2xl font-bold mb-1">The Bowl Company</h1>
            <p class="text-sm text-gray-500 mb-2">Continental, Thai, Indian</p>
            <p class="text-xs text-gray-400">Indiranagar, 3.2 km</p>
          </div>
          <div class="border border-gray-200 rounded-xl p-2 flex flex-col items-center">
            <span class="text-green-700 font-bold text-sm">★ 4.4</span>
            <div class="w-full h-[1px] bg-gray-100 my-1"></div>
            <span class="text-[8px] text-gray-400 font-bold">10K+ RATINGS</span>
          </div>
        </div>
        <div class="flex items-center gap-6 mt-6">
           <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-tight">
             <span>🕒</span> 32 MINS
           </div>
           <div class="flex items-center gap-2 font-bold text-xs uppercase tracking-tight">
             <span>₹</span> ₹400 FOR TWO
           </div>
        </div>
      </section>

      <!-- Menu Categories -->
      <section class="container mx-auto px-4 mt-8">
        <div class="menu-category" *ngFor="let cat of menu">
          <h2 class="text-lg font-bold mb-6 flex justify-between items-center">
            {{cat.name}} ({{cat.items.length}})
            <span class="text-gray-400">▼</span>
          </h2>
          
          <div class="menu-item py-8 border-b border-gray-100 last:border-0 flex justify-between gap-4" *ngFor="let item of cat.items">
            <div class="flex-1">
              <span class="text-[10px]" [ngClass]="item.veg ? 'text-green-500' : 'text-red-500'">{{item.veg ? '⊡' : '⏇'}}</span>
              <h4 class="font-bold text-gray-800 text-lg mt-1">{{item.name}}</h4>
              <p class="text-sm font-semibold text-gray-700 mb-2">₹{{item.price}}</p>
              <p class="text-sm text-gray-400 leading-relaxed max-w-md">{{item.desc}}</p>
            </div>
            <div class="relative w-32 h-32 flex-shrink-0">
               <img [src]="item.img" class="w-full h-full object-cover rounded-xl shadow-sm">
               <button class="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-green-600 font-bold px-6 py-2 rounded-lg shadow-lg border border-gray-100 text-sm hover:bg-gray-50 uppercase">
                 Add
               </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .menu-item:last-child {
      border-bottom: none;
    }
  `]
})
export class RestaurantMenuComponent {
  menu = [
    {
      name: 'Recommended',
      items: [
        { 
          name: 'Classic Chicken Steak Bowl', price: 349, veg: false, 
          desc: 'Succulent chicken breast grilled to perfection, served with herb rice and sautéed vegetables.',
          img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'
        },
        { 
          name: 'Paneer Makhani Khichdi', price: 289, veg: true, 
          desc: 'A fusion of creamy paneer makhani and comforting dal khichdi. A must try!',
          img: 'https://images.unsplash.com/photo-1596797038583-1c198f4fd77e'
        }
      ]
    },
    {
       name: 'Global Bowls',
       items: [
         { 
           name: 'Teriyaki Tofu Bowl', price: 319, veg: true, 
           desc: 'Stir fried tofu in sweet and savory teriyaki sauce with jasmine rice.',
           img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'
         }
       ]
    }
  ]
}
