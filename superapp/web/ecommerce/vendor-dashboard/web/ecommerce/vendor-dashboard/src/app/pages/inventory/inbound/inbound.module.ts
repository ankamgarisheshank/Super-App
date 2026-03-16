import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InboundComponent } from './inbound.component';

const routes: Routes = [
  { path: '', component: InboundComponent }
];

@NgModule({
  declarations: [InboundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InboundModule { }
