import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerDashboardComponent } from './pages/partner-dashboard/partner-dashboard';

const routes: Routes = [
  { path: '', component: PartnerDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerPortalRoutingModule {}

