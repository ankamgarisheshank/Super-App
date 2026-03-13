import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductGridComponent } from './pages/product-grid/product-grid';

const routes: Routes = [
  { path: '', component: ProductGridComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuickCommerceRoutingModule {}
