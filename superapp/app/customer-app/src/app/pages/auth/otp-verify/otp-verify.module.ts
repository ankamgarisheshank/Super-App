import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OtpVerifyComponent } from './otp-verify.component';

const routes: Routes = [
  { path: '', component: OtpVerifyComponent }
];

@NgModule({
  declarations: [OtpVerifyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OtpVerifyModule { }
