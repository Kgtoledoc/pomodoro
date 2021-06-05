import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryHistoricPageRoutingModule } from './category-historic-routing.module';

import { CategoryHistoricPage } from './category-historic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryHistoricPageRoutingModule
  ],
  declarations: [CategoryHistoricPage]
})
export class CategoryHistoricPageModule {}
