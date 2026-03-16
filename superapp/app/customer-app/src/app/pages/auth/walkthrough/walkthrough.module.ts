import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WalkthroughComponent } from './walkthrough.component';

const routes: Routes = [
  { path: '', component: WalkthroughComponent }
];

@NgModule({
  declarations: [WalkthroughComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WalkthroughModule { }
