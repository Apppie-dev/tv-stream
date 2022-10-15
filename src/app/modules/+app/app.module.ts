import {NgModule} from "@angular/core";
import { SharedModule } from '@app/shared/shared.module';
import {CommonModule} from "@angular/common";
import {AppModuleRouting} from "./app.module.routing";
import {PageAppComponent} from "./page-app/page-app.component";

@NgModule({
  declarations: [
    PageAppComponent
  ],
  imports: [
    AppModuleRouting,
    SharedModule,
    CommonModule
  ],
})
export class AppModule {

}
