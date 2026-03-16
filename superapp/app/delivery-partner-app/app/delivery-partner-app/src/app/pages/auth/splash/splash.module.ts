import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash.component';

const routes: Routes = [
  { path: '', component: SplashComponent }
];

@NgModule({
  declarations: [SplashComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SplashModule { }
