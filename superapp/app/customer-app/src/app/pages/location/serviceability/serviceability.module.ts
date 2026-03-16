import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServiceabilityComponent } from './serviceability.component';

const routes: Routes = [
  { path: '', component: ServiceabilityComponent }
];

@NgModule({
  declarations: [ServiceabilityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServiceabilityModule { }
