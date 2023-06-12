import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddHoroscopePage } from './add-horoscope.page';

const routes: Routes = [
  {
    path: '',
    component: AddHoroscopePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddHoroscopePageRoutingModule {}
