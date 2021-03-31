import { ModuleTag } from './color/ModuleTag';
// tslint:disable: component-selector
// tslint:disable: no-output-on-prefix
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'hf-color-palette',
  templateUrl: './hf-color-palette.component.html',
  styleUrls: ['./hf-color-palette.component.css']
})
export class HfColorPaletteComponent implements OnInit {
  @Input() header = true;
  @Input() module = ModuleTag.MODULE_ALICE;

  @Input() color: string;
  @Output() colorChange: EventEmitter<string> = new EventEmitter<string>();

  @Output() onColorChange: EventEmitter<string> = new EventEmitter<string>();

  modules = ModuleTag;

  constructor() { }

  ngOnInit(): void {
  }

  setColor(event: Event): void {
    this.color = event as unknown as string;
    this.colorChange.emit(this.color);
    this.onColorChange.emit(this.color);
  }
}
