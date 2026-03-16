import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotificationDetailComponent } from './notification-detail.component';

const routes: Routes = [
  { path: '', component: NotificationDetailComponent }
];

@NgModule({
  declarations: [NotificationDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NotificationDetailModule { }
