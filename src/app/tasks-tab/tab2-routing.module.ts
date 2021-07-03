import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Tab2Page } from "./tab2.page";

const routes: Routes = [
  {
    path: "",
    component: Tab2Page,
  },
  {
    path: "task-detail",
    loadChildren: () =>
      import("../pages/task-detail/task-detail.module").then(
        (m) => m.TaskDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2PageRoutingModule {}
