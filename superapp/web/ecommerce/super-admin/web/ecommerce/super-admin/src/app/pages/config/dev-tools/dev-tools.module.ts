import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DevToolsComponent } from './dev-tools.component';

const routes: Routes = [
  { path: '', component: DevToolsComponent }
];

@NgModule({
  declarations: [DevToolsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DevToolsModule { }
