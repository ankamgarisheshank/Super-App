import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';

const routes: Routes = [
  { path: '', component: SystemComponent }
];

@NgModule({
  declarations: [SystemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SystemModule { }
