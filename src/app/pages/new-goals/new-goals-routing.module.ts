import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewGoalsPage } from './new-goals.page';

const routes: Routes = [
  {
    path: '',
    component: NewGoalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewGoalsPageRoutingModule {}
