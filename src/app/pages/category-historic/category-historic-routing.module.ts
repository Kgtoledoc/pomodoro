import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryHistoricPage } from './category-historic.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryHistoricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryHistoricPageRoutingModule {}
