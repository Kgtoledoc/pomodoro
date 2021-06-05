import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskHistoricPage } from './task-historic.page';

const routes: Routes = [
  {
    path: '',
    component: TaskHistoricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskHistoricPageRoutingModule {}
