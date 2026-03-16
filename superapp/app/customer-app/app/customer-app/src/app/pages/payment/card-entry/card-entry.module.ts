import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardEntryComponent } from './card-entry.component';

const routes: Routes = [
  { path: '', component: CardEntryComponent }
];

@NgModule({
  declarations: [CardEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CardEntryModule { }
