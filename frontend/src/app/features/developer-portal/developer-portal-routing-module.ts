import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiDocsComponent } from './pages/api-docs/api-docs';

const routes: Routes = [
  { path: '', component: ApiDocsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeveloperPortalRoutingModule {}

