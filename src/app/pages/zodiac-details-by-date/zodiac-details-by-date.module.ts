import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZodiacDetailsByDatePageRoutingModule } from './zodiac-details-by-date-routing.module';

import { ZodiacDetailsByDatePage } from './zodiac-details-by-date.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZodiacDetailsByDatePageRoutingModule
  ],
  declarations: [ZodiacDetailsByDatePage]
})
export class ZodiacDetailsByDatePageModule {}
