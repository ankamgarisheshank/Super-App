import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VerifyPickupComponent } from './verify-pickup.component';

const routes: Routes = [
  { path: '', component: VerifyPickupComponent }
];

@NgModule({
  declarations: [VerifyPickupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VerifyPickupModule { }
