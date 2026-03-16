import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionsComponent } from './suggestions.component';

const routes: Routes = [
  { path: '', component: SuggestionsComponent }
];

@NgModule({
  declarations: [SuggestionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SuggestionsModule { }
