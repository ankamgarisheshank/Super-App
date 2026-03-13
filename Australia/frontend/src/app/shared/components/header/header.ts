import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="glass sticky top-0 z-50">
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-8">
          <a routerLink="/" class="logo text-2xl font-bold tracking-tight flex items-center gap-2">
            <span class="text-primary">Super</span>App
          </a>
          
          <nav class="hidden md:flex items-center gap-6">
            <a routerLink="/food" routerLinkActive="active" class="nav-link">Food</a>
            <a routerLink="/quick" routerLinkActive="active" class="nav-link">Quick</a>
            <a routerLink="/ecommerce" routerLinkActive="active" class="nav-link">Shop</a>
            <a routerLink="/services" routerLinkActive="active" class="nav-link">Services</a>
          </nav>
        </div>

        <div class="flex items-center gap-4">
          <div class="search-box hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
            <input type="text" placeholder="Search everything..." class="bg-transparent border-none focus:outline-none text-sm w-full">
          </div>
          <button class="btn-premium py-2 px-5 text-sm">Sign In</button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .nav-link {
      font-weight: 500;
      color: var(--text-muted);
      transition: color 0.2s;
      text-decoration: none;
    }
    .nav-link:hover, .nav-link.active {
      color: var(--primary);
    }
    .logo {
      font-family: var(--font-heading);
      text-decoration: none;
      color: var(--text-main);
    }
    header {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
    }
    .active {
      position: relative;
    }
    .active::after {
      content: '';
      position: absolute;
      bottom: -18px;
      left: 0;
      width: 100%;
      height: 3px;
      background: var(--primary);
      border-radius: 3px 3px 0 0;
    }
  `]
})
export class HeaderComponent {}
