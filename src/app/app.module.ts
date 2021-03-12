import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NewComponent } from './new/new.component';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { RgComponent } from './rg/rg.component';
import { F1Component } from './f1/f1.component';
import { F2Component } from './f2/f2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NewComponent,
    HelloComponent,
    WorldComponent,
    RgComponent,
    F1Component,
    F2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [F2Component]
})
export class AppModule { }
