import { TestBed } from '@angular/core/testing';

import { HfColorPaletteService } from './hf-color-palette.service';

describe('HfColorPaletteService', () => {
  let service: HfColorPaletteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HfColorPaletteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
