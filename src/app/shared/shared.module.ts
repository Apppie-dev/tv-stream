import {CoreLeftSidebarComponent} from "./components";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CoreLeftSidebarComponent
  ],
  declarations: [
    CoreLeftSidebarComponent
  ],
  providers: []
})
export class SharedModule {}
