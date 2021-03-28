import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardColorPaletteComponent } from './standard-color-palette.component';

describe('StandardColorPaletteComponent', () => {
  let component: StandardColorPaletteComponent;
  let fixture: ComponentFixture<StandardColorPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardColorPaletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardColorPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
