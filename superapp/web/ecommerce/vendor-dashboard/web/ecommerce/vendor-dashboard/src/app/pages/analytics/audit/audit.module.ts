import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuditComponent } from './audit.component';

const routes: Routes = [
  { path: '', component: AuditComponent }
];

@NgModule({
  declarations: [AuditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuditModule { }
