import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApiExplorerComponent } from './api-explorer.component';

const routes: Routes = [
  { path: '', component: ApiExplorerComponent }
];

@NgModule({
  declarations: [ApiExplorerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ApiExplorerModule { }
