import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZodiacDateofbirthPageRoutingModule } from './zodiac-dateofbirth-routing.module';

import { ZodiacDateofbirthPage } from './zodiac-dateofbirth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZodiacDateofbirthPageRoutingModule
  ],
  declarations: [ZodiacDateofbirthPage]
})
export class ZodiacDateofbirthPageModule {}
