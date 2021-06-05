import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Tab4Page } from "./tab4.page";

const routes: Routes = [
  {
    path: "",
    component: Tab4Page,
    children: [
      {
        path: "subtab1",
        loadChildren: () =>
          import("../subtab1/subtab1.module").then((m) => m.Subtab1PageModule),
      },
      {
        path: "subtab2",
        loadChildren: () =>
          import("../subtab2/subtab2.module").then((m) => m.Subtab2PageModule),
      },
      {
        path: "",
        redirectTo: "subtab1",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
