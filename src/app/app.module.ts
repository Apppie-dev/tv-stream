import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppModuleRouting } from './app.module.routing';
import { AppRootComponent } from './app-root.component';
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppRootComponent
  ],
  imports: [
    BrowserModule,
    AppModuleRouting,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
