import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReturnsInitComponent } from './returns-init.component';

const routes: Routes = [
  { path: '', component: ReturnsInitComponent }
];

@NgModule({
  declarations: [ReturnsInitComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReturnsInitModule { }
