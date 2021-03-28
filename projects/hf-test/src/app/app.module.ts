import { HfColorPaletteModule } from './../../../hf-color-palette/src/lib/hf-color-palette.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HfColorPaletteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
