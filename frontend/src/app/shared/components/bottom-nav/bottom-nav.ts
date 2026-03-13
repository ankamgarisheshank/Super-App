import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="md:hidden fixed bottom-0 left-0 right-0 glass border-t border-gray-200 py-2 px-6 flex justify-between items-center z-50">
      <a routerLink="/food" routerLinkActive="active" class="nav-item">
        <span class="icon">🍕</span>
        <span class="label">Food</span>
      </a>
      <a routerLink="/quick" routerLinkActive="active" class="nav-item">
        <span class="icon">⚡</span>
        <span class="label">Quick</span>
      </a>
      <a routerLink="/ecommerce" routerLinkActive="active" class="nav-item">
        <span class="icon">🛍️</span>
        <span class="label">Shop</span>
      </a>
      <a routerLink="/services" routerLinkActive="active" class="nav-item">
        <span class="icon">🛠️</span>
        <span class="label">Services</span>
      </a>
    </div>
  `,
  styles: [`
    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      text-decoration: none;
      color: var(--text-muted);
      transition: all 0.2s;
    }
    .icon {
      font-size: 1.25rem;
    }
    .label {
      font-size: 0.7rem;
      font-weight: 500;
    }
    .active {
      color: var(--primary);
      transform: translateY(-2px);
    }
  `]
})
export class BottomNavComponent {}
