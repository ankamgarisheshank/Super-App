import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InstantComponent } from './instant.component';

const routes: Routes = [
  { path: '', component: InstantComponent }
];

@NgModule({
  declarations: [InstantComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InstantModule { }
