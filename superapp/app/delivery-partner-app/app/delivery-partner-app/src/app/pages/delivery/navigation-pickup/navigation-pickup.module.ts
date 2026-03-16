import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPickupComponent } from './navigation-pickup.component';

const routes: Routes = [
  { path: '', component: NavigationPickupComponent }
];

@NgModule({
  declarations: [NavigationPickupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NavigationPickupModule { }
