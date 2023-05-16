import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZodiacsPage } from './zodiacs.page';

const routes: Routes = [
  {
    path: '',
    component: ZodiacsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZodiacsPageRoutingModule {}
