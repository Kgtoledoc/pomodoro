import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "new-tasks",
    loadChildren: () =>
      import("./pages/new-tasks/new-tasks.module").then(
        (m) => m.NewTasksPageModule
      ),
  },  {
    path: 'task-historic',
    loadChildren: () => import('./pages/task-historic/task-historic.module').then( m => m.TaskHistoricPageModule)
  },
  {
    path: 'category-historic',
    loadChildren: () => import('./pages/category-historic/category-historic.module').then( m => m.CategoryHistoricPageModule)
  },
  {
    path: 'expenses-historic',
    loadChildren: () => import('./pages/expenses-historic/expenses-historic.module').then( m => m.ExpensesHistoricPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
