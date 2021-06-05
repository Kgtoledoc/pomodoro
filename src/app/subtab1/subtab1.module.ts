import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subtab1PageRoutingModule } from './subtab1-routing.module';

import { Subtab1Page } from './subtab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subtab1PageRoutingModule
  ],
  declarations: [Subtab1Page]
})
export class Subtab1PageModule {}
