import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DbExplorerComponent } from './db-explorer.component';

const routes: Routes = [
  { path: '', component: DbExplorerComponent }
];

@NgModule({
  declarations: [DbExplorerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DbExplorerModule { }
