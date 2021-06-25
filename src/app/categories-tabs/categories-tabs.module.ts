import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesTabsPageRoutingModule } from './categories-tabs-routing.module';

import { CategoriesTabsPage } from './categories-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesTabsPageRoutingModule
  ],
  declarations: [CategoriesTabsPage]
})
export class CategoriesTabsPageModule {}
