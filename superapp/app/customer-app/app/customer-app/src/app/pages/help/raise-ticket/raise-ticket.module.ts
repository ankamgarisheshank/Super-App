import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RaiseTicketComponent } from './raise-ticket.component';

const routes: Routes = [
  { path: '', component: RaiseTicketComponent }
];

@NgModule({
  declarations: [RaiseTicketComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RaiseTicketModule { }
