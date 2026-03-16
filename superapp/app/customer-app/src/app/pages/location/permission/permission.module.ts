import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PermissionComponent } from './permission.component';

const routes: Routes = [
  { path: '', component: PermissionComponent }
];

@NgModule({
  declarations: [PermissionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PermissionModule { }
