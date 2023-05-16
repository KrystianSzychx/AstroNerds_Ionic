import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZodiacsPageRoutingModule } from './zodiacs-routing.module';

import { ZodiacsPage } from './zodiacs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZodiacsPageRoutingModule
  ],
  declarations: [ZodiacsPage]
})
export class ZodiacsPageModule {}
