import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewGoalsPageRoutingModule } from './new-goals-routing.module';

import { NewGoalsPage } from './new-goals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewGoalsPageRoutingModule
  ],
  declarations: [NewGoalsPage]
})
export class NewGoalsPageModule {}
