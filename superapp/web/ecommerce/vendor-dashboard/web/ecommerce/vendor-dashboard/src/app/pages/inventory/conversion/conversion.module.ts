import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConversionComponent } from './conversion.component';

const routes: Routes = [
  { path: '', component: ConversionComponent }
];

@NgModule({
  declarations: [ConversionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ConversionModule { }
