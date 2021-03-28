import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliceColorPaletteComponent } from './alice-color-palette.component';

describe('AliceColorPaletteComponent', () => {
  let component: AliceColorPaletteComponent;
  let fixture: ComponentFixture<AliceColorPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliceColorPaletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AliceColorPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
