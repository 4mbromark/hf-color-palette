import { ColorTag } from './../color/ColorTag';
import { LanguageLabel } from '../language/language-label';

export class ColorSlider {
  title: LanguageLabel;
  color: ColorTag;
  letter: 'R' | 'G' | 'B' | 'C' | 'M' | 'Y' | 'K' | 'H' | 'S' | 'L';
  min: 0;
  max: 100 | 255 | 360;
  style: string;
  value?: number;
  check?: boolean;
  step?: number;
}
