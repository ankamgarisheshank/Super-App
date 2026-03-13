import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-docs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dev-portal flex bg-white min-h-screen">
      <aside class="w-72 border-r border-gray-100 p-8 hidden md:block">
         <h2 class="font-bold text-lg mb-8">Documentation</h2>
         <ul class="space-y-4 list-none p-0 text-sm font-semibold text-gray-500">
            <li class="text-primary">Introduction</li>
            <li>Authentication</li>
            <li class="mt-8 text-xs text-gray-400 font-black uppercase tracking-widest">FOOD API</li>
            <li>List Restaurants</li>
            <li>Sync Menu</li>
            <li class="mt-8 text-xs text-gray-400 font-black uppercase tracking-widest">LOGISTICS API</li>
            <li>Create Delivery</li>
            <li>Track Rider</li>
         </ul>
      </aside>

      <main class="flex-1 p-12 max-w-4xl">
        <h1 class="text-4xl font-extrabold mb-4">API Reference</h1>
        <p class="text-gray-500 mb-10 leading-relaxed">Connect your business to the SuperApp ecosystem. Our modular APIs allow you to manage inventory, track logistics, and process payments across all four modules.</p>

        <section class="mb-12">
           <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
             <span class="bg-green-600 text-white text-[10px] px-2 py-0.5 rounded">GET</span>
             <code>/api/food/restaurants/nearby</code>
           </h3>
           <div class="bg-gray-900 text-gray-100 p-6 rounded-2xl font-mono text-xs shadow-xl">
             <pre>
{{ '{' }}
  "status": "success",
  "data": [
    {{ '{' }}
      "id": "res_992",
      "name": "The Gourmet Kitchen",
      "rating": 4.5
    {{ '}' }}
  ]
{{ '}' }}
             </pre>
           </div>
        </section>

        <section class="p-8 bg-blue-50 rounded-3xl border border-blue-100">
           <h4 class="font-bold text-blue-900 mb-2">Need a Sandbox?</h4>
           <p class="text-sm text-blue-700 mb-4">Register for a developer account to get your sandbox API keys and start testing in a safe environment.</p>
           <button class="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold text-sm">Join Developer Program</button>
        </section>
      </main>
    </div>
  `
})
export class ApiDocsComponent {}
