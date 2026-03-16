import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeleteAccountComponent } from './delete-account.component';

const routes: Routes = [
  { path: '', component: DeleteAccountComponent }
];

@NgModule({
  declarations: [DeleteAccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DeleteAccountModule { }
