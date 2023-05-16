import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZodiacsDetailsPage } from './zodiacs-details.page';

const routes: Routes = [
  {
    path: '',
    component: ZodiacsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZodiacsDetailsPageRoutingModule {}
