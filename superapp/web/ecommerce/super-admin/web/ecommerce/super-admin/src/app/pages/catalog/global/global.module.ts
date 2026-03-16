import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GlobalComponent } from './global.component';

const routes: Routes = [
  { path: '', component: GlobalComponent }
];

@NgModule({
  declarations: [GlobalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GlobalModule { }
