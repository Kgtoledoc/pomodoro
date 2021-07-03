import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "goals",
        loadChildren: () =>
          import("../goals-tab/tab1.module").then((m) => m.Tab1PageModule),
      },
      {
        path: "tasks",
        loadChildren: () =>
          import("../tasks-tab/tab2.module").then((m) => m.Tab2PageModule),
      },
      {
        path: "expenses",
        loadChildren: () =>
          import("../expenses-tab/tab3.module").then((m) => m.Tab3PageModule),
      },
      {
        path: "others",
        loadChildren: () =>
          import("../other-tab/tab4.module").then((m) => m.Tab4PageModule),
      },

      {
        path: "",
        redirectTo: "tasks",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
