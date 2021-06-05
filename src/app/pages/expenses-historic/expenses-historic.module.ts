import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpensesHistoricPageRoutingModule } from './expenses-historic-routing.module';

import { ExpensesHistoricPage } from './expenses-historic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpensesHistoricPageRoutingModule
  ],
  declarations: [ExpensesHistoricPage]
})
export class ExpensesHistoricPageModule {}
