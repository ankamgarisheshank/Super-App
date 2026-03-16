import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WalletLinkComponent } from './wallet-link.component';

const routes: Routes = [
  { path: '', component: WalletLinkComponent }
];

@NgModule({
  declarations: [WalletLinkComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WalletLinkModule { }
