import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReleasesComponent } from './releases.component';

const routes: Routes = [
  { path: '', component: ReleasesComponent }
];

@NgModule({
  declarations: [ReleasesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReleasesModule { }
