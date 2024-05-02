import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedLayoutsModule } from './shared/layouts/shared-layouts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedLayoutsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
