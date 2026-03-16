import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './alerts.component';

const routes: Routes = [
  { path: '', component: AlertsComponent }
];

@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AlertsModule { }
