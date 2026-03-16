import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NetBankingComponent } from './net-banking.component';

const routes: Routes = [
  { path: '', component: NetBankingComponent }
];

@NgModule({
  declarations: [NetBankingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NetBankingModule { }
