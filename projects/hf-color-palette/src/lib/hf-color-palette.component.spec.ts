import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HfColorPaletteComponent } from './hf-color-palette.component';

describe('HfColorPaletteComponent', () => {
  let component: HfColorPaletteComponent;
  let fixture: ComponentFixture<HfColorPaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HfColorPaletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HfColorPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
