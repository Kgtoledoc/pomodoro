import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "*",
    redirectTo: "",
  },
  {
    path: "new-tasks",
    loadChildren: () =>
      import("./pages/new-tasks/new-tasks.module").then(
        (m) => m.NewTasksPageModule
      ),
  },
  {
    path: "task-historic",
    loadChildren: () =>
      import("./pages/task-historic/task-historic.module").then(
        (m) => m.TaskHistoricPageModule
      ),
  },
  {
    path: "new-goals",
    loadChildren: () =>
      import("./pages/new-goals/new-goals.module").then(
        (m) => m.NewGoalsPageModule
      ),
  },
  {
    path: "new-category",
    loadChildren: () =>
      import("./pages/new-category/new-category.module").then(
        (m) => m.NewCategoryPageModule
      ),
  },
  {
    path: "categories-tabs",
    loadChildren: () =>
      import("./categories-tabs/categories-tabs.module").then(
        (m) => m.CategoriesTabsPageModule
      ),
  },
  {
    path: "categories",
    loadChildren: () =>
      import("./pages/categories/categories.module").then(
        (m) => m.CategoriesPageModule
      ),
  },
  {
    path: "new-expense",
    loadChildren: () =>
      import("./pages/new-expense/new-expense.module").then(
        (m) => m.NewExpensePageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
