import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalColorPaletteComponent } from './minimal-color-palette.component';

describe('MinimalColorPaletteComponent', () => {
  let component: MinimalColorPaletteComponent;
  let fixture: ComponentFixture<MinimalColorPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinimalColorPaletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalColorPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
