import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskHistoricPageRoutingModule } from './task-historic-routing.module';

import { TaskHistoricPage } from './task-historic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskHistoricPageRoutingModule
  ],
  declarations: [TaskHistoricPage]
})
export class TaskHistoricPageModule {}
