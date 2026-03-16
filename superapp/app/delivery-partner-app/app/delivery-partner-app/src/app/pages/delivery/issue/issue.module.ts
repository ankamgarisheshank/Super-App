import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IssueComponent } from './issue.component';

const routes: Routes = [
  { path: '', component: IssueComponent }
];

@NgModule({
  declarations: [IssueComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IssueModule { }
