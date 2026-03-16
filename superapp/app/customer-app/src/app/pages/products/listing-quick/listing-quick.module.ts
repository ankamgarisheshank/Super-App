import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListingQuickComponent } from './listing-quick.component';

const routes: Routes = [
  { path: '', component: ListingQuickComponent }
];

@NgModule({
  declarations: [ListingQuickComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ListingQuickModule { }
