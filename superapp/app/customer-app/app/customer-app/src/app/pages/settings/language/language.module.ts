import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LanguageComponent } from './language.component';

const routes: Routes = [
  { path: '', component: LanguageComponent }
];

@NgModule({
  declarations: [LanguageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LanguageModule { }
