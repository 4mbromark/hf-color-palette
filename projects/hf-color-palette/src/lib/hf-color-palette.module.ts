import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HfColorPaletteComponent } from './hf-color-palette.component';

import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AliceColorPaletteComponent } from './module/alice-color-palette/alice-color-palette.component';
import { StandardColorPaletteComponent } from './module/standard-color-palette/standard-color-palette.component';
import { MinimalColorPaletteComponent } from './module/minimal-color-palette/minimal-color-palette.component';

@NgModule({
  declarations: [
    HfColorPaletteComponent,
    AliceColorPaletteComponent,
    StandardColorPaletteComponent,
    MinimalColorPaletteComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatTooltipModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,

    FontAwesomeModule,
  ],
  exports: [HfColorPaletteComponent]
})
export class HighFiveColorPaletteModule {
  constructor(
    private library: FaIconLibrary,
  ) {
    library.addIconPacks(fas);
  }
}
