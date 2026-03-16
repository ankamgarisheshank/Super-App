import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GiftOptionsComponent } from './gift-options.component';

const routes: Routes = [
  { path: '', component: GiftOptionsComponent }
];

@NgModule({
  declarations: [GiftOptionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GiftOptionsModule { }
