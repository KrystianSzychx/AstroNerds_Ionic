import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectActionPageRoutingModule } from './select-action-routing.module';

import { SelectActionPage } from './select-action.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectActionPageRoutingModule
  ],
  declarations: [SelectActionPage]
})
export class SelectActionPageModule {}
