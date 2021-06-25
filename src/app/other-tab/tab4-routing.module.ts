import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Tab4Page } from "./tab4.page";

const routes: Routes = [
  {
    path: "",
    component: Tab4Page,
    children: [
      {
        path: "categories",
        loadChildren: () =>
          import("../categories-tabs/categories-tabs.module").then(
            (m) => m.CategoriesTabsPageModule
          ),
      },
      {
        path: "expense-data",
        loadChildren: () =>
          import("../expense-historic-tab/subtab2.module").then(
            (m) => m.Subtab2PageModule
          ),
      },
      {
        path: "",
        redirectTo: "categories",
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
