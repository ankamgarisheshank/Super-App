import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SavedAddressesComponent } from './saved-addresses.component';

const routes: Routes = [
  { path: '', component: SavedAddressesComponent }
];

@NgModule({
  declarations: [SavedAddressesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SavedAddressesModule { }
