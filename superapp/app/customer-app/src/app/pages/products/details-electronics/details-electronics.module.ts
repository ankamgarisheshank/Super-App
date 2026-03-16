import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsElectronicsComponent } from './details-electronics.component';

const routes: Routes = [
  { path: '', component: DetailsElectronicsComponent }
];

@NgModule({
  declarations: [DetailsElectronicsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailsElectronicsModule { }
