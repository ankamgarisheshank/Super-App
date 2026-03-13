import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="food-home pb-24 md:pb-12">
      <!-- Hero Carousel -->
      <section class="hero-carousel container mx-auto px-4 py-6">
        <div class="carousel-container relative overflow-hidden rounded-2xl h-48 md:h-64 bg-gray-200">
           <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" class="w-full h-full object-cover" alt="Banner">
           <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
             <h2 class="text-white text-2xl md:text-3xl font-bold">50% OFF on first order</h2>
             <p class="text-white/80">Use code: SUPERFOOD</p>
           </div>
        </div>
      </section>

      <!-- Sticky Search & Filters -->
      <div class="sticky top-[64px] z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm">
        <div class="container mx-auto px-4 flex items-center gap-4">
           <div class="flex-1 bg-gray-100 rounded-xl px-4 py-2 flex items-center gap-2">
             <span>🔍</span>
             <input type="text" placeholder="Search for restaurant, cuisine or a dish" class="bg-transparent border-none outline-none text-sm w-full">
           </div>
        </div>
        <div class="container mx-auto px-4 mt-3 flex gap-2 overflow-x-auto no-scrollbar pb-1">
          <span class="chip active">All</span>
          <span class="chip">Rating 4.0+</span>
          <span class="chip">Veg Only</span>
          <span class="chip">Fast Delivery</span>
          <span class="chip">Offers</span>
        </div>
      </div>

      <!-- Categories -->
      <section class="container mx-auto px-4 mt-8">
        <h3 class="text-xl font-bold mb-4">In the Mood for?</h3>
        <div class="flex gap-6 overflow-x-auto no-scrollbar py-2">
          <div class="cuisine-item" *ngFor="let c of cuisines">
            <div class="w-20 h-20 rounded-full overflow-hidden bg-gray-100 mb-2">
              <img [src]="c.img" class="w-full h-full object-cover">
            </div>
            <span class="text-xs font-semibold">{{c.name}}</span>
          </div>
        </div>
      </section>

      <!-- Restaurant List -->
      <section class="container mx-auto px-4 mt-8">
        <h3 class="text-xl font-bold mb-6">Top Restaurants Nearby</h3>
        <div class="app-grid">
          <div class="restaurant-card fade-in" *ngFor="let r of restaurants">
            <div class="relative rounded-2xl overflow-hidden aspect-[4/3] mb-3 group">
              <img [src]="r.img" class="w-full h-full object-cover transition-transform group-hover:scale-105">
              <div class="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold shadow-sm" *ngIf="r.promo">
                PROMOTED
              </div>
              <div class="absolute bottom-3 right-3 bg-primary text-white px-2 py-1 rounded-lg text-xs font-bold shadow-md">
                {{r.discount}}
              </div>
            </div>
            <div class="flex justify-between items-start">
              <div>
                <h4 class="font-bold text-lg mb-0.5">{{r.name}}</h4>
                <p class="text-xs text-gray-500 mb-2">{{r.cusines}}</p>
              </div>
              <div class="bg-green-700 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                {{r.rating}} ★
              </div>
            </div>
            <div class="flex items-center gap-3 text-[10px] font-bold text-gray-400 border-t pt-2 border-gray-50 uppercase tracking-tighter">
              <span>{{r.time}} MINS</span>
              <span>•</span>
              <span>₹{{r.cost}} FOR TWO</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .chip {
      padding: 0.4rem 1rem;
      border-radius: 99px;
      border: 1px solid var(--border);
      font-size: 0.75rem;
      font-weight: 500;
      white-space: nowrap;
      background: white;
      cursor: pointer;
      color: var(--text-muted);
    }
    .chip.active {
      background: var(--primary);
      color: white;
      border-color: var(--primary);
    }
    .cuisine-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
      cursor: pointer;
    }
    .restaurant-card {
      cursor: pointer;
    }
  `]
})
export class FoodHomeComponent {
  cuisines = [
    { name: 'Biryani', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0' },
    { name: 'Pizza', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591' },
    { name: 'Burgers', img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add' },
    { name: 'Thalis', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d' },
    { name: 'Rolls', img: 'https://images.unsplash.com/photo-1539252554452-969470ddd213' },
    { name: 'Cakes', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587' },
  ];

  restaurants = [
    { 
      name: 'The Bowl Company', cusines: 'Continental, Thai, Indian', rating: 4.4, time: 32, cost: 400, promo: true, discount: '₹125 OFF',
      img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'
    },
    { 
      name: 'California Burrito', cusines: 'Mexican, Tex-Mex', rating: 4.6, time: 25, cost: 350, promo: false, discount: '20% OFF',
      img: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38'
    },
    { 
      name: 'Leon Grill', cusines: 'Burgers, American', rating: 4.3, time: 40, cost: 500, promo: false, discount: '₹100 OFF',
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
    },
    { 
      name: 'Taco Bell', cusines: 'Mexican, Fast Food', rating: 4.1, time: 20, cost: 300, promo: true, discount: '50% OFF',
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'
    },
  ];
}
