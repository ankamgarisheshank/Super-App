import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogoutConfirmComponent } from './logout-confirm.component';

const routes: Routes = [
  { path: '', component: LogoutConfirmComponent }
];

@NgModule({
  declarations: [LogoutConfirmComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LogoutConfirmModule { }
