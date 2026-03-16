import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SupportChatComponent } from './support-chat.component';

const routes: Routes = [
  { path: '', component: SupportChatComponent }
];

@NgModule({
  declarations: [SupportChatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SupportChatModule { }
