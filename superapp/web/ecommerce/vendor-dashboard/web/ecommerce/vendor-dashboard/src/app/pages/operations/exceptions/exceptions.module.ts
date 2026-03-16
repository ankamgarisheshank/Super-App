import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExceptionsComponent } from './exceptions.component';

const routes: Routes = [
  { path: '', component: ExceptionsComponent }
];

@NgModule({
  declarations: [ExceptionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExceptionsModule { }
