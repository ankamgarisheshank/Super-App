import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QaComponent } from './qa.component';

const routes: Routes = [
  { path: '', component: QaComponent }
];

@NgModule({
  declarations: [QaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class QaModule { }
