import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteHoroscopePageRoutingModule } from './delete-horoscope-routing.module';

import { DeleteHoroscopePage } from './delete-horoscope.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteHoroscopePageRoutingModule
  ],
  declarations: [DeleteHoroscopePage]
})
export class DeleteHoroscopePageModule {}
