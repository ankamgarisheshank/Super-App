import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodHomeComponent } from './pages/food-home/food-home';
import { RestaurantMenuComponent } from './pages/restaurant-menu/restaurant-menu';

const routes: Routes = [
  { path: '', component: FoodHomeComponent },
  { path: 'restaurant/:id', component: RestaurantMenuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodDeliveryRoutingModule {}
