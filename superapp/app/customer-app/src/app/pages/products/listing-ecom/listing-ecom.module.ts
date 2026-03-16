import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListingEcomComponent } from './listing-ecom.component';

const routes: Routes = [
  { path: '', component: ListingEcomComponent }
];

@NgModule({
  declarations: [ListingEcomComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ListingEcomModule { }
