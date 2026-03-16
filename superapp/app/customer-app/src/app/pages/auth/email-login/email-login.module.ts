import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmailLoginComponent } from './email-login.component';

const routes: Routes = [
  { path: '', component: EmailLoginComponent }
];

@NgModule({
  declarations: [EmailLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmailLoginModule { }
