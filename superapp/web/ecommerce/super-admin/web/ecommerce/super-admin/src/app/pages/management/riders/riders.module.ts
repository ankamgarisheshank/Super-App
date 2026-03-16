import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RidersComponent } from './riders.component';

const routes: Routes = [
  { path: '', component: RidersComponent }
];

@NgModule({
  declarations: [RidersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RidersModule { }
