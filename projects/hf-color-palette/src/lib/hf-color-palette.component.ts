import { ModuleTag } from './color/ModuleTag';
// tslint:disable: component-selector
import { Component, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'hf-color-palette',
  templateUrl: './hf-color-palette.component.html',
  styleUrls: ['./hf-color-palette.component.css']
})
export class HfColorPaletteComponent implements OnInit {
  @Input() header = true;
  @Input() module = ModuleTag.MODULE_ALICE;

  @Input() set colorInput(color: string) {
    this.color = color;
  }
  @Output() colorOutput: EventEmitter<string> = new EventEmitter<string>();

  color: string;

  modules = ModuleTag;

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
  }
}
