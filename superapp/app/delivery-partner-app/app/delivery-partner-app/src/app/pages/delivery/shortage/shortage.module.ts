import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShortageComponent } from './shortage.component';

const routes: Routes = [
  { path: '', component: ShortageComponent }
];

@NgModule({
  declarations: [ShortageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShortageModule { }
