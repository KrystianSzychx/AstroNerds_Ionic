import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZodiacDetailsByDatePage } from './zodiac-details-by-date.page';

const routes: Routes = [
  {
    path: '',
    component: ZodiacDetailsByDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZodiacDetailsByDatePageRoutingModule {}
