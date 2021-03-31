import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { ColorConfig } from '../../color/ColorConfig';
import { ColorTag } from '../../color/ColorTag';
import { ColorSelector } from '../../slider/ColorSelector';
import { ColorSlider } from '../../slider/ColorSlider';

@Component({
  selector: 'lib-alice-color-palette',
  templateUrl: './alice-color-palette.component.html',
  styleUrls: ['./alice-color-palette.component.css']
})
export class AliceColorPaletteComponent implements OnInit {
  @Input() color: string;
  @Output() colorChange: EventEmitter<string> = new EventEmitter<string>();

  ct = ColorTag;

  range = [];
  rangeSupport = [];

  type = ColorTag.PALETTE_RGB;
  sliders: ColorSlider[] = ColorSelector.COLOR_SLIDERS_RGB;
  professional = false;

  constructor() { }

  ngOnInit(): void {
    const success = this.manageColorInput();
    if (!success) {
      this.setType(ColorTag.PALETTE_RGB);
    }
  }

  setType(type: ColorTag): void {
    this.type = type;
    this.range = [];
    this.rangeSupport = [];
    switch (type) {
      case ColorTag.PALETTE_RGB: {
        this.sliders = ColorSelector.COLOR_SLIDERS_RGB;
        for (let i = 0; i < 255; i += 30) {
          this.range.push(i);
        }
        break;
      }
      case ColorTag.PALETTE_HSL: {
        this.sliders = ColorSelector.COLOR_SLIDERS_HSL;
        for (let i = 0; i < 360; i += 40) {
          this.range.push(i);
        }
        for (let i = 0; i < 100; i += 12) {
          this.rangeSupport.push(i);
        }
        break;
      }
    }
  }
  setProfessional() {
    this.professional = !this.professional;
    this.setType(this.type);
  }

  private manageColorInput(): boolean {
    try {
      let parts = this.color.split(/\(/g);
      switch (parts[0]) {
        case ColorTag.PALETTE_RGB: {
          this.setType(ColorTag.PALETTE_RGB);
          break;
        }
        case ColorTag.PALETTE_HSL: {
          this.setType(ColorTag.PALETTE_HSL);
          break;
        }
      }
      parts = parts[1].replace(/\)/g, '').replace(/%/g, '').replace(/;/g, '').split(',');
      this.setColorOnSliders(parts[0] as unknown as number, parts[1] as unknown as number, parts[2] as unknown as number);
      this.setProfessional();
      return true;
    } catch (error) {
      return false;
    }
  }

  getGridButtonColor(v1: number, v2: number, v3: number): string {
    switch (this.type) {
      case ColorTag.PALETTE_RGB: {
        return `rgb(${v1}, ${v2}, ${v3})`;
      }
      case ColorTag.PALETTE_HSL: {
        return `hsl(${v1}, ${v2}%, ${v3}%)`;
      }
    }
  }

  actionGrid(v1: number, v2: number, v3: number): void {
    this.setColorOnSliders(v1, v2, v3);
    if (!this.professional) {
      this.setColor();
    }
  }

  setColorOnSliders(v1: number, v2: number, v3: number): void {
    this.sliders[0].value = v1;
    this.sliders[1].value = v2;
    this.sliders[2].value = v3;
  }

  getColorRange(color: ColorTag): number[] {
    const slider = this.sliders.find(s => s.color === color);
    if (!slider) {
      return;
    }
    if (slider.check) {
      return [slider.value];
    } else if (this.type === ColorTag.PALETTE_HSL && slider.color !== ColorTag.PALETTE_HUE) {
      return this.rangeSupport;
    }
    return this.range;
  }

  onSliderChange(event: MatSliderChange, slider: ColorSlider): void {
    slider.value = event.value;
  }

  getColorStringByValues(): string {
    switch (this.type) {
      case ColorTag.PALETTE_RGB: {
        return `rgb(${this.sliders[0].value}, ${this.sliders[1].value}, ${this.sliders[2].value})`;
      }
      case ColorTag.PALETTE_HSL: {
        return `hsl(${this.sliders[0].value}, ${this.sliders[1].value}%, ${this.sliders[2].value}%)`;
      }
    }
  }
  getColorBySlider(slider: ColorSlider): string {
    return slider.style.replace(ColorConfig.SLIDER, slider.value as unknown as string);
  }

  checkSlider(slider: ColorSlider): void {
    this.sliders.forEach((s: ColorSlider) => {
      const check = slider.color === s.color;
      s.check = check;
    });
  }

  getChecked(): ColorTag {
    return this.sliders.find(s => s.check).color;
  }

  setColor(): void {
    const color = this.getColorStringByValues();
    this.color = color;
    this.colorChange.emit(color);
  }

  isGridButtonChecked(v1: number, v2: number, v3: number): boolean {
    return this.getGridButtonColor(v1, v2, v3) === this.color;
  }
}
