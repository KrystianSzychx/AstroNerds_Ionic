import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddHoroscopePageRoutingModule } from './add-horoscope-routing.module';

import { AddHoroscopePage } from './add-horoscope.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddHoroscopePageRoutingModule
  ],
  declarations: [AddHoroscopePage]
})
export class AddHoroscopePageModule {}
