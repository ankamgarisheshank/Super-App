import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IncomingComponent } from './incoming.component';

const routes: Routes = [
  { path: '', component: IncomingComponent }
];

@NgModule({
  declarations: [IncomingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IncomingModule { }
