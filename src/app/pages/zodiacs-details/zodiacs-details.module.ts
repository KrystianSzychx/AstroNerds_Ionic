import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZodiacsDetailsPageRoutingModule } from './zodiacs-details-routing.module';

import { ZodiacsDetailsPage } from './zodiacs-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZodiacsDetailsPageRoutingModule
  ],
  declarations: [ZodiacsDetailsPage]
})
export class ZodiacsDetailsPageModule {}
