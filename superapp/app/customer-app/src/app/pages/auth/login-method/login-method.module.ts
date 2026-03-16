import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginMethodComponent } from './login-method.component';

const routes: Routes = [
  { path: '', component: LoginMethodComponent }
];

@NgModule({
  declarations: [LoginMethodComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginMethodModule { }
