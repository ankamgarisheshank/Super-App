import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ecom-detail pb-20">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col lg:flex-row gap-12">
          
          <!-- Image Gallery -->
          <div class="lg:w-1/2">
             <div class="main-image bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 aspect-square mb-6">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" class="w-full h-full object-contain">
             </div>
             <div class="flex gap-4">
                <div class="w-20 h-20 rounded-xl border-2 border-primary cursor-pointer overflow-hidden p-2">
                   <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" class="w-full h-full object-contain">
                </div>
                <div class="w-20 h-20 rounded-xl border border-gray-200 cursor-pointer overflow-hidden p-2">
                   <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" class="w-full h-full object-contain">
                </div>
             </div>
          </div>

          <!-- Product Specs -->
          <div class="lg:w-1/2">
            <nav class="text-xs text-gray-400 font-bold uppercase tracking-widest mb-4">Electronics > Headphones > Wireless</nav>
            <h1 class="text-3xl font-extrabold mb-2">Sony WH-1000XM4 Noise Canceling Wireless Headphones</h1>
            <div class="flex items-center gap-4 mb-6">
              <span class="bg-primary text-white text-xs font-bold px-2 py-1 rounded">BEST SELLER</span>
              <div class="flex text-yellow-400 text-sm">★★★★★</div>
              <span class="text-xs text-gray-500 font-bold">4.8 (1.2K Reviews)</span>
            </div>

            <div class="price-section mb-8">
               <div class="flex items-baseline gap-3">
                 <span class="text-4xl font-black">₹24,990</span>
                 <span class="text-lg line-through text-gray-400">₹29,990</span>
                 <span class="text-green-600 font-bold">17% OFF</span>
               </div>
               <p class="text-xs text-gray-500 mt-1">Inclusive of all taxes</p>
            </div>

            <div class="variants mb-8">
               <h4 class="text-sm font-bold mb-3 uppercase">Color</h4>
               <div class="flex gap-3">
                 <div class="w-8 h-8 rounded-full bg-black ring-2 ring-offset-2 ring-primary cursor-pointer"></div>
                 <div class="w-8 h-8 rounded-full bg-gray-400 cursor-pointer"></div>
                 <div class="w-8 h-8 rounded-full bg-blue-900 cursor-pointer"></div>
               </div>
            </div>

            <div class="actions flex gap-4 mb-8">
               <button class="btn-premium flex-1 py-4 uppercase tracking-widest">Add to Cart</button>
               <button class="flex-1 border-2 border-gray-900 py-4 uppercase tracking-widest font-bold rounded-xl hover:bg-gray-900 hover:text-white transition-colors">Buy Now</button>
            </div>

            <div class="offers border border-dashed border-gray-300 rounded-2xl p-6 bg-gray-50">
               <h4 class="font-bold text-sm mb-4 uppercase">Available Offers</h4>
               <ul class="text-sm space-y-3 list-none p-0">
                  <li class="flex gap-3">
                    <span class="text-green-600">🏷️</span>
                    <span>Bank Offer: 10% instant discount on HDFC Cards</span>
                  </li>
                  <li class="flex gap-3">
                    <span class="text-green-600">🏷️</span>
                    <span>No Cost EMI: Starting from ₹2,082/month</span>
                  </li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
  `]
})
export class ProductDetailComponent {}
