import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhoneLoginComponent } from './phone-login.component';

const routes: Routes = [
  { path: '', component: PhoneLoginComponent }
];

@NgModule({
  declarations: [PhoneLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PhoneLoginModule { }
