// tslint:disable: max-line-length
import { ColorConfig } from '../color/ColorConfig';
import { ColorTag } from '../color/ColorTag';
import { LanguageLabel } from '../language/language-label';
import { ColorSlider } from './ColorSlider';

export class ColorSelector {
  public static COLOR_SLIDERS_RGB: ColorSlider[] = [
    { title: LanguageLabel.PALETTE_RED, color: ColorTag.PALETTE_RED, letter: 'R', min: 0, max: 255, style: 'rgb(' + ColorConfig.SLIDER + ',0,0);', value: 0, check: true },
    { title: LanguageLabel.PALETTE_GREEN, color: ColorTag.PALETTE_GREEN, letter: 'G', min: 0, max: 255, style: 'rgb(0,' + ColorConfig.SLIDER + ',0);', value: 0, check: false },
    { title: LanguageLabel.PALETTE_BLUE, color: ColorTag.PALETTE_BLUE, letter: 'B', min: 0, max: 255,  style: 'rgb(0,0,' + ColorConfig.SLIDER + ');', value: 0, check: false },
  ];

  public static COLOR_SLIDERS_CMYK: ColorSlider[] = [
    { title: LanguageLabel.PALETTE_CYAN, color: ColorTag.PALETTE_CYAN, letter: 'C', min: 0, max: 100, style: 'cmyk(' + ColorConfig.SLIDER + '%,0%,0%,0%);', value: 0, check: true },
    { title: LanguageLabel.PALETTE_MAGENTA, color: ColorTag.PALETTE_MAGENTA, letter: 'M', min: 0, max: 100, style: 'cmyk(0%,' + ColorConfig.SLIDER + '%,0%,0%);', value: 0, check: false },
    { title: LanguageLabel.PALETTE_YELLOW, color: ColorTag.PALETTE_YELLOW, letter: 'Y', min: 0, max: 100, style: 'cmyk(0%,0%,' + ColorConfig.SLIDER + '%,0%);', value: 0, check: false },
    { title: LanguageLabel.PALETTE_KEY, color: ColorTag.PALETTE_KEY, letter: 'K', min: 0, max: 100, style: 'cmyk(0%,0%,0%,' + ColorConfig.SLIDER + '%);', value: 0, check: false },
  ];

  public static COLOR_SLIDERS_HSL: ColorSlider[] = [
    { title: LanguageLabel.PALETTE_HUE, color: ColorTag.PALETTE_HUE, letter: 'H', min: 0, max: 360, style: 'hsl(' + ColorConfig.SLIDER + ',50%,50%);', value: 0, check: true },
    { title: LanguageLabel.PALETTE_SATURATION, color: ColorTag.PALETTE_SATURATION, letter: 'S', min: 0, max: 100, style: 'hsl(0,' + ColorConfig.SLIDER + '%,50%);', value: 50, check: false, step: 10 },
    { title: LanguageLabel.PALETTE_LIGHTNESS, color: ColorTag.PALETTE_LIGHTNESS, letter: 'L', min: 0, max: 100,  style: 'hsl(0,0%,' + ColorConfig.SLIDER + '%);', value: 50, check: false, step: 10 },
  ];
}
