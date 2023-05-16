import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZodiacDateofbirthPage } from './zodiac-dateofbirth.page';

const routes: Routes = [
  {
    path: '',
    component: ZodiacDateofbirthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZodiacDateofbirthPageRoutingModule {}
