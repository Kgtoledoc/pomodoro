import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesTabsPage } from './categories-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesTabsPageRoutingModule {}
