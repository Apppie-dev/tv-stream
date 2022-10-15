import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PageAppComponent} from "./page-app/page-app.component";

const moduleRoutes: Routes = [
  {
    path: '',
    component: PageAppComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class AppModuleRouting {

}
