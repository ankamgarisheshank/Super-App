import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoServiceComponent } from './no-service.component';

const routes: Routes = [
  { path: '', component: NoServiceComponent }
];

@NgModule({
  declarations: [NoServiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NoServiceModule { }
