import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-standard-color-palette',
  templateUrl: './standard-color-palette.component.html',
  styleUrls: ['./standard-color-palette.component.css']
})
export class StandardColorPaletteComponent implements OnInit {

  hs1 = [];
  hs2 = [];
  ss = [];
  ls1 = [];
  ls2 = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 180; i += 23) {
      this.hs1.push(i);
    }
    for (let i = 180; i < 360; i += 23) {
      this.hs2.unshift(i);
    }
    this.ss.push(100);
    for (let i = 30; i < 100; i += 18) {
      this.ls1.push(i);
    }
    for (let i = 30; i < 100; i += 18) {
      this.ls2.unshift(i);
    }
  }
}
