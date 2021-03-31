import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-minimal-color-palette',
  templateUrl: './minimal-color-palette.component.html',
  styleUrls: ['./minimal-color-palette.component.css']
})
export class MinimalColorPaletteComponent implements OnInit {
  @Input() color: string;
  @Output() colorChange: EventEmitter<string> = new EventEmitter<string>();

  colors = [
    ['indigo', 'darkviolet', /*'purple',*/ 'magenta', 'violet', 'pink'],
    ['darkred', 'red', /*'crimson',*/ /*'orangered',*/ 'darkorange', 'gold', 'khaki'],
    ['darkgreen', 'forestgreen', /*'seagreen',*/ 'limegreen', 'lawngreen', 'palegreen'],
    ['navy', 'blue', /*'midnightblue',*/ /*'steelblue',*/ /*'teal',*/ /*'darkturquoise',*/ 'royalblue', 'deepskyblue', 'skyblue']
  ];

  constructor() { }

  ngOnInit(): void {
  }

  setColor(color: string): void {
    this.color = color;
    this.colorChange.emit(color);
  }

  isGridButtonChecked(color: string): boolean {
    return color === this.color;
  }
}
